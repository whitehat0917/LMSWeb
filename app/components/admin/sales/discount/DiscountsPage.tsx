import * as React from 'react';
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
import { lmsStyle } from 'styles/ui.variables';
import styles from './discount.module.scss';
import DiscountTable from './DiscountTable';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { layoutContext } from '@layout/admin/Layout';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import EditDiscountModal from './EditDiscountModal';

const useStyles = makeStyles((theme) =>
  createStyles({
    discountContent: {
      padding: '20px',
      paddingBottom: '0px',
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
    },
    createNewCode: {
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      width: '100%',
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
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '75%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paginationContent: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
    },
    pagination: {
      marginTop: '20px',
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: `1px solid ${lmsStyle['base-gray-100']}`,
      borderRadius: '5px',
    },
    paginationButton: {
      color: lmsStyle['base-gray-500'],
      font: `normal normal bold 11px/17px ${lmsStyle['base-font']}`,
      textTransform: 'capitalize',
      padding: '9px 25px',
    },
    singleTab: {
      textTransform: 'capitalize',
      font: `normal normal 600 22px/26px ${lmsStyle['base-font']}`,
    },
    root: {
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
      borderRadius: `5px`,
    },
    userTypeTabs: {
      backgroundColor: lmsStyle['base-gray-100'],
      color: lmsStyle['base-gray-500'],
      borderBottom: `2px solid $base-gray-200`,
    },
    fontColor: {
      color: lmsStyle['base-secondary'],
    },
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      [theme.breakpoints.down('xs')]: {
        width: '75%',
        transform: `translate(-50%, -35%)`,
      },
    },
    overFlow: {
      overflow: 'scroll',
    },
  })
);

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
const sales = [
  { name: 'Sales', path: '/admin/sales/' },
  { name: 'Plans', path: '/admin/sales/plans' },
  { name: 'Discounts', path: '/admin/sales/discounts' },
];
export default function DiscountsPage() {
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);

  const [open, setOpen] = React.useState(false);
  const modalClose = () => {
    setOpen(false);
  };
  const [activeTab, setActiveTab] = React.useState<number>(2);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const route = useRouter();
  const { asPath } = route;
  React.useEffect(() => {
    setHeader(' ');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <div>
        <AppBar position="static" elevation={0}>
          <Tabs
            value={activeTab}
            onChange={(e, val) => setActiveTab(val)}
            indicatorColor="primary"
            textColor="primary"
            className={classes.userTypeTabs}
          >
            {sales.map((sale, index) => {
              const activeTab = asPath === sale.path;

              return (
                <Link
                  key={`sales-filter-tab-${index}`}
                  href={sale.path}
                  passHref
                >
                  <Tab
                    label={sale.name}
                    {...a11yProps(index)}
                    className={`${classes.singleTab} ${
                      activeTab ? classes.fontColor : ''
                    }`}
                  />
                </Link>
              );
            })}
          </Tabs>
        </AppBar>
      </div>
    );

    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, [activeTab]);

  const classes = useStyles();
  return (
    <Grid>
      <Paper elevation={0} className={classes.discountContent}>
        <Grid container className={styles.searchFilter} spacing={2}>
          <Grid item xs={12} md={3} lg={2}>
            <Button
              className={classes.createNewCode}
              onClick={() => {
                setOpen(true);
              }}
            >
              <span className={classes.plusSign}>+</span>
              <span>Create New Code</span>
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={8} className={classes.searchBar}>
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
              className={styles.searchDiscount}
              placeholder={`Search discounts by name or code`}
            ></input>
          </Grid>
          <Grid item xs={12} md={3} lg={2}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              className={styles.userButton}
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
              <span className={styles.userButtonText}>
                Subscription Coupons
              </span>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                // onClick={() => router.push('/admin/users')}
                className={styles.userButtonText}
              >
                Subscription Coupons
              </MenuItem>
              <MenuItem
                // onClick={() => router.push('/admin/users/team')}
                className={styles.userButtonText}
              >
                Course Coupons
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <DiscountTable />
      </Paper>
      <div className={classes.paginationContent}>
        <Pagination
          count={5}
          variant="text"
          shape="rounded"
          color="primary"
          className={classes.pagination}
          renderItem={(item) => {
            if (item.type === 'previous' || item.type === 'next') {
              return (
                <Button className={classes.paginationButton}>
                  {item.type}
                </Button>
              );
            }

            return <PaginationItem {...item} />;
          }}
        ></Pagination>
        <Modal open={open} onClose={modalClose} className={classes.overFlow}>
          <div className={classes.inviteModal}>
            <EditDiscountModal onClose={modalClose} />
          </div>
        </Modal>
      </div>
    </Grid>
  );
}
