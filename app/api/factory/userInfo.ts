import { restClient, API_ENDPOINT } from 'api';
import { UserInfo as UserInfoDto } from '../models';

const create = async (data: UserInfoDto): Promise<UserInfoDto> => {
  const res = await restClient.post(`${API_ENDPOINT.USER_INFO}/add`, data);
  return res.data;
};

const getAll = async (): Promise<UserInfoDto[]> => {
  const res = await restClient.get(API_ENDPOINT.USER_INFO);
  return res.data;
};

const get = async (id: string): Promise<UserInfoDto> => {
  const res = await restClient.get(`${API_ENDPOINT.USER_INFO}/${id}`);
  return res.data;
};

const getByOrgId = async (id: string): Promise<UserInfoDto[]> => {
  const res = await restClient.get(`${API_ENDPOINT.USER_INFO}/getOrgId/${id}`);
  return res.data;
};

const update = async (
  id: string,
  data: Partial<UserInfoDto>
): Promise<UserInfoDto> => {
  const res = await restClient.put(`${API_ENDPOINT.USER_INFO}/${id}`, data);
  return res.data;
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.USER_INFO}/${id}`);
};

export default {
  create,
  getAll,
  get,
  getByOrgId,
  update,
  del,
};
