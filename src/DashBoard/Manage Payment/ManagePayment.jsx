

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";

import { useState } from "react";

import ManagePaymentTable from "./ManagePaymentTable";


const ManageUsers = () => {
    


    // User Data fetching By tanstack query
    const axiosSecure = useAxiosSecure()
    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment')
            return res.data
        }
    })





    return (
        <div className="lg:p-16 min-h-screen">
            <h1 className="text-4xl text-center font-cinzel">Manage Users</h1>
            <hr className="mb-5 border-2 mt-2 border-black w-[280px] mx-auto" />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    {/* Table Heading Start Here */}
                    <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                        <tr className="font-cinzel">
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Customer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Customer Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tranjaction Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amont
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Course Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Pay Time
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    {/* Table Heading End Here */}
                    {/* Table Data Fetching */}
                    <tbody className="font-lora">
                        {
                            payments.map((payment, index) => <ManagePaymentTable key={payment._id} payment={payment} index={index} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;