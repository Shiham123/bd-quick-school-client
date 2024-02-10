
import { useState } from 'react';
import useAxiosPublic from './../../Hooks/useAxiosPublic/useAxiosPublic';
import useAxiosSecure from './../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AdvertiseReviewsTable from './AdvertiseReviewsTable';

const AdveriseReviews = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [ads, SetAds] = useState([])


    const { data: advertisement = [], refetch } = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v2/admin/advertise/reviews');
            return res.data
        }
    })
    // console.log(advertisement)



    return (
        <div className="lg:p-16 min-h-screen">
            <h1 className="text-4xl text-center font-cinzel">Advertise Reviews</h1>
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
                                Reviewer Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Designation
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Rating
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Reviewer Text
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Advertise
                            </th>
                        </tr>
                    </thead>
                    {/* Table Heading End Here */}
                    {/* Table Data Fetching */}
                    <tbody className="font-lora">
                        {
                            advertisement.map((advertise, index) => <AdvertiseReviewsTable key={advertise._id} review={advertise} index={index} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdveriseReviews;