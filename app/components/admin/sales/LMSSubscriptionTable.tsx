import { OrderFactory, SubscriptionFactory } from '@lms-api/factory';
import {
  Button,
  createStyles,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
// import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import { PaginationItem } from '@material-ui/lab';
import Pagination from '@material-ui/lab/Pagination';
import * as React from 'react';
import '../../../styles/ui.variables';
import { lmsStyle } from '../../../styles/ui.variables';
import Switch from '@material-ui/core/Switch';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import SearchIcon from '@material-ui/icons/Search';
import moment from 'moment';
import MuiAlert from '@material-ui/lab/Alert';
import Link from 'next/link';
import queryKeys from '@lms-api/queryKeys';
import { useQuery } from 'react-query';
import Loader from '@element/Loader/Loader';

const useStyles = makeStyles(() =>
  createStyles({
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: 'none',
    },
    inviteNewUser: {
      background: `${lmsStyle['button-bg-color']} 0% 0% no-repeat padding-box`,
      textTransform: 'none',
      borderRadius: '4px',
      width: 143,
      height: 26,
      boxShadow: '0px 3px 3px #00000007',
      font: `normal normal 600 10px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['color-white'],
      padding: '10px 40px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
    },
    tableName: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal normal 10px/15px  ${lmsStyle['base-font']}`,
    },
    tableName1: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal 600 10px/15px  ${lmsStyle['base-font']}`,
    },
    tableData: {
      color: `${lmsStyle['base-secondary']}`,
      font: `normal normal normal 10px/15px ${lmsStyle['base-font']}`,
    },
    tableButton: {
      margin: '5px',
      background: `${lmsStyle['base-gray-100']} 0% 0% no-repeat padding-box`,
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-secondary']}`,
      textAlign: 'left',
      letterSpacing: '0px',
      textTransform: 'none',
      padding: '10px 20px',
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
    tableBody: {
      padding: '10px 10px 0',
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
    },
    tableRow: {
      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
    },
    searchBar: {
      position: 'relative',
      width: '100%',
      marginBottom: '5px',
    },
    searchField: {
      background: `${lmsStyle['base-gray-200']} 0% 0% no-repeat padding-box`,
      borderRadius: '5px',
      border: 'none',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-gray-500'],
    },
    boxShadow: {
      padding: '20px',
      paddingBottom: '0',
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
      borderRadius: '5px',
    },
  })
);
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const header = [
  'Subscriber Name',
  'Date Joined',
  'User Limit',
  'Price',
  'Plan Type',
  'Active Status',
  'Payment Status',
  '',
];

export default function LMSSubscriptionTable({ organizationId }) {
  const classes = useStyles();
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState('');
  const [isToasterShowing, setToasterShowing] = React.useState('');

  const subscriptionQuery = useQuery(
    queryKeys.getSubscriptionInfoByOrgId(organizationId),
    () => SubscriptionFactory.getAll(organizationId)
  );

  const subscriptions = subscriptionQuery.data || [];

  console.log('subscription data', subscriptions);

  const handleSearch = (val) => {
    setSearchValue(val);
  };

  const setTotalPageCount = (listLength) => {
    let pages: any = Number(listLength) / PAGINATION_LIMIT;
    pages = pages.toString();
    pages = pages.split('.');
    let pageCount = 0;
    pageCount = Number(pages[0]);
    if (Number(pages[1]) > 0) {
      pageCount = pageCount + 1;
    }
    setTotalPages(pageCount);
  };
  React.useEffect(() => {
    if (subscriptions && subscriptions.length) {
      setTotalPageCount(subscriptions.length);
    }
  }, [subscriptions]);

  const handlePaginationChange = (evt, page) => {
    setActivePage(Number(page));
    paginationChange(page);
  };

  const handlePaginationClick = (evt) => {
    if (evt.target.innerText == 'Previous') {
      setActivePage(activePage - 1);
      paginationChange(activePage - 1);
    }
    if (evt.target.innerText == 'Next') {
      setActivePage(activePage + 1);
      paginationChange(activePage + 1);
    }
  };

  const paginationChange = (pageNumber) => {
    const nextSkip = pageNumber * PAGINATION_LIMIT;
    setListStart(nextSkip - PAGINATION_LIMIT);
    setListEnd(nextSkip - 1);
  };

  const showToaster = (msg) => {
    setToasterShowing(msg);
    setTimeout(() => {
      setToasterShowing('');
    }, 2000);
  };
  const statusToggleClick = async (data, e) => {
    console.log(e.target.value);
    const newStatus = e.target.value == 'true' ? 'DEACTIVE' : 'ACTIVE';
    const id = data.id;

    data.status = newStatus;
    delete data.id;

    await OrderFactory.update(id, data);
    // getLearnData(organizationId);

    if (newStatus === 'ACTIVE') {
      showToaster(
        `Learning Path ${data.courseTitle} was activeed successfully`
      );
    } else {
      showToaster(
        `Learning Path ${data.courseTitle} was de-activeed successfully`
      );
    }
  };

  if (subscriptionQuery.isLoading) {
    <Loader />;
  }

  const getList = () => {
    return subscriptions
      .filter((res, idx) => {
        return (
          (searchValue.length === 0 ||
            res.organization.name
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) >= 0) &&
          listStart <= idx &&
          idx <= listEnd
        );
      })
      .map((data, index) => (
        <TableRow key={`table-row-${index}`} className={classes.tableRow}>
          <TableCell className={`${classes.tableName1} `}>
            {data.organization.name}
          </TableCell>
          <TableCell className={`${classes.tableName} `}>
            {moment(data.createdAt).format('DD/MM/YYYY')}
          </TableCell>
          <TableCell className={classes.tableData}>0</TableCell>
          <TableCell className={classes.tableData}>{data.cost}$</TableCell>
          <TableCell className={classes.tableData}>{data.plan}</TableCell>
          <TableCell className={classes.tableData}>
            <Switch
              checked={data.status === 'ACTIVE'}
              value={data.status === 'ACTIVE'}
              onChange={(e) => statusToggleClick(data, e)}
              color="primary"
              name="checkedB"
              inputProps={{ 'aria-label': 'primary checkbox' }}
            />
          </TableCell>
          <TableCell className={classes.tableData}>
            {data.paymentType}
          </TableCell>
          <TableCell className={classes.tableData} align="center">
            <Link href={`/admin/sales/subscriber`} passHref>
              <Button className={classes.inviteNewUser}>
                View Subscriber Details
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <>
      <Paper className={classes.boxShadow} elevation={0}>
        {isToasterShowing && (
          <Alert severity="success">{isToasterShowing}</Alert>
        )}
        <Grid className={classes.searchBar}>
          <FormControl fullWidth>
            <OutlinedInput
              className={classes.searchField}
              placeholder="Search for a course to filter"
              onChange={(e) => handleSearch(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <IconButton aria-label="search">
                    <SearchIcon color="primary" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <TableContainer
          component={Paper}
          className={classes.tableBody}
          elevation={0}
        >
          <Table>
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
              {subscriptions?.length > 0 ? getList() : null}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {totalPages > 0 && (
        <div className={classes.paginationContent}>
          <Pagination
            count={totalPages}
            page={activePage}
            onClick={handlePaginationClick}
            onChange={handlePaginationChange}
            hideNextButton={activePage == totalPages}
            hidePrevButton={activePage == 1}
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
        </div>
      )}
    </>
  );
}
