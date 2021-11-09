import * as React from 'react';
import { Grid, Tab, Tabs, Paper, Button } from '@material-ui/core';

import PropTypes from 'prop-types';
import CustomRequestTable from './CustomRequestTable';
import DemoRequestTable from './DemoRequestTable';
import queryKeys from '@lms-api/queryKeys';
import { useQuery } from 'react-query';
import { OrganizationFactory } from '@lms-api/factory';
import { useStyles } from '../ui';
import Loader from '@element/Loader/Loader';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import { Pagination, PaginationItem } from '@material-ui/lab';

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
      {value === index && children}
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

const salesHistoryTabs = ['Demo Requests', 'Custom Course Requests'];

export default function RequestOrganizationTable({ organizationId, ...props }) {
  const classes = useStyles();
  const [activeTab, setActiveTab] = React.useState<number>(0);

  return (
    <>
      <Grid container>
        <Paper elevation={0} style={{ width: '100%' }}>
          <Grid item lg={12}>
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              indicatorColor="primary"
              textColor="primary"
              className={classes.userTypeTabs}
            >
              {salesHistoryTabs.map((tab, index) => {
                return (
                  <Tab
                    label={tab}
                    key={`request-table-tab-index-${index}`}
                    {...a11yProps(index)}
                    className={`${classes.singleTab} ${
                      activeTab ? classes.fontColor : ''
                    }`}
                  />
                );
              })}
            </Tabs>
          </Grid>

          <TabPanel value={activeTab} index={0}>
            <DemoRequestTable searchValue={props.searchValue} />
          </TabPanel>
          <TabPanel value={activeTab} index={1}>
            <CustomRequestTable searchValue={props.searchValue} />
          </TabPanel>
        </Paper>
      </Grid>
    </>
  );
}
