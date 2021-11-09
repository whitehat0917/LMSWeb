import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@element/Button/Button';
import Link from 'next/link';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import { AccountStatus } from '@lms-api/models/user-info.model';
import { lmsStyle } from 'styles/ui.variables';

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

const indexView = ({ authnInfo, styles }) => {
  const classes = useStyles();
  const router = useRouter();

  if (authnInfo.isAuthenticate && authnInfo.userInfo) {
    switch (authnInfo.userInfo.type) {
      case AccountStatus.ADMINISTRATOR:
      case AccountStatus.OWNER:
        router.push(GlobalUrls.ADMIN);
        break;
      case AccountStatus.STUDENT:
        router.push(GlobalUrls.STUDENT);
        break;
      default:
        router.push(GlobalUrls.INDEX);
        break;
    }
  }

  const setAppointment = () => {
    window.location.href = GlobalUrls.SIGNIN;
  };

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
                    <Paper style={{ boxShadow: 'none' }}>
                      <div className={styles.accountText}>
                        <h3 className={styles.greeting}>Hello, Welcome LMS!</h3>
                        <div className={styles.message}>
                          <p className={styles.message}>
                            Welcome at Learn or Teach and I’m here to ensure you
                            have the tools and support you need to achieve your
                            goals. Would you like a hand setting up your account
                            or do you have any questions? You can view my
                            availability and set up a call with me when you’re
                            ready.
                          </p>
                        </div>
                      </div>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6} md={3} lg={3}>
                    <Paper style={{ boxShadow: 'none' }}>
                      <div className="d-block">
                        <Button
                          onHandleClick={setAppointment}
                          style={{
                            backgroundColor: lmsStyle['base-secondary'],
                            marginBottom: 20,
                          }}
                        >
                          Secure Login In
                        </Button>
                        <div className={styles.ignoreOption}>
                          <Link href="/logout" passHref>
                            sign out
                          </Link>
                        </div>
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
        <div className={styles.statsHeader}>
          <h2 className={styles.statsHeading}>Quick Stats</h2>
        </div>
        <div className={classes.root}>
          <div className={classes.nav}>
            <h1>
              <Link href="/admin/" passHref>
                Administration Portal
              </Link>
            </h1>
            <h1>
              <Link href="/student/" passHref>
                Learner Portal
              </Link>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default indexView;
