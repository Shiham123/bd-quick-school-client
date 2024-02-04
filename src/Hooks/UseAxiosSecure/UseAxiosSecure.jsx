import axios from 'axios';

const axiosSecure = axios.create({
  baseURL: 'https://quiz-school-server.vercel.app',
  // baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
      console.log(token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (error) => {
      console.log(error);
      return Promise.reject(error);
    }
  );
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
