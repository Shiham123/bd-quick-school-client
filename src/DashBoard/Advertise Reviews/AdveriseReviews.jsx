
import { useState } from 'react';
import useAxiosPublic from './../../Hooks/useAxiosPublic/useAxiosPublic';
import useAxiosSecure from './../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';

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
        <div>

        </div>
    );
};

export default AdveriseReviews;