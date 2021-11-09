import styles from './Dashboard.module.scss';
import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Modal,
} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
// import 'react-pro-sidebar/dist/css/styles.css';
import UserDetail from './UserDetail';
import UserProfileHeading from './UserProfileHeading';
import UserTypeTabs from '@module/admin/users/UserTypeTabs';
import { lmsStyle } from 'styles/ui.variables';
import { layoutContext } from '@layout/admin/Layout';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { UserInfoFactory } from '@lms-api/factory';
import Loader from '@element/Loader/Loader';
import InviteNewUser from '@module/admin/users/InviteNewUser';
import NewUserForm from '@module/admin/users/NewUserForm';
import { useState } from 'react';
import { Address as AddressesDto, UserInfo as UserInfoDto } from '@lms-api/models';
//  import Layout from '../app/components/layouts/Default/Layout';
// import styles from './usermanagement.module.scss';
// import Layout from '@layout/Default/Layout';

const useStyles = makeStyles((theme) =>
  createStyles({
    inviteNewUser: {
      width: '100%',
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
    },
    userFormModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    plusSign: {
      marginRight: '20px',
    },

    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchBar: {
      marginTop: '10px',
      position: 'relative',
      width: '100%',
    },
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down('xs')]: {
        width: '75%',
      },
    },
  })
);

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

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

const UserDashboard = ({ userId }) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);
  const [userType, setUserType] = useState('all');
  const [user, setUser] = useState<UserInfoDto>(null);
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  // const userQuery = useQuery(queryKeys.getUserInfoById(userId), () =>
  //   UserInfoFactory.get(userId)
  // );

  // const users = userQuery.data;

  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTab = (event, value) => {
    setTabValue(value);
    switch (value) {
      case 0:
        setUserType('all');
        break;
      case 1:
        setUserType('learner');
        console.log('learner');
        break;
      case 2:
        setUserType('educator');
        break;
      case 3:
        setUserType('admin');
        break;
      default:
        setUserType('all');
        break;
    }
  };

  React.useEffect(() => {
    setHeader('User Management');
    setIsVisibleFreeTrial(false);
    getUserInfoById();
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);

  const getUserInfoById = async () => {
    try {
      setIsLoading(true);
      const response = await UserInfoFactory.get(userId);
      setUser(response);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.stack);
      setErrorMsg('Something went wrong. Internal server error');
    }
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Box className={styles.mainbox}>
        <CssBaseline />
        <Grid container style={{ marginTop: '0px' }}>
          <Grid
            item
            xs={12}
            lg={4}
            xl={3}
            style={{
              marginLeft: '0px',
              marginTop: '0px',
              backgroundColor: 'white',
            }}
          >
            <UserTypeTabs handleTabChange={handleTab} activeTab={tabValue} />

            <TabPanel>
              <Button className={classes.inviteNewUser} onClick={handleOpen}>
                <span className={classes.plusSign}>+</span>
                <span>add New User</span>
              </Button>
              <Modal open={open} onClose={handleClose}>
                <div className={classes.userFormModal}>
                  <NewUserForm close={handleClose} refresh={false} />
                </div>
              </Modal>
              {/* <Button className={classes.inviteNewUser} onClick={handleOpen}>
                <span className={classes.plusSign}>+</span>
                <span>Invite New Users</span>
              </Button>

              <Modal open={open} onClose={handleClose}>
                <div className={classes.inviteModal}>
                  <InviteNewUser onClose={handleClose} />
                </div>
              </Modal> */}
              <br />
              <Grid item className={classes.searchBar}>
                <div className={classes.searchIcon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10.993}
                    height={11}
                    viewBox="0 0 10.993 11"
                  >
                    <path
                      d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                      fill="#006dff"
                    />
                  </svg>
                </div>
                <input
                  className={styles.searchUser}
                  onChange={(e) => handleSearch(e.target.value)}
                ></input>
              </Grid>

              <UserProfileHeading search={searchValue} userType={userType} />
            </TabPanel>
          </Grid>
          <Grid item xs={12} lg={8} xl={9}>
            {user && <UserDetail user={user} changeUser={setUser} />}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default UserDashboard;
