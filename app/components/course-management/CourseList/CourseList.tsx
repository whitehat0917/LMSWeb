// import Loader from '@element/Loader/Loader';
// import RetryMessage from '@element/RetryMessage/RetryMessage';
// import queryKeys from '@lms-api/queryKeys';
import { Box, Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination';
import { GlobalUrls } from '@util/app-utils';
import { CourseFactory } from 'api/factory';
import styles from 'components/course-management/CourseList/CourseAddedNew.module.scss';
import NewCourse from 'components/course-management/NewCourse/NewCourse';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
// import { useQuery } from 'react-query';
import { PaginationItem } from '@material-ui/lab';
import { layoutContext } from '@layout/admin/Layout';
import { useStyles } from './ui';
const PAGINATION_LIMIT = 10;

export default function Courses({ organizationId }) {
  const classes = useStyles();
  const { setHeader, setIsVisibleFreeTrial } = React.useContext(layoutContext);

  React.useEffect(() => {
    setHeader('Courses');
    setIsVisibleFreeTrial(false);

    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(false);
    };
  }, []);

  const router = useRouter();
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);
  const [courseList, setCourseList] = React.useState([]);

  // const coursesQuery = useQuery(
  //   queryKeys.getCoursesByOrgId(authnInfo.userInfo?.organizationId),
  //   () => CourseFactory.getAll(authnInfo.userInfo?.organizationId)
  // );

  useEffect(() => {
    getCourseList();
  }, [organizationId]);

  const getCourseList = async () => {
    if (organizationId) {
      const list = await CourseFactory.getAll(organizationId);
      console.log('-list--', list);
      setCourseList(list);
      setTotalPageCount(list.length);
    }
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

  const handlePaginationChange = (evt, page) => {
    setActivePage(Number(page));
    paginationChange(page);
  };

  const handlePaginationClick = (evt) => {
    console.log('-evt.target.innerText-', evt.target);

    if (evt.target.innerText == 'previous') {
      setActivePage(activePage - 1);
      paginationChange(activePage - 1);
    }
    if (evt.target.innerText == 'next') {
      setActivePage(activePage + 1);
      paginationChange(activePage + 1);
    }
  };

  console.log('--listStart-', listStart);

  console.log('--listEnd-', listEnd);

  const paginationChange = (pageNumber) => {
    const nextSkip = pageNumber * PAGINATION_LIMIT;
    setListStart(nextSkip - PAGINATION_LIMIT);
    setListEnd(nextSkip - 1);
  };

  const renderCourses = () => {
    // if (coursesQuery.isLoading) {
    //   return <Loader />;
    // }

    // if (coursesQuery.isError) {
    //   return (
    //     <RetryMessage
    //       message="Failed to load courses."
    //       onRetry={() => coursesQuery.refetch()}
    //     />
    //   );
    // }

    // const courses = coursesQuery.data;
    // setTotalPageCount(courses.length);
    console.log('--listStart-', listStart);

    console.log('--listEnd-', listEnd);
    if (courseList.length) {
      return (
        // <React.Fragment>
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead
                classes={{
                  root: classes.tableHead,
                }}
              >
                <TableRow>
                  <TableCell>Course Name</TableCell>
                  <TableCell align="right">Date Created</TableCell>
                  <TableCell align="center">Created by</TableCell>
                  <TableCell align="right">Students Enrolled</TableCell>
                  <TableCell align="right">Course Category</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody
                classes={{
                  root: classes.row,
                }}
              >
                {courseList
                  .filter((res, idx) => listStart <= idx && idx <= listEnd)
                  .map((row, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell
                        align="right"
                        classes={{
                          root: classes.row,
                        }}
                      >
                        {format(new Date(row.createdAt), 'P')}
                      </TableCell>
                      <TableCell
                        align="center"
                        classes={{
                          root: classes.row,
                        }}
                      >
                        {row.createdBy}
                      </TableCell>
                      <TableCell
                        align="right"
                        classes={{
                          root: classes.row,
                        }}
                      >
                        -
                      </TableCell>
                      <TableCell
                        align="right"
                        classes={{
                          root: classes.row,
                        }}
                      >
                        {row.category?.name}
                      </TableCell>
                      <TableCell align="right">
                        <Button
                          variant="contained"
                          className={classes.coloredButton1}
                          onClick={() => {
                            router.push(
                              `${GlobalUrls.ADMIN}/courses/${row.id}`
                            );
                          }}
                        >
                          Course Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>

          {totalPages > 0 && (
            <div>
              <Pagination
                className={classes.pagination}
                // count={10}
                count={totalPages}
                page={activePage}
                onClick={handlePaginationClick}
                onChange={handlePaginationChange}
                hideNextButton={activePage == totalPages}
                hidePrevButton={activePage == 1}
                variant="text"
                color="primary"
                shape="rounded"
                renderItem={(item) => {
                  if (item.type === 'previous' || item.type === 'next') {
                    return (
                      <Button
                      // className={classes.paginationButton}
                      >
                        {item.type}
                      </Button>
                    );
                  }

                  return <PaginationItem {...item} />;
                }}
              />
            </div>
          )}
        </div>
        // </React.Fragment>
      );
    } else {
      return <NewCourse />;
    }
  };

  return (
    <>
      <Box className={styles.box} flexGrow={1}>
        {renderCourses()}
      </Box>
    </>
  );
}
