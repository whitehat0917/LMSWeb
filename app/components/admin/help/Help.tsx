import { Button, Grid } from '@material-ui/core';
// import React, { useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { courseFormDataState } from 'store/course';
// import { CourseOverviewInputs } from './formTypes';
import styles from './help.module.scss';
import { useStyles } from './ui';

const Help = () => {
  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.searchBar}>
        <div className={classes.searchIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={10.993}
            height={11}
            viewBox="0 0 10.993 11"
          >
            <path
              d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
              fill="var(--base-primary)"
            />
          </svg>
        </div>
        <input
          className={styles.searchUser}
          placeholder={`Ask or search a question`}
        ></input>
      </Grid>
      <Grid style={{ display: 'flex', marginTop: '8px' }}>
        <Grid>
          <p className={classes.pQ}>
            Or choose a category to quickly find the help you need
          </p>
        </Grid>
        <Grid style={{ margin: 'auto', marginRight: '0' }}>
          <Button className={classes.editbtn} href="/contact">
            Contact us
          </Button>
        </Grid>
      </Grid>

      <Grid item xs={12} md={12} style={{ display: 'flex', marginTop: '25px' }}>
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>
            <img src="/images/np_flag.svg" />
          </p>

          <h1 className={styles.h1}>
            Getting Started
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              Implementing Learn or Teach
            </p>
          </h1>
          <div className={classes.btn}>
            <p className={styles.para}>3 articles under this topic</p>
            <Button className={classes.coloredButton1}>
              {' '}
              View All&nbsp;&nbsp;
              <img src="/images/np_arrow-right.svg" />
            </Button>
          </div>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={12} md={12}>
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>
            <img src="/images/np_technical-service_1617871_000000.svg" />
          </p>

          <h1 className={styles.h1}>
            Technical Setup
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              Troubleshooting tips and tricks
            </p>
          </h1>
          <div className={classes.btn}>
            <p className={styles.para}>3 articles under this topic</p>
            <Button className={classes.coloredButton1}>
              {' '}
              View All&nbsp;&nbsp;
              <img src="/images/np_arrow-right.svg" />
            </Button>
          </div>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={12} md={12}>
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>
            <img src="/images/np_account_2680684_000000.svg" />
          </p>

          <h1 className={styles.h1}>
            My Account
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              How to navigate, plan, assign and better develop lesson so your
              learners can do better work!
            </p>
          </h1>
          <div className={classes.btn}>
            <p className={styles.para}>3 articles under this topic</p>
            <Button className={classes.coloredButton1}>
              {' '}
              View All&nbsp;&nbsp;
              <img src="/images/np_arrow-right.svg" />
            </Button>
          </div>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={12} md={12}>
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>
            <img src="/images/np_course_3266002_000000.svg" />
          </p>

          <h1 className={styles.h1}>
            Course Builder
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              Implementing Learn or Teach
            </p>
          </h1>
          <div className={classes.btn}>
            <p className={styles.para}>3 articles under this topic</p>
            <Button className={classes.coloredButton1}>
              {' '}
              View All&nbsp;&nbsp;
              <img src="/images/np_arrow-right.svg" />
            </Button>
          </div>
        </Grid>
      </Grid>
      <br />
      <Grid item xs={12} md={12}>
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>
            <img src="/images/np_calendar_3844793_000000.svg" />
          </p>

          <h1 className={styles.h1}>
            Events
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              Building out lessons to help your team do better work
            </p>
          </h1>
          <div className={classes.btn}>
            <p className={styles.para}>3 articles under this topic</p>
            <Button className={classes.coloredButton1}>
              {' '}
              View All&nbsp;&nbsp;
              <img src="/images/np_arrow-right.svg" />
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Help;
