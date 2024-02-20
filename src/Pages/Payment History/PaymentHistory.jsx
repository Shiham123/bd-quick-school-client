import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const PaymentHistory = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/v1/user/order/payment/history/${user?.email}`)
            // console.log(res.data)
            return res.data
        }
    })


    return (
        <div>

        </div>
    );
};

export default PaymentHistory;