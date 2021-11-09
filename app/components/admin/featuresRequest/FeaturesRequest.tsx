import {
  AppBar,
  Button,
  createStyles,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import FeaturesCard from './FeaturesCard';
import styles from './featuresRequest.module.scss';
import _ from 'lodash';
import RequestNewFeature from './RequestNewFeature';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) =>
  createStyles({
    createNewCode: {
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
    },
    plusSign: {
      marginRight: '20px',
    },
    searchBar: {
      position: 'relative',
      marginInline: '10px',
      width: '100%',
    },
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sortButton: {
      border: `1px solid $base-gray-300`,
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      padding: `14px 20px`,
      borderRadius: '4px',
      textTransform: 'none',
      justifyContent: 'space-between',
    },
    sortButtonText: {
      width: '100px',
      textAlign: 'start',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    },
  })
);

const searchTypes = ['Under Consideration', 'Coming Soon', 'Released'];
const filterOptions = [
  'Most Votes',
  'Least Votes',
  'Most Recent',
  'Least Recent',
];
export default function FeaturesRequest({
  activeTab = 0,
  handleTabChange,
}: {
  activeTab?: number;
  handleTabChange?: () => void;
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleModelClose = () => {
    setOpen(false);
  };
  return (
    <Grid>
      <Paper elevation={0} style={{ padding: '20px' }}>
        <Grid className={styles.searchFilter}>
          <Grid item>
            <Button className={classes.createNewCode} onClick={handleOpen}>
              <span className={classes.plusSign}>+</span>
              <span>Create New Request</span>
            </Button>
            <Modal open={open} onClose={handleModelClose}>
              <div className={classes.inviteModal}>
                <RequestNewFeature handleModelClose={handleModelClose} />
              </div>
            </Modal>
          </Grid>
          <Grid className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10.993}
                height={11}
                viewBox="0 0 10.993 11"
              >
                <path
                  d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                  fill={lmsStyle['base-primary']}
                />
              </svg>
            </div>
            <input
              className={styles.searchFeatures}
              placeholder={`Search discounts by name or code`}
            ></input>
          </Grid>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.sortButton}
            endIcon={
              <svg
                width="10px"
                xmlns="http://www.w3.org/2000/svg"
                className="prefix__h-6 prefix__w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={`${lmsStyle['base-primary']}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            }
          >
            <span className={classes.sortButtonText}>Most Votes</span>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {_.map(filterOptions, (option, index) => (
              <MenuItem
                // onClick={() => router.push('/admin/users')}
                className={classes.sortButtonText}
                key={`features-sort-option-id-${index}`}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Grid>
        <AppBar position="static" elevation={0}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            //textColor={`${lmsStyle['color-primary-dark']}`}
            className={styles.searchTypeTabs}
          >
            {searchTypes.map((userType, index) => (
              <Tab
                label={userType}
                key={`user-filter-tab-${index}`}
                {...a11yProps(index)}
                className={styles.MuiTab_root}
              />
            ))}
          </Tabs>
        </AppBar>
        <FeaturesCard />
      </Paper>
    </Grid>
  );
}
