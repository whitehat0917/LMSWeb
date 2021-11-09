import {
  LearningPathCreateDto,
  LearningPath,
} from '../models/learning-path.model';
import { restClient, API_ENDPOINT } from 'api';

const create = async (data: LearningPathCreateDto): Promise<LearningPath> => {
  const res = await restClient.post(`${API_ENDPOINT.LEARNING_PATH}`, data);
  return res.data;
};

const getAll = async (orgId: string): Promise<LearningPath[]> => {
  const res = await restClient.get(
    `${API_ENDPOINT.LEARNING_PATH}/getByOrgId/${orgId}`
  );
  return res.data;
};

const getOneByOrgId = async (
  orgId: string,
  id: string
): Promise<LearningPath> => {
  const res = await restClient.get(
    `${API_ENDPOINT.LEARNING_PATH}/getOneByOrgId/${orgId}/${id}`
  );
  return res.data as LearningPath;
};

const update = async (
  id: string,
  data: Partial<LearningPath>
): Promise<void> => {
  await restClient.put(`${API_ENDPOINT.LEARNING_PATH}/${id}`, data);
};

const del = async (id: string): Promise<void> => {
  await restClient.del(`${API_ENDPOINT.LEARNING_PATH}/${id}`);
};

export default {
  create,
  getAll,
  getOneByOrgId,
  update,
  del,
};
