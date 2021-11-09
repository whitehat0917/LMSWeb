import { restClient, API_ENDPOINT } from 'api';
import { UserEnrollment as UserEnrollmentDto } from '../models';

const create = async (
  data: Partial<UserEnrollmentDto>
): Promise<UserEnrollmentDto> => {
  const res = await restClient.post(`${API_ENDPOINT.USER_ENROLLMENT}`, data);
  return res.data;
};

const getAllByCourseId = async (
  courseId: string
): Promise<{
  learningPath: any[];
  events: any[];
  users: any[];
  teams: any[];
}> => {
  const res = await restClient.get(
    `${API_ENDPOINT.USER_ENROLLMENT}/getByCourseId/${courseId}`
  );
  return res.data;
};

const getByLearningPathId = async (
  learningPathId: string
): Promise<{
  courses: any[];
  events: any[];
  users: any[];
  teams: any[];
}> => {
  const res = await restClient.get(
    `${API_ENDPOINT.USER_ENROLLMENT}/getByLearningPathId/${learningPathId}`
  );
  return res.data;
};

const get = async (id: string): Promise<UserEnrollmentDto[]> => {
  const res = await restClient.get(`${API_ENDPOINT.USER_ENROLLMENT}/${id}`);
  return res.data;
};

const update = async (
  id: string,
  data: Partial<UserEnrollmentDto>
): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.USER_ENROLLMENT}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.USER_ENROLLMENT}/${id}`);
};

export default {
  create,
  getAllByCourseId,
  getByLearningPathId,
  get,
  update,
  del,
};
