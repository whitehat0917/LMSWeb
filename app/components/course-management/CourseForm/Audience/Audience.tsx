// import Loader from '@element/Loader/Loader';
// import RetryMessage from '@element/RetryMessage/RetryMessage';
import queryKeys from '@lms-api/queryKeys';
import { Box, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { ArrowBack } from '@material-ui/icons';
import { UserEnrollmentFactory, UserInfoFactory } from 'api/factory';
import SearchBar from 'material-ui-search-bar';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { courseFormDataState } from 'store/course';
import UsersAdded from '../UsersAdded/UsersAdded';
import { useStyles } from './ui';
import { authnState } from 'store';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const Audience = (props) => {
  const classes = useStyles();
  const authnInfo = useRecoilValue(authnState);
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const courseFormData = useRecoilValue(courseFormDataState);
  const queryClient = useQueryClient();

  useEffect(() => {
    getUsers();
    getAllSelectedUsers();
  }, []);

  const getAllSelectedUsers = () => {
    if (courseFormData && courseFormData.id) {
      UserEnrollmentFactory.getAllByCourseId(courseFormData.id).then(
        (data) => {
          setSelectedUsers(data.users);
        }
      );
    }
  };

  const getUsers = async () => {
    if (authnInfo?.userInfo?.organizationId) {
      const list: any = await UserInfoFactory.getByOrgId(
        authnInfo.userInfo.organizationId
      );
      setUsers(list);
    }
  };
  const deleteUserMutation = useMutation(UserEnrollmentFactory.del, {
    onSuccess: () => {
      queryClient.invalidateQueries(
        queryKeys.getUserEnrollmentsByCourseId(courseFormData.id)
      );
    },
  });

  const [searchText, setSearchText] = useState('');

  const onRemoveUserEnrollment = (id) => {
    deleteUserMutation.mutate(id);
  };

  const UsersList = () => {
    // if (usersQuery.isLoading) {
    //   return <Loader />;
    // }

    // if (usersQuery.isError) {
    //   return (
    //     <RetryMessage
    //       message="Failed to load users."
    //       onRetry={() => usersQuery.refetch()}
    //     />
    //   );
    // }

    // const users = usersQuery.data;

    if (users.length) {
      return (
        <UsersAdded
          getAllSelectedUsers={getAllSelectedUsers}
          selectedUsers={selectedUsers}
          courseId={courseFormData.id}
          // onRemoveUserEnrollment={onRemoveUserEnrollment}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          users={users.filter((dt: any) => {
            if (searchText) {
              if (
                `${dt?.firstName} ${dt?.lastName}`
                  .toLowerCase()
                  .trim()
                  .includes(searchText.toLowerCase().trim())
              ) {
                return true;
              } else {
                return false;
              }
            }
            return true;
          })}
        />
      );
    } else {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          className={classes.audince}
        >
          <img className={classes.audince2} src="/images/np_users.svg" />
          <p className={classes.audince1}>No users assigned</p>
        </Box>
      );
    }
  };

  return (
    <>
      <SearchBar
        value={searchText}
        onChange={setSearchText}
        className={classes.search}
        placeholder="Search for users"
      />

      <UsersList />

      <div className={classes.outsidebtn}>
        <Button
          variant="contained"
          className={classes.coloredButton}
          type="submit"
          style={{ marginRight: '10px' }}
          onClick={props.handleBack}
        >
          <span style={{ marginTop: '7px' }}>
            <ArrowBack />
          </span>
          back
        </Button>
        <Button
          onClick={props.handleNext}
          variant="contained"
          className={classes.coloredButton}
        >
          next
          <span style={{ marginTop: '7px' }}>
            <ArrowForwardIcon />
          </span>
        </Button>
        <Button
          onClick={props.handlePrev}
          variant="contained"
          className={classes.coloredButton1}
        >
          Cancel
        </Button>
      </div>
    </>
  );
};

export default Audience;
