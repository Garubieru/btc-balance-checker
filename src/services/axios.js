import axios from 'axios';

const baseUrl = 'https://btc-balance-api.herokuapp.com/';
const api = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
