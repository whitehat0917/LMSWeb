import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import HelpIcon from '@material-ui/icons/Help';

const useStyle = makeStyles(() => ({
  correctContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '19px',
    height: '19px',
    borderRadius: '50%',
    marginLeft: '10px',
    backgroundColor: '#29AC79',
    '& > svg': {
      color: 'white',
      width: '70%',
    },
  },
  wrongContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '19px',
    height: '19px',
    borderRadius: '50%',
    backgroundColor: '#AC5F5F',
    marginLeft: '10px',
    '& > svg': {
      color: 'white',
      width: '70%',
    },
  },
  questionContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22px',
    height: '22px',
    top: '20px',
    borderRadius: '50%',
    backgroundColor: 'transparent',
    '& > svg': {
      color: 'var(--color-primary-dark)',
      width: '100%',
    },
  },
}));

export default function checkIcon(props) {
  const classes = useStyle();

  return (
    <Box
      className={
        props.type === 'correct' ||
        props.type === 'correctMatch' ||
        props.type === 'correctText'
          ? classes.correctContainer
          : props.type === 'wrong' ||
            props.type === 'wrongMatch' ||
            props.type === 'wrongText'
          ? classes.wrongContainer
          : classes.questionContainer
      }
      style={{
        right:
          props.type === 'correctMatch' || props.type === 'wrongMatch'
            ? '30px'
            : '20px',
        position:
          props.type === 'correctText' || props.type === 'wrongText'
            ? 'static'
            : 'absolute',
      }}
    >
      {(props.type === 'correct' ||
        props.type === 'correctMatch' ||
        props.type === 'correctText') && <CheckIcon />}
      {(props.type === 'wrong' ||
        props.type === 'wrongMatch' ||
        props.type === 'wrongText') && <CloseIcon />}
      {props.type === 'help' && <HelpIcon />}
    </Box>
  );
}
