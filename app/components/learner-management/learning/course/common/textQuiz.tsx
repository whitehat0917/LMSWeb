import React from 'react';
import {
  Box,
  FormControl,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import CheckIcon from '@module/learner-management/learning/course/common/checkIcon';
import Explanation from '@module/learner-management/learning/course/common/explanation';

const useStyle = makeStyles(() => ({
  title: {
    fontSize: '12px',
    color: 'var(--color-primary-dark)',
    fontWeight: 'bold',
  },
  input: {
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
    border: '1px solid var(--base-gray-300)',
    width: '100%',
    '& > div > textarea': {
      fontSize: '11px',
      padding: '5px 15px',
    },
    '& > div:before': {
      display: 'none',
    },
  },
  answerContainer: {
    backgroundColor: 'white',
    border: '1px solid var(--base-gray-300)',
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
    padding: '15px',
    fontSize: '11px',
    color: 'var(--base-gray-500)',
  },
  explanation: {
    display: 'flex',
    alignItems: 'center',
    margin: '16px 0',
    fontSize: '11px',
    color: 'var(--base-gray-500)',
  },
}));

export default function textQuiz(props) {
  const classes = useStyle();

  return (
    <Box my={2}>
      <Typography className={classes.title}>
        {props.data.index + '. '}
        {props.data.title}
      </Typography>
      <Box pl={2} mt={1}>
        {props.type === 'question' && (
          <FormControl fullWidth>
            <TextField
              id={props.id}
              label=""
              className={classes.input}
              placeholder="Type your answer here..."
              fullWidth
              multiline
              rows={5}
              InputLabelProps={{ shrink: true }}
            />
          </FormControl>
        )}
        {props.type === 'answer' && (
          <Box>
            <Box className={classes.explanation}>
              Your Answer
              <CheckIcon
                type={props.data.result === true ? 'correctText' : 'wrongText'}
              />
            </Box>
            <Box className={classes.answerContainer}>{props.data.answer}</Box>
            {props.data.result === false && (
              <Box>
                <Box className={classes.explanation}>
                  Correct Answer
                  <CheckIcon type={'correctText'} />
                </Box>
                <Box className={classes.answerContainer}>
                  {props.data.correctAnswer}
                </Box>
              </Box>
            )}
          </Box>
        )}
      </Box>
      {props.type === 'answer' && <Explanation data={props.data} />}
    </Box>
  );
}
