import { FaBan } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import Swal from "sweetalert2";

const ManageUserTable = ({ user, index, refetch }) => {
    const axiosSecure = useAxiosSecure()


    // Delete a User by id

    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/api/v1/userid/${user._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
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
                <button onClick={() => handleDeleteUser(user)} className="btn btn-outline text-white"><RiDeleteBin5Line className="text-xl" /></button>
            </td>
        </tr>
    );
};

export default ManageUserTable;