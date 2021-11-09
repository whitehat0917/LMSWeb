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
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { OrganizationFactory } from '@lms-api/factory';
import Loader from '@element/Loader/Loader';
import Link from 'next/link';
import { lmsStyle } from 'styles/ui.variables';
import { PAGINATION_LIMIT } from '../config';

const useStyles = makeStyles(() =>
  createStyles({
    tableHeader: {
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['base-gray-500']}`,
      borderBottom: `2px solid ${lmsStyle['base-gray-200']}`,
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
      border: `1px solid ${lmsStyle['base-gray-300']}`,
      boxShadow: '0px 3px 3px #00000007',
      borderRadius: '4px',
      font: `normal normal 600 10px/12px ${lmsStyle['base-font']}`,
      color: `${lmsStyle['color-white']}`,
      textAlign: 'left',
      letterSpacing: '0px',
      textTransform: 'none',
      padding: '10px 20px',
      whiteSpace: 'nowrap',
      '&:hover': {
        backgroundColor: lmsStyle['button-bg-color'],
        color: lmsStyle['color-white'],
      },
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
  })
);

const header = [
  'Subscriber Name',
  'Number of Courses',
  'Number of Learners',
  '',
];

export default function CourseOrganizationTable(props) {
  const classes = useStyles();
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

  const organizationQuery = useQuery(queryKeys.getOrganizationInfo(), () =>
    OrganizationFactory.getAll()
  );

  const organizations = organizationQuery.data;

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
    if (organizations && organizations.length) {
      setTotalPageCount(organizations.length);
    }
  }, [organizations]);

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

  if (organizationQuery.isLoading) {
    return <Loader />;
  }
  const getList = () => {
    return organizations
      .filter((res, index) => {
        return (
          (props.search.length === 0 ||
            res.name.toLowerCase().indexOf(props.search.toLowerCase()) >= 0) &&
          listStart <= index &&
          index <= listEnd
        );
      })
      .map((org, index) => (
        <TableRow key={`table-row-${index}`} className={classes.tableRow}>
          <TableCell className={`${classes.tableName} `}>{org.name}</TableCell>
          <TableCell className={classes.tableData}>0</TableCell>
          <TableCell className={classes.tableData}>0</TableCell>
          <TableCell className={classes.tableData} align="center">
            <Link href={`/admin/courses/organization/${org.id}`} passHref>
              <Button className={classes.tableButton}>
                View Courses By This Subscriber
              </Button>
            </Link>
          </TableCell>
        </TableRow>
      ));
  };
  return (
    <>
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
          <TableBody>{organizations.length > 0 ? getList() : null}</TableBody>
        </Table>
      </TableContainer>
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
    </>
  );
}
