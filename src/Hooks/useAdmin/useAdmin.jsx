import { useQuery } from '@tanstack/react-query';
import useAuth from '../useAuth/useAuth';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';

const UseAdmin = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const res = await axiosPublic.get(`/api/v1/user/admin/${user?.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
