import { FiEdit } from "react-icons/fi";
import useAuth from './../../../Hooks/useAuth/useAuth';

const MyProfile = () => {
    const { user } = useAuth()
    return (
        <div className="lg:max-w-6xl mx-auto mt-10 mb-10 p-5 bg-gradient-to-b from-[#42275a] to-[#734b6d] rounded-lg">
            <div className="flex items-center justify-between border-b-2 border-dashed pb-4">
                <h1 className="text-2xl font-poppins font-semibold text-white">My Profile</h1>
                <FiEdit className="text-white text-2xl" />
            </div>
            <div className=" mt-8 lg:mt-5 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-96">
                <div>
                    <h3 className="text-lg font-lora font-medium text-white/60">Full Name</h3>
                    <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
                </div>
                <div>
                    <h3 className="text-lg font-lora font-medium text-white/60">Email</h3>
                    <h2 className=" text-xl text-white font-lora font-semibold">{user?.email}</h2>
                </div>
            </div>
            <div className="mt-8 md:mt-5 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-96">
                <div>
                    <h3 className="text-lg font-lora font-medium text-white/60">Full Name</h3>
                    <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
                </div>
                <div>
                    <h3 className="text-lg font-lora font-medium text-white/60">Mobile Number</h3>
                    <h2 className=" text-xl text-white font-lora font-semibold">{user?.phone}</h2>
                </div>
            </div>
            <div className="flex items-center justify-between border-b-2 border-dashed pb-4 mt-16 mb-10">
                <h1 className="text-2xl font-poppins font-semibold text-white">Device Activity</h1>
            </div>
        </div>
    );
};

export default MyProfile;