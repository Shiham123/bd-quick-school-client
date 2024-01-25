import { FiEdit } from "react-icons/fi";
import useAuth from './../../../Hooks/useAuth/useAuth';

const MyProfile = () => {
    const { user } = useAuth()
    return (
        <div className="max-w-6xl mx-auto mt-10 mb-10 p-5 border">
            <div className="flex items-center justify-between border-b-2 border-dashed pb-4">
                <h1 className="text-2xl font-poppins font-semibold text-white">My Profile</h1>
                <FiEdit className="text-white text-2xl" />
            </div>
            <div className="mt-5 flex items-center gap-96">
                <div>
                    <h3 className="text-lg font-lora font-medium text-white/60">Full Name</h3>
                    <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
                </div>
                <div>
                    <h3 className="text-lg font-lora font-medium text-white/60">Email</h3>
                    <h2 className=" text-xl text-white font-lora font-semibold">{user?.email}</h2>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;