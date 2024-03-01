import moment from "moment";


const DeviceActivityTable = ({ item, index }) => {
    // Parse the date string using Moment.js
    const date = moment(item.date, 'YYYY MM DD HH mm');

    // Format the date in the desired format
    const formattedDate = date.format('DD-MM-YYYY hh:mm A');
    

    return (
        <tr className=" border-b  ">
            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {index + 1}
            </th>

            <td className="px-6 py-4">
                {item.os}
            </td>
            <td className="px-6 py-4">
                {item.browser}
            </td>
            <td className="px-6 py-4">
                {formattedDate}
            </td>




        </tr>
    );
};

export default DeviceActivityTable;