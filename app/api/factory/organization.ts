import { restClient, API_ENDPOINT } from 'api';
import { Organization as OrganizationDto } from 'api/models';

const create = async (data: OrganizationDto): Promise<OrganizationDto> => {
  const res = await restClient.post(`${API_ENDPOINT.ORGANIZATION}`, data);
  return res.data;
};

const get = async (id: string): Promise<OrganizationDto> => {
  const res = await restClient.get(`${API_ENDPOINT.ORGANIZATION}/${id}`)
  return res.data
}

const getAll = async (): Promise<OrganizationDto[]> => {
  const res = await restClient.get(API_ENDPOINT.ORGANIZATION);
  return res.data;
};

const update = async (
  id: string,
  data: Partial<OrganizationDto>
): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.ORGANIZATION}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.ORGANIZATION}/${id}`);
};

export default {
  create,
  get,
  getAll,
  update,
  del,
};
