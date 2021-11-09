import { Button, Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import { layoutContext } from '@layout/admin/Layout';
import styles from '../feedback.module.scss';
import { useStyles } from '../ui';
import FeedbackOrganizationTable from './FeedbackOrganizationTable';
import Link from 'next/link';

export default function FeedbackOrganization() {
  const classes = useStyles();
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
    setHeader('Feedback');
    setIsVisibleFreeTrial(false);
    setHeaderContent(
      <Link href="" passHref>
        <Button className={classes.archivedButton}>Archived Requests</Button>
      </Link>
    );
    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
      setHeaderContent(null);
    };
  }, []);
  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <Grid className={styles.userPanel}>
          <Grid className={classes.searchBar}>
            <div className={classes.searchIcon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={10.993}
                height={11}
                viewBox="0 0 10.993 11"
              >
                <path
                  d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                  fill="#006dff"
                />
              </svg>
            </div>
            <input
              className={styles.searchUser}
              placeholder={`Search for Subscribers`}
              onChange={(e) => handleSearch(e.target.value)}
            ></input>
          </Grid>
        </Grid>
      </Paper>
      <FeedbackOrganizationTable search={searchValue} />
    </Grid>
  );
}
