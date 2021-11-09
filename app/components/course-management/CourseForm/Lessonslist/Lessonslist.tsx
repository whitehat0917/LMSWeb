import { Box, Button, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { lessonTypes } from '@module/course-management/config';
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

const ModuleList = (props) => {
  const classes = useStyles();
  const lessonImage = React.useMemo(
    () => lessonTypes.find((dt) => dt.contentType === props.contentType)?.image,
    [props.contentType]
  );

  return (
    <>
      <Grid className={styles.boxHeight} style={{ display: 'flex' }}>
        <p className={styles.p1}>{props.lessonNumber}</p>

        <img src={lessonImage} width="41px" className={styles.images} />
        <h1 className={styles.h1}>
          {props.name}
          <p className={styles.p}>{props.contentType}</p>
        </h1>
        <div className={styles.btn}>
          <Button
            onClick={props.onDeleteLesson}
            className={classes.coloredButton}
          >
            Delete
          </Button>
          <Button
            onClick={props.onEditLesson}
            className={classes.coloredButton1}
          >
            {' '}
            Edit
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default ModuleList;
