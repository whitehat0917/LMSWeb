export { default as restClient } from './RestClient';

export enum API_ENDPOINT {
  USER_INFO = 'userInfo',
  ORGANIZATION = 'organization',
  COURSE = 'course',
  MODULE = 'module',
  ADDRESS = 'address',
  ROLE_MANAGEMENT = 'role-management',
  LEARNING_PATH = 'learning-path',
  CATEGORY = 'category',
  CURRICULUM = 'curriculum',
  EVENT = 'event',
  USER_ENROLLMENT = 'userEnrollment',
  TOPIC = 'topic',
  QUIZ = 'quiz',
  USER_ANSWER = 'user-answer',
  QUESTION = 'question',
  QUESTION_OPTION = 'question-option',
  SUBJECT = 'subject',
  UPLOAD = 'Storage',
  USER_TEAM = 'userTeam',
  NOTIFICATION = 'notification',
  ORDER = 'order',
  SUBSCRIPTION = 'subscription',
  REQUESTDEMO = 'requestDemo',
  COURSE_TRACKER = 'course-tracker',
  LEARNER_TRACKER = 'learner-tracker/learner'
}

export * from './models/user-info.model';
