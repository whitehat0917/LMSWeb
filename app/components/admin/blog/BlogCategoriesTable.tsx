import {
  Button,
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
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import Loader from '@element/Loader/Loader';
import { PAGINATION_LIMIT } from '@module/course-management/config';
import EditCategoryModal from '@module/course-management/course-categories/EditCategoryModal';
import { CategoryFactory } from '@lms-api/factory';
import { useStyles } from './ui';

const header = ['Name', 'Number of Blogs', ''];

export default function BlogCategoriesTable({
  organizationId,
  setselectedCategory,
  selectedCategory,
  ...props
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [listStart, setListStart] = React.useState(0);
  const [listEnd, setListEnd] = React.useState(9);
  const [totalPages, setTotalPages] = React.useState(0);
  const [activePage, setActivePage] = React.useState(1);

  const categoryQuery = useQuery(
    queryKeys.getCategoriesByOrgId(organizationId),
    () => CategoryFactory.getAll(organizationId)
  );

  const categories = categoryQuery.data || [];

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
    if (categories && categories.length) {
      setTotalPageCount(categories.length);
    }
  }, [categories]);

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
  const handleModalClose = () => {
    setOpen(false);
  };
  if (categoryQuery.isLoading) {
    return <Loader />;
  }

  const getList = () => {
    return categories
      .filter((res, index) => {
        return (
          (props.searchValue.length === 0 ||
            res.name.toLowerCase().indexOf(props.searchValue.toLowerCase()) >=
              0) &&
          listStart <= index &&
          index <= listEnd
        );
      })
      .map((data, index) => (
        <TableRow key={`table-row-${index}`} className={classes.tableRow}>
          <TableCell className={`${classes.tableName} `}>
            {data.name}&nbsp;
          </TableCell>
          <TableCell className={classes.tableData}>0</TableCell>
          <TableCell className={classes.tableData} align="center">
            <Button
              className={classes.tableButton}
              onClick={() => {
                setOpen(true);
                setselectedCategory(data);
              }}
            >
              Edit Category
            </Button>
          </TableCell>
        </TableRow>
      ));
  };
  return (
    <>
      <Modal open={open} onClick={handleModalClose}>
        <div className={classes.editModal}>
          <EditCategoryModal
            onClose={handleModalClose}
            selectedCategory={selectedCategory}
            organizationId={10}
          />
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
          <TableBody>{categories.length > 0 ? getList() : null}</TableBody>
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
