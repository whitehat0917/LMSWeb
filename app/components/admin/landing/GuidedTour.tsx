import * as React from 'react';
import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
} from '@material-ui/core';
import { lmsStyle } from '../../../styles/ui.variables';
import Button from '@element/Button/Button';
import styles from './Landing.module.scss';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    linkPaper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      textAlign: 'center',
      boxShadow: '0px 3px 6px #00000005',
    },
  })
);

const tutorialContent = [
  {
    id: '1',
    tutImage: '/images/tut_question.svg',
    tutQuestion: 'Where to find things',
    tutText: 'Take a tour of what we have available on Learn or Teach.',
    tutButton: 'Take a tour',
  },
  {
    id: '2',
    tutImage: '/images/tut_friend.svg',
    tutQuestion: 'Invite learners',
    tutText: 'Get started by inviting your learners to Learn or Teach.',
    tutButton: 'Take a tour',
  },
  {
    id: '3',
    tutImage: '/images/tut_book.svg',
    tutQuestion: 'Create your own courses and resources',
    tutText: 'Create your own resources or import your courses.',
    tutButton: 'Take a tour',
  },
];
export default function GuidedTour({ takeTour }) {
  const classes = useStyles();
  return (
    <div className={styles.root}>
      <h2 className={styles.tutorialHeading}>Guided Tours</h2>
      {tutorialContent.map((tutorialContent, index) => (
        <Grid
          item
          xs={10}
          sm={12}
          md={9}
          lg={8}
          key={`guided-tour-id-${index}`}
        >
          <Paper className={classes.linkPaper} style={{ marginTop: 20 }}>
            <Grid container spacing={3}>
              <div className={styles.tutorialContainer}>
                <Grid item xs={12} sm={12} md={10} lg={9}>
                  <Grid container className={styles.tutorialContent}>
                    <Grid item xs={12} sm={12} md={2} lg={2}>
                      <Paper
                        className={classes.linkPaper}
                        style={{
                          boxShadow: 'none',
                          display: 'flex',
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}
                      >
                        <img src={tutorialContent.tutImage} />
                      </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={10}>
                      <Paper
                        className={classes.linkPaper}
                        style={{ boxShadow: 'none' }}
                      >
                        <div>
                          <h3 className={styles.tutQuestion}>
                            {tutorialContent.tutQuestion}
                          </h3>
                          <p className={styles.tutText}>
                            {tutorialContent.tutText}
                          </p>
                        </div>
                      </Paper>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={2} lg={3}>
                  <Paper
                    className={classes.linkPaper}
                    style={{ boxShadow: 'none' }}
                  >
                    <Button
                      onHandleClick={takeTour}
                      style={{
                        width: 132,
                        height: 36,
                        backgroundColor: lmsStyle['base-secondary'],
                        border: 'none',
                      }}
                    >
                      {tutorialContent.tutButton}
                    </Button>
                  </Paper>
                </Grid>
              </div>
            </Grid>
          </Paper>
        </Grid>
      ))}
    </div>
  );
}
