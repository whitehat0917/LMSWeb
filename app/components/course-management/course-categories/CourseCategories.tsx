import { createStyles, Grid, makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from '../coursemanagement.module.scss';
import { layoutContext } from '@layout/admin/Layout';
import SearchFilter from './SearchFilter';
import CourseCategoriesTable from './CourseCategoriesTable';
import Link from 'next/link';
import { lmsStyle } from 'styles/ui.variables';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { CategoryFactory } from '@lms-api/factory';
import { useRecoilState } from 'recoil';
import { courseCategoryState } from 'store/course';

const useStyles = makeStyles(() =>
  createStyles({
    backLink: {
      cursor: 'pointer',
      textDecoration: 'underline',
      color: lmsStyle['base-secondary'],
      font: `normal normal bold 10px / 15px ${lmsStyle['base-font']}`,
    },
  })
);

export default function CourseCategories({ organizationId }) {
  const classes = useStyles();

  //courseCategoryState
  const [selectedCategory, setselectedCategory] = useRecoilState(courseCategoryState);
  // const [selectedCategory, setselectedCategory] = React.useState(null);

  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);
  const [searchValue, setSearchValue] = React.useState('');
  const handleSearch = (val) => {
    setSearchValue(val);
  };

  React.useEffect(() => {
    setHeader('Course Categories');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <Link href={`/admin/courses`} passHref>
        <div className={classes.backLink}>Go Back To Manage Courses</div>
      </Link>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, []);

  const categoryQuery = useQuery(
    queryKeys.getCategoriesByOrgId(organizationId),
    () => CategoryFactory.getAll(organizationId)
  );

  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <SearchFilter
          handleSearch={handleSearch}
          selectedCategory={selectedCategory}
          setselectedCategory={setselectedCategory}
          organizationId={organizationId}
        />
      </Paper>
      <CourseCategoriesTable
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        search={searchValue}
        categoryQuery={categoryQuery}
        organizationId={organizationId}
      />
    </Grid>
  );
}
