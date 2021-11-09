import { AppBar, Tab, Tabs } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import LearningOverview from './LearningOverview';
import styles from './createlearning.module.scss';
import UsersAdded from './UsersAdded';
import Teams from './Teams';
import Content from './Content';
import { useRouter } from 'next/router';
import { GlobalUrls } from '@util/app-utils';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

const userTypes = ['Details', 'Content', 'Teams', 'Learners'];

export default function UserTypeTabs({ organizationId, ...props }) {
  const [value, setValue] = React.useState(0);
  const router = useRouter();

  const handleClose = () => {
    router.push(`${GlobalUrls.ADMIN}/learningPath/learningpath`);
  };

  return (
    <div>
      <AppBar position="static" elevation={0}>
        <Tabs
          value={value}
          onChange={(e, newValue) => setValue(newValue)}
          indicatorColor="primary"
          textColor="primary"
          //textColor={`${lmsStyle['color-primary-dark']}`}
          aria-label="full width tabs example"
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
      <TabPanel value={value} index={0}>
        <LearningOverview
          showToaster={props.showToaster}
          changeActiveTab={(value) => setValue(value)}
          handleClose={handleClose}
          organizationId={organizationId}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Content
          handleClose={handleClose}
          handleContentNext={(value) => setValue(value)}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Teams
          handleClose={handleClose}
          handleTeanNext={(value) => setValue(value)}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <UsersAdded handleClose={handleClose} />
      </TabPanel>
    </div>
  );
}
