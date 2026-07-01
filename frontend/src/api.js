import axios from 'axios';

const api = axios.create({
  // Dynamically reads the secure domain from Vercel, then appends the base API routing path
  baseURL: `${process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000'}/api/`,
  withCredentials: true, // Include cookies in requests
});

export default api;