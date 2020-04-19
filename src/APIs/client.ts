import * as Axios from 'axios';
import { AxiosInstance } from 'axios';

export let baseURL: string = '';

console.log(process.env.NODE_ENV);

if(process.env.NODE_ENV === 'development') {
  baseURL = 'http://127.0.0.1:8000/';
}else {
  baseURL = '/';
};  

export const axiosClient: AxiosInstance = Axios.default.create({
  baseURL: baseURL,
  timeout: 300000,
  withCredentials: true,
});
