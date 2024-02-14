import { IoMdEye } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";

const ManageAnnouncementsTable = ({ announcement, index, refetch }) => {

    const axiosSecure = useAxiosSecure()


    // Delete a Announcement by id

    const handleDeleteAnnouncement = announcement => {
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
                axiosSecure.delete(`/api/v1/admin/announcements/${announcement._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Announcement has been deleted.",
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
                {announcement.announcementtitle}
            </td>
            <td className="px-6 py-4">
                {announcement.announcemensubdescription}
            </td>
            <td className="px-6 py-4">
                <button className="btn btn-outline text-white"><IoMdEye className="text-xl" /></button>
            </td>
            <td className="px-6 py-4">
                <button className="btn btn-outline text-white"><CiEdit className="text-xl" /></button>
            </td>
            <td className="px-6 py-4">
                <button onClick={() => { handleDeleteAnnouncement(announcement) }} className="btn btn-outline text-white"><RiDeleteBin5Line className="text-xl" /></button>
            </td>
        </tr>
    );
};

export default ManageAnnouncementsTable;