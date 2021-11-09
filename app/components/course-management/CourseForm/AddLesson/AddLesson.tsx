import { TopicFactory } from '@lms-api/factory';
import { Topic } from '@lms-api/models';
import { Box, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CourseLessonAccordion from '@module/course-management/CourseForm/CourseLessonAccordion/CourseLessonAccordion';
import CourseLessonAttach from '@module/course-management/CourseForm/CourseLessonAttach/CourseLessonAttach';
import CourseLessonAudio from '@module/course-management/CourseForm/CourseLessonAudio/CourseLessonAudio';
import CourseLessonEmbeddedLinks from '@module/course-management/CourseForm/CourseLessonEmbeddedLinks/CourseLessonEmbeddedLinks';
import CourseLessonKnowledgeCheck from '@module/course-management/CourseForm/CourseLessonKnowledgeCheck/CourseLessonKnowledgeCheck';
import CourseLessonScenario from '@module/course-management/CourseForm/CourseLessonScenario/CourseLessonScenario';
import CourseLessonSlideShow from '@module/course-management/CourseForm/CourseLessonSlideShow/CourseLessonSlideShow';
import CourseLessonText from '@module/course-management/CourseForm/CourseLessonText/CourseLessonText';
import CourseLessonVideo from '@module/course-management/CourseForm/CourseLessonVideo/CourseLessonVideo';
import { GlobalUrls } from '@util/app-utils';
import styles from 'components/course-management/CourseForm/Course.module.scss';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { lessonTopicState } from 'store/course';
import LessonType from 'types/elements/LessonType';
import { useStyles } from './ui';

const lessonTypes = [
  {
    contentType: LessonType.VIDEO,
    Component: CourseLessonVideo,
  },
  {
    contentType: LessonType.TEXT,
    Component: CourseLessonText,
  },
  {
    contentType: LessonType.KNOWLEDGE_CHECK,
    Component: CourseLessonKnowledgeCheck,
  },
  {
    contentType: LessonType.AUDIO,
    Component: CourseLessonAudio,
  },
  {
    contentType: LessonType.ATTACHMENT,
    Component: CourseLessonAttach,
  },
  {
    contentType: LessonType.EMBEDDED_LINKS,
    Component: CourseLessonEmbeddedLinks,
  },
  {
    contentType: LessonType.SLIDESHOW,
    Component: CourseLessonSlideShow,
  },
  {
    contentType: LessonType.SCENARIO,
    Component: CourseLessonScenario,
  },
  {
    contentType: LessonType.ACCORDION,
    Component: CourseLessonAccordion,
  },
];

interface TopicInput {
  name: string;
  description?: string;
  moduleId: string;
  publishDate?: string;
  imageUrl?: string;
  videoUrl?: string;
  status?: string;
  contentType?: LessonType;
  completionDate?: string;
  lenghtInMinute?: number;
}

const AddNewLesson = () => {
  const classes = useStyles();
  const router = useRouter();
  const [topicFormData, setTopicFormData] = useRecoilState(
    lessonTopicState
  );
  // const courseFormData = useRecoilValue(courseFormDataState);

  const LessonComponent: FC<{
    onCancel: CallableFunction;
    onAddLesson: CallableFunction;
    onUpdateLesson: CallableFunction;
    lessonData: Topic;
  }> = React.useMemo(() => {
    return lessonTypes.find(
      ({ contentType }) => contentType === topicFormData?.contentType
    )?.Component;
  }, [topicFormData]);

  const formMethods = useForm<TopicInput>();

  React.useEffect(() => {
    if (!LessonComponent || !topicFormData?.moduleId) {
      // router.push(`${GlobalUrls.ADMIN}/courses/create`);
    }
  }, [LessonComponent, topicFormData]);

  const onAddLesson = async (data: Topic) => {
   const response = await TopicFactory.create({
      ...data,
      contentType: topicFormData.contentType,
      moduleId: topicFormData.moduleId,
    });
    setTopicFormData({ ...topicFormData, id: response.id });
    router.push(`${GlobalUrls.ADMIN}/courses/create`);
    console.log('onAddLesson ', data);
  };

  const onUpdateLesson = async (id: string, data: Topic) => {
    await TopicFactory.update(id, data);
    router.push(`${GlobalUrls.ADMIN}/courses/create`);
    console.log('onUpdateLesson ', data);
    
  };

  return (
    <>
      <Grid container className={styles.gridcourseform}>
        <h3 className={styles.heading}>Create New Course</h3>
        <Button variant="contained" className={classes.coloredButton}>
          <img src="/images/glasses.svg" />
          &nbsp;&nbsp;&nbsp;&nbsp; Preview Course
        </Button>
      </Grid>

      <Box className={classes.boxcolor}>
        <Card className={styles.cardcourseform}>
          <Grid container className={styles.gridContainer}>
            <FormProvider {...formMethods}>
              {LessonComponent && (
                <LessonComponent
                  lessonData={topicFormData}
                  onCancel={() =>
                    router.push(`${GlobalUrls.ADMIN}/courses/create`)
                  }
                  onAddLesson={onAddLesson}
                  onUpdateLesson={onUpdateLesson}
                />
              )}
            </FormProvider>
          </Grid>
        </Card>
      </Box>
    </>
  );
};

export default AddNewLesson;
