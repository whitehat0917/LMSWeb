import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, createStyles, fade, Grid, InputBase, makeStyles, MenuItem, Select, Tab, Tabs } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { lmsStyle } from '../../../styles/ui.variables';
import IndividualEvent from '@module/learner-management/events/IndividualEvent';
import { EventInfo, sortItems } from '../../../data/mock';

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

const useStyle = makeStyles((theme) => createStyles({
  sortItem: {
    width: '106px',
    height: '24px',
    fontSize: '10px',
    fontWeight: 'bold',
  },
  search: {
    position: 'relative',
    color: '#7D8793',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#F3F4F5', 0.9),
    '&:hover': {
      backgroundColor: '#ecedf4',
    },
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: '8px',
    height: '8px',
    left: '20px',
    top: '10px',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#006DFF',
  },
  inputRoot: {
    color: '#7D8793',
    fontSize: '10px',
    opacity: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 50,
    },
  },
}));

const EventList = () => {
  const [value, setValue] = useState(0);
  const [sortItem, setSortItem] = useState('date');
  const classes = useStyle();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSort = (event) => {
    setSortItem(event.target.value);
  };

  return (
    <Box
      boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`}
      bgcolor="white"
      borderRadius="5px"
      mt="23px"
      p="13px 20px"
      position="relative"
    >
      <Box position="absolute" top="20px" right="20px" zIndex={99}>
        <Box display="flex" alignItems="center">
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{ fontSize: 13 }} />
            </div>
            <InputBase
              placeholder="Search"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <Box mr="15px" fontSize="10px" fontWeight={600}>Sort By</Box>
          <Select
            displayEmpty
            name="val"
            variant="outlined"
            value={sortItem}
            className={classes.sortItem}
            onChange={handleSort}
          >
            {sortItems.map((item, key) => (
              <MenuItem key={key} value={item.value}>
                {item.option}
              </MenuItem>
            ))}
          </Select>
        </Box>

      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs example"
        className="tabs"
      >
        <Tab label="Upcoming" {...a11yProps(0)} className="MuiTab_root" />
        <Tab label="Past Events" {...a11yProps(1)} className="MuiTab_root" />
        <Tab label="Signed Up" {...a11yProps(2)} className="MuiTab_root" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          {EventInfo.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <IndividualEvent key={index} data={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={3}>
          {EventInfo.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <IndividualEvent key={index} data={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={3}>
          {EventInfo.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <IndividualEvent key={index} data={item} />
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
};

export default EventList;
