import React from 'react';
import { makeStyles, withStyles } from '@material-ui/styles';
import { Box, createStyles, LinearProgress, Theme } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor:
        theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  })
)(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    color: '#16395B',
  },
});

const ProgressBar = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt="15px"
        mb="6px"
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box fontSize="13px" fontWeight="600" mr="20px">
            Learner {data.pathName}
          </Box>
          <Box fontSize="12px" fontWeight="400">
            Contains
            <Box component="span" fontWeight="600">
              {' '}
              {data.courses} Course
            </Box>{' '}
            and
            <Box component="span" fontWeight="600">
              {' '}
              {data.assessments} Assessments
            </Box>
          </Box>
        </Box>
        <Box fontSize="12px" fontWeight="400">
          Due on {data.date}
          <Box
            component="span"
            fontSize="12px"
            fontWeight="600"
            color="#006DFF"
          >
            {' '}
            | {data.pros}% completed
          </Box>
        </Box>
      </Box>
      <BorderLinearProgress variant="determinate" value={data.pros} />
    </div>
  );
};

export default ProgressBar;
