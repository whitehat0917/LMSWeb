import { Address } from '@lms-api/models/address.model';
import { restClient, API_ENDPOINT } from 'api';

const create = async (data: Partial<Address>): Promise<Address> => {
  const res = await restClient.post(`${API_ENDPOINT.ADDRESS}`, data);
  return res.data;
};

const getAll = async (): Promise<Address[]> => {
  const res = await restClient.get(API_ENDPOINT.ORGANIZATION);
  return res.data;
};

const updateWithUserId = async (
  userId: string,
  data: Partial<Address>
): Promise<Address> => {
  const res = await restClient.put(`${API_ENDPOINT.ORGANIZATION}/${userId}`, data);
  return res.data;
};

const update = async (id: string, data: Partial<Address>): Promise<Address> => {
  const res = await restClient.put(`${API_ENDPOINT.ADDRESS}/${id}`, data);
  return res.data;
};

const updateWithOrganizationId = async (
  orgId: string,
  data: Address
): Promise<Address> => {
  const res = await restClient.put(`${API_ENDPOINT.ORGANIZATION}/${orgId}`, data);
  return res.data;
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.ORGANIZATION}/${id}`);
};

export default {
  create,
  getAll,
  update,
  updateWithUserId,
  updateWithOrganizationId,
  del,
};
