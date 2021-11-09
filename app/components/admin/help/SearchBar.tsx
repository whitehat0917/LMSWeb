import {
  createStyles,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  OutlinedInput,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';

const useStyle = makeStyles((theme) =>
  createStyles({
    searchBar: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(6),
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      width: '100%',
      background: lmsStyle['color-white'],
    },
    searchField: {
      outline: 'none',
      background: `${lmsStyle['color-white']} 0% 0% no-repeat padding-box`,
      border: `2px solid ${lmsStyle['base-gray-200']}`,
      borderRadius: '5px',
    },
  })
);

export default function SearchBar() {
  const classes = useStyle();
  return (
    <Grid className={classes.searchBar}>
      <FormControl fullWidth variant="outlined">
        <OutlinedInput
          className={classes.searchField}
          placeholder="Ask or search a question"
          startAdornment={
            <InputAdornment position="start">
              <IconButton aria-label="search">
                <SearchIcon color="primary" />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  );
}
