/* eslint-disable @typescript-eslint/no-explicit-any */
import { Topic } from '@lms-api/models';
import {
  Box,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import LessonsList from '../Lessonslist/Lessonslist';
import styles from '@module/course-management/CourseForm/Course.module.scss';
import SelectLessonType from '../SelectLessonType/SelectLessonType';
import { useStyles } from './ui';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import { GlobalUrls } from '@util/app-utils';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { TopicFactory } from '@lms-api/factory';


const TopicList = ({ moduleId, topics }) => {
  const classes = useStyles();
  const router = useRouter();
  const [addLesson, setAddLesson] = useState(false);
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );
  
  const addTopic = () => {
    setTopicFormData({ ...topicFormData, moduleId });
    setAddLesson(true);
  }
  const deleteTopic = (id: string) => {
    TopicFactory.del(id);
  }
  const updateTopic = (topic: Topic) => {
    setTopicFormData({ ...topic });
    router.push(`${GlobalUrls.ADMIN}/courses/addLesson`);
  }
  
  if (topics.length === 0) {
    return addLesson ? (<SelectLessonType />) : (
    <Typography style={{ marginTop: '40px' }}>
      <Grid item xs={12} className={styles.item}>
        <img src="/images/np_book.svg" width="51px" height="54px"></img>
      </Grid>
      <Grid item xs={12} className={styles.item}>
        <Button
          variant="contained"
          className={classes.createlesson}
          onClick={addTopic}
        >
          Create a Lesson
        </Button>
      </Grid>
    </Typography>
  );
  }

  return (
    <React.Fragment>
      {topics.map((dt, lessonIdx) => (
        <>
          <LessonsList
            lessonNumber={
              lessonIdx + 1 < 10
                ? `0${lessonIdx + 1}`
                : lessonIdx + 1
            }
            key={lessonIdx}
            onDeleteLesson={() => deleteTopic(dt.id)}
            onEditLesson={() => updateTopic(dt)}
            {...dt}
          />
          <br />
        </>
      ))}
      <Box display="flex" justifyContent="flex-end">
        {addLesson ? (<SelectLessonType />) : (
        <Button
          variant="contained"
          className={classes.addmodule}
          onClick={addTopic}
        >
          Add New Lesson
        </Button>)}
      </Box>
    </React.Fragment>
  );
};

export default TopicList;
