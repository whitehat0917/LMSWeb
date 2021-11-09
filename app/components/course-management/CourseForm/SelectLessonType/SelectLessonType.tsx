import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  IconButton,
} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { lessonTypes } from '@module/course-management/config';
import styles from '@module/course-management/CourseForm/Course.module.scss';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm, useFormContext } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { ModulesFormInputs } from '../formTypes';
import { useStyles } from './ui';

const DialogTitle = (props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6" className={classes.typo}>
        {children}
      </Typography>
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

const SelectLessonType = () => {
  const classes = useStyles();
  const router = useRouter();
  
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );
  const { register, formState, handleSubmit } = useForm<{ name: string }>();

  const [selectedLessonTypeIndex, setSelectedLessonTypeIndex] = useState<
    number | null
  >(null);

  const onAddScreen = async (data: { name: string }) => {
    const selectedLesson = lessonTypes[selectedLessonTypeIndex];
    setSelectedLessonTypeIndex(null);
    setTopicFormData({ moduleId: topicFormData.moduleId, name: data.name, contentType: selectedLesson.contentType });
    
    router.push(`${GlobalUrls.ADMIN}/courses/addLesson`);
  };

  return (
    <>
      <div>
        <Box textAlign="center" mb={5} mt={2}>
          <h3 className={styles.heading1}>Select lesson type</h3>
        </Box>

        <Box mx="auto" maxWidth={710}>
          <Grid container spacing={1}>
            {lessonTypes.map((dt, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={dt.name}
                onClick={() => setSelectedLessonTypeIndex(idx)}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  mx="auto"
                  className={styles.lessonBox}
                >
                  <Box
                    width="100%"
                    height={140}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src={dt.image} className={styles.imgselect}></img>
                  </Box>
                  <p className={styles.pvideo}>{dt.name}</p>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      {selectedLessonTypeIndex !== null && (
        <div className={classes.dialogeContainer}>
          <Dialog
            className={classes.dialoge}
            onClose={() => setSelectedLessonTypeIndex(null)}
            aria-labelledby="customized-dialog-title"
            open={true}
          >
            <DialogTitle
              classes={classes}
              className={classes.title}
              onClose={() => setSelectedLessonTypeIndex(null)}
            >
              {lessonTypes[selectedLessonTypeIndex].title}
            </DialogTitle>

            <form onSubmit={handleSubmit(onAddScreen)}>
              <DialogContent>
                <div className="lms-input">
                  <label>Give your screen a title</label>
                  <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
                  {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
                </div>

              </DialogContent>
              <DialogActions>
                <Button
                  autoFocus
                  type="submit"
                  className={classes.coloredButton1}
                  variant="outlined"
                >
                  Add Screen
              </Button>
              </DialogActions>
            </form>
          </Dialog>
        </div>
      )}
    </>
  );
};

export default SelectLessonType;
