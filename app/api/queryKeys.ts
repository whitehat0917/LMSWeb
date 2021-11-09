import { API_ENDPOINT } from '.';

export default {
  getCoursesByOrgId: (orgId: string) => [
    API_ENDPOINT.COURSE,
    'getByOrgId',
    orgId,
  ],
  getCourseByOrgIdAndId: (orgId: string, id: string) => [
    API_ENDPOINT.COURSE,
    'getByOrgIdAndId',
    orgId,
    id,
  ],
  getCategoriesByOrgId: (orgId: string) => [
    API_ENDPOINT.CATEGORY,
    'getByOrgId',
    orgId,
  ],
  getEventsByOrgId: (orgId: string) => [
    API_ENDPOINT.EVENT,
    'getByOrgId',
    orgId,
  ],
  getLearningPathsByOrgId: (orgId: string) => [
    API_ENDPOINT.LEARNING_PATH,
    'getByOrgId',
    orgId,
  ],
  getSubjectsByCategoryId: (catId: string) => [
    API_ENDPOINT.SUBJECT,
    'getByCategoryId',
    catId,
  ],
  getUserEnrollmentsByCourseId: (courseId: string) => [
    API_ENDPOINT.USER_ENROLLMENT,
    'getByCourseId',
    courseId,
  ],
  getUserInfo: () => [API_ENDPOINT.USER_INFO],
  getUserInfoById: (userId: string) => [API_ENDPOINT.USER_INFO, userId],
  getUserInfoByOrgId: (orgId: string) => [API_ENDPOINT.USER_INFO, 'getOrgId', orgId],
  getOrganizationInfo: () => [API_ENDPOINT.ORGANIZATION],
  getOrganizationInfoById: (id: string) => [API_ENDPOINT.ORGANIZATION, id],
  getOrderByOrgId: (orgId: string) => [
    API_ENDPOINT.ORDER,
    'getOrdersByOrgId',
    orgId,
  ],
  getSubscriptionInfoByOrgId: (orgId: string) => [API_ENDPOINT.SUBSCRIPTION, 'getByOrgId', orgId],
  getRequestsByType: (type: string) => [API_ENDPOINT.REQUESTDEMO, 'getRequestsByType', type],
  getOneByOrgId: (orgId: string, id: string) => [API_ENDPOINT.LEARNING_PATH, 'getOneByOrgId', orgId, id],
  getTeamsByOrgId: (orgId: string) => [API_ENDPOINT.USER_TEAM, 'getTeamsByOrgId', orgId],
  getDashboardInfo: () => [API_ENDPOINT.COURSE_TRACKER, 'admin'],
  getDashboardInfoByOrgId: (orgId: string) => [API_ENDPOINT.COURSE_TRACKER, orgId],
};
