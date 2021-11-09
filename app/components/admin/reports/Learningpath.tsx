import Select from '@element/Select/Select';
import { Box, Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { lmsStyle } from 'styles/ui.variables';
import styles from './createlearning.module.scss';
import { useStyles } from './ui';
const Learningpath = () => {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5} lg={7}>
          <Select
            native
            name="categoryId"
            IconComponent={ExpandMoreIcon}
            placeholder="Select a Report"
            variant="outlined"
            className={classes.formControl}
          >
            <option value="">Select a Report</option>
          </Select>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <TextField
            id="date"
            variant="outlined"
            type="date"
            defaultValue="2017-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} md={2}>
          <Button className={classes.editbtn}>Generate Report</Button>
        </Grid>
      </Grid>

      <Box className={styles.item} mb={2.5}>
        <img src="/images/np_report.svg" width="115px" height="148px"></img>
      </Box>
      <Box className={styles.item1} mb={2} color={lmsStyle['base-secondary']}>
        <p className={styles.para}>
          Select a report and a date range to <br />
          Generate a Report
        </p>
      </Box>
    </>
  );
};

export default Learningpath;
