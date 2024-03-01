

const DeviceActivityTable = ({ item, index }) => {
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
                {item.date}
            </td>
            <td className="px-6 py-4">
                
            </td>



        </tr>
    );
};

export default DeviceActivityTable;