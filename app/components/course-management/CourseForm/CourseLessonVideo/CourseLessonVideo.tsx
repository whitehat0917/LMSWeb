import Editor from '@element/Editor/Editor';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { Box, Button, Card, InputAdornment } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from '@module/course-management/CourseForm/Course.module.scss';
import { EditorState } from 'draft-js';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useDropzone } from 'react-dropzone';
import { Controller, useForm, useFormContext } from 'react-hook-form';
import { Player } from 'video-react';
import { useStyles } from './ui';
import FormData from 'form-data';
import { useMutation } from 'react-query';
import { UploadDto } from '@lms-api/models';
import { UploadFactory } from '@lms-api/factory';
import { stateToHTML } from "draft-js-export-html";
import { useRecoilState } from 'recoil';
import { lessonTopicState } from '../../../../store/course';

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

const CourseLesson = (props) => {
  const classes = useStyles();
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );

  const { register, formState, control, trigger, getValues, setValue } = useFormContext();
  const [file, setFile] = useState<File>(null);
  const [video, setVideo] = useState(
    topicFormData.videoUrl ? topicFormData.videoUrl : ''
  );

  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
    if (topicFormData?.id) {
      setValue('description', topicFormData.description);
    }
  }, [topicFormData]);

  const createUploadMutation = useMutation(
    ({ containerName, folderName, fileData }: UploadDto) =>
      UploadFactory.create(containerName, folderName, fileData)
  );

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length) {
      const file = acceptedFiles[0];
      console.log(file, 'uploading video file');
      setFile(file);
      const fileData = new FormData();
      fileData.append(
        'files',
        file,
        new Date().getTime() + '.' + file.name.split('.')[1]
      );
      const videoUrl = await createUploadMutation.mutateAsync({
        containerName: 'assets',
        folderName: 'course',
        fileData: fileData,
      });
      setVideo(videoUrl[0]);
    }
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    open: handleFileUpload,
  } = useDropzone({
    onDrop,
    accept: 'video/*',
    noClick: true,
    noKeyboard: true,
  });

  const onSubmit = async () => {
    const valid = await trigger([
      'name',
      'description'
    ]);

    if (valid) {
      const values = getValues();
      if (topicFormData?.id) {
        props.onUpdateLesson(topicFormData.id, {
          name: values.name,
          description: stateToHTML(values.description.getCurrentContent()),
          videoUrl: video,
        });
      } else {
        props.onAddLesson({
          name: values.name,
          description: stateToHTML(values.description.getCurrentContent()),
          videoUrl: video,
        });
      }
    }
  };

  return (
    <>
      <Box className={classes.boxcolor}>
        <Grid container className={classes.gridContainer} spacing={3}>
          <Grid item xs={12}>
            <div className="lms-input">
              <label>Lesson Title</label>
              <input
                type="text"
                className={formState.errors?.name?.message ? 'error' : ''}
                placeholder="Introduction to the course"
                {...register('name', { required: 'This field is required.' })} />
              {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
            </div>
          </Grid>

          <Grid item xs={12}>
            <Controller
              name={`description`}
              control={control}
              defaultValue={EditorState ? EditorState.createEmpty() : ''}
              {...register('description', {
                required: 'This field is required.',
              })}
              render={({ field }) => {
                return (
                  <Editor
                    label="Lesson Description"
                    value={field.value}
                    onChange={field.onChange}
                    error={!!formState.errors?.description?.message}
                    helperText={formState.errors?.description?.message}
                  />
                );
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Box mb={2.7}>
              <TextInputOutline
                label={
                  <span>
                    Video URL{' '}
                    <span style={{ fontWeight: 'normal' }}>
                      Supports YouTube, Vimeo, DailyMotion and Streamable)
                    </span>
                  </span>
                }
                name={`videoUrl`}
                {...register('videoUrl', {
                  required: 'This field is required.',
                })}
                error={!!formState.errors?.videoUrl?.message}
                helperText={formState.errors?.videoUrl?.message}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment
                      position="start"
                      classes={{
                        root: classes.inputAndorsment,
                      }}
                    >
                      https://
                    </InputAdornment>
                  ),
                }}
                value={video}
                onChange={(e) => setVideo(e.target.value)}
              />
            </Box>
            <span>Upload video from files</span>
            <Card className={classes.OverviewCard}>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p className={classes.dropbox}>
                    <img
                      src="/images/Group 2.svg"
                      className={classes.img}
                      width="100%"
                      height="125px"
                    />
                    {file && (
                      <Typography variant="caption" display="block">
                        {file.name}
                      </Typography>
                    )}
                    <p className={styles.pDrag}>
                      {' '}
                      Drag and drop your video here
                    </p>
                    <p style={{ marginTop: '10px' }}>
                      <span
                        onClick={handleFileUpload}
                        className={classes.browseFileText}
                      >
                        Browse files
                      </span>
                    </p>
                  </p>
                )}
              </div>
            </Card>
          </Grid>

          <Grid className={classes.videoContainer} item xs={12} md={6}>
            <div className={classes.player}>
              <div className={classes.textcover}>Video overview</div>
              <Player
                playsInline
                src={
                  video
                    ? video
                    : 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
                }
                fluid={false}
                width={500}
                height={311}
              />
            </div>
          </Grid>
        </Grid>

        <Button
          onClick={onSubmit}
          variant="contained"
          className={classes.coloredButton}
        >
          {topicFormData?.id ? 'Update Lesson' : 'Add Lesson'}
          <span style={{ marginTop: '7px' }}></span>
        </Button>
        <Button
          onClick={props.onCancel}
          variant="contained"
          className={classes.coloredButton1}
        >
          Cancel
        </Button>
      </Box>
    </>
  );
};

export default CourseLesson;
