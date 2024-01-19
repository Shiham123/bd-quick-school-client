import axios from 'axios';

const axiosPublic = axios.create({
  baseURL: 'https://bd-quick-school-server.vercel.app',
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
