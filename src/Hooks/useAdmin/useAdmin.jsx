import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../UseAxiosSecure/UseAxiosSecure';
import useAuth from '../useAuth/useAuth';

const VerifyAdmin = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    enabled: !!user?.email && !!localStorage.getItem('access-token'),
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/user/admin/${user.email}`);
      console.log(response);
      return response.data.admin;
    },
  });
  return [isAdmin, isAdminLoading];
};

export default VerifyAdmin;
