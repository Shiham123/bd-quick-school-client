import axios from 'axios';

const axiosPublic = axios.create({
  // baseURL: 'https://quiz-school-server.vercel.app',
  baseURL: 'https://bd-quick-school-server-plum.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
