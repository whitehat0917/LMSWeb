import React, { useState } from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import { quizIndex } from '../../../../../data/mock';
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
    flexDirection: 'column',
    width: '50%',
    paddingLeft: '16px',
    marginBottom: '12px',
  },
  indexContainer: {
    display: 'flex',
    paddingLeft: '20px',
    alignItems: 'center',
    color: 'var(--color-primary-dark)',
    height: '35px',
    fontSize: '15px',
    fontWeight: 'bold',
    backgroundColor: 'var(--base-gray-100)',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '4px 4px 0 0',
    position: 'relative',
    '&.active': {
      backgroundColor: 'var(--color-primary-dark)',
      border: '1px solid var(--color-primary-dark)',
      color: 'white',
    },
  },
  contentContainer: {
    display: 'flex',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '0 0 4px 4px',
    paddingTop: '50%',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    '&.active': {
      color: 'var(--color-primary-dark)',
    },
  },
}));

export default function selectImageQuiz(props) {
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
          <Box
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
              {index === value && props.type === 'answer' && (
                <CheckIcon
                  type={value === props.data.rightAnswer ? 'correct' : 'wrong'}
                />
              )}
            </Box>
            <Box
              className={`${classes.contentContainer} ${
                index === value ? 'active' : ''
              }`}
              style={{ backgroundImage: `url(${item})` }}
            ></Box>
          </Box>
        ))}
        {props.type === 'answer' && <Explanation data={props.data} />}
      </Box>
    </Box>
  );
}
