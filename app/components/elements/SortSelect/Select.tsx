import React from 'react';
import Select from '@element/Select/Select';
import { Box, makeStyles, Typography } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  root: {
    maxWidth: '170px',
  },
  selectLabel: {
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'var(--color-primary-dark)',
    whiteSpace: 'nowrap',
    marginRight: '15px',
  },
  selectDuration: {
    marginTop: '2px !important',
    fontSize: '10px',
    fontWeight: 'bold',
    color: 'var(--color-primary-dark)',
    '&>svg': {
      display: 'none',
    },
  },
}));

export default function SortSelect(props) {
  const classes = useStyle();

  return (
    <Box
      display={'flex'}
      className={classes.root + ' sort-select'}
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      {props.label ? (
        <Typography className={classes.selectLabel}>{props.label}</Typography>
      ) : (
        ''
      )}
      <Select
        native
        name={props.name}
        variant="outlined"
        className={classes.selectDuration}
      >
        {props.data.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </Select>
    </Box>
  );
}
