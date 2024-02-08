import { MdVerified } from "react-icons/md";
import { MdOutlineCancel } from 'react-icons/md';

const ManageReviewsTable = ({ review, index }) => {
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
            <tr>
                <td className="px-6 py-4">
                    <button className="mr-4 btn ">
                        <MdVerified className="text-2xl text-green-600"></MdVerified>
                    </button>
                </td>
                <td className="px-6 py-4">
                    <button className="mr-4 btn">
                        <MdOutlineCancel className="text-2xl text-red-600 font-bold "></MdOutlineCancel>
                    </button>
                </td>
            </tr>

        </tr>
    );
};

export default ManageReviewsTable;