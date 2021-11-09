import { Box, Button, Divider, Grid } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import styles from '@module/course-management/CourseForm/Course.module.scss';
import React from 'react';
import UploadAudioDialog from '../UploadAudioDialog/UploadAudioDialog';
import { useStyles } from './ui';
import { useFormContext } from 'react-hook-form';
import { ModulesFormInputs } from '@module/course-management/CourseForm/formTypes';
import TextInputOutline from '@element/TextInputOutline/TextInputOutline';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';

const CourseLessonAudio = (props) => {
  const classes = useStyles();
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );
  const { register, formState, trigger, getValues, setValue } = useFormContext<{
    name: string;
  }>();
  const [openAudio, setOpenAudio] = React.useState(false);
  const [audioData, setAudioData] = React.useState({});
  const [audioFiles, setAudioFiles] = React.useState(
    topicFormData.content ? JSON.parse(topicFormData.content) : []
  );

  React.useEffect(() => {
    if (topicFormData?.moduleId) {
      setValue('name', topicFormData.name);
    }
  }, [topicFormData]);
  
  const onSubmit = async () => {
    const values = getValues();

    console.log('-props-', props, values);

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
  };

  const handleAudioSubmit = (data) => {
    if (data.id === 0) {
      setAudioFiles([...audioFiles, { ...data, id: audioFiles.length + 1 }]);
    } else {
      const tempAudioFiles = audioFiles.map((item) => {
        const returnValue = { ...item };
        if (item.id === data.id) {
          returnValue.name = data.name;
          returnValue.audio = data.audio;
        }
        return returnValue;
      });
      setAudioFiles(tempAudioFiles);
    }
  };

  const handleAudioEdit = (index) => {
    setAudioData(audioFiles[index]);
    setOpenAudio(true);
  };

  const handleAudioDelete = (index) => {
    setAudioFiles(audioFiles.splice(index, 1));
  };

  const handleAudioNew = () => {
    setAudioData({});
    setOpenAudio(true);
  };

  return (
    <>
      <Box className={classes.boxcolor} width={'100%'}>
        <div className="lms-input">
          <label>Lesson Title</label>
          <input type="text" className={formState.errors?.name?.message ? 'error' : ''} {...register('name', { required: 'This field is required.' })} />
          {formState.errors?.name?.message && <span>{formState.errors?.name?.message}</span>}
        </div>
        <Grid>
          <Grid>
            <p className={classes.pQ}>Audio Files</p>
          </Grid>
          <Grid>
            <Button className={classes.editbtn} onClick={handleAudioNew}>
              <AddCircleIcon viewBox="0 0 36 24" />
              Upload a File
            </Button>
          </Grid>
        </Grid>
        <br />
        <Divider />
        <br />
        {audioFiles.map((item, index) => (
          <Box key={index} mt={2}>
            <Grid className={classes.boxHeight}>
              <p className={styles.p1}>{index + 1}</p>
              <p className={styles.h1}>
                {item.name}
                <span>
                  &nbsp;&nbsp;{' '}
                  <Button variant="contained" className={classes.Wavbtn}>
                    {item.audio.split('.')[item.audio.split('.').length - 1]}
                  </Button>
                </span>
              </p>
              <div className={classes.btn}>
                <Button
                  className={classes.Deletebtn}
                  onClick={() => handleAudioDelete(index)}
                >
                  Delete
                </Button>
                <Button
                  className={classes.Editbtn}
                  onClick={() => handleAudioEdit(index)}
                >
                  {' '}
                  Edit
                </Button>
              </div>
            </Grid>
          </Box>
        ))}

        <div className={classes.audioimg}>
          <img src="/images/np_audio.svg" />
        </div>
        <div className={classes.addbtn}>
          <Button
            variant="contained"
            className={classes.coloredButtonadd}
            onClick={handleAudioNew}
          >
            Add Audio Files
          </Button>
          {openAudio && (
            <UploadAudioDialog
              open={openAudio}
              setOpen={setOpenAudio}
              audioData={audioData}
              handleSubmit={handleAudioSubmit}
            />
          )}
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
    </>
  );
};

export default CourseLessonAudio;
