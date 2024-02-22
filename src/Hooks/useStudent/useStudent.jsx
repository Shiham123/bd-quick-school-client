import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../UseAxiosSecure/UseAxiosSecure";
import useAuth from "../useAuth/useAuth";


const useStudent = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { data: isStudent, isPending: isStudentLoading } = useQuery({
        queryKey: ['isStudent', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const response = await axiosSecure.get(`/api/v1/user/student/${user?.email}`);
            console.log(response);
            return response.data.student;
        },
    });
    return [isStudent, isStudentLoading];
};

export default useStudent;