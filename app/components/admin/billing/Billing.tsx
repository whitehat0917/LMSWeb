import { layoutContext } from '@layout/admin/Layout';
import {
  AppBar,
  createStyles,
  Grid,
  makeStyles,
  Tab,
  Tabs,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import styles from './billing.module.scss';
import BillingDetails from './BillingDetails';
import BillingHistory from './BillingHistory';

import PaymentMethods from './PaymentMethods';
import YourPlan from './YourPlan';

const useStyles = makeStyles(() =>
  createStyles({
    singleTab: {
      minWidth: '72px',
      textTransform: 'capitalize',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
    },
    root: {
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
      borderRadius: `5px`,
    },
  })
);
function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}
const billingSteps = [
  'Your Plan',
  'Billing Details',
  'Payment Methods',
  'Billing History',
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
export default function Billing() {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const { setHeader, setIsVisibleFreeTrial } = React.useContext(layoutContext);
  React.useEffect(() => {
    setHeader('Billing');
    setIsVisibleFreeTrial(false);
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <AppBar position="static" elevation={0}>
        <Tabs
          value={activeTab}
          onChange={(e, val) => setActiveTab(val)}
          indicatorColor="primary"
          textColor="primary"
          className={styles.userTypeTabs}
        >
          {billingSteps.map((billingStep, index) => (
            <Tab
              label={billingStep}
              key={`user-filter-tab-${index}`}
              {...a11yProps(index)}
              className={classes.singleTab}
            />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={String(activeTab)} index="0">
        <YourPlan />
      </TabPanel>
      <TabPanel value={String(activeTab)} index="1">
        <BillingDetails />
      </TabPanel>
      <TabPanel value={String(activeTab)} index="2">
        <PaymentMethods />
      </TabPanel>
      <TabPanel value={String(activeTab)} index="3">
        <BillingHistory />
      </TabPanel>
    </Grid>
  );
}
