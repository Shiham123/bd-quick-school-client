import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { FaBan } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


const ManageUsers = () => {


    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/v1/users')
            return res.data
        }
    })



    return (
        <div className="lg:p-16 min-h-screen">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100">
                    <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Number
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Photo
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                User Phone
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Banned
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id} className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                                    {index + 1}
                                </th>
                                <td className="px-6 py-4">
                                    <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="Jese image" />
                                </td>
                                <td className="px-6 py-4">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4">
                                    {user.email}
                                </td>
                                <td className="px-6 py-4">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-4">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4">
                                    <button className="btn btn-outline text-white"><FaBan className="text-xl" /></button>
                                </td>
                                <td className="px-6 py-4">
                                    <button className="btn btn-outline text-white"><RiDeleteBin5Line className="text-xl" /></button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;