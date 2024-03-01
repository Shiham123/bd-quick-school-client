

const DeviceActivityTable = ({ item, index }) => {
    return (
        <tr className="border border-b  ">
            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100 border-collapse border">
                {index + 1}
            </th>

            <td className="px-6 py-4 border-collapse border">
                {item.os}
            </td>
            <td className="px-6 py-4 border border-collapse">
                {item.browser}
            </td>
            <td className="px-6 py-4 border border-collapse">
                {item.date}
            </td>
            <td className="px-6 py-4 border border-collapse">
                
            </td>



        </tr>
    );
};

export default DeviceActivityTable;