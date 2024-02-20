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
        <div className="container mx-auto">
            {
                payments.length === 0 ? (
                    <p className="text-white text-4xl text-center pt-20">No payments Found</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="text-white text-xl text-center border border-gray-400 border-collapse">Number</th>
                                    <th className="text-white text-xl text-center border border-gray-400 border-collapse">Title</th>
                                    <th className="text-white text-xl text-center border border-gray-400 border-collapse">Name</th>
                                    <th className="text-white text-xl text-center border border-gray-400 border-collapse">Price</th>
                                    <th className="text-white text-xl text-center border border-gray-400 border-collapse">Transjection Id</th>
                                    <th className="text-white text-xl text-center border border-gray-400 border-collapse">Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    payments.map((item, index) => <tr key={item._id}>
                                        <th className="text-white border text-center border-gray-400 border-collapse">{index + 1}</th>
                                        <td className="text-white border text-center border-gray-400 border-collapse">{item.productDetails.title}</td>
                                        <td className="text-white border text-center border-gray-400 border-collapse">{item.orderUser.name}</td>
                                        <td className="text-white border text-center border-gray-400 border-collapse">{item.productDetails.price}</td>
                                        <td className="text-white border text-center border-gray-400 border-collapse">{item.tranjactionId}</td>
                                        <td className="text-white border text-center border-gray-400 border-collapse">{item.time}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    );
};

export default PaymentHistory;