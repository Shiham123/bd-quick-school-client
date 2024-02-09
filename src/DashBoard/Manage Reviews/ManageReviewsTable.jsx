import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";

const ManageReviewsTable = ({ review, index }) => {
    const axiosPublic = useAxiosPublic()


    const handleAcceptReject = (text, id) => {
        console.log(`/update/status/${id}`)
        const updatedStatus = {
            status: text
        }
        // console.log(updatedStatus)
        axiosPublic.patch(`/api/v2/update/status/${id}`, updatedStatus)
            .then(res => {
                console.log(res.data)
            })
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
                <td className="px-6 py-4">
                    <button onClick={() => handleAcceptReject('accept', review._id)} className="mr-4 btn ">
                        <MdVerified className="text-2xl text-green-600"></MdVerified>
                    </button>
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => handleAcceptReject('reject', review._id)} className="mr-4 btn">
                        <MdOutlineCancel className="text-2xl text-red-600 font-bold "></MdOutlineCancel>
                    </button>
                </td>
            </tr>

        </tr>
    );
};

export default ManageReviewsTable;