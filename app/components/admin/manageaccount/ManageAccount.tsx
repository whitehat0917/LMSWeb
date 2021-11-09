import styles from './manageaccount.module.scss';

import { Box } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';
import React from 'react';
// import 'react-pro-sidebar/dist/css/styles.css';
import UserDetail from './UserDetail';
import Notification from './Notification';
import ChangePassword from './ChangePassword';

//  import Layout from '../app/components/layouts/Default/Layout';
// import styles from './usermanagement.module.scss';
// import Layout from '@layout/Default/Layout';

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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const ManageAccount = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box className={styles.box}>
        <CssBaseline />

        <Grid container spacing={1} style={{ marginTop: '0px' }}>
          <Grid
            style={{
              marginLeft: '0px',

              backgroundColor: 'white',
              width: '100%',
            }}
          >
            <AppBar className={styles.appBar} position="static" color="default">
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                aria-label="full width tabs example"
                className={styles.userTypeTabs}
              >
                <Tab
                  style={{
                    textTransform: 'capitalize',
                    fontSize: '10px',
                    marginLeft: '30px',
                  }}
                  label="Account Settings"
                  {...a11yProps(0)}
                  className={styles.MuiTab_root}
                />
                <Tab
                  style={{ textTransform: 'capitalize' }}
                  label="Change Password"
                  {...a11yProps(1)}
                  className={styles.MuiTab_root}
                />
                <Tab
                  style={{ textTransform: 'capitalize' }}
                  label="Notifications"
                  {...a11yProps(2)}
                  className={styles.MuiTab_root}
                />
              </Tabs>
            </AppBar>

            <TabPanel value={value} index={0}>
              <Grid item xs={12} lg={12} md={12}>
                <UserDetail />
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ChangePassword />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Notification />
            </TabPanel>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ManageAccount;

// import { AppBar, Tab, Tabs } from '@material-ui/core';
// import * as React from 'react';
// import styles from '../users/usermanagement.module.scss';

// function a11yProps(index) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }
// const userTypes = ['Account Settings', 'Change Password', 'Notifications', ];

// export default function UserTypeTabs({
//   activeTab = 0,
//   handleTabChange,
// }: {
//   activeTab?: number;
//   handleTabChange?: () => void;
// }) {
//   return (
//     <AppBar position="static" elevation={0}>
//       <Tabs
//         value={activeTab}
//         onChange={handleTabChange}
//         indicatorColor="primary"
//         textColor="primary"
//         //textColor={`${lmsStyle['color-primary-dark']}`}
//         aria-label="full width tabs example"
//         className={styles.userTypeTabs}
//       >
//         {userTypes.map((userType, index) => (
//           <Tab
//             label={userType}
//             key={`user-filter-tab-${index}`}
//             {...a11yProps(index)}
//             className={styles.MuiTab_root}
//           />
//         ))}
//       </Tabs>
//     </AppBar>
//   );
// }
