import { LearnerTracker as LearnerTrackerDto } from 'api/models'
import { API_ENDPOINT, restClient } from 'api'

const getAll = async (): Promise<LearnerTrackerDto> => {
  const res = await restClient.get(`${API_ENDPOINT.LEARNER_TRACKER}/admin`);
  return res.data
}

const get = async (orgId: string, learnerId: string): Promise<LearnerTrackerDto> => {
  const res = await restClient.get(`${API_ENDPOINT.LEARNER_TRACKER}/${orgId}/${learnerId}`)
  return res.data
}
export default {
  getAll,
  get
}