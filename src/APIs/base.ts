/* eslint-disable */
import { axiosClient } from './client';
import * as path from 'path';
import { User } from 'models/User';

const baseURL = '/api/users';

/** */
// export namespace BaseAPI{

  export const accountGet  = () => { 
    const endPoint = path.join(baseURL, '/');
    return axiosClient.get<User>(endPoint, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access')}`
      }
    });
  };
  
  export const accountCreate = (body: {
    userId: string,
    pw: string,
  }) => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.post<User>(endPoint, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access')}`
      }
    });
  };    
// };

