import { ImProfile } from 'react-icons/im';
import { FaUsers } from 'react-icons/fa';
import { GrDashboard } from 'react-icons/gr';
import { MdReviews } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { FaCcMastercard } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GrServices } from 'react-icons/gr';

const DashBoardAdmin = () => {
  return (
    <div className="font-lora">
      {/* Dashboard Route */}
      <ul className="mb-8 text-sm">
        <li>
          <Link
            to="/dashboard"
            className="flex items-center gap-[14px] px-8 py-4 text-gray-100 bg-blue-600 dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 hover:bg-blue-500"
          >
            <GrDashboard className="text-xl" />
            <span className="text-base font-semibold">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/adminprofile"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <ImProfile className="text-xl" />
            <span className="text-base font-semibold"> Admin Profile </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/manageusers"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <FaUsers className="text-xl" />
            <span className="text-base font-semibold"> Manage Users </span>
          </Link>
        </li>
        {/* Add Services Form */}
        <li>
          <Link
            to="/dashboard/add/services"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <GrServices className="text-xl" />
            <span className="text-base font-semibold"> Add Services </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/manageusers"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <IoBookOutline className="text-xl" />
            <span className="text-base font-semibold"> Sold Courses </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/manageusers"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <FaCcMastercard className="text-xl" />
            <span className="text-base font-semibold"> Manage Payment </span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/managereviews"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <MdReviews className="text-xl" />
            <span className="text-base font-semibold"> Manage Reviews </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardAdmin;
