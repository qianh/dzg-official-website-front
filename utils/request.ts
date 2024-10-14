import type { AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

const { NODE_ENV } = process.env;

const BaseURL = 'http://gm1-scysa.100jit.com';

const service = axios.create({
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

service.interceptors.response.use((response: any): any => {
  const { success, result, errorMsg, errorCode = '', resultCode } = response.data;

  if (success === undefined || resultCode === 100) {
    return response.data;
  }

  if (success) {
    return result || success;
  }
  if (errorMsg) {
    // message.error(errorMsg);
  }

  if (errorCode) {
    // message.error(message);
  }

  return result || false;
});

service.interceptors.request.use((config: AxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    config.baseURL = NODE_ENV === 'production' ? BaseURL : 'http://127.0.0.1';
  }

  if (!config.baseURL) {
    config.baseURL = BaseURL;
  }

  if (!config.headers) {
    config.headers = {};
  }
 
  return config as InternalAxiosRequestConfig;
});

export default service;
