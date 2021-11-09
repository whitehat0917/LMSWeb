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
import { Pagination, PaginationItem } from '@material-ui/lab';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import Link from 'next/link';
import moment from 'moment';

const useStyles = makeStyles(() =>
  createStyles({
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
  })
);

const header = [
  'Course Name',
  'Date Created',
  'Created by',
  'Price',
  'Sales',
  'Total',
  '',
];

export default function SalesHistoryTable({ salesData }) {
  // const userQuery = useQuery(queryKeys.getUserInfo(), () =>
  //   UserInfoFactory.getAll()
  // );
  const classes = useStyles();

  // if (userQuery.isLoading) {
  //   return <Loader />;
  // }
  // const users = userQuery.data;
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [searchValue, setSearchValue] = React.useState('');

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

  const listData = [];

  salesData.forEach((salesHistory) =>
    salesHistory.lines.forEach((line) => {
      listData.push({
        createdAt: salesHistory.createdAt,
        createdBy: salesHistory.createdBy,
        courseTitle: line.courseTitle,
        price: line.price,
        quantity: line.quantity,
        total: line.total,
        id: line.courseId,
      });
    })
  );

  const getList = () => {
    return listData
      .filter((res, idx) => {
        return (
          (searchValue.length === 0 ||
            res.courseTitle.toLowerCase().indexOf(searchValue.toLowerCase()) >=
              0) &&
          listStart <= idx &&
          idx <= listEnd
        );
      })

      .map((data, index) => (
        <TableRow key={`table-sales-row-${index}`} className={classes.tableRow}>
          <TableCell className={`${classes.tableName} `}>
            {data.courseTitle}
          </TableCell>
          <TableCell className={`${classes.tableData} `}>
            {moment(data.createdAt).format('DD/MM/YYYY')}
          </TableCell>
          <TableCell className={classes.tableData}>{data.createdBy}</TableCell>
          <TableCell className={classes.tableData}>{data.price}$</TableCell>
          <TableCell className={classes.tableData}>{data.quantity}</TableCell>
          <TableCell className={classes.tableData}>{data.total}$</TableCell>

          <TableCell className={classes.tableData} align="center">
            <Link href={`/admin/courses/${data.courseId}`}>
              <Button className={classes.tableButton}>
                View Course Details
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ));
  };

  return (
    <>
      <Paper className={classes.boxShadow} elevation={0}>
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
            <TableBody>{salesData.length > 0 ? getList() : null}</TableBody>
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
