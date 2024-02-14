import { IoMdEye } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin5Line } from "react-icons/ri";

const ManageAnnouncementsTable = ({ announcement, index, refetch }) => {
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
                <button className="btn btn-outline text-white"><RiDeleteBin5Line className="text-xl" /></button>
            </td>
        </tr>
    );
};

export default ManageAnnouncementsTable;