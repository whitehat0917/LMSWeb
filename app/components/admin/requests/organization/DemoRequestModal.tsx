import { Button, Grid, Menu, MenuItem, Paper } from '@material-ui/core';
import * as React from 'react';
import styles from '../requests.module.scss';
import { lmsStyle } from 'styles/ui.variables';
import moment from 'moment';

export default function DemoRequestModal({ selectedRequest, onClose }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <Paper style={{ width: '100%' }}>
          <div className={styles.header}>
            <h1 className={styles.headerText}>Demo Request</h1>
            <div className={styles.close} onClick={onClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={9.558}
                height={9.557}
                viewBox="0 0 9.558 9.557"
              >
                <path
                  d="M9.381 8.532a.6.6 0 11-.848.848L4.779 5.619 1.025 9.38a.6.6 0 11-.848-.848l3.761-3.754L.177 1.023a.6.6 0 11.848-.848l3.754 3.761L8.533.175a.6.6 0 01.848.848L5.619 4.777z"
                  fill="#7d8793"
                />
              </svg>
            </div>
          </div>
          <form>
            <Grid container className={styles.modalContent} spacing={2}>
              <Grid item xs={6}>
                <label className={styles.lableText}>First Name</label>
                <p className={styles.textStyle}>{selectedRequest.firstName}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Last Name</label>
                <p className={styles.textStyle}>{selectedRequest.lastName}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Email Address</label>
                <p className={styles.textStyle}>{selectedRequest.email}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Contact Number</label>
                <p className={styles.textStyle}>{selectedRequest.phone}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Company Name</label>
                <p className={styles.textStyle}>
                  {selectedRequest.companyName}
                </p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Industry</label>
                <p className={styles.textStyle}>{selectedRequest.industry}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Company Size</label>
                <p className={styles.textStyle}>{selectedRequest.size}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Country</label>
                <p className={styles.textStyle}>{selectedRequest.country}</p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Request Submitted On</label>
                <p className={styles.textStyle}>
                  {selectedRequest?.createdAt
                    ? moment(selectedRequest.createdAt).format('DD/MM/YYYY')
                    : '-'}
                </p>
              </Grid>
              <Grid item xs={6}>
                <label className={styles.lableText}>Request Status</label>
                <p className={styles.textStyle}>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    className={styles.userButton}
                    onClick={handleClick}
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
                    <span className={styles.userButtonText}>Pending</span>
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem
                      value="under-consideration"
                      className={styles.userButtonText}
                      onClick={handleClose}
                    >
                      Pending
                    </MenuItem>
                    <MenuItem
                      value="coming-soon"
                      onClick={handleClose}
                      className={styles.userButtonText}
                    >
                      Scheduled
                    </MenuItem>
                    <MenuItem
                      value="released"
                      onClick={handleClose}
                      className={styles.userButtonText}
                    >
                      Signed up (Completed)
                    </MenuItem>
                    <MenuItem
                      value="released"
                      onClick={handleClose}
                      className={styles.userButtonText}
                    >
                      Not Signed up (Completed)
                    </MenuItem>
                  </Menu>
                </p>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
