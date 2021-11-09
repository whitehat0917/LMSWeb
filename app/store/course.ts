import { Category, Course, Topic } from '@lms-api/models';
import { LearningPath } from '@lms-api/models/learning-path.model';
import {
  CourseFormInputs,
} from '@module/course-management/CourseForm/formTypes';
import { atom } from 'recoil';

export const courseFormDataState = atom<CourseFormInputs>({
  key: 'courseFormDataState',
  default: null, // {} as CourseFormInputs,
});

export const learningPathState = atom<LearningPath>({
  key: 'learningPathState',
  default: null,
});

export const lessonTopicState = atom<Topic>({
  key: 'lessonTopicState',
  default: null,
});

export const courseFormStatusState = atom({
  key: 'courseFormStatusState',
  default: {
    activeTabIndex: 0,
    activeModuleIndex: null,
    selectedLessonType: '',
    activeLessonIndex: null,
    activeModuleId: null,
  },
});

export const courseFormState = atom<Course>({
  key: 'courseFormState',
  default: null
});

export const courseCategoryState = atom<Category>({
  key: 'courseCategoryState',
  default: null
});