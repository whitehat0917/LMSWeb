//import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import UserList from './List';
import Pagination from './Pagination';
import styles from './User.module.scss';
import { Box, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Learners from './Learners';
import Educators from './Educators';
import Admins from './Admins';
import { lmsStyle } from 'styles/ui.variables';

const useStyles = makeStyles(() => ({
  coloredButton: {
    backgroundColor: lmsStyle['base-gray-500'],
    color: 'white',

    width: '200px',
    height: '36px',
    whiteSpace: 'nowrap',
    marginLeft: 'auto',
  },
  Tabcolor: {
    backgroundColor: 'white',
    zIndex: 1,
    textTransform: 'none',
    boxShadow: 'none',
    borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,

    opacity: 1,
  },
  Tabtext: {
    textTransform: 'none',
    color: lmsStyle['base-gray-500'],
    fontWeight: 'bold',
  },

  TabtextColor: {
    textColor: lmsStyle['base-secondary'],
  },

  boxcolor: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
  },

  tabwidth: {
    width: '100%',
  },

  text: {
    marginBottom: '-20px !Important',
    fontSize: 10,
    color: lmsStyle['base-gray-500'],
  },
}));

function TabPanel(props) {
  const { children, value, index, className = '', ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className={className}
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
  className: PropTypes.any,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const UserMain = () => {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.main}>
      <AppBar position="static" className={classes.Tabcolor}>
        <Tabs
          aria-label="full width tabs example"
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="All" className={classes.Tabtext} {...a11yProps(0)} />
          <Tab label="Learners" className={classes.Tabtext} {...a11yProps(1)} />
          <Tab
            label="Educators"
            className={classes.Tabtext}
            {...a11yProps(2)}
          />
          <Tab label="Admins" className={classes.Tabtext} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserList />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Learners />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Educators />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Admins />
      </TabPanel>
    </div>
  );
};

const UserView = () => {
  return (
    <>
      <div className={styles.listView}>
        <Header />
        <UserMain />
      </div>
      <Pagination />
    </>
  );
};

export default UserView;
