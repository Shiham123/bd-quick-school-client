import { FiEdit } from "react-icons/fi";
import useAuth from './../../../Hooks/useAuth/useAuth';
import { useState } from "react";
import EditUserProfile from "../../EditUserProfile/EditUserProfile";

const MyProfile = () => {
    const { user } = useAuth()
    const [isEditOpen, setIsEditOpen] = useState(false);

    // Function to handle edit button click
    const handleEditClick = () => {
        setIsEditOpen((prevIsEditOpen) => !prevIsEditOpen);
    };

    // Function to handle closing the edit drawer/modal
    const handleCloseEdit = () => {
        setIsEditOpen(false);
    };

    return (
        <div className="lg:max-w-5xl mx-auto mt-10 mb-10 p-5 bg-gradient-to-b from-[#42275a] to-[#734b6d] rounded-lg">
            {/* My Profile */}
            <div className="flex items-center justify-between border-b-2 border-dashed pb-4">
                <h1 className="text-2xl font-poppins font-semibold text-white">My Profile</h1>
                <button onClick={handleEditClick}>
                    <FiEdit className="text-white text-2xl" />
                </button>
            </div>
            {isEditOpen ? (
                // Edit profile form
                <div className="edit-drawer">
                    <EditUserProfile user={user} onClose={handleCloseEdit} />
                </div>
            ) : (
                // Profile information
                <div>
                    <div className=" mt-8 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-96">
                        <div>
                            <h3 className="text-lg font-lora font-medium text-white/60">Full Name</h3>
                            <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
                        </div>
                        <div>
                            <h3 className="text-lg font-lora font-medium text-white/60">Email</h3>
                            <h2 className=" text-xl text-white font-lora font-semibold">{user?.email}</h2>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-[375px]">
                        <div>
                            <h3 className="text-lg font-lora font-medium text-white/60">Student ID</h3>
                            <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
                        </div>
                        <div>
                            <h3 className="text-lg font-lora font-medium text-white/60">Mobile Number</h3>
                            <h2 className=" text-xl text-white font-lora font-semibold">{user?.phone}</h2>
                        </div>
                    </div>
                </div>
            )}
            {/* Device Activity */}
            <div className="flex items-center justify-between border-b-2 border-dashed pb-4 mt-16 mb-10">
                <h1 className="text-2xl font-poppins font-semibold text-white">Device Activity</h1>
            </div>
        </div>
    );
};

export default MyProfile;