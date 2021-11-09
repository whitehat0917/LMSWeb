import React from 'react';
import { Box, Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ReportAssessments from '@module/learner-management/reports/assessments';
import ReportActivity from '@module/learner-management/reports/activity';
import { reportsActivityStatus, reportsAssessmentsStatus } from '../../../data/mock';

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
        <Box pt={2}>
          <Box>{children}</Box>
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

const ReportDashboard = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className="mainContainer">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs example"
        className="tabs"
      >
        <Tab label="Activity" {...a11yProps(0)} className="MuiTab_root" />
        <Tab label="Assessments" {...a11yProps(1)} className="MuiTab_root" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <ReportActivity data={reportsActivityStatus} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ReportAssessments data={reportsAssessmentsStatus} />
      </TabPanel>
    </Container>
  );
};

export default ReportDashboard;
