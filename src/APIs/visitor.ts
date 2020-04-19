import { axiosClient } from './client';
import * as path from 'path';

const baseURL = './api/visitors';

// export namespace VisitorAPI{

  export const getVisitors = () => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.get(endPoint, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access')}`
      }
    });
  };

  export const createVisitor = (body: {
    id: number,
    name: string,
    email: string, 
    phone: string,
    purpose: string,
    crewname: string,
    image: string,
    datetime: string,
    signature: string
  }) => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.post(endPoint, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access')}`
      }
    });
  };

  export const updateVisitor = ( body: {
    id: number,
    name: string, 
    email?: string,
    phone?: string,
    purpose?: string,
    crewname?: string,
    image?: string,
    datetime?: string,
    signature?: string
  }) => {
    const endPoint = path.join(baseURL, '/');
    return axiosClient.patch(endPoint, body, {
      headers: {
        Authorization: `Bearer ${window.localStorage.getItem('access')}`
      }
    });
  };

  // export const removeVisitor = (id: number) => {
  //   const endPoint = path.join(baseURL, id, '/');
  //   return axiosClient.delete(id);
  // }

// };