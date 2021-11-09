import {
  Box,
  Button,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React from 'react';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { useStyles } from './ui';
import { useFormContext } from 'react-hook-form';
// import AceEditor from 'react-ace' with ssr only approach;
const AceEditor = dynamic(
  async () => {
    const ace = await import('react-ace');
    require('ace-builds/src-noconflict/mode-javascript');
    require('ace-builds/src-noconflict/theme-github');
    return ace;
  },
  {
    // eslint-disable-next-line react/display-name
    loading: () => <>Loading...</>,
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
const DialogTitle = (props) => {
  const { children, classes, onClose, ...other } = props;
  console.log(onClose, 'onClose');
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};
const CourseLessonEmbeddedLinks = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );
  const [description, setDescription] = React.useState(topicFormData.description ? topicFormData.description : '');

  const { register, formState, trigger, getValues, setValue } = useFormContext();
  
  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
  }, [topicFormData]);
  
  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleChange = (val) => {
    setDescription(val);
  }
  const onSubmit = async () => {
    const valid = await trigger(['name']);
    if (valid) {
      const values = getValues();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          description: description,
        });
      } else {
        props.onAddLesson({
          name: values.name,
          description: description,
        });
      }
    }
  };
  return (
    <>
      <Box className={classes.boxcolor}>
        <div>
          <div className="lms-input">
            <label>Lesson Title</label>
            <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
            {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
          </div>
          <Grid container>
            <Grid item xs={12}>
              <div className="lms-input">
                <label>Embedded Code</label>
              </div>
              <AceEditor
                placeholder="Placeholder Text"
                mode="javascript"
                theme="github"
                name="description"
                style={{ borderRadius: '5px', border: '0.5px solid #aaaaaa' }}
                //   onLoad={this.onLoad}
                onChange={handleChange}
                fontSize={14}
                width="100%"
                showPrintMargin={true}
                showGutter={true}
                highlightActiveLine={true}
                value={description}
                setOptions={{
                  enableBasicAutocompletion: false,
                  enableLiveAutocompletion: false,
                  enableSnippets: false,
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </Grid>
          </Grid>
        </div>
        <Button variant="contained" className={classes.coloredButton} onClick={onSubmit}>
          Add Lesson
          <span style={{ marginTop: '7px' }}> </span>
        </Button>
        <Button
          variant="contained"
          onClick={handleClickOpen}
          className={classes.coloredButton1}
        >
          Preview Embedded
        </Button>
        <Button variant="contained" className={classes.coloredButton1} onClick={props.onCancel}>
          Cancel
        </Button>
      </Box>
      <Dialog
        className={classes.boxDialog}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle
          classes={classes.dialogtitle}
          onClose={handleClose}
          className={classes.title}
        >
          Embedded Preview
        </DialogTitle>
        <DialogContent className={classes.content}>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CourseLessonEmbeddedLinks;
