import React from 'react';
import { Box, Link, makeStyles } from '@material-ui/core';
import TextAreaButton from '@element/TextAreaButton/textareaButton';
import { CourseInfo } from '../../../../../data/mock';

const useStyle = makeStyles(() => ({
  answerContainer: {
    backgroundColor: 'white',
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
    border: '1px solid var(--base-gray-300)',
    padding: '16px',
  },
  smallText: {
    fontSize: '10px',
    color: 'var(--base-gray-500)',
  },
}));

export default function tabQuestion(props) {
  const classes = useStyle();

  return (
    <>
      <TextAreaButton
        id="lesson"
        name="lesson"
        placeholder="Type your lesson notes here..."
        rows={3}
        buttonValue="Save"
        value={props.values.lesson}
        handleChange={props.handleTextareaChange}
      />
      <Box className={classes.answerContainer} mt={3}>
        <Box display="flex" justifyContent="space-between">
          <Box color="var(--color-primary-dark)">
            <Box fontSize="12px" fontWeight="bold">
              Introduction
            </Box>
            <Box fontSize="10px">
              What is the Americans with Disabilities Act?
            </Box>
          </Box>
          <Box color="var(--base-primary)">
            <Link component="button" className="linkBtn">
              Edit
            </Link>
            <img src="/images/edit.svg" alt="share" className="linkImg" /> |{' '}
            <Link component="button" className="linkBtn">
              Delete
            </Link>
            <img src="/images/delete.svg" alt="more" className="linkImg" />
          </Box>
        </Box>
        <Box className={classes.smallText} mt={1}>
          {CourseInfo.introduction}
        </Box>
      </Box>
    </>
  );
}
