import {
  Avatar,
  Button,
  createStyles,
  Grid,
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
import '../../../styles/ui.variables';
import { lmsStyle } from '../../../styles/ui.variables';
import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { UserInfoFactory } from '@lms-api/factory';
import Loader from '@element/Loader/Loader';
import { userTypeLabels } from '@lms-api/models/user-info.model';
import Link from 'next/link';
import styles from '@module/admin/users/usermanagement.module.scss';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import LoadingView from '@module/elements/loading/loading-view';
import { useRecoilState } from 'recoil';
import { authnState } from 'store';

const useStyles = makeStyles((theme) =>
  createStyles({
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
    buttonMobileView: {
      [theme.breakpoints.down('md')]: {
        textAlign: 'end',
      },
    },
  })
);

const header = [
  'Avatar',
  'Name',
  'Email Address',
  'User Role',
  'User Status',
  '',
];

export default function UserTable({ organizationId, refresh, ...props }) {
  const classes = useStyles();
  const [authn] = useRecoilState(authnState);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [users, setUsers] = React.useState([]);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);

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
    setIsLoading(true);
    retrieveUsers();
  }, []);


  React.useEffect(() => {
    if (refresh) {
      setIsLoading(true);
      retrieveUsers();
    }
  }, [refresh]);

  const retrieveUsers = async () => {
    try {
      const response = await UserInfoFactory.getByOrgId(organizationId);
      const data = response.filter(x => x.id !== authn.userInfo.id);
      setUsers(data);
      setIsLoading(false);
      if (data?.length) {
        setTotalPageCount(data.length);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

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

  if (isLoading) {
    return <LoadingView autoHeight={false} />;
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <div className={classes.inviteModal}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Paper style={{ width: '100%' }}>
                <div className={styles.header}>
                  <h1 className={styles.inviteNewUserText}>Send Message</h1>
                  <div className={styles.close} onClick={handleClose}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={9.558}
                      height={9.557}
                      viewBox="0 0 9.558 9.557"
                    >
                      <path
                        d="M9.381 8.532a.6.6 0 11-.848.848L4.779 5.619 1.025 9.38a.6.6 0 11-.848-.848l3.761-3.754L.177 1.023a.6.6 0 11.848-.848l3.754 3.761L8.533.175a.6.6 0 01.848.848L5.619 4.777z"
                        fill="#7d8793"
                      />
                    </svg>
                  </div>
                </div>
                <Grid container className={styles.modalContent} spacing={2}>
                  <Grid item xs={12}>
                    <TextInputOutline
                      id="email"
                      label={<span>Enter Your Message </span>}
                      multiline
                      rows={5}
                    ></TextInputOutline>
                  </Grid>
                  <Grid item>
                    <Button className={classes.messageButton}>
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Modal>
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
                  (props.userType === 'all' ||
                    (item.type &&
                      userTypeLabels[item.type].toLowerCase() ===
                      props.userType)) &&
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
                  <TableCell className={classes.tableData}>
                    {user.active ? 'Active' : 'Inactive'}
                  </TableCell>
                  <TableCell
                    className={`${classes.tableData} ${classes.buttonMobileView}`}
                    align="center"
                  >
                    <Button
                      className={classes.tableButton}
                      startIcon={
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={13.095}
                          height={10.808}
                          viewBox="0 0 13.095 10.808"
                        >
                          <path
                            d="M6.032 4.705H.748A.765.765 0 000 5.467v3.438a.753.753 0 00.749.749h.821l-.1 1.152 1.944-1.152h2.62a.753.753 0 00.749-.749V5.467a.747.747 0 00-.749-.763z"
                            fill="#34597e"
                          />
                          <path
                            d="M11.799.002H3.867a1.324 1.324 0 00-1.31 1.327v2.623h3.628A1.438 1.438 0 017.61 5.396v2.479h.148l3.153 1.9-.159-1.9h1.036a1.324 1.324 0 001.31-1.327V1.327A1.3 1.3 0 0011.798 0z"
                            fill={lmsStyle['base-secondary']}
                          />
                        </svg>
                      }
                      onClick={handleOpen}
                    >
                      Message
                    </Button>
                    <Button
                      href={`mailto:${user.email}}`}
                      className={classes.tableButton}
                    >
                      Email
                    </Button>
                    <Link href={`/admin/users/${user.id}`} passHref>
                      <Button className={classes.tableButton}>
                        View or Edit Details
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
