

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";



import ManageReviewsTable from "./ManageReviewsTable";


const ManageReviews = () => {

    const axiosSecure = useAxiosSecure()


    // User Data fetching By tanstack query
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/admin/reviews')
            return res.data
        }
    })





    return (
        <div className="lg:p-16 min-h-screen">
            <h1 className="text-4xl text-center font-cinzel">Manage Reviews</h1>
            <hr className="mb-5 border-2 mt-2 border-black w-[330px] mx-auto" />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    {/* Table Heading Start Here */}
                    <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                        <tr className="font-cinzel">
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Designation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Rating
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    {/* Table Heading End Here */}
                    {/* Table Data Fetching */}
                    
                </table>
            </div>

        </div>
    );
};

export default ManageReviews;