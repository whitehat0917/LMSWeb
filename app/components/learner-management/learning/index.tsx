import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ButtonGroup, Hidden, Tab, Tabs } from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import { carouselData } from '../../../data/mock';
import IndividualLearning from '@module/learner-management/learning/individualLearning';

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
      {value === index && <Box>{children}</Box>}
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

const MyLearning = () => {
  const [value, setValue] = useState(0);
  const [selectedCat, setSelectedCat] = useState(1);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleIndividual = () => {
    setSelectedCat(1);
  };

  const handleTeam = () => {
    setSelectedCat(2);
  };

  return (
    <>
      <Box fontSize="14px" fontWeight="600" color="#16395B">
        Courses & Learning Paths
      </Box>
      <Box
        boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`}
        bgcolor="white"
        borderRadius="5px"
        mt="23px"
        p="13px 20px"
        position="relative"
        marginBottom="60px"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          aria-label="full width tabs example"
          className="tabs"
        >
          <Tab label="In Progress" {...a11yProps(0)} className="MuiTab_root" />
          <Tab label="Assigned" {...a11yProps(1)} className="MuiTab_root" />
          <Tab label="Overdue" {...a11yProps(2)} className="MuiTab_root" />
          <Tab label="Shortlisted" {...a11yProps(3)} className="MuiTab_root" />
          <Tab label="Attempted" {...a11yProps(4)} className="MuiTab_root" />
          <Tab label="Completed" {...a11yProps(5)} className="MuiTab_root" />
        </Tabs>
        <TabPanel value={value} index={0}>
          {carouselData.map((item, index) => (
            <IndividualLearning key={index} data={item} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {carouselData.map((item, index) => (
            <IndividualLearning key={index} data={item} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {carouselData.map((item, index) => (
            <IndividualLearning key={index} data={item} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={3}>
          {carouselData.map((item, index) => (
            <IndividualLearning key={index} data={item} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={4}>
          {carouselData.map((item, index) => (
            <IndividualLearning key={index} data={item} />
          ))}
        </TabPanel>
        <TabPanel value={value} index={5}>
          {carouselData.map((item, index) => (
            <IndividualLearning key={index} data={item} />
          ))}
        </TabPanel>
        <Hidden only={['sm', 'xs']}>
          <Box position="absolute" right="20px" top="20px" fontWeight="500">
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                className="catBtn"
                onClick={handleIndividual}
                variant={selectedCat === 1 ? 'contained' : 'outlined'}
              >
                My Courses
              </Button>
              <Button
                className="catBtn"
                onClick={handleTeam}
                variant={selectedCat === 2 ? 'contained' : 'outlined'}
              >
                Learning paths
              </Button>
            </ButtonGroup>
          </Box>
        </Hidden>
      </Box>
    </>
  );
};

export default MyLearning;
