
const AdvertiseReviewsTable = ({ item, index, handleAdvertisement, handleRemoveAdvertisement }) => {
    return (
        <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {index + 1}
            </th>

            <td className="px-6 py-4">
                {item.fullname}
            </td>
            <td className="px-6 py-4">
                {item.designation}
            </td>
            <td className="px-6 py-4">
                {item.rating}
            </td>
            <td className="px-6 py-4">
                {item.textarea}
            </td>
            <td className="text-white flex items-center gap-2 mr-1">
                <div className="flex-1">
                    <button
                        onClick={() => handleAdvertisement(item)}
                        disabled={item.advertise == true && true}
                        className="btn btn-outline text-white">
                        Advertise
                    </button>
                </div>
                <div className="flex-1">
                    <button
                        onClick={() => handleRemoveAdvertisement(item)}
                        disabled={item.advertise == true ? false : true}
                        className="btn btn-outline text-white">
                        Remove
                    </button>
                </div>
            </td>

        </tr>
    );
};

export default AdvertiseReviewsTable;