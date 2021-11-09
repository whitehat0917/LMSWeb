import { UserInfoFactory } from '@lms-api/factory';
import { AddressFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { Button } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import UserForm from '@module/admin/users/UserForm';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { lmsStyle } from 'styles/ui.variables';
import Link from 'next/link';
import { ToastMessageType } from 'types/elements/ToastMessage';
import useToastMessages from '@hook/useToastMessages';
import LoadingView from '@module/elements/loading/loading-view';
import { UserInputs } from '@module/course-management/CourseForm/formTypes';

const useStyles = makeStyles((theme) => ({
  standardbtn: {
    background: `${lmsStyle['base-tertiary-light']} 0% 0% no-repeat padding-box`,
    borderRadius: '3px',
    marginTop: '20px',
    opacity: '1px',
    textTransform: 'capitalize',
    color: lmsStyle['base-tertiary'],
    border: 'none',
    font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
  },

  box: {
    width: '100%',
    height: '100%',
    padding: '40px',
    borderLeft: `2px solid ${lmsStyle['base-gray-200']}`,
    [theme.breakpoints.down('xs')]: {
      padding: '20px',
    },
  },

  userInfo: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '45px',
  },

  avtar: {
    color: 'transparent',
    width: 'auto',
    height: 'auto',
    objectFit: 'none',
    textAlign: 'center',
    textIndent: '10000px',
  },
  nameContent: {
    paddingInline: '40px',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '10px',
      paddingRight: '0',
    },
  },
  pname: {
    font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
    color: lmsStyle['base-secondary'],
  },
  cardAction: {
    padding: 0,
    marginTop: '30px',
  },
  cardActionButton: {
    padding: '10px 30px',
    font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
    color: lmsStyle['color-white'],
    whiteSpace: 'nowrap',
  },
}));

const UserDetail = ({ user, changeUser }) => {
  const classes = useStyles();
  const toastMessages = useToastMessages();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState, setValue } = useForm<UserInputs>({
    defaultValues: {
      ...user,
    },
  });

  const onSubmit = async (formData: UserInputs) => {
    const role = formData.type
      ? formData.type === 'Learner'
        ? 'STUDENT'
        : 'TEACHER'
      : user.type;
    const userPayload = {
      firstName: formData.firstName ?? user.firstName,
      lastName: formData.lastName ?? user.lastName,
      email: formData.email ?? user.email,
      mobileNumber: formData.mobileNumber ?? user.mobileNumber,
      businessNumber: formData.businessNumber ?? user.businessNumber,
      type: role,
    };

    let address = null;
    if (
      formData.address.address1 &&
      formData.address.city &&
      formData.address.zipCode &&
      formData.address.state
    ) {
      address = {
        address1: formData.address.address1,
        address2: formData.address.address2,
        city: formData.address.city,
        zipCode: formData.address.zipCode,
        state: formData.address.state,
        country: formData.address.country,
        organizationId: user.organizationId,
        userId: user.id,
      };
    }
    try {
      setIsLoading(true);
      const response = await UserInfoFactory.update(user.id, userPayload);
      if (address) {
        const addressResponse = response.addresses[0].id
          ? await AddressFactory.update(response.addresses[0].id, address)
          : await AddressFactory.create(address);
        response.addresses = [addressResponse];
      }
      setIsLoading(false);
      toastMessages.push({
        type: ToastMessageType.SUCCESS,
        message: `User was successfully modified`,
      });
      changeUser(response);
    } catch (error) {
      setIsLoading(false);
      console.log(error.stack);
      toastMessages.push({
        type: ToastMessageType.ERROR,
        message: error.message,
      });
    }
  };
  const router = useRouter();
  const { userId } = router.query;
  const userQuery = queryKeys.getUserInfoById(userId as string);
  const userlistQuery = queryKeys.getUserInfo();
  const queryClient = useQueryClient();
  const deleteUserMutation = useMutation(
    (id: string) => UserInfoFactory.del(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(userQuery);
        queryClient.invalidateQueries(userlistQuery);
      },
    }
  );
  const handleDelete = (userId) => {
    const result = confirm('Are you sure to delete?');
    if (result) {
      deleteUserMutation.mutate(userId);
      router.push('/admin/users');
    }
  };

  return (
    <>
      <Paper className={classes.box} elevation={0}>
        <Grid className={classes.userInfo}>
          <Grid item>
            <Avatar
              className={classes.avtar}
              alt="Remy Sharp"
              src={user.avatar}
              style={{ width: '100px', height: '100px' }}
            />
          </Grid>
          <Grid item className={classes.nameContent}>
            <p className={classes.pname}>
              {user.firstName} {user.lastName}
            </p>
            <Button variant="outlined" className={classes.standardbtn}>
              {user.type} User
            </Button>
          </Grid>
        </Grid>
        {isLoading ? (
          <LoadingView autoHeight={false} />
        ) : (
          <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <UserForm
              address={user.addresses[0] || {}}
              key={`user-form-address`}
              register={register}
              setValue={setValue}
              formState={formState}
              user={user}
            />
            <CardActions className={classes.cardAction}>
              <Button
                type="submit"
                variant="contained"
                className={classes.cardActionButton}
                style={{ backgroundColor: lmsStyle['base-primary'] }}
              >
                Save Changes
              </Button>
              <Link href={`/admin/users`} passHref>
                <Button
                  href="/admin/users"
                  variant="contained"
                  className={classes.cardActionButton}
                  style={{ backgroundColor: lmsStyle['base-secondary'] }}
                >
                  Back
                </Button>
              </Link>
              <Button
                onClick={() => handleDelete(user.id)}
                variant="contained"
                className={classes.cardActionButton}
                style={{ backgroundColor: lmsStyle['base-accent'] }}
              >
                Delete User
              </Button>
            </CardActions>
          </form>
        )}
      </Paper>
    </>
  );
};

export default UserDetail;
