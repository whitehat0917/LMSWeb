import { restClient, API_ENDPOINT } from 'api';

const create = async (
  containerName: string,
  folderName: string,
  fileData: any
): Promise<string> => {
  const res = await restClient.commonPost(
    `${API_ENDPOINT.UPLOAD}/Upload?containerName=${containerName}&folderName=${folderName}`,
    fileData
  );
  return res.data;
};

export default {
  create,
};
