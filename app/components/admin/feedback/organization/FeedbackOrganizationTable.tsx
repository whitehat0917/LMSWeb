import {
  Button,
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
  Paper,
  Select,
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
import { PAGINATION_LIMIT } from '@module/course-management/config';
import { useStyles } from '../ui';
import { lmsStyle } from 'styles/ui.variables';
import styles from '../feedback.module.scss';

const header = ['Full Name', 'Email Address', 'Contact Number', ''];

export default function FeedbackOrganizationTable(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
          <TableCell className={classes.tableData}>{org.phoneNumber}</TableCell>
          <TableCell className={classes.tableData} align="center">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              className={styles.userButton}
              onClick={handleClick}
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
              <span className={styles.userButtonText}>Under Consideration</span>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                value="under-consideration"
                className={styles.userButtonText}
                onClick={handleClose}
              >
                Under Consideration
              </MenuItem>
              <MenuItem
                value="coming-soon"
                onClick={handleClose}
                className={styles.userButtonText}
              >
                Coming Soon
              </MenuItem>
              <MenuItem
                value="released"
                onClick={handleClose}
                className={styles.userButtonText}
              >
                Released
              </MenuItem>
            </Menu>
            <Link href="" passHref>
              <Button className={classes.tableButton}>View Request</Button>
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
