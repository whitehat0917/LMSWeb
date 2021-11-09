import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProgressBar from '@element/progressBar';
import { ProgressBarInfo } from '../../../data/mock';

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

const ProgressTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      bgcolor="white"
      boxShadow="0px 3px 6px #00000005"
      borderRadius="5px"
      mt="20px"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs example"
        className="tabs"
      >
        <Tab label="Learner Paths" {...a11yProps(0)} className="MuiTab_root" />
        <Tab label="Course" {...a11yProps(1)} className="MuiTab_root" />
      </Tabs>
      <TabPanel value={value} index={0}>
        {ProgressBarInfo.map((item, key) => (
          <ProgressBar key={key} data={item} />
        ))}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {ProgressBarInfo.map((item, key) => (
          <ProgressBar key={key} data={item} />
        ))}
      </TabPanel>
    </Box>
  );
};

export default ProgressTab;
