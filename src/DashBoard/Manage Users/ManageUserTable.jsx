import { FaBan } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ManageUserTable = ({ user, index }) => {
    return (
        <tr key={user._id} className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
            <th scope="row" className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
                {index + 1}
            </th>
            <td className="px-6 py-4">
                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="Jese image" />
            </td>
            <td className="px-6 py-4">
                {user.name}
            </td>
            <td className="px-6 py-4">
                {user.email}
            </td>
            <td className="px-6 py-4">
                {user.phone}
            </td>
            <td className="px-6 py-4">
                {user.role}
            </td>
            <td className="px-6 py-4">
                <button className="btn btn-outline text-white"><FaBan className="text-xl" /></button>
            </td>
            <td className="px-6 py-4">
                <button className="btn btn-outline text-white"><RiDeleteBin5Line className="text-xl" /></button>
            </td>
        </tr>
    );
};

export default ManageUserTable;