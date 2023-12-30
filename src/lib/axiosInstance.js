// lib/axiosInstance.js
import axios from "axios";

const API_URL = "https://enuygun-case-admin.onrender.com/api";
const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { axiosInstance };
