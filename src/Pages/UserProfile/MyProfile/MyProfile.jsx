import { FiEdit } from 'react-icons/fi';
import useAuth from './../../../Hooks/useAuth/useAuth';
import { useState } from 'react';
import EditUserProfile from '../../EditUserProfile/EditUserProfile';
import { useLoaderData } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MyProfile = () => {
  const { user } = useAuth();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const users = useLoaderData();
  console.log(users);
  const { _id, name, phone, email, photoURL } = users[0];
  const { t, i18n } = useTranslation();
  console.log(email);

  // Function to handle edit button click
  const handleEditClick = () => {
    setIsEditOpen((prevIsEditOpen) => !prevIsEditOpen);
  };

  // Function to handle closing the edit drawer/modal
  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <div className="lg:max-w-5xl dark:text-white dark:bg-[#1A1B1F]  mx-auto mt-10 mb-10 p-5 bg-gradient-to-b from-[#42275a] to-[#734b6d] rounded-lg">
      {/* My Profile */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-b-white/30 pb-4">
        <h1 className="text-2xl font-poppins font-semibold text-white"> {t('myprofile')}</h1>
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
          {/* 1st Line */}
          <div className=" mt-8 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-96">
            {/* Full Name */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('FullName')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
            </div>
            {/* Email */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('Email')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{user?.email}</h2>
            </div>
          </div>
          {/* 2nd Line */}
          <div className="mt-8 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-96">
            {/* Student ID */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('StudentID')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{user?.displayName}</h2>
            </div>
            {/* Mobile Number */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('MobileNumber')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{phone}</h2>
            </div>
          </div>
        </div>
      )}
      {/* Device Activity */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-b-white/30 pb-4 mt-16 mb-10">
        <h1 className="text-2xl font-poppins font-semibold text-white">Device Activity</h1>
      </div>
    </div>
  );
};

export default MyProfile;
