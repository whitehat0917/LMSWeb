import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import CheckIcon from '@module/learner-management/learning/course/common/checkIcon';
import Explanation from '@module/learner-management/learning/course/common/explanation';

const useStyle = makeStyles(() => ({
  title: {
    fontSize: '12px',
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
  },
  questionContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '10px 0',
  },
  itemContainer: {
    display: 'flex',
    width: '50%',
    paddingLeft: '16px',
    height: '35px',
    marginBottom: '12px',
  },
  indexContainer: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    color: 'var(--color-primary-dark)',
    fontSize: '11px',
    backgroundColor: 'white',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '4px',
    height: '100%',
    paddingLeft: '20px',
    '&.active': {
      color: 'white',
      backgroundColor: 'var(--color-primary-dark)',
      border: '1px solid var(--color-primary-dark)',
    },
  },
}));

export default function selectQuiz(props) {
  const classes = useStyle();
  const [value, setValue] = useState(
    props.type === 'question' ? -1 : props.data.answer
  );

  const handleChange = (value) => {
    if (props.type === 'question') setValue(value);
  };
  return (
    <Box my={2}>
      <Typography className={classes.title}>
        {props.data.index + '. '}
        {props.data.title}
      </Typography>
      <Box className={classes.questionContainer}>
        <Box
          className={`cursor ${classes.itemContainer}`}
          onClick={() => handleChange(0)}
        >
          <Box
            className={`${classes.indexContainer} ${
              value === 0 ? 'active' : ''
            }`}
          >
            True
            {0 === value && props.type === 'answer' && (
              <CheckIcon
                type={value === props.data.rightAnswer ? 'correct' : 'wrong'}
              />
            )}
          </Box>
        </Box>
        <Box
          className={`cursor ${classes.itemContainer}`}
          onClick={() => handleChange(1)}
        >
          <Box
            className={`${classes.indexContainer} ${
              value === 1 ? 'active' : ''
            }`}
          >
            False
            {1 === value && props.type === 'answer' && (
              <CheckIcon
                type={value === props.data.rightAnswer ? 'correct' : 'wrong'}
              />
            )}
          </Box>
        </Box>
        {props.type === 'answer' && <Explanation data={props.data} />}
      </Box>
    </Box>
  );
}
