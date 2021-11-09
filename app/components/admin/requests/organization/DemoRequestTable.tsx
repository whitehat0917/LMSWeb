import {
  Button,
  Menu,
  MenuItem,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import * as React from 'react';
import { useStyles } from '../ui';
import { lmsStyle } from 'styles/ui.variables';
import styles from '../requests.module.scss';
import DemoRequestModal from './DemoRequestModal';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { RequestDemoFactory } from '@lms-api/factory';
import moment from 'moment';
import Loading from '@element/loading/loading';
import { useRouter } from 'next/router';

const header = ['Name', 'Company Name', 'Submitted On', 'Status', ''];

export default function CustomRequestTable({ ...props }) {
  const classes = useStyles();
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedRequest, setSelectedRequest] = React.useState({});
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

  const requestQuery = queryKeys.getRequestsByType('Demo');

  const requestDemoQuery = useQuery(requestQuery, () =>
    RequestDemoFactory.getAll('Demo')
  );
  const queryClient = useQueryClient();

  const deleteRequestDemoMutation = useMutation(
    (id: string) => RequestDemoFactory.del(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(requestQuery);
      },
    }
  );
  const requestDemoData = requestDemoQuery.data || [];

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
    if (requestDemoData && requestDemoData.length) {
      setTotalPageCount(requestDemoData.length);
    }
  }, [requestDemoData]);

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
  function modalClose() {
    setOpen(false);
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = (id) => {
    const result = confirm('Are you sure want to delete');
    if (result) {
      deleteRequestDemoMutation.mutate(id);
      router.push('/admin/requests/');
    }
  };

  if (requestDemoQuery.isLoading) {
    return <Loading />;
  }
  const getList = () => {
    return requestDemoData
      .filter((res, index) => {
        return (
          (props.searchValue.length === 0 ||
            `${res?.firstName} ${res?.lastName}`
              .toLowerCase()
              .indexOf(props.searchValue.toLowerCase()) >= 0) &&
          listStart <= index &&
          index <= listEnd
        );
      })
      .map((req, index) => (
        <TableRow key={`table-row-${index}`} className={classes.tableRow}>
          <TableCell className={`${classes.tableName} `}>
            {req.firstName} {req.lastName}
          </TableCell>
          <TableCell className={classes.tableData}>{req.companyName}</TableCell>
          <TableCell className={classes.tableData}>
            {req?.createdAt ? moment(req.createdAt).format('DD/MM/YYYY') : '-'}
          </TableCell>
          <TableCell className={classes.tableData}>
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
              <span className={styles.userButtonText}>Pending</span>
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
                Pending
              </MenuItem>
              <MenuItem
                value="coming-soon"
                onClick={handleClose}
                className={styles.userButtonText}
              >
                Scheduled
              </MenuItem>
              <MenuItem
                value="released"
                onClick={handleClose}
                className={styles.userButtonText}
              >
                Signed up (Completed)
              </MenuItem>
              <MenuItem
                value="released"
                onClick={handleClose}
                className={styles.userButtonText}
              >
                Not Signed up (Completed)
              </MenuItem>
            </Menu>
          </TableCell>
          <TableCell className={classes.tableData}>
            <Button
              className={classes.tableButton}
              onClick={() => {
                setOpen(true);
                setSelectedRequest(req);
              }}
            >
              View Form
            </Button>

            <Button
              className={classes.tableButton}
              onClick={() => {
                handleDelete(req.id);
              }}
            >
              Delete
            </Button>
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
          <TableBody>{requestDemoData.length > 0 ? getList() : null}</TableBody>
        </Table>
      </TableContainer>
      <Modal open={open} onClose={modalClose}>
        <div className={classes.inviteModal}>
          <DemoRequestModal
            selectedRequest={selectedRequest}
            onClose={modalClose}
          />
        </div>
      </Modal>
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
