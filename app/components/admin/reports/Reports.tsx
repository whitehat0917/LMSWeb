import { layoutContext } from '@layout/admin/Layout';
import { Grid, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from './createlearning.module.scss';
import UserTypeTabs from './UserTypeTabs';

export default function Reports() {
  const { setIsVisibleFreeTrial, setHeader } = React.useContext(layoutContext);

  React.useEffect(() => {
    setHeader('Reports');
    setIsVisibleFreeTrial(false);

    return () => {
      setHeader(null);
      setIsVisibleFreeTrial(true);
    };
  }, []);

  return (
    <Grid container>
      <Paper className={styles.content} elevation={0}>
        <UserTypeTabs />
      </Paper>
    </Grid>
  );
}
