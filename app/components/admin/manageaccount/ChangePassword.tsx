import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { Box, Button, Checkbox, FormLabel } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// import { CourseOverviewInputs } from '../formTypes';
import { useStyles } from './ui';

const UserManagement = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <TextInputOutline
            type="password"
            label="Enter your current password"
            fullWidth
            name="title"
          />
          <br />
          <br />
          <TextInputOutline
            type="password"
            label="Enter a new password"
            fullWidth
            name="title"
          />
          <br />
          <br />
          <TextInputOutline
            type="password"
            label="Enter a new password"
            fullWidth
            name="title"
            defaultValue="Success"
          />
        </Grid>

        <Grid item xs={12} md={4} style={{ marginTop: '90px' }}>
          <p style={{ color: '#16395B', fontSize: '10px' }}>
            <b>Password Construction Requirements</b>
          </p>
          <p style={{ fontSize: '10px', color: '#7D8793' }}>
            Be a minimum length of eight (8) characters on all systems.
            <br /> Not be a dictionary word or proper name.
            <br /> Not be the same as the User ID.
            <br /> Not be identical to the previous ten (10) passwords.
          </p>
        </Grid>
      </Grid>

      <div className={classes.checkbox}>
        <Checkbox
          className={classes.cbox}
          color="primary"
          name="termsAccepted"
          id="termsAccepted"
        />
        <br />
        <br />
        <br />

        <FormLabel htmlFor="termsAccepted" className={classes.para}>
          End and logout all active sessions
        </FormLabel>
      </div>

      <Box mt={2}>
        <Button
          variant="contained"
          type="submit"
          className={classes.coloredButton}
          style={{ whiteSpace: 'nowrap' }}
        >
          Change Password
        </Button>
      </Box>
      <br />
    </>
  );
};

export default UserManagement;
