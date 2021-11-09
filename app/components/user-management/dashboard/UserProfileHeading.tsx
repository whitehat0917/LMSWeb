import Loader from '@element/Loader/Loader';
import { UserInfoFactory } from '@lms-api/factory';
import queryKeys from '@lms-api/queryKeys';
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { lmsStyle } from 'styles/ui.variables';
import styles from './Dashboard.module.scss';
import { useRecoilValue } from 'recoil';
import { authnState } from '../../../store';
import { userTypeLabels } from '@lms-api/models/user-info.model';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  userList: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '20px',
  },
  profileAvatar: {
    width: '40px',
    height: '40px',
  },
  profileName: {
    color: lmsStyle['base-secondary'],
    font: `normal normal 600 12px/15px ${lmsStyle['base-font']} `,
  },
  profileEmail: {
    color: lmsStyle['base-secondary'],
    font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
  },
}));

const UserProfileHeading = ({ search, userType }) => {
  const classes = useStyles();
  const router = useRouter();
  const { userId: routerUserId } = router.query;
  const userId = routerUserId as string;
  const authnInfo = useRecoilValue(authnState);
  const userQuery = useQuery(queryKeys.getUserInfo(), () =>
    UserInfoFactory.getByOrgId(authnInfo.userInfo.organizationId)
  );
  if (userQuery.isLoading) {
    return <Loader />;
  }
  const users = userQuery.data;

  return (
    <>
      <Grid container className={classes.userList}>
        {users
          .filter(
            (item) =>
              ((search.length == 0 ||
                item.firstName.toLowerCase().indexOf(search.toLowerCase()) >=
                  0 ||
                item.lastName.toLowerCase().indexOf(search.toLowerCase()) >=
                  0 ||
                item.email.toLowerCase().indexOf(search.toLowerCase()) >= 0) &&
                userType === 'all') ||
              (item.type &&
                userTypeLabels[item.type]?.toLowerCase() === userType)
          )

          .map((user, index) => {
            const isActive = userId === user.id;
            return (
              <React.Fragment key={`user-list-${index}`}>
                <Link href={`/admin/users/${user.id}`} passHref>
                  <ListItem
                    button
                    disableGutters
                    style={{
                      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
                      marginTop: '15px',
                    }}
                    className={isActive ? styles.active : ''}
                  >
                    <ListItemAvatar>
                      <Avatar alt="Profile Picture" src={user.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${user.firstName} ${user.lastName}`}
                      secondary={user.email}
                      classes={{
                        primary: classes.profileName,
                        secondary: classes.profileEmail,
                      }}
                    />
                  </ListItem>
                </Link>
              </React.Fragment>
            );
          })}
      </Grid>
    </>
  );
};

export default UserProfileHeading;
