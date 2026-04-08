import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dev.bhcjobs.com",
  timeout: 10000,
});

export default axiosInstance;