import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import CheckIcon from '@module/learner-management/learning/course/common/checkIcon';

const useStyle = makeStyles(() => ({
  title: {
    fontSize: '11px',
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
  },
  explanation: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
  },
  explanationContainer: {
    width: '100%',
    padding: '20px 15px',
    borderRadius: '5px',
    backgroundColor: 'var(--base-gray-100)',
    marginLeft: '16px',
  },
}));

export default function explanation(props) {
  const classes = useStyle();

  return (
    <Box className={classes.explanationContainer} position="relative" mt={2}>
      <CheckIcon type="help" />
      <Typography className={classes.title}>
        {props.data.rightAnswer === props.data.answer
          ? 'Why were you correct?'
          : 'Why were you wrong?'}
      </Typography>
      <Box className={classes.explanation} mt={1.5}>
        {props.data.explanation}
      </Box>
    </Box>
  );
}
