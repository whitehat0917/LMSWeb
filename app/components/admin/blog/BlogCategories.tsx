import { layoutContext } from '@layout/admin/Layout';
import { Button, Grid, Modal, Paper, Typography } from '@material-ui/core';
import Link from 'next/link';
import * as React from 'react';
import { useStyles } from './ui';
import styles from './blogs.module.scss';
import AddIcon from '@material-ui/icons/Add';
import BlogCategoriesTable from './BlogCategoriesTable';
import EditCategoryModal from '@module/course-management/course-categories/EditCategoryModal';

export default function BlogCategories({ organizationId }) {
  const classes = useStyles();
  const [selectedCategory, setselectedCategory] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const handleModalClose = () => {
    setOpen(false);
  };
  const [searchValue, setSearchValue] = React.useState('');
  const handleSearch = (val) => {
    setSearchValue(val);
  };
  const {
    setHeader,
    setIsVisibleFreeTrial,
    setHeaderContent,
  } = React.useContext(layoutContext);
  React.useEffect(() => {
    setHeader('Blog Categories');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <Link href={`/admin/blog`} passHref>
        <Typography className={classes.backLink}>Go Back To Blogs</Typography>
      </Link>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, []);
  return (
    <Grid>
      <Paper className={classes.root}>
        <Grid container className={styles.userPanel}>
          <Grid item xs={12} md={5} lg={3}>
            <Button
              className={classes.inviteNewUser}
              onClick={() => setOpen(true)}
            >
              <span className={styles.plusSign}>
                <AddIcon />
              </span>
              <span>Create New Category</span>
            </Button>
          </Grid>
          <Modal open={open} onClick={handleModalClose}>
            <div className={classes.editModal}>
              <EditCategoryModal
                onClose={handleModalClose}
                selectedCategory={selectedCategory}
                organizationId={10}
              />
            </div>
          </Modal>
          <Grid item xs={12} md={7} lg={9} className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10.993}
                height={11}
                viewBox="0 0 10.993 11"
              >
                <path
                  d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                  fill="var(--base-primary)"
                />
              </svg>
            </div>
            <input
              onChange={(e) => handleSearch(e.target.value)}
              className={styles.searchUser}
              placeholder={`Search categories`}
            ></input>
          </Grid>
        </Grid>
        <BlogCategoriesTable
          setselectedCategory={setselectedCategory}
          selectedCategory={selectedCategory}
          organizationId={organizationId}
          searchValue={searchValue}
        />
      </Paper>
    </Grid>
  );
}
