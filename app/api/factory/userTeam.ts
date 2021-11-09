import { restClient, API_ENDPOINT } from 'api';
import { Team as UserTeamDto } from '../models';

const create = async (data: UserTeamDto): Promise<UserTeamDto> => {
  const res = await restClient.post(`${API_ENDPOINT.USER_TEAM}/createTeam`, data);
  return res.data;
};

const getAll = async (): Promise<UserTeamDto[]> => {
  const res = await restClient.get(API_ENDPOINT.USER_TEAM);
  return res.data;
};

// const getTeamsByOrgId = async (id: string): Promise<UserTeamDto> => {
//   const res = await restClient.get(`${API_ENDPOINT.USER_TEAM}/getTeamsByOrgId/${id}`);
//   return res.data;
// };

const getTeamsByOrgId = async (id: string) => {
  const res = await restClient.get(
    `${API_ENDPOINT.USER_TEAM}/getTeamsByOrgId/${id}`
  );
  return res.data;
};

const update = async (
  id: string,
  data: Partial<UserTeamDto>
): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.USER_TEAM}/updateTeam/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.USER_TEAM}/removeTeam/${id}`);
};

export default {
  create,
  getAll,
  getTeamsByOrgId,
  update,
  del,
};
