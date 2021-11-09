import { restClient, API_ENDPOINT } from 'api';
import { Category } from '../models';

const getAll = async (orgId: string): Promise<Category[]> => {
  const res = await restClient.get(
    `${API_ENDPOINT.CATEGORY}/getByOrgId/${orgId}`
  );
  return res.data;
};

const create = async (data: Partial<Category>): Promise<Category> => {
  const res = await restClient.post(`${API_ENDPOINT.CATEGORY}`, data);
  return res.data;
};

const update = async (id: string, data: Partial<Category>): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.CATEGORY}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.CATEGORY}/${id}`);
};

export default {
  getAll,
  create,
  update,
  del,
};
