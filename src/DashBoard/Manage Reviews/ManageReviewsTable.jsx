import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";

const ManageReviewsTable = ({ review, index, refetch }) => {
    const axiosSecure = useAxiosSecure()

    // Handle Accept Reject function
    const handleAcceptReject = (text, id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: `Yes, ${text} it!`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                // Updated Status
                const updatedStatus = {
                    status: text
                }
                // Patch Method
                const res = await axiosSecure.patch(`/api/v2/update/status/${id}`, updatedStatus)
                console.log(res.data)
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: `Review has been ${text}`,
                        icon: "success"
                    });
                    refetch()
                }
            }
        });
    }


    // Delete a User by id

    const handleDeleteReview = review => {
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
                axiosSecure.delete(`/api/v2/admin/reviews/${review._id}`)
                    .then(res => {
                        // console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Review has been deleted.",
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
                {review.fullname}
            </td>
            <td className="px-6 py-4">
                {review.designation}
            </td>
            <td className="px-6 py-4">
                {review.rating}
            </td>
            <td className="px-6 py-4">
                {review.textarea}
            </td>
            <tr>
                {
                    review?.status === "accepted" || review?.status === "rejected" ? (
                        <td className="px-6 py-4 text-white">{review?.status}</td>
                    ) : (
                        <>
                            <td className="px-6 py-4">
                                <button onClick={() => handleAcceptReject('accepted', review._id)} className="mr-4 btn ">
                                    <MdVerified className="text-2xl text-green-600"></MdVerified>
                                </button>
                            </td>
                            <td className="px-6 py-4">
                                <button onClick={() => handleAcceptReject('rejected', review._id)} className="mr-4 btn">
                                    <MdOutlineCancel className="text-2xl text-red-600 font-bold "></MdOutlineCancel>
                                </button>
                            </td>
                        </>
                    )
                }
                {(review?.status === "accepted" || review?.status === "rejected") && (
                    <td className="px-6 py-4">
                        <button onClick={() => handleDeleteReview(review)} className="btn btn-outline text-white"><RiDeleteBin5Line className="text-xl" /></button>
                    </td>
                )}
            </tr>
            

        </tr>
    );
};

export default ManageReviewsTable;