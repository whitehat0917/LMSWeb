import { AppBar, Grid, MenuItem, Tab, Tabs } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import styles from './createlearning.module.scss';
import Activity from './Activity';
import Courses from './Courses';
import Learningpath from './Learningpath';
import { useStyles } from './ui';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { OrganizationFactory } from '@lms-api/factory';

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

const userTypes = ['Activity', 'Courses', 'Learning Paths'];

export default function UserTypeTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const organizatoinQuery = useQuery(queryKeys.getOrganizationInfo(), () =>
    OrganizationFactory.getAll()
  );

  const organization = organizatoinQuery.data || [];

  return (
    <div>
      <Grid container direction="row">
        <AppBar position="static" elevation={0} className={styles.userTypeTabs}>
          <Grid container alignItems="center">
            <Grid item xs={12} sm={4}>
              <Tabs
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
                indicatorColor="primary"
                textColor="primary"
                //textColor={`${lmsStyle['color-primary-dark']}`}
                aria-label="full width tabs example"
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
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextInputOutline
                label=""
                name="category"
                select
                defaultValue="all"
                classes={{ root: classes.subscribeFilter }}
              >
                <MenuItem value="all">All Subscribers</MenuItem>
                {organization.map((data, index) => (
                  <MenuItem value={data.name} key={`subscriber-id-${index}`}>
                    {data.name}
                  </MenuItem>
                ))}
              </TextInputOutline>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
      <TabPanel value={value} index={0}>
        <Activity />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Courses />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Learningpath />
      </TabPanel>
    </div>
  );
}
