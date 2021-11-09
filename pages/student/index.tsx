import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Home from '@module/learner-management/home';
import MainHome from '@module/learner-management/home/mainHome';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    inputRoot: {
      paddingRight: 0,
    },
    root: {
      flexGrow: 1,
      marginTop: '64px',
    },
    paper: {
      boxShadow: 'none',
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    linkPaper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      height: 97,
    },
    item: {
      height: 134,
    },
  }),
);

export default function Index() {
  const [skip, setSkip] = useState(false);
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        {skip ? <MainHome /> : <Home skipClicked={skip} setSkipped={setSkip} />}
      </div>
    </>
  );
}
