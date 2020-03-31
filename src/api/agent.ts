import axios, { AxiosRequestConfig } from 'axios';

const baseURL = 'http://localhost:8000/api/';
const baseConfig: AxiosRequestConfig = {
  timeout: 20000,
  withCredentials: true
};

export const CancelToken = axios.CancelToken;

const axiosGet = (url: string, config?: AxiosRequestConfig) => {
  return axios.create(baseConfig).get(url, config)
};
const axiosPost = (url: string, requestBody?: any, config?: AxiosRequestConfig) => {
  return axios.create(baseConfig).post(url, requestBody, config)
};

// 실제 API 맞춰 변경 필요

export const endPoint = {
  token: `${baseURL}/user/auth/`,
  refresh: `${baseURL}/user/auth/`,
  users: `${baseURL}/users/`,
  visitors: `${baseURL}/visitors/`,
  contracts: `${baseURL}/contracts/`,
  crews: `${baseURL}/crews/`
};

export const tokenAPI = (body: any) => axiosPost(endPoint.token, body);
export const refreshAPI = (body: any) => axiosPost(endPoint.refresh, body);
export const userAPI = (config: AxiosRequestConfig) => axiosGet(endPoint.users, config);
export const registerAPI = (config: AxiosRequestConfig) => axiosPost(endPoint.users, config);
export const getVisitorAPI = (config: AxiosRequestConfig) => axiosGet(endPoint.visitors, config);
