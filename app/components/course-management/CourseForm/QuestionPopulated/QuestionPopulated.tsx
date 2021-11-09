import { Box, Button } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import styles from '@module/course-management/CourseForm/Course.module.scss';

import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useStyles } from './ui';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Editor: any = dynamic(
  () => import('react-draft-wysiwyg').then((c) => c.Editor),
  {
    ssr: false,
  }
);

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

const QuestionPopulated = () => {
  const [loaded, setLoaded] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Box className={classes.boxcolor}>
        <div>
          <p className={classes.text}>Slide Title</p>
          <TextField
            id="outlined-full-width"
            //   label="Slide Title"
            placeholder="Let’s get to know you"
            size="small"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />
        </div>

        <div>
          <p className={classes.discription}>Slide Description</p>
          {loaded && (
            <>
              <Editor />
            </>
          )}
        </div>

        <Grid>
          <Grid>
            <p className={classes.pQ}>Questions</p>
          </Grid>
          <Grid>
            <Button variant="contained" className={classes.editbtn}>
              <AddCircleIcon viewBox="0 0 36 24" />
              Add Question
            </Button>
          </Grid>
        </Grid>

        <Divider />
        <br />
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>01</p>

          <h1 className={styles.h1}>
            Multiple Choice
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus?
            </p>
          </h1>
          <div className={classes.btn}>
            <Button className={classes.coloredButton}>Delete</Button>
            <Button className={classes.coloredButton1}> Edit</Button>
          </div>
        </Grid>
        <br />
        <Grid className={classes.boxHeight}>
          <p className={styles.p1}>02</p>

          <h1 className={styles.h1}>
            True / False
            <p className={styles.p} style={{ lineHeight: '20px' }}>
              Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
              nisi. Nam eget dui?
            </p>
          </h1>
          <div className={classes.btn1}>
            <Button className={classes.coloredButton}>Delete</Button>
            <Button className={classes.coloredButton1}> Edit</Button>
          </div>
        </Grid>
        <br />

        <Button variant="contained" className={classes.addslide}>
          Add Slide
          <span style={{ marginTop: '7px' }}> </span>
        </Button>
        <Button variant="contained" className={classes.cancel}>
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default QuestionPopulated;
