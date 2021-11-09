import {
  Box,
  Button,
  Grid,
  IconButton,
  Link,
  Typography,
  withStyles,
} from '@material-ui/core';
import { useRouter } from 'next/router';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React from 'react';
import { useStyles } from './ui';
import { lmsStyle } from '../../../../styles/ui.variables';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from '../../../../store/course';
import { useFormContext } from 'react-hook-form';
import UploadAudioDialog from '@module/course-management/CourseForm/CourseLessonAccordion/UploadAudioDialog';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:last-child': {
      borderRadius: '0px ',
    },
    '&:first-child': {
      borderRadius: '7px 7px 0px 0px',
    },
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);
const AccordionSummary = withStyles({
  root: {
    //   borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);
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
const CourseLessonAccordion = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );
  const { register, formState, trigger, getValues, setValue } = useFormContext<{
    name: string;
  }>();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<string | false>();
  const [audioData, setAudioData] = React.useState({});
  const [audioFiles, setAudioFiles] = React.useState(
    topicFormData.content ? JSON.parse(topicFormData.content) : []
  );

  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
  }, [topicFormData]);

  const handleClickOpen = (index) => {
    setAudioData(audioFiles[index]);
    setOpen(true);
  };

  const handleChange = (panel: string) => (
    event: React.ChangeEvent,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };

  const onSubmit = async () => {
    const valid = await trigger(['name']);
    if (valid) {
      const values = getValues();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          content: JSON.stringify(audioFiles),
        });
      } else {
        props.onAddLesson({
          name: values.name,
          content: JSON.stringify(audioFiles),
        });
      }
    }
  }

  const handleAudioSubmit = (data) => {
    if (data.id === 0) {
      setAudioFiles([...audioFiles, { ...data, id: audioFiles.length + 1 }]);
    } else {
      const tempAudioFiles = audioFiles.map((item) => {
        const returnValue = { ...item };
        if (item.id === data.id) {
          returnValue.name = data.name;
          returnValue.description = data.description;
          returnValue.audio = data.audio;
        }
        return returnValue;
      });
      setAudioFiles(tempAudioFiles);
    }
  };

  const handleAudioNew = () => {
    setAudioData({});
    setOpen(true);
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
          <br></br>
          <div style={{ borderRadius: '20px' }}>
            {audioFiles.map((item, index) => (
              <Accordion
                className={'box-wrapper'}
                key={index}
                style={{ marginBottom: '10px' }}
              >
                <AccordionSummary
                  expandIcon={
                    <ArrowForwardIosIcon className={classes.accordionIcon} />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box display="flex" justifyContent="space-between" width="100%">
                    <Typography className={classes.accordionHeading}>
                      {item.name}
                    </Typography>
                    <Link
                      component="button"
                      onClick={() => handleClickOpen(index)}
                      underline="none"
                      style={{
                        marginBottom: 'auto',
                        marginTop: 'auto',
                        color: lmsStyle['base-primary'],
                        fontWeight: 600,
                      }}
                    >
                      EDIT
                    </Link>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={1}>
                    <Grid item md={6}>
                      <Typography className={classes.smallText}>
                        {item.description}
                      </Typography>
                    </Grid>
                    <Grid item md={6}>
                      <img
                        src={item.audio}
                        style={{ width: '100%' }}
                        alt={'accordion'}
                      />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
            <Button
              variant="contained"
              className={classes.coloredButtonadd}
              onClick={handleAudioNew}
            >
              Add another option
            </Button>
          </div>
        </div>
        <Button
          onClick={onSubmit}
          variant="contained"
          className={classes.coloredButton}
        >
          {topicFormData?.id ? 'Update Lesson' : 'Add Lesson'}
          <span style={{ marginTop: '7px' }}> </span>
        </Button>
        <Button
          variant="contained"
          className={classes.coloredButton1}
          onClick={props.onCancel}
        >
          Cancel
        </Button>
      </Box>
      {open && (
        <UploadAudioDialog
          open={open}
          setOpen={setOpen}
          audioData={audioData}
          handleSubmit={handleAudioSubmit}
        />
      )}
    </>
  );
};
export default CourseLessonAccordion;
