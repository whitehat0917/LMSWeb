import React from 'react';
import { fade, InputBase, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyle = makeStyles((theme) => ({
  search: {
    position: 'relative',
    color: '#7D8793',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade('#F3F4F5', 0.9),
    '&:hover': {
      backgroundColor: '#ecedf4',
    },
    width: '100%',
  },
  searchIcon: {
    width: '8px',
    height: '8px',
    left: '20px',
    top: '40%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#006DFF',
  },
  inputRoot: {
    color: '#7D8793',
    fontSize: '12px',
    height: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function SearchInput(props) {
  const classes = useStyle();

  return (
    <div className={classes.search} style={{ backgroundColor: props.color }}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder="Search"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
