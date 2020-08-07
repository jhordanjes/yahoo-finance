import axios from 'axios';

const api = axios.create({
  baseURL: 'https://finance.yahoo.com',
});

export default api;
