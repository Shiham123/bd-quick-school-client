import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/UseAxiosSecure/UseAxiosSecure";

const ManageReviewsTable = ({ review, index, refetch }) => {
    const axiosSecure = useAxiosSecure()
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
                const updatedStatus = {
                    status: text
                }
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
            </tr>

        </tr>
    );
};

export default ManageReviewsTable;