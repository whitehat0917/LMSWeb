import {
  Button,
  createStyles,
  makeStyles,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import * as React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import styles from './usermanagement.module.scss';

export default function UserMenu({
  selected = 'Users',
}: {
  selected?: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const router = useRouter();
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={styles.userButton}
        endIcon={
          <svg
            width="10px"
            xmlns="http://www.w3.org/2000/svg"
            className="prefix__h-6 prefix__w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke={`${lmsStyle['base-primary']}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        }
      >
        <span className={styles.userButtonText}>{selected}</span>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => router.push('/admin/users')}
          className={styles.userButtonText}
        >
          Users
        </MenuItem>
        <MenuItem
          onClick={() => router.push('/admin/users/team')}
          className={styles.userButtonText}
        >
          User Teams
        </MenuItem>
      </Menu>
    </div>
  );
}
