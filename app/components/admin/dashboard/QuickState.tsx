import * as React from 'react';
import { statsMenu } from '@layout/admin/MenuOptions';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import styles from './dashboard.module.scss';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { CourseTrackerFactory } from '@lms-api/factory';
import { get } from 'lodash';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      boxShadow: 'none',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  })
);
export default function QuickState({ organizationId }) {
  const classes = useStyles();

  const dashboardQuery = useQuery(
    queryKeys.getDashboardInfoByOrgId(organizationId),
    () => CourseTrackerFactory.get(organizationId)
  );

  const dashboard = dashboardQuery.data;
  return (
    <Grid container spacing={3} style={{ marginTop: 20 }}>
      {statsMenu.map((item, index) => (
        <Grid item lg={4} xs={12} md={6} key={index}>
          <Paper className={classes.paper}>
            <div className={styles.statsContainer}>
              <div className={styles.statsDetail}>
                <p className={styles.statsTitle}>{item.title}</p>
                <p className={styles.statsValue}>
                  {get(dashboard, item.value, 0)}
                </p>
              </div>
              <div className={styles.statsIcon}>
                <img src={`/images/${item.iconSrc}`} />
              </div>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
