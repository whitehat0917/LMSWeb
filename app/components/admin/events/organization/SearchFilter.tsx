import * as React from 'react';
import { createStyles, Grid, makeStyles } from '@material-ui/core';
import styles from '../events.module.scss';

const useStyles = makeStyles((theme) =>
  createStyles({
    searchBar: {
      position: 'relative',
      marginInline: '10px',
      width: '100%',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

export default function SearchFilter(props) {
  const classes = useStyles();
  return (
    <>
      <Grid className={styles.userPanel}>
        <Grid className={classes.searchBar}>
          <div className={classes.searchIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10.993}
              height={11}
              viewBox="0 0 10.993 11"
            >
              <path
                d="M10.81 9.96L8.838 7.999A4.954 4.954 0 104.946 9.89a4.886 4.886 0 003.041-1.054l1.96 1.987a.592.592 0 00.432.176.65.65 0 00.432-.176.6.6 0 000-.865zM8.675 4.946A3.738 3.738 0 117.58 2.311a3.7 3.7 0 011.095 2.635z"
                fill="#006dff"
              />
            </svg>
          </div>
          <input
            className={styles.searchUser}
            placeholder={`Search for Subscribers`}
            onChange={(e) => props.handleSearch(e.target.value)}
          ></input>
        </Grid>
      </Grid>
    </>
  );
}
