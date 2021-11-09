import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import Button from '@element/Button/Button';
import * as React from 'react';
import styles from './dashboard.module.scss';
import '../../../styles/ui.variables';
import { lmsStyle } from '../../../styles/ui.variables';
export default function WelcomeMsg({ setAppointment }) {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        boxShadow: 'none',
        padding: theme.spacing(5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        [theme.breakpoints.down('md')]: {
          paddingLeft: '10px',
          paddingRight: '10px',
        },
      },
      avatarContainer: {
        display: 'block',
        margin: 'auto',
        width: '118px',
        height: '118px',
        [theme.breakpoints.down('sm')]: {
          textAlign: 'left',
          marginLeft: 0,
        },
      },
      accountOptions: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          alignItems: 'flex-start',
        },
      },
      ignoreOption: {
        font: `normal normal 600 10px/12px Inter`,
        color: lmsStyle['base-gray-500'],
        border: 'none',
        opacity: 1,
        width: 'fit-content',
        background: 'none',
        alignSelf: 'center',
        [theme.breakpoints.down('sm')]: {
          alignSelf: 'flex-start',
        },
      },
    })
  );
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} m-b={15}>
          <Paper className={classes.paper}>
            <div className={`${styles.accountContainer}`}>
              <Grid container spacing={5}>
                <Grid item xs={12} sm={6} md={2} lg={2}>
                  <Paper
                    style={{ boxShadow: 'none' }}
                    className={classes.avatarContainer}
                  >
                    <img
                      src="/images/avatar-big.jpeg"
                      className={styles.avatar}
                    />
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={7}
                  lg={7}
                  className={styles.accountText}
                >
                  <h3 className={styles.greeting}>Hello, I’m Carol!</h3>
                  <div className={styles.message}>
                    <p className={styles.message}>
                      I’m your account manager at Learn or Teach and I’m here to
                      ensure you have the tools and support you need to achieve
                      your goals. Would you like a hand setting up your account
                      or do you have any questions? You can view my availability
                      and set up a call with me when you’re ready.
                    </p>
                  </div>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={2}
                  lg={3}
                  className={classes.accountOptions}
                >
                  <Button
                    onHandleClick={setAppointment}
                    style={{
                      backgroundColor: lmsStyle['base-secondary'],
                      marginBottom: 20,
                      color: 'white',
                      whiteSpace: 'nowrap',
                      padding: '8px 30px',
                    }}
                  >
                    Set-up Appointment
                  </Button>
                  {/* not sure if i should use the Button component coz it will require a lot of styles */}
                  <button className={classes.ignoreOption}>
                    Don’t show this again
                  </button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
