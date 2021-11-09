import { organizatoinStateMenu } from '@layout/admin/MenuOptions';
import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import { useState } from 'react';
import { lmsStyle } from 'styles/ui.variables';
import QuickStateChart from '../QuickStateChart';
import { useQuery } from 'react-query';
import queryKeys from '@lms-api/queryKeys';
import { CourseTrackerFactory } from '@lms-api/factory';
import { get } from 'lodash';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      margin: 'auto',
    },
    paper: {
      boxShadow: 'none',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      width: '200px',
      height: '134px',
      alignItems: 'center',
      margin: 'auto',
      [theme.breakpoints.down('xs')]: {
        width: '150px',
      },
    },

    statsTitle: {
      margin: '10px',
      font: `normal normal normal 13px/16px ${lmsStyle['base-font']}`,
      color: lmsStyle['base-secondary'],
    },
    statsValue: {
      paddingTop: '10px',
      font: `normal normal 600 40px/49px ${lmsStyle['base-font']}`,
      letterSpacing: '-2px',
      color: lmsStyle['base-secondary'],
    },
  })
);
export default function DashboardOrganization() {
  const classes = useStyles();
  const [filterValue, setFilterValue] = useState(25);

  const dashboardQuery = useQuery(queryKeys.getDashboardInfo(), () =>
    CourseTrackerFactory.getAll()
  );
  const dashboard = dashboardQuery.data;

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        style={{ marginTop: 20 }}
        className={classes.root}
      >
        {organizatoinStateMenu.map((item, index) => (
          <Grid item key={index} sm={6} xs={6} md={4} lg="auto">
            <Paper className={classes.paper}>
              <Box
                display="flex"
                textAlign="center"
                justifyContent="center"
                alignItems="center"
                height="100%"
              >
                <div>
                  <p className={classes.statsTitle}>{item.title}</p>
                  <p className={classes.statsValue}>
                    {get(dashboard, item.value, 0)}
                  </p>
                </div>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <QuickStateChart
        filterValue={filterValue}
        handleFilterChange={handleFilterChange}
      />
    </>
  );
}
