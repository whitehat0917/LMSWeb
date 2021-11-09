import { Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import styles from './User.module.scss';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

export function CustomizedInputBase() {
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    setSearch(e.target.value);
    // create mechanism to send a value to api
  };

  return (
    <Paper component="form" className={styles.search}>
      <IconButton
        type="submit"
        className={styles.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <InputBase
        className={styles.input}
        placeholder="Filter users by name or email"
        inputProps={{ 'aria-label': 'filter users by name or email' }}
        value={search}
        onChange={handleSearch}
      />
    </Paper>
  );
}

const UserHeader = () => {
  return (
    <div className={styles.header}>
      <Button className={styles.add} variant="contained" color="primary">
        <AddIcon />
        &nbsp;&nbsp;Invite New Users
      </Button>
      <CustomizedInputBase />
    </div>
  );
};

export default UserHeader;
