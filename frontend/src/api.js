
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://primetrade-backend.onrender.com/api',
  withCredentials: true
});

export default API;
