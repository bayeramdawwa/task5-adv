import axios from "axios";

const axiosInstance = axios.create({});
axiosInstance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = "Bearer token";
    return config;
  },
  (error) => {

  }
);
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
 
  }
);

export default axiosInstance;