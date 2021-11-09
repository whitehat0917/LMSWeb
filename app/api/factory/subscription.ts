import { SubscriptionDto } from "@lms-api/models";
import { API_ENDPOINT, restClient } from "..";

const getAll = async (orgId: string): Promise<SubscriptionDto[]> => {
    const res = await restClient.get(`${API_ENDPOINT.SUBSCRIPTION}/getByOrgId/${orgId}`);
    return res.data;
}
export default {
    getAll
}