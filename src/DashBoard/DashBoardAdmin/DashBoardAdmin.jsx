import { ImProfile } from "react-icons/im";
import { GrDashboard } from "react-icons/gr";

const DashBoardAdmin = () => {
    return (
        <div className="font-lora">
            <ul className="mb-8 text-sm">
                <li>
                    <a href="#"
                        className="flex items-center gap-[14px] px-8 py-4 text-gray-100 bg-blue-600 dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 hover:bg-blue-500">
                        <GrDashboard className="text-xl" />
                        <span className="text-base font-semibold">Dashboard</span>
                    </a>
                </li>

                <li>
                    <a href="#"
                        className="flex items-center gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                        <ImProfile className="text-xl" />
                        <span className="text-base font-semibold"> Profile </span>

                    </a>

                </li>
            </ul>
        </div>
    );
};

export default DashBoardAdmin;