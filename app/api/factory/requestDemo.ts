import { RequestDemoDto } from "@lms-api/models";
import { API_ENDPOINT, restClient } from "..";

const getAll = async (type: string): Promise<RequestDemoDto[]> => {
    const res = await restClient.get(`${API_ENDPOINT.REQUESTDEMO}/getRequestsByType/${type}`);
    return res.data;
};

const del = async (id: string): Promise<void> => {
    await restClient.del(`${API_ENDPOINT.REQUESTDEMO}/${id}`)
}
export default {
    getAll,
    del
}