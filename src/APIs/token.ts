import { axiosClient } from './client';
import * as path from 'path';

const baseURL = '/api/users/auth';

export namespace TokenAPI{

  export const tokenGet = (body: { userId: string, pw: string }) => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.post<{access: string, refresh: string}>(endPoint, body);
  };

  export const tokenRefresh = (body: {refresh: string}) => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.post<{access: string}>(endPoint, body);
  };

  export const tokenVerify = (body: { access: string }) => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.post<{}>(endPoint, body);
  };
};