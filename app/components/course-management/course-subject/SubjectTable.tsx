import {
  Button,
  createStyles,
  makeStyles,
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
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';
import Loader from '@element/Loader/Loader';
import { lmsStyle } from 'styles/ui.variables';
import EditSubjectModal from './EditSubjectModal';
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
      whiteSpace: 'nowrap',
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
    editModal: {
      outline: 'none',
      position: 'absolute',
      boxShadow: '0px 3px 6px #00000005',
      width: '50%',
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
    },
  })
);

const header = ['Name', 'Number of Subjects', 'Number of Courses', ''];

export default function SubjectTable({
  organizationId,
  subjectQuery,
  selectedSubject,
  setSelectedSubject,
}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

  const subjects = subjectQuery.data || [];

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
    if (subjects && subjects.length) {
      setTotalPageCount(subjects.length);
    }
  }, [subjects]);

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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (subjectQuery.isLoading) {
    return <Loader />;
  }
  const getList = () => {
    return subjects.map((subject, index) => (
      <TableRow key={`table-row-${index}`} className={classes.tableRow}>
        <TableCell className={`${classes.tableName} `}>
          {subject.name}
        </TableCell>
        <TableCell className={classes.tableData}>{subject.course}</TableCell>
        <TableCell className={classes.tableData}>0</TableCell>
        <TableCell className={classes.tableData} align="center">
          <Button
            className={classes.tableButton}
            onClick={() => {
              setSelectedSubject(subject);
              handleOpen();
            }}
          >
            Edit Subject
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
          <TableBody>
            {subjects.length > 0 ? getList() : null}
            <Modal open={open} onClose={handleClose}>
              <div className={classes.editModal}>
                <EditSubjectModal
                  organizationId={organizationId}
                  handleClose={handleClose}
                  selectedSubject={selectedSubject}
                />
              </div>
            </Modal>
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
