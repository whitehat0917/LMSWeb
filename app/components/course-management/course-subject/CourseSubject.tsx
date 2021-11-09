import { createStyles, Grid, makeStyles, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from '../coursemanagement.module.scss';
import { layoutContext } from '@layout/admin/Layout';
import Link from 'next/link';
import { lmsStyle } from 'styles/ui.variables';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { SubjectFactory } from '@lms-api/factory';
import MenuFilter from './MenuFilter';
import SubjectTable from './SubjectTable';

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

export default function CourseSubject({ organizationId }) {
  const classes = useStyles();
  const [selectedSubject, setSelectedSubject] = React.useState(null);
  const {
    setIsVisibleFreeTrial,
    setHeader,
    setHeaderContent,
  } = React.useContext(layoutContext);

  React.useEffect(() => {
    setHeader('Subjects');
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

  const subjectQuery = useQuery(
    queryKeys.getSubjectsByCategoryId(organizationId),
    () => SubjectFactory.getAll(organizationId)
  );

  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <MenuFilter
          selectedSubject={selectedSubject}
          organizationId={organizationId}
          setSelectedSubject={setSelectedSubject}
        />
      </Paper>
      <SubjectTable
        organizationId={organizationId}
        subjectQuery={subjectQuery}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
      />
    </Grid>
  );
}
