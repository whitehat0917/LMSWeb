import { layoutContext } from '@layout/admin/Layout';
import { Box, Button, Grid, Paper } from '@material-ui/core';
import Select from '@element/SortSelect/Select';
import Link from 'next/link';
import * as React from 'react';
import { useStyles } from './ui';
import BlogCard from './BlogCard';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { PAGINATION_LIMIT } from '@module/course-management/config';

const cardData = [
  {
    image: '',
    alt: 'card-1',
    title: 'Become a Video Editor in 3 hours',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    type: 'Draft',
    date: '18/08/2021',
  },
  {
    image: '',
    alt: 'card-1',
    title: 'Become a Video Editor in 3 hours',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    type: 'Draft',
    date: '18/08/2021',
  },
  {
    image: '',
    alt: 'card-1',
    title: 'Become a Video Editor in 3 hours',
    description:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut arcu libero, pulvinar non massa sed, accumsan scelerisque dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    type: 'Published',
    date: '18/08/2021',
  },
];
export default function Blog() {
  const classes = useStyles();
  const {
    setHeader,
    setIsVisibleFreeTrial,
    setHeaderContent,
  } = React.useContext(layoutContext);
  React.useEffect(() => {
    setHeader('Blogs');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <div className={classes.headerContent}>
        <Link href={`/admin/blog/createBlog`} passHref>
          <Button className={classes.createBlog}>
            <div className={classes.createEventSvg}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="prefix__h-6 prefix__w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
            <div className={classes.mobileView}>Create New Blog Post</div>
          </Button>
        </Link>
        <Link href={`/admin/blog/categories`} passHref>
          <Button className={classes.blogCategories}>Blog Categories</Button>
        </Link>
      </div>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, []);

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
    if (cardData && cardData.length) {
      setTotalPageCount(cardData.length);
    }
  }, [cardData]);

  const handlePaginationChange = (evt, page) => {
    setActivePage(Number(page));
    // paginationChange(page);
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

  return (
    <Grid>
      <Paper className={classes.root}>
        <Box
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          pt="20px"
        >
          <Select
            p="10px"
            name={'sort'}
            className={classes.sortMenu}
            data={[
              { value: 'new', label: 'Newest' },
              { value: 'old', label: 'Oldest' },
              { value: 'draft', label: 'Drafts' },
              { value: 'publish', label: 'Published' },
              { value: 'archive', label: 'Archived' },
            ]}
          />
        </Box>
        {cardData.map((data, index) => (
          <BlogCard data={data} key={`blog-card-id-${index}`} />
        ))}
      </Paper>

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
    </Grid>
  );
}
