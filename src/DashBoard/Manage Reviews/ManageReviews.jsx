

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import ManageReviewsTable from "./ManageReviewsTable";
import { useState } from "react";


const ManageReviews = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")
    const [reviewType, setReviewType] = useState("");
    const axiosSecure = useAxiosSecure()

    // Toggle Function
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    // Function to handle dropdown selection
    const handleDropdownSelection = (type) => {
        setReviewType(type === 'default' ? '' : type);
        setIsOpen(false);
        // Close dropdown after selection
    };

    // User Data fetching By tanstack query
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews', reviewType],
        queryFn: async () => {
            let url = '/api/v2/admin/reviews';
            if (reviewType) {
                url += `?type=${reviewType}`; // Add type to the URL if userType is provided
            }
            const res = await axiosSecure.get(url)
            return res.data
        }
    })



    // Search Functionality By users
    const filteredData = reviews?.filter((item) => {
        if (item && item.fullname) {
            return item.fullname.toLowerCase().includes(searchTerm.toLowerCase());
        }

        return false;
    });





    return (
        <div className="lg:p-16 min-h-screen">
            <h1 className="xs:text-2xl semi-sm:text-3xl md:text-4xl text-center font-cinzel">Manage Reviews</h1>
            <hr className="mb-5 border-2 mt-2 border-black xs:w-[230px] semi-sm:w-[280px] md:w-[330px] mx-auto" />
            <div className="flex ml-2 md:ml-0 md:items-center justify-between flex-col md:flex-row flex-wrap space-y-4 md:space-y-0 py-4  dark:bg-gray-900">
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
                                <button onClick={() => handleDropdownSelection('default')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Default</button>
                            </li>
                            <li>
                                <button onClick={() => handleDropdownSelection('Accept')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accept</button>
                            </li>
                            <li>
                                <button onClick={() => handleDropdownSelection('Reject')} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reject</button>
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
                    <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" id="table-search-users" className="block py-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg xs:w-72 sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for Users Name" />
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
                                Status
                            </th>
                        </tr>
                    </thead>
                    {/* Table Heading End Here */}
                    {/* Table Data Fetching */}
                    <tbody className="font-lora">
                        {
                            filteredData.map((review, index) => <ManageReviewsTable key={review._id} review={review} index={index} refetch={refetch} />)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageReviews;