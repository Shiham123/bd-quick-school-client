

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

        </tr>
    );
};

export default ManageReviewsTable;