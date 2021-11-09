import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as React from 'react';
import '../../../styles/ui.variables';
import { lmsStyle } from '../../../styles/ui.variables';
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { OrderFactory } from '@lms-api/factory';
import Loader from '@element/Loader/Loader';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import moment from 'moment';
import { authnState } from 'store';
import { useRecoilValue } from 'recoil';

const useStyles = makeStyles(() =>
  createStyles({
    boxShadow: {
      padding: '20px',
      paddingBottom: '0',
      boxShadow: `0px 3px 6px ${lmsStyle['box-shadow']}`,
      borderRadius: '5px',
      width: '100%',
    },
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: 'none',
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
    inviteModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
    messageButton: {
      padding: '10px 30px',
      background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
      color: lmsStyle['color-white'],
      font: `normal normal 600 13px/16px ${lmsStyle['base-font']}`,
      textTransform: 'none',
      '&:hover': {
        background: `${lmsStyle['base-secondary']} 0% 0% no-repeat padding-box`,
        color: lmsStyle['color-white'],
      },
    },
  })
);

const header = [
  'Subscriber Name',
  'Date Paid',
  'Pay Period',
  'Status',
  'Amount Due',
  'Amount Paid',
  'Discounts',
];

export default function SubscriptionTable({ ...props }) {
  const classes = useStyles();
  const authnInfo = useRecoilValue(authnState);
  const salesQuery = useQuery(queryKeys.getOrderByOrgId(authnInfo?.userInfo?.organizationId), () =>
    OrderFactory.getAll(authnInfo?.userInfo?.organizationId)
  );

  const salesData = salesQuery.data || [];

  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

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
    if (salesData && salesData.length) {
      setTotalPageCount(salesData.length);
    }
  }, [salesData]);

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
  if (salesQuery.isLoading) {
    return <Loader />;
  }
  console.log(props.searchValue);
  const getList = () => {
    return salesData
      .filter((res, index) => {
        return (
          (props.searchValue.length === 0 ||
            res.lines.map(
              (line) =>
                line.courseTitle
                  .toLowerCase()
                  .indexOf(props.searchValue.toLowerCase()) >= 0
            )) &&
          listStart <= index &&
          index <= listEnd
        );
      })
      .map((salesHistory, index) =>
        salesHistory.lines.map((line) => (
          <TableRow key={`table-row-${index}`} className={classes.tableRow}>
            <TableCell className={`${classes.tableName} `}>
              {line.courseTitle}
            </TableCell>
            <TableCell className={`${classes.tableData} `}>
              {moment(salesHistory.createdAt).format('DD/MM/YYYY')}
            </TableCell>
            <TableCell className={classes.tableData}>
              {salesHistory.createdBy}
            </TableCell>
            <TableCell className={classes.tableData}>{line.price}$</TableCell>
            <TableCell className={classes.tableData}>{line.quantity}</TableCell>
            <TableCell className={classes.tableData}>{line.total}$</TableCell>
            <TableCell className={classes.tableData}>{line.total}$</TableCell>
          </TableRow>
        ))
      );
  };

  return (
    <>
      <Paper className={classes.boxShadow} elevation={0}>
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
            <TableBody>{salesData?.length > 0 ? getList() : null}</TableBody>
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
