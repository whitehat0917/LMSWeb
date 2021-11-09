import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import styles from './dashboard.module.scss';
import { quickLinks } from '@layout/admin/MenuOptions';
import { makeStyles, Theme, createStyles, Link } from '@material-ui/core';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    linkPaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    linkContent: {
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'space-around',
      },
    },
  })
);

export default function QuickLinks() {
  const classes = useStyle();
  return (
    <>
      <div className={styles.statsHeader}>
        <h2 className={styles.statsHeading}>Quick Links</h2>
      </div>
      <div className={styles.root}>
        <Grid container spacing={1} className={classes.linkContent}>
          {quickLinks.map((item, index) => (
            <Grid item key={index}>
              <Link href={item.link} style={{ textDecoration: 'none' }}>
                <a>
                  <Paper
                    elevation={0}
                    className={`${classes.linkPaper} ${styles.linksContainer}`}
                  >
                    <div className={styles.linkIcon}>
                      <img src={`/images/${item.iconSrc}`} />
                    </div>
                    <div className={styles.linkTitle}>
                      <p>{item.title}</p>
                    </div>
                  </Paper>
                </a>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}
