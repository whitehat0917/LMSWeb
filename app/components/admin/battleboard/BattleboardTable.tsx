import {
  Avatar,
  Button,
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
import { UserInfoFactory } from '@lms-api/factory';
import Loader from '@element/Loader/Loader';
import { userTypeLabels } from '@lms-api/models/user-info.model';
import Link from 'next/link';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import { useStyles } from './ui';

const header = ['Avatar', 'Name', 'Points', 'Team', ''];

export default function BattleboardTable({ organizationId, ...props }) {
  const classes = useStyles();
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);

  const userQuery = useQuery(queryKeys.getUserInfo(), () =>
    UserInfoFactory.getByOrgId(organizationId)
  );
  const users = userQuery.data;

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
    if (users && users.length) {
      setTotalPageCount(users.length);
    }
  }, [users]);

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

  if (userQuery.isLoading) {
    return <Loader />;
  }

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
          <TableBody>
            {users
              .filter(
                (item, index) =>
                  (props.search.length == 0 ||
                    item.firstName
                      .toLowerCase()
                      .indexOf(props.search.toLowerCase()) >= 0 ||
                    item.lastName
                      .toLowerCase()
                      .indexOf(props.search.toLowerCase()) >= 0 ||
                    item.email
                      .toLowerCase()
                      .indexOf(props.search.toLowerCase()) >= 0) &&
                  listStart <= index &&
                  index <= listEnd
              )
              .map((user, index) => (
                <TableRow
                  key={`table-row-${index}`}
                  className={classes.tableRow}
                >
                  <TableCell>
                    <Avatar src={user.avatar}></Avatar>
                  </TableCell>
                  <TableCell className={`${classes.tableName} `}>
                    {user.firstName}&nbsp;
                    <span>{user.lastName}</span>
                  </TableCell>
                  <TableCell className={classes.tableData}>
                    {user.email}
                  </TableCell>
                  <TableCell className={classes.tableData}>
                    {userTypeLabels[user.type]}
                  </TableCell>
                  <TableCell className={classes.tableData} align="center">
                    <Link href={`/admin/users/${user.id}`} passHref>
                      <Button className={classes.battleboardButton}>
                        View Battleboard
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
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
