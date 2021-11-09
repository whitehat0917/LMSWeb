import { restClient, API_ENDPOINT } from 'api';
import { Event } from '../models';

const getAll = async (): Promise<Event[]> => {
  const res = await restClient.get(API_ENDPOINT.EVENT);
  return res.data;
};
const getByOrgId = async (orgId: string): Promise<Event[]> => {
  const res = await restClient.get(`${API_ENDPOINT.EVENT}/getByOrgId/${orgId}`);
  return res.data;
};
const create = async (data: Partial<Event>): Promise<Event> => {
  const res = await restClient.post(`${API_ENDPOINT.EVENT}`, data);
  return res.data;
};

const update = async (id: string, data: Partial<Event>): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.EVENT}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.EVENT}/${id}`);
};

export default {
  getAll,
  getByOrgId,
  create,
  update,
  del,
};
