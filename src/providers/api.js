import axios from 'axios';
import config from '../config';
const client = axios.create({
  baseURL: config.apiUrl,
});
client.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default client;
