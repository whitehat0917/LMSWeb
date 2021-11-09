import { restClient, API_ENDPOINT } from 'api';
import { Topic as TopicDto } from '../models';

const create = async (data: TopicDto): Promise<TopicDto> => {
  const res = await restClient.post(`${API_ENDPOINT.TOPIC}`, data);
  return res.data;
};

const getAllByModuleId = async (moduleId: string): Promise<TopicDto[]> => {
  const res = await restClient.get(
    `${API_ENDPOINT.TOPIC}/getByModuleId/${moduleId}`
  );
  return res.data;
};

const update = async (id: string, data: TopicDto): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.TOPIC}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.TOPIC}/${id}`);
};

export default {
  create,
  getAllByModuleId,
  update,
  del,
};
