import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import styles from '@module/course-management/CourseForm/Course.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './ui';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const NewModule = (props) => {
  const classes = useStyles();

  return (
    <Typography style={{ marginTop: '40px' }}>
      <Grid item xs={12} className={styles.item}>
        <img src="/images/np_book.svg" width="51px" height="54px"></img>
      </Grid>
      <Grid item xs={12} className={styles.item}>
        <Button
          variant="contained"
          className={classes.createlesson}
          onClick={props.onCreateLesson}
        >
          Create a Lesson
        </Button>
      </Grid>
    </Typography>
  );
};

export default NewModule;
