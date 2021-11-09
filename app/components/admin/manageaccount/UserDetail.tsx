import Avatar from '@material-ui/core/Avatar';
import { Box, Button, Card, FormLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState, useCallback } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDropzone } from 'react-dropzone';
import { useStyles } from './ui';
import { UserInfoFactory, AddressFactory } from '@lms-api/factory';
import {
  Address as AddressesDto,
  UserInfo as UserInfoDto,
} from '@lms-api/models';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { UserInputs } from '@module/course-management/CourseForm/formTypes';
import { useForm, useFieldArray } from 'react-hook-form';
import { authnState } from 'store';
import UserForm from '../users/UserForm';
import restClient from '@lms-api/RestClient';
import useToastMessages from '@hook/useToastMessages';
import { ToastMessageType } from 'types/elements/ToastMessage';

const UserManagement = () => {
  const classes = useStyles();
  const [authnInfo, setAuthnInfo] = useRecoilState(authnState);
  const toastMessages = useToastMessages();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<UserInfoDto>(null);
  const [image, setImage] = useState(null);

  const [file, setFile] = useState<File>(null);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      setFile(file);
      const formData = new FormData();
      formData.append('files', file);
      restClient
        .commonPost(
          'https://lms-common.azurewebsites.net/api/Storage/Upload?containerName=assets&folderName=course',
          formData
        )
        .then((res) => {
          setImage(res.data[0]);
        });
    }
  }, []);

  const { getRootProps, getInputProps, open: handleFileUpload } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
    noClick: true,
    noKeyboard: true,
  });

  const userId = authnInfo.userInfo?.id;
  useEffect(() => {
    console.log('request here');
    UserInfoFactory.get(userId).then((res) => {
      if (res.addresses && res.addresses.length > 0) {
        const address = res.addresses[res.addresses.length - 1];
        res.addresses = [address];
      }
      setAuthnInfo({ ...authnInfo, userInfo: res });
    });
  }, []);

  useEffect(() => {
    console.log('info change');
    if (authnInfo.userInfo) {
      reset();
      setUser(authnInfo.userInfo);
    }
  }, [authnInfo]);
  const { register, handleSubmit, formState, setValue, reset } = useForm<UserInputs>();

  const onSubmit = async (formData: UserInputs) => {
    const role = formData.type ? formData.type === 'Learner' ? 'STUDENT' : 'TEACHER' : user.type;
    const userPayload = {
      firstName: formData.firstName ?? user.firstName,
      lastName: formData.lastName ?? user.lastName,
      email: formData.email ?? user.email,
      mobileNumber: formData.mobileNumber ?? user.mobileNumber,
      businessNumber: formData.businessNumber ?? user.businessNumber,
      type: role,
    };

    let address = null;
    if (formData.address.address1
      && formData.address.city
      && formData.address.zipCode
      && formData.address.state) {
      address = {
        address1: formData.address.address1,
        address2: formData.address.address2,
        city: formData.address.city,
        zipCode: formData.address.zipCode,
        state: formData.address.state,
        country: formData.address.country,
        organizationId: user.organizationId,
        userId: user.id
      };
    }

    try {
      setIsLoading(true);
      const response = await UserInfoFactory.update(user.id, userPayload);
      if (address) {
        const addressResponse = response.addresses[0].id ?  await AddressFactory.update(response.addresses[0].id, address)
          : await AddressFactory.create(address);
        response.addresses = [addressResponse];
      }
      setIsLoading(false);
      toastMessages.push({
          type: ToastMessageType.SUCCESS,
          message:
            `Data was successfully modified`,
      });
      setUser(response);
    } catch (error) {
      setIsLoading(false);
      console.log(error.stack);
      toastMessages.push({
          type: ToastMessageType.ERROR,
          message:
            error.message,
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={9} xl={9}>
            <UserForm
              address={user.addresses[0] || {}}
              key={`user-form-address`}
              register={register}
              user={authnInfo.userInfo}
              setValue={setValue}
              formState={formState}
            />
          </Grid>
          <Grid item xs={12} md={4} lg={3} xl={3}>
            <FormLabel className={classes.textcover}>
              Profile Picture{' '}
            </FormLabel>
            <Card className={classes.OverviewCard}>
              <Avatar
                className={classes.avtar}
                alt="Remy Sharp"
                src={
                  image
                    ? image
                    : 'https://androidexample365.com/content/images/2017/09/20170930101443.jpg'
                }
                // src="https://androidexample365.com/content/images/2017/09/20170930101443.jpg"
                style={{ width: '163px', height: '163px', marginTop: '34px' }}
              />
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p className={classes.dropbox}>
                  <img
                    // src={image ? image : '/images/Group 2.svg'}
                    src="/images/Group 2.svg"
                    className={classes.img}
                    width="98px"
                    height="103px"
                  />

                  <p className={classes.pDrag}>
                    Drag and drop an image
                    <p className={classes.pDrag1}>
                      You can upload JPG and PNG image files. Max file size of 3
                      MB
                    </p>
                    <p style={{ marginTop: '10px', marginLeft: '-57px' }}>
                      <span
                        onClick={handleFileUpload}
                        className={classes.browseFileText}
                      >
                        {' '}
                        Browse files
                      </span>
                    </p>
                  </p>
                </p>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Box mt={2}>
          <Button
            variant="contained"
            type="submit"
            className={classes.coloredButton}
            style={{ whiteSpace: 'nowrap' }}
          >
            Save Changes
          </Button>
        </Box>
      </form>
    </>
  );
};

export default UserManagement;
