import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuth/useAuth';

const axiosSecure = axios.create({
  baseURL: 'https://bd-quick-school-server-plum.vercel.app',
  // baseURL: 'http://localhost:5000',
});

const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();
  // Request interceptors to add authorization header for every secure call to the api
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  // Intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      // console.log('interceptor error', status)
      if (status === 401 || status === 403) {
        await logOut();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
