import { ImProfile } from 'react-icons/im';
import { FaUsers } from 'react-icons/fa';
import { GrDashboard } from 'react-icons/gr';
import { MdReviews } from 'react-icons/md';
import { IoBookOutline } from 'react-icons/io5';
import { FaCcMastercard } from 'react-icons/fa';
import { RiAdvertisementLine } from "react-icons/ri";
import { NavLink } from 'react-router-dom';

const DashBoardAdmin = () => {
  return (
    <div className="font-lora">
      {/* Dashboard Route */}
      <ul className="menu mb-8 text-sm">
        <li>
          <NavLink
            to="/dashboard/charts"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <GrDashboard className="text-xl" />
            <span className="text-base font-semibold">Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/adminprofile"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <ImProfile className="text-xl" />
            <span className="text-base font-semibold"> Admin Profile </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/add/services"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <ImProfile className="text-xl" />
            <span className="text-base font-semibold">Add Courses </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/uploadcontent"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <ImProfile className="text-xl" />
            <span className="text-base font-semibold"> Upload Content</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/soldcourses"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <IoBookOutline className="text-xl" />
            <span className="text-base font-semibold"> Sold Courses </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/managepayment"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <FaCcMastercard className="text-xl" />
            <span className="text-base font-semibold"> Manage Payment </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/manageusers"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <FaUsers className="text-xl" />
            <span className="text-base font-semibold"> Manage Users </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/managereviews"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <MdReviews className="text-xl" />
            <span className="text-base font-semibold"> Manage Reviews </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/advertisereviews"
            className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <RiAdvertisementLine className="text-xl" />
            <span className="text-base font-semibold"> Advertise Reviews </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default DashBoardAdmin;
