import React from 'react';
import {
  Box,
  Button,
  FormControl,
  makeStyles,
  TextField,
} from '@material-ui/core';

const useStyle = makeStyles(() => ({
  input: {
    borderRadius: '4px',
    boxShadow: '0px 3px 3px #00000007',
    border: '1px solid var(--base-gray-300)',
    width: '100%',
    '& > div > textarea': {
      fontSize: '10px',
      padding: '5px 15px',
    },
    '& > div:before': {
      display: 'none',
    },
  },
  button: {
    backgroundColor: 'var(--color-primary-dark)',
    fontSize: '10px',
    position: 'absolute',
    top: 'calc(50% - 14px)',
    right: '20px',
  },
}));

export default function TextAreaButton(props) {
  const classes = useStyle();

  return (
    <Box
      position="relative"
      style={{ backgroundColor: 'white', width: '100%' }}
    >
      <FormControl fullWidth>
        <TextField
          id={props.id}
          label=""
          className={classes.input}
          value={props.value}
          onChange={props.handleChange(props.name)}
          placeholder={props.placeholder}
          fullWidth
          multiline
          rows={props.rows}
          InputLabelProps={{ shrink: true }}
        />
      </FormControl>
      <Button variant="contained" color="primary" className={classes.button}>
        {props.buttonValue}
      </Button>
    </Box>
  );
}
