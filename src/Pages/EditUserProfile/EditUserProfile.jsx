import { FaMobileAlt } from 'react-icons/fa';
import { FiMail, FiUpload } from 'react-icons/fi';
import { GoPerson } from 'react-icons/go';
import { PiStudent } from 'react-icons/pi';
import { BsCardImage } from 'react-icons/bs';
import { CiLock } from 'react-icons/ci';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../../Hooks/useAuth/useAuth';

// image hosting api
const image_Hosting_Key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_Hosting_Api = `https://api.imgbb.com/1/upload?key=${image_Hosting_Key}`;

const EditUserProfile = (props) => {
  const { name, phone, photoURL, email } = props;
  const { register, handleSubmit } = useForm();
  const { t } = useTranslation();
  const { changePassword } = useAuth();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [confirmationError, setConfirmationError] = useState(null);

  const onSubmit = async (data) => {
    console.log(data);
  };

  // Change password Function Call
  const handleChangePassword = async () => {
    try {
      setPasswordError(null);
      setConfirmationError(null);
      if (newPassword !== confirmNewPassword) {
        // Handle password mismatch
        toast.error("New password and confirm password don't match");
        setConfirmationError("New password and confirm password don't match");
        return;
      }

      // Call the changePassword function from useAuth hook
      await changePassword(currentPassword, newPassword);

      // Password changed successfully
      toast.success('Password changed successfully');

      // Reset the input fields
      setCurrentPassword('');
      setNewPassword('');
      setConfirmNewPassword('');
    } catch (error) {
      // Handle error (incorrect current password, Firebase Auth error)
      toast.error('Error changing password:', error.message);
      setPasswordError('Current password is incorrect');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1st line*/}
        <div className=" mt-8 flex flex-col md:flex-row items-center gap-5 lg:gap-10">
          {/* Full Name */}
          <div>
            <div className="flex items-center gap-1 mb-1 font-lora">
              <GoPerson className="text-xl text-white" />
              <h3 className="text-lg  font-medium text-white">{t('FullName')}</h3>
            </div>
            <input
              {...register('name')}
              className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none"
              type="text"
              id=""
              placeholder="Name Here"
              defaultValue={name}
            />
          </div>
          {/* Email */}
          <div>
            <div className="flex items-center gap-1 mb-1 font-lora">
              <FiMail className="text-xl text-white" />
              <h3 className="text-lg  font-medium text-white">{t('Email')}</h3>
            </div>
            <input
              className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none"
              type="text"
              id=""
              defaultValue={email}
              readOnly
            />
          </div>
        </div>
        {/* 2nd line */}
        <div className=" mt-8 flex flex-col md:flex-row items-center gap-5 lg:gap-10">
          {/* Student ID */}
          <div>
            <div className="flex items-center gap-1 mb-1 font-lora">
              <PiStudent className="text-xl text-white" />
              <h3 className="text-lg  font-medium text-white">{t('StudentID')}</h3>
            </div>
            <input
              className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none"
              type="text"
              id=""
              placeholder="Name Here"
            />
          </div>
          {/* Mobile Number */}
          <div>
            <div className="flex items-center gap-1 mb-1 font-lora">
              <FaMobileAlt className="text-xl text-white" />
              <h3 className="text-lg  font-medium text-white">{t('MobileNumber')}</h3>
            </div>
            <input
              {...register('phone')}
              className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none"
              type="text"
              id=""
              defaultValue={phone}
            />
          </div>
        </div>
        {/* 3rd Line */}
        <div className=" mt-8  gap-5 lg:gap-10">
          {/* Profile Image */}
          <div>
            <div className="flex items-center gap-1 mb-1 font-lora">
              <BsCardImage className="text-xl text-white" />
              <h3 className="text-lg  font-medium text-white">{t('ProfileImage')}</h3>
            </div>

            <div className="font-lora">
              <label htmlFor="dropzone-file" className="flex items-center gap-1">
                <FiUpload className="text-lg text-white" />
                <h3 className="text-base  font-medium text-white">{t('ChangeProfileImage')}</h3>
              </label>
              <input {...register('photoURL')} id="dropzone-file" type="file" className="hidden" />
              <div className="mt-2">
                <img className="object-cover w-28 h-28 rounded-full" src={photoURL} alt="" />
              </div>
              <div className="flex justify-end mt-4">
                <button className="border px-3 py-1 text-white rounded-md text-base btn-grad ">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
      {/* Password */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-b-white/30 pb-4 mt-16 mb-10">
        <h1 className="text-2xl font-poppins font-semibold text-white">{t('Password')}</h1>
      </div>
      {/* Current Password */}
      <div className=" mt-8 flex flex-col md:flex-row items-center gap-5 lg:gap-10">
        <div>
          <div className="flex items-center gap-1 mb-1 font-lora">
            <CiLock className="text-xl text-white" />
            <h3 className="text-lg  font-medium text-white">{t('CurrentPassword')}</h3>
          </div>
          <input
            className="py-2 w-96 md:w-[723px] lg:w-[981px] pl-3 rounded-lg outline-none border-[#eaaaff] text-[#eaaaff]"
            type="password"
            name=""
            id=""
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          {/* Show Error Current Password Is wronf */}
          {passwordError && <div className="text-red-500 mt-2">{passwordError}</div>}
        </div>
      </div>
      {/* New Password */}
      <div className=" mt-8 flex flex-col md:flex-row items-center gap-5 lg:gap-10">
        <div>
          <div className="flex items-center gap-1 mb-1 font-lora">
            <CiLock className="text-xl text-white" />
            <h3 className="text-lg  font-medium text-white">{t('NewPassword')}</h3>
          </div>
          <input
            className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none border-[#eaaaff] text-[#eaaaff]"
            type="password"
            name=""
            id=""
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        {/* Retype New Password */}
        <div>
          <div className="flex items-center gap-1 mb-1 font-lora">
            <CiLock className="text-xl text-white" />
            <h3 className="text-lg  font-medium text-white">{t('ConfirmNewPassword')}</h3>
          </div>
          <input
            className="py-2 w-96 md:w-[353px] lg:w-[470px] pl-3 rounded-lg outline-none border-[#eaaaff] text-[#eaaaff]"
            type="password"
            name=""
            id=""
            placeholder="Retype Password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>
      </div>
      {/* Show Error The password and confirmation password do not match.*/}
      <div className="text-center md:ml-[365px] lg:ml-[395px]">
        {confirmationError && <div className="text-red-500 mt-2">{confirmationError}</div>}
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={handleChangePassword}
          type="submit"
          className="border px-3 py-1 text-white rounded-md text-base disabled btn-grad "
        >
          Change Password
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default EditUserProfile;
