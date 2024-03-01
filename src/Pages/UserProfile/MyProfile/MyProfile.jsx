import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import useAuth from '../../../Hooks/useAuth/useAuth';
import useAxiosSecure from '../../../Hooks/UseAxiosSecure/UseAxiosSecure';
import { useTranslation } from 'react-i18next';
import EditUserProfile from '../../EditUserProfile/EditUserProfile';
import DeviceActivity from '../../Device Activity/DeviceActivity';

const MyProfile = () => {
  const [id, setId] = useState(''),
    [name, setName] = useState(''),
    [studentId, setStudentId] = useState(''),
    [phone, setPhone] = useState(''),
    [email, setEmail] = useState(''),
    [photoUrl, setPhotoUrl] = useState(null),
    [role, setRole] = useState('');

  const [isEditModal, setIsEditModal] = useState(false);
  const { t } = useTranslation();

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: profileData } = useQuery({
    queryKey: ['profileData', user?.email],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/v1/useremail/${user.email}`);
      return response.data;
    },
  });

  useEffect(() => {
    if (profileData && profileData.length > 0) {
      const { _id, name, phone, studentId, email, photoURL, role } = profileData[0];
      setId(_id),
        setName(name),
        setStudentId(studentId)
      setPhone(phone),
        setEmail(email),
        setPhotoUrl(photoURL),
        setRole(role);
    }
  }, [profileData]);

  const handleEditToggle = () => {
    setIsEditModal((prevIsEditModal) => !prevIsEditModal);
  };

  return (
    <div className="lg:max-w-5xl dark:text-white dark:bg-[#1A1B1F]  mx-auto mt-10 mb-10 p-5 bg-gradient-to-b from-[#42275a] to-[#734b6d] rounded-lg">
      {/* My Profile */}
      <div className="flex items-center justify-between border-b-2 border-dashed border-b-white/30 pb-4">
        <h1 className="text-2xl font-poppins font-semibold text-white"> {t('myprofile')}</h1>
        <button onClick={handleEditToggle}>
          <FiEdit className="text-white text-2xl" />
        </button>
      </div>

      {isEditModal ? (
        <div className="edit-drawer">
          <EditUserProfile
            id={id}
            name={name}
            studentId={studentId}
            email={email}
            photoURL={photoUrl}
            phone={phone}
            role={role}
          />
        </div>
      ) : (
        <div>
          {/* 1st Line */}
          <div className=" mt-8 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-96">
            {/* Full Name */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('FullName')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{name}</h2>
            </div>
            {/* Email */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('Email')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{email}</h2>
            </div>
          </div>
          {/* 2nd Line */}
          <div className="mt-8 flex flex-col md:flex-row lg:items-center gap-8 md:gap-64 lg:gap-[450px]">
            {/* Student ID */}
            <div>
              <h3 className="text-lg font-lora font-medium text-white/60">{t('StudentID')}</h3>
              <h2 className=" text-xl text-white font-lora font-semibold">{studentId}</h2>
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
      <div>
        <DeviceActivity />
      </div>
    </div>
  );
};

export default MyProfile;
