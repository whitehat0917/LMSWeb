import { restClient, API_ENDPOINT } from 'api';
import { Course } from '../models';

const create = async (data: Partial<Course>): Promise<Course> => {
  const res = await restClient.post(API_ENDPOINT.COURSE, data);
  return res.data as Course;
};

const get = async (orgId: string, id: string): Promise<Course> => {
  const res = await restClient.get(`${API_ENDPOINT.COURSE}/${orgId}/${id}`);
  return res.data as Course;
};

const getAll = async (orgId: string): Promise<Course[]> => {
  const res = await restClient.get(
    // `${API_ENDPOINT.COURSE}/getByOrgId/${orgId}`
    `${API_ENDPOINT.COURSE}/${orgId}`
  );
  return res.data as Course[];
};

const update = async (id: string, data: Partial<Course>): Promise<Course> => {
  const res = await restClient.put(`${API_ENDPOINT.COURSE}/${id}`, data);
  return res.data as Course;
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.COURSE}/${id}`);
};

export default {
  create,
  getAll,
  get,
  update,
  del,
};
