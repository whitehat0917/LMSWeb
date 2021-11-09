import { restClient, API_ENDPOINT } from 'api';
import { Subject as SubjectDto } from '../models';

const create = async (data: Partial<SubjectDto>): Promise<SubjectDto> => {
  const res = await restClient.post(`${API_ENDPOINT.SUBJECT}`, data);
  return res.data;
};

const getAll = async (categoryId: string): Promise<SubjectDto[]> => {
  const res = await restClient.get(
    `${API_ENDPOINT.SUBJECT}/getByCategoryId/${categoryId}`
  );
  return res.data;
};

const update = async (id: string, data: Partial<SubjectDto>): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.SUBJECT}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.SUBJECT}/${id}`);
};

export default {
  create,
  getAll,
  update,
  del,
};
