import { CourseTracker as CourseTrackerDto } from 'api/models'
import { API_ENDPOINT, restClient } from 'api'

const getAll = async (): Promise<CourseTrackerDto> => {
    const res = await restClient.get(`${API_ENDPOINT.COURSE_TRACKER}/admin`);
    return res.data
}

const get = async (orgId: string): Promise<CourseTrackerDto> => {
    const res = await restClient.get(`${API_ENDPOINT.COURSE_TRACKER}/${orgId}`)
    return res.data
}
export default {
    getAll,
    get
}