import axios from 'axios';
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  // baseURL: 'https://quiz-school-server.vercel.app',
  baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('access-token');
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
      console.log(response);
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 402) {
        await logOut();
        navigate('/login');
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
