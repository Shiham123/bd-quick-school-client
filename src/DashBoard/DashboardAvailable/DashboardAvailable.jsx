import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { GrServices } from "react-icons/gr";


const DashboardAvailable = () => {
    return (
        <div className="font-lora">
            <li>
                <Link to="/"
                    className="flex items-center font-lora gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                    <AiOutlineHome className="text-xl" />
                    <span className="text-base font-semibold">Home</span>
                </Link>
            </li>
            <li>
                <Link to="/services"
                    className="flex items-center font-lora gap-[14px] px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                    <GrServices className="text-xl" />
                    <span className="text-base font-semibold">Our Services</span>
                </Link>
            </li>
        </div>
    );
};

export default DashboardAvailable;