import {
  AppBar,
  Button,
  createStyles,
  makeStyles,
  Modal,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
} from '@material-ui/core';
import Link from 'next/link';
import * as React from 'react';
import PropTypes from 'prop-types';

import { lmsStyle } from 'styles/ui.variables';
import { layoutContext } from '@layout/admin/Layout';
import { useRouter } from 'next/router';
import EditPlanModal from './EditPlan';

const useStyles = makeStyles((theme) =>
  createStyles({
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: `3px solid ${lmsStyle['base-gray-200']}`,
    },
    tableName: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal 600 12px/15px ${lmsStyle['base-font']}`,
    },
    tableData: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
    },
    tableButton: {
      margin: '5px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['color-white']}`,
      textTransform: 'none',
      padding: '10px 20px',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: `${lmsStyle['color-white']}`,
      },
      whiteSpace: 'nowrap',
    },

    tableRow: {
      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
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
      },
    },
  })
);

const header = ['Plan Name', 'Plan Price', 'User Limit', ''];
const salesHistories = [
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
  {
    name: 'Vitae fermentum',
    price: '400',
    limit: '100',
  },
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
  { name: 'Sales', path: '/admin/sales/' },
  { name: 'Plans', path: '/admin/sales/plans' },
  { name: 'Discounts', path: '/admin/sales/discounts' },
];
export default function PlansPage() {
  // const userQuery = useQuery(queryKeys.getUserInfo(), () =>
  //   UserInfoFactory.getAll()
  // );
  const classes = useStyles();

  // if (userQuery.isLoading) {
  //   return <Loader />;
  // }
  // const users = userQuery.data;
  const [activeTab, setActiveTab] = React.useState<number>(1);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const route = useRouter();
  const { asPath } = route;
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);

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

  return (
    <>
      <TableContainer component={Paper} elevation={0}>
        <Table style={{ boxShadow: 'none' }}>
          <TableHead>
            <TableRow>
              {header.map((header, index) => (
                <TableCell
                  className={classes.tableHeader}
                  align="left"
                  key={`header-${index}`}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {salesHistories.map((salesHistory, index) => (
              <TableRow key={`table-row-${index}`} className={classes.tableRow}>
                <TableCell className={`${classes.tableName} `}>
                  {salesHistory.name}
                </TableCell>
                <TableCell className={`${classes.tableData} `}>
                  ${salesHistory.price}
                </TableCell>
                <TableCell className={classes.tableData}>
                  {salesHistory.limit}
                </TableCell>

                <TableCell className={classes.tableData} align="center">
                  <Button
                    onClick={() => {
                      setOpen(true);
                    }}
                    className={classes.tableButton}
                  >
                    Edit Plan
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.inviteModal}>
          <EditPlanModal onClose={handleClose} />
        </div>
      </Modal>
    </>
  );
}
