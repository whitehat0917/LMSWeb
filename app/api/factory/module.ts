import { restClient, API_ENDPOINT } from 'api';
import { Module } from 'api/models';

const create = async (data: Partial<Module>): Promise<Module> => {
  const res = await restClient.post(`${API_ENDPOINT.MODULE}`, data);
  return res.data;
};

const get = async (orgId: string, id: string): Promise<Module> => {
  const res = await restClient.get(`${API_ENDPOINT.MODULE}/${orgId}/${id}`);
  return res.data;
};

const getAll = async (courseId: string): Promise<Module[]> => {
  const res = await restClient.get(
    `${API_ENDPOINT.MODULE}/getByCourseId/${courseId}`
  );
  return res.data;
};

const update = async (id: string, data: Partial<Module>): Promise<Module> => {
  const res = await restClient.put(`${API_ENDPOINT.MODULE}/${id}`, data);
  return res.data;
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.MODULE}/${id}`);
};

export default {
  create,
  getAll,
  get,
  update,
  del,
};
