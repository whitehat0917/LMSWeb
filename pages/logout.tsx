import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from '../app/styles/common.module.scss';
import Button from '@element/Button/Button';
import { lmsStyle } from 'styles/ui.variables';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      paddingRight: 0,
    },
    root: {
      flexGrow: 1,
      overflow: 'hidden',
    },
    paper: {
      boxShadow: 'none',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    linkPaper: {
      padding: '100px',
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 97,
      margin: '0 auto',
    },
    item: {
      height: 134,
    },
    body: {
      paddingLeft: '200px',
      paddingRight: '200px',
      height: 'auto',
      margin: '0 auto',
    },
    nav: {
      display: 'inline',
    },
    avatarContainer: {
      padding: '20px',
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: '100%',
      backgroundColor: '#000',
    },
    avatar: {
      width: '100%',
      alignSelf: 'center',
    },
    logo: {
      background: `url('/images/logo-transp.png')`,
      width: '88.8px',
      height: '28.08px',
    },
  })
);

export default function Logout() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} m-b={15}>
            <Paper className={classes.paper}>
              <div className={styles.accountContainer}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={2} lg={2}>
                    <Paper style={{ boxShadow: 'none' }}>
                      <div className={classes.avatarContainer}>
                        <img
                          src="/images/logo.svg"
                          className={classes.avatar}
                          onClick={() => {
                            window.location.href = '/';
                          }}
                        />
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={12} md={7} lg={7}>
                    <Paper style={{ boxShadow: 'none' }}></Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Paper style={{ boxShadow: 'none' }}>
                      <div className={styles.accountOptions}>
                        <Button
                          onHandleClick={() => router.push('/login')}
                          style={{
                            backgroundColor: lmsStyle['base-secondary'],
                            marginBottom: 20,
                          }}
                        >
                          Secure Login In
                        </Button>
                      </div>
                    </Paper>
                  </Grid>
                </Grid>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.body}>
        <div className={classes.root}>
          <div className={classes.nav}>
            <div className={styles.accountText}>
              <h2 className={styles.greeting}>Log out</h2>
              <div className={styles.message}>
                <p className={styles.message}>
                  You have successfully sign out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
