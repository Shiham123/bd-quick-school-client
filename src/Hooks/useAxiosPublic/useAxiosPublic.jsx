import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://bd-quick-school-server-plum.vercel.app',
  // baseURL: 'http://localhost:5000',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
