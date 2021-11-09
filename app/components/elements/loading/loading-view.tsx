import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Loading from './loading';

const LoadingView = ({ autoHeight = true }) => {
  const classes = makeStyles(() =>
    createStyles({
      loadingContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        height: autoHeight ? '100vh' : 'auto',
        backgroundColor: 'white',
      },
    })
  )();
  return (
    <>
      <div className={classes.loadingContainer}>
        <Loading />
      </div>
    </>
  );
};

export default LoadingView;
