import React from 'react';
import styles from './signup.module.scss';
import { IconButton } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const HeaderLayout = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}></div>
      <div>
        <IconButton
          edge="end"
          aria-label="account of current user"
          aria-controls="avatar"
          aria-haspopup="true"
          onClick={() => {}}
          color="inherit"
        >
          <AccountCircle className={styles.header__avator} />
        </IconButton>
      </div>
    </header>
  );
};

export default HeaderLayout;
