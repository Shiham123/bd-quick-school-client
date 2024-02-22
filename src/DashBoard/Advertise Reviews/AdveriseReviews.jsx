
import { useEffect, useState } from 'react';
import useAxiosPublic from './../../Hooks/useAxiosPublic/useAxiosPublic';
import useAxiosSecure from './../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import AdvertiseReviewsTable from './AdvertiseReviewsTable';
import toast, { Toaster } from 'react-hot-toast';

const AdveriseReviews = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [ads, setAds] = useState([])

    // Toggle Function
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


    // advertisement data fetching
    const { data: advertisement = [], refetch } = useQuery({
        queryKey: ["advertisement"],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v2/admin/advertisement/reviews');
            return res.data
        }
    })
    // console.log(advertisement)

    // filter the Advertise Data
    useEffect(() => {
        axiosPublic("api/v2/admin/advertise/reviews")
            .then((res) => {
                // console.log(res.data);
                const findTotalAds = res.data.filter((one) => (one.advertise = true));
                setAds(findTotalAds);
            });
    }, [advertisement, axiosPublic]);

    //  add advertisement
    const handleAdvertisement = (review) => {
        if (ads.length >= 6) {
            return toast.error('you cannot add More then 6 Reviews')
        }
        axiosSecure.patch(`/api/v2/admin/advertise/reviews/${review._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                toast.success(`Review Have Been Added`)
            }
        });
    };


    //  remove advertisement
    const handleRemoveAdvertisement = (review) => {
        axiosSecure.patch(`/api/v2/admin/advertiseRemove/reviews/${review._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                toast.success('Review Have Been Removed')
            }
        });
    };


    // Search Functionality By users
    const filteredData = advertisement?.filter((item) => {
        if (item && item.fullname) {
            return item.fullname.toLowerCase().includes(searchTerm.toLowerCase());
        }

        return false;
    });




    return (
        <div className="lg:p-16 min-h-screen">
            <h1 className="text-4xl text-center font-cinzel">Advertise Reviews</h1>
            <hr className="mb-5 border-2 mt-2 border-black w-[360px] mx-auto" />
            <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4  dark:bg-gray-900">
                {/* Dropdown Button end here*/}
                <div>
                    <button onClick={toggleDropdown} id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                        <span className="sr-only">Action button</span>
                        Action
                        <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {/* Dropdown Button end here */}
                    {/* Dropdown menu */}
                    <div id="dropdownAction" className={`z-10 ${isOpen ? '' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accept</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reject</a>
                            </li>
                        </ul>
                    </div>
                    {/* Dropdown Menu End here */}
                </div>
                {/* Search Input */}
                <label htmlFor="table-search" className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" id="table-search-users" className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Users Name" />
                </div>
                {/* Search Input End Here */}
            </div>
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
                            filteredData.map((item, index) => <AdvertiseReviewsTable key={item._id} item={item} index={index} handleAdvertisement={handleAdvertisement} handleRemoveAdvertisement={handleRemoveAdvertisement} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>
            <Toaster />
        </div>
    );
};

export default AdveriseReviews;