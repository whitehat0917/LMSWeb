import { AppBar, Tab, Tabs } from '@material-ui/core';
import * as React from 'react';
import styles from './usermanagement.module.scss';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const userTypes = ['All', 'Learners', 'Educators']; //, 'Admins'];

export default function UserTypeTabs({
  activeTab = 0,
  handleTabChange,
}: {
  activeTab?: number;
  handleTabChange?: (event, value) => void;
}) {
  return (
    <AppBar position="static" elevation={0}>
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        //textColor={`${lmsStyle['color-primary-dark']}`}
        className={styles.userTypeTabs}
      >
        {userTypes.map((userType, index) => (
          <Tab
            label={userType}
            key={`user-filter-tab-${index}`}
            {...a11yProps(index)}
            className={styles.MuiTab_root}
          />
        ))}
      </Tabs>
    </AppBar>
  );
}
