import React from 'react';
import PropTypes from 'prop-types';
import { Box, createStyles, fade, InputBase, makeStyles, Tab, Tabs } from '@material-ui/core';
import PurchaseCourses from './purchaseCourses';
import PurchaseLearnerPaths from '@module/purchases/purchaseLearnerPaths';
import SearchIcon from '@material-ui/icons/Search';
import { lmsStyle } from 'styles/ui.variables';

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

const PurchaseManagement = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyle();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box boxShadow={`0px 3px 6px ${lmsStyle['box-shadow']}`} position="relative">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        aria-label="full width tabs example"
        className="purchase_tabs"
      >
        <Tab label="Courses" {...a11yProps(0)} className="MuiTab_root" />
        <Tab label="Learner Paths" {...a11yProps(1)} className="MuiTab_root" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PurchaseCourses />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PurchaseLearnerPaths />
      </TabPanel>
      <Box position="absolute" right={0} top="11px">
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
      </Box>
    </Box>
  );
};

export default PurchaseManagement;
