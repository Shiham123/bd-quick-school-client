import { FaBook, FaHeart, FaSuperpowers } from "react-icons/fa";
import { LiaAdSolid } from "react-icons/lia";

import { MdOutlineDashboard } from "react-icons/md";
import { Link } from "react-router-dom";


const DashBoardAdmin = () => {
    return (
        <div>
            <li>
                <Link
                    to="adminProfile"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <MdOutlineDashboard className="text-2xl"></MdOutlineDashboard>
                    </span>
                    <span>Admin Profile</span>
                </Link>
            </li>
            <li>
                <Link
                    to="manageUsers"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaHeart className="text-2xl"></FaHeart>
                    </span>
                    <span>Manage Users</span>
                </Link>
            </li>
            <li>
                <Link
                    to="manageProperties"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaSuperpowers className="text-2xl"></FaSuperpowers>
                    </span>
                    <span>Manage Properties</span>
                </Link>
            </li>
            <li>
                <Link
                    to="advertiseProperties"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <LiaAdSolid className="text-2xl"></LiaAdSolid>
                    </span>
                    <span>Advertise Property</span>
                </Link>
            </li>
            <li>
                <Link
                    to="reportedProperties"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <LiaAdSolid className="text-2xl"></LiaAdSolid>
                    </span>
                    <span>Reported Property</span>
                </Link>
            </li>
            <li>
                <Link
                    to="manageReviews"
                    className="flex items-center px-6 py-4 text-zinc-950 dark:text-gray-400 group dark:hover:bg-gray-700  hover:bg-gray-600 hover:rounded-md">
                    <span className="inline-block mr-3">
                        <FaBook className="text-2xl"></FaBook>
                    </span>
                    <span>Manage Reviews</span>
                </Link>
            </li>
        </div>
    );
};

export default DashBoardAdmin;