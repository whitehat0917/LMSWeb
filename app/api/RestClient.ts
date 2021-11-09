import { msalAuthConfig } from '@util/msal-app.conifg';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import config from '../../public/config/env.json';

axios.defaults.headers.common.Accept = 'application/json';
// axios.defaults.timeout = 12000;

const baseUrl = config.lmsCoreApi;
const commonBaseUrl = config.lmsCommon;

const getHttpHeaders = (): AxiosRequestConfig => {
const token = sessionStorage.getItem(msalAuthConfig.tokenKey);
    return {
      headers: {
        Authorization: token,
      },
    };
};

const getHttpHeadersFile = (): AxiosRequestConfig => {
  return {
    headers: {
      Accept: '*/*',
      'Content-Type': 'multipart/form-data',
    },
  };
};

const get = <T>(path: string): Promise<AxiosResponse> =>
  axios.get<T>(baseUrl + path, getHttpHeaders());

const del = <T>(path: string): Promise<AxiosResponse> =>
  axios.delete<T>(baseUrl + path, getHttpHeaders());

const post = <T>(path: string, data: any): Promise<AxiosResponse> =>
  axios.post<T>(baseUrl + path, data, getHttpHeaders());

const put = <T>(path: string, data: any): Promise<AxiosResponse> =>
  axios.put<T>(baseUrl + path, data, getHttpHeaders());

const patch = <T>(path: string, data: any): Promise<AxiosResponse> =>
  axios.patch<T>(baseUrl + path, data, getHttpHeaders());

const commonPost = <T>(path: string, data: any): Promise<AxiosResponse> =>
  axios.post<T>(commonBaseUrl + path, data, getHttpHeadersFile());
export default {
  get,
  del,
  post,
  put,
  patch,
  commonPost,
};
