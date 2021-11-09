import * as React from 'react';
import { createStyles, Grid, makeStyles, Paper } from '@material-ui/core';
import Button from '@element/Button/Button';
import styles from './Landing.module.scss';

import { lmsStyle } from '../../../styles/ui.variables';

const useStyles = makeStyles(() =>
  createStyles({
    welcomeMsg: {
      alignItems: 'center',
    },
    skipButton: {
      boxShadow: 'none',
      textAlign: 'center',
      backgroundColor: `${lmsStyle['base-gray-100']}`,
    },
  })
);
export default function WelcomeMessage({ skipIntro }) {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={12} md={10} item>
          <Grid container className={classes.welcomeMsg}>
            <Grid item xs={12} sm={12} md={8} lg={8}>
              <Paper
                style={{
                  boxShadow: 'none',
                  backgroundColor: `${lmsStyle['base-gray-100']}`,
                }}
              >
                <div className={styles.accountText}>
                  <h3 className={styles.greeting}>Welcome to Learn or Teach</h3>
                  <div>
                    <p className={styles.message}>
                      Here’s an overview of what you can do within Learn or
                      Teach. Once you’re done exploring, simply skip this
                      introduction to get to your admin dashboard.
                    </p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={4}>
              <Paper className={classes.skipButton}>
                <Button
                  onHandleClick={skipIntro}
                  style={{
                    boxShadow: 'none',
                    border: 'none',
                  }}
                >
                  Skip Introduction
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
