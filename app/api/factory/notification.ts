import { restClient, API_ENDPOINT } from 'api';

const getByOrgId = async (orgId: string): Promise<[]> => {
  const res = await restClient.get(
    `${API_ENDPOINT.NOTIFICATION}/getNotificationByOrgId/${orgId}`
  );
  return res.data;
};

const updateNotificationOption = async (
  notificationId: string,
  active: boolean,
  name: string,
  id: string
): Promise<void> => {
  const data = [
    {
      id: id,
      name: name,
      active: active,
      notificationMessageId: notificationId,
    },
  ];
  await restClient.put(
    `${API_ENDPOINT.NOTIFICATION}/notificationOption/${notificationId}`,
    data
  );
};

export default {
  getByOrgId,
  updateNotificationOption,
};
