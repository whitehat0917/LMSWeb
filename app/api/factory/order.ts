import { restClient, API_ENDPOINT } from 'api';
import { OrderDto } from 'api/models';

const create = async (data: OrderDto): Promise<OrderDto> => {
    const res = await restClient.post(API_ENDPOINT.ORDER, data);
    return res.data;
};

const getAll = async (orgId: string): Promise<OrderDto[]> => {
    const res = await restClient.get(`${API_ENDPOINT.ORDER}/getOrdersByOrgId/${orgId}`);
    return res.data;
}

const update = async (id: string, data: OrderDto): Promise<void> => {
    await restClient.put(`${API_ENDPOINT.ORDER}/orderLine/${id}`, data);
}

const del = async (id: string): Promise<void> => {
    await restClient.del(`${API_ENDPOINT.ORDER}/${id}`);
};

export default {
    create,
    getAll,
    update,
    del
};