import React, { useState } from 'react';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import CheckIcon from '@module/learner-management/learning/course/common/checkIcon';
import Explanation from '@module/learner-management/learning/course/common/explanation';
import { quizIndex } from '../../../../../data/mock';

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
    paddingLeft: '16px',
    height: '35px',
    marginBottom: '12px',
  },
  indexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '60px',
    color: 'white',
    fontSize: '15px',
    fontWeight: 'bold',
    backgroundColor: 'var(--base-gray-500)',
    border: '1px solid var(--base-gray-500)',
    borderRadius: '4px 0 0 4px',
    height: '100%',
    '&.active': {
      backgroundColor: 'var(--color-primary-dark)',
      border: '1px solid var(--color-primary-dark)',
    },
  },
  contentContainer: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    width: 'calc(100% - 60px)',
    color: 'var(--base-gray-500)',
    fontSize: '11px',
    height: '100%',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '0 4px 4px 0',
    paddingLeft: '20px',
    '&.active': {
      color: 'var(--color-primary-dark)',
    },
  },
}));

export default function selectQuiz(props) {
  const classes = useStyle();
  const [value, setValue] = useState(
    props.type === 'question' ? -1 : props.data.answer
  );

  const handleChange = (index) => {
    if (props.type === 'question') setValue(index);
  };
  return (
    <Box my={2}>
      <Typography className={classes.title}>
        {props.data.index + '. '}
        {props.data.title}
      </Typography>
      <Box className={classes.questionContainer}>
        {props.data.content.map((item, index) => (
          <Grid
            item
            md={6}
            xs={12}
            key={index}
            className={`cursor ${classes.itemContainer}`}
            onClick={() => handleChange(index)}
          >
            <Box
              className={`${classes.indexContainer} ${
                index === value ? 'active' : ''
              }`}
            >
              {quizIndex.charAt(index)}
            </Box>
            <Box
              className={`${classes.contentContainer} ${
                index === value ? 'active' : ''
              }`}
            >
              {item}
              {index === value && props.type === 'answer' && (
                <CheckIcon
                  type={value === props.data.rightAnswer ? 'correct' : 'wrong'}
                />
              )}
            </Box>
          </Grid>
        ))}
        {props.type === 'answer' && <Explanation data={props.data} />}
      </Box>
    </Box>
  );
}
