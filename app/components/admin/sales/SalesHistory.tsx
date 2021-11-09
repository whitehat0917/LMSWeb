import SelectInput from '@element/SelectInput/SelectInput';
import * as React from 'react';
import styles from './sales.module.scss';
import SalesChart from './SalesChart';
import CourseSalesTable from './CourseSalesTable';
import {
  createStyles,
  Grid,
  makeStyles,
  AppBar,
  Tab,
  Tabs,
  Paper,
} from '@material-ui/core';
import { lmsStyle } from 'styles/ui.variables';
import { layoutContext } from '@layout/admin/Layout';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import LMSSubscriptionTable from './LMSSubscriptionTable';
import queryKeys from '@lms-api/queryKeys';
import { useQuery } from 'react-query';
import { OrderFactory } from '@lms-api/factory';
import Loader from '@element/Loader/Loader';

const useStyles = makeStyles((theme) =>
  createStyles({
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
      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
    },
    fontColor: {
      color: lmsStyle['base-secondary'],
    },
    salesHistoryTab: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    mobileViewTab: {
      [theme.breakpoints.between('sm', 'md')]: {
        minWidth: 'unset',
      },
    },
  })
);

const filterOptions = [
  { title: 'Last 7 days', value: 7 },
  { title: 'Last 14 days', value: 14 },
  { title: 'Last 30 days', value: 30 },
];
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
  { name: 'Sales', path: '/admin/sales' },
  { name: 'Plans', path: '/admin/sales/plans' },
  { name: 'Discounts', path: '/admin/sales/discounts' },
];

const salesHistoryTabs = ['Course Sales', 'LMS Subscriptions'];
export default function SalesHistory({ organizationId }) {
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);

  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [salesActiveTab, setSalesActiveTab] = React.useState<number>(0);
  const classes = useStyles();
  const [filterValue, setFilterValue] = React.useState(25);

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
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
                    classes={{
                      root: classes.mobileViewTab,
                    }}
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

  const salesQuery = useQuery(queryKeys.getOrderByOrgId(organizationId), () =>
    OrderFactory.getAll(organizationId)
  );

  const salesData = salesQuery.data || [];

  if (salesQuery.isLoading) {
    <Loader />;
  }
  return (
    <>
      <div className={styles.statsHeader} style={{ marginTop: '0px' }}>
        <Grid container justify="space-between">
          <Paper elevation={0} style={{ width: 'auto' }}>
            <Grid item xs={12}>
              <Tabs
                value={salesActiveTab}
                onChange={(e, val) => setSalesActiveTab(val)}
                indicatorColor="primary"
                textColor="primary"
                className={classes.userTypeTabs}
              >
                {salesHistoryTabs.map((tab, index) => {
                  return (
                    <Tab
                      label={tab}
                      key={`sales-history-tab-index-${index}`}
                      {...a11yProps(index)}
                      className={`${classes.salesHistoryTab} ${
                        salesActiveTab ? classes.fontColor : ''
                      }`}
                    />
                  );
                })}
              </Tabs>
            </Grid>
          </Paper>
          <Grid item xs={12} sm={2}>
            <div className={styles.filterContainer}>
              <SelectInput
                selectValue={filterValue}
                onSelectChange={handleFilterChange}
                style={{}}
              >
                {filterOptions.map((option, index) => {
                  return (
                    <option key={index} value={option.value}>
                      {option.title}
                    </option>
                  );
                })}
              </SelectInput>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className={`${styles.root} ${styles.dropShadow}`}>
        <SalesChart filterValue={filterValue} />
      </div>
      <Grid style={{ marginTop: '10px' }}>
        <TabPanel value={salesActiveTab} index={0}>
          <CourseSalesTable salesData={salesData} />
        </TabPanel>
        <TabPanel value={salesActiveTab} index={1}>
          <LMSSubscriptionTable organizationId={organizationId} />
        </TabPanel>
      </Grid>
    </>
  );
}
