import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { CiLight, CiDark } from 'react-icons/ci';
import useAuth from './../../../Hooks/useAuth/useAuth';
import { ThemeContext } from '../../../context/Darkmode';
import { useTranslation } from 'react-i18next';
import VerifyAdmin from '../../../Hooks/useAdmin/useAdmin';
import { IoMdNotifications } from 'react-icons/io';
import { FaRegEnvelope, FaRegEnvelopeOpen } from 'react-icons/fa';
import useStudent from '../../../Hooks/useStudent/useStudent';
import useAxiosPublic from '../../../Hooks/useAxiosPublic/useAxiosPublic';
import moment from 'moment';
import './Navbar.css';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');
  const { user, logOut } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isAdmin] = VerifyAdmin();
  const [isStudent] = useStudent();
  const [notification, setNotification] = useState(false);
  const [notifications, setNotifications] = useState({});
  const [unreadNotificationsCount, setUnreadNotificationsCount] = useState(0);
  const location = useLocation();

  // Toggle notification dropdown
  const handleNotification = () => {
    setNotification(!notification);
  };

  // calculateUnreadNotificationsCount Function for count
  const calculateUnreadNotificationsCount = (notifications) => {
    if (Array.isArray(notifications)) {
      const unreadCount = notifications.filter((notification) => !notification.isRead).length;
      setUnreadNotificationsCount(unreadCount);
    }
  };

  // Data Get By User Email
  useEffect(() => {
    axiosPublic(`/api/v1/notification/update/${user?.email}`)
      .then((res) => {
        // console.log(res.data)
        setNotifications(res.data);
        calculateUnreadNotificationsCount(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user?.email, axiosPublic, location.pathname]);

  // calculateUnreadNotificationsCount Function for refetch
  useEffect(() => {
    calculateUnreadNotificationsCount(notifications);
  }, [notifications]);

  // Handle Notification Click Function
  const handleNotificationClick = (_id) => {
    // Update the isRead field locally
    const updatedNotifications = notifications.map((notification) => {
      if (notification._id === _id) {
        return { ...notification, isRead: true };
      }
      return notification;
    });
    setNotifications(updatedNotifications);

    // Make a PATCH request to update isRead field in the backend
    axiosPublic
      .patch(`/api/v1/notification/update/${_id}`, { isRead: true })
      .then((response) => {
        console.log('Notification marked as read:', response.data);
      })
      .catch((error) => {
        console.error('Error marking notification as read:', error);
      });
  };

  // Handle logout
  const handleLogOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .then((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 50
        ? setStickyClass(
            `fixed top-0 transition  bg-gradient-to-b from-[#42275a] to-[#734b6d] dark:from-[#1A1B1F] dark:via-[#1A1B1F] dark:to-[#1A1B1F]   bg-opacity-100 duration-1000 ease-in-out`
          )
        : setStickyClass('');
    }
  };

  // active route style
  const activeRouteStyle = ({ isActive }) => {
    return {
      color: isActive ? '#C3FCF1' : '',
      fontWeight: isActive ? 'bold' : '',
    };
  };

  const handelChangeLng = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('lng', lng);
  };

  return (
    <>
      <div className={`z-50 top-0 mx-auto pt-3  w-full text-white ${stickyClass}`}>
        <div className={`navbar mx-auto flex justify-between items-center`}>
          {/* Nav Logo */}
          <div>
            <div className="dropdown">
              <div>
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <IoMenuSharp className="xs:text-lg sm:text-xl semi-sm:text-2xl" />
                </label>
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm bg-gradient-to-b from-[#42275a] to-[#734b6d] dropdown-content mt-3 z-[1] font-poppins space-y-4 shadow rounded-box w-52"
              >
                {/* this is dropdown navbar in responsive ------------------- */}

                <li>
                  <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/addmissionTest'}>
                    {t('Nav2')}
                  </NavLink>
                </li>
                <li>
                  <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/jobPreparation'}>
                    {t('Nav3')}
                  </NavLink>
                </li>
                <li>
                  <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/contactUs'}>
                    {t('Nav4')}
                  </NavLink>
                </li>
                <li>
                  <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/services'}>
                    {t('Nav5')}
                  </NavLink>
                </li>
                <li onClick={() => setDarkMode((darkMode) => !darkMode)}>{darkMode ? <CiLight size={60} /> : <CiDark size={60} />}</li>
                <div className="flex flex-row gap-3  p-2 ">
                  <button onClick={() => handelChangeLng('en')}> En </button>
                  <button onClick={() => handelChangeLng('bn')}> বাং</button>
                </div>

                {/* this is dropdown navbar in responsive end here ------------------- */}
              </ul>
            </div>
            <NavLink to="/" className="flex items-center justify-center normal-case lg:pl-2">
              <Player
                className="xs:w-6 sm:w-10 semi-sm:w-14 md:w-16"
                autoplay
                loop
                src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
              ></Player>
              <span className="text-white font-semibold hover:" style={{ whiteSpace: 'nowrap' }}>
                <span className="xs:text-sm sm:text-base semi-sm:text-xl text-white font-bold font-cinzel">BD Quick School </span>
              </span>
            </NavLink>

            {/* Responsive Notification */}
            <span tabIndex={0} onClick={handleNotification} className="ml-4 mr-4 lg:hidden">
              <div className="relative">
                <IoMdNotifications className="sm:text-2xl cursor-pointer md:ml-56"></IoMdNotifications>
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    {unreadNotificationsCount}
                  </span>
                )}
              </div>
              {/* Dropdown start */}
              <div
                tabIndex={0}
                className={
                  notification
                    ? ' xs:w-72 sm:w-80 semi-sm:w-96 bg-gradient-to-b from-[#42275a] to-[#734b6d] h-96 overflow-y-auto custom-scrollbar absolute right-[20px] z-[1] top-24  border rounded-md py-4 dark:py-0 ease-in duration-300 border-[#e9f0ec]'
                    : 'w-96 primary-bg overflow-hidden absolute right-0 -top-[500px] py-10 z-10 ease-in duration-300 h-96'
                }
              >
                <h1 className="border-b border-b-white px-4 pb-4 dark:pt-4 font-cinzel font-semibold dark:bg-black dark:text-white">
                  Notification
                </h1>
                {Array.isArray(notifications) && notifications.length > 0 ? (
                  notifications.map((notification, index) => (
                    <Link key={index} to={notification.redirect}>
                      <div
                        onClick={() => handleNotificationClick(notification._id)}
                        className="px-4 py-2 border-b border-b-white hover:bg-gradient-to-b from-[#42275a] to-[#734b6d] dark:bg-black dark:text-white  font-lora"
                      >
                        <p className="text-white">{notification.title} has been released</p>
                        <div className="flex justify-between items-center">
                          <p className="text-[10px]">{moment(notification.date, 'YYYY MM DD HH mm').fromNow()}</p>
                          {notification.isRead ? (
                            <p className="w-5 ">
                              <FaRegEnvelopeOpen />
                            </p>
                          ) : (
                            <p className="w-5">
                              <FaRegEnvelope />
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))
                ) : (
                  <p className="px-4 pt-4 font-lora">No notifications found</p>
                )}
              </div>
            </span>
            {/* Dropdown end */}
          </div>

          {/* NavLink */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu dropdown-content menu-horizontal px-1 justify-center items-center flex text-base font-poppins">
              {/* this is not drop down */}
              <li>
                <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/addmissionTest'}>
                  {t('Nav2')}
                </NavLink>
              </li>
              <li>
                <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/jobPreparation'}>
                  {t('Nav3')}
                </NavLink>
              </li>
              <li>
                <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/contactUs'}>
                  {t('Nav4')}
                </NavLink>
              </li>
              <li>
                <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/services'}>
                  {t('Nav5')}
                </NavLink>
              </li>
              {isStudent && (
                <li>
                  <NavLink style={activeRouteStyle} className=" hover:text-[#deb2ac] uppercase font-medium" to={'/MyCourses'}>
                    {t('MyCourses')}
                  </NavLink>
                </li>
              )}
              {/* Dropdown for Notification Large device*/}
              <span tabIndex={0} onClick={handleNotification} className="ml-4 mr-4 ">
                <div className="relative">
                  <IoMdNotifications className="text-2xl cursor-pointer"></IoMdNotifications>
                  {unreadNotificationsCount > 0 && (
                    <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                      {unreadNotificationsCount}
                    </span>
                  )}
                </div>
                {/* Dropdown start */}
                <div
                  tabIndex={0}
                  className={
                    notification
                      ? 'w-96 bg-gradient-to-b from-[#42275a] to-[#734b6d] h-96 overflow-y-auto custom-scrollbar absolute right-[240px] z-[1] top-24  border rounded-md py-4 dark:py-0 ease-in duration-300 border-[#e9f0ec]'
                      : 'w-96 primary-bg overflow-hidden absolute right-0 -top-[500px] py-10 z-10 ease-in duration-300 h-96'
                  }
                >
                  <h1 className="border-b border-b-white px-4 pb-4 dark:pt-4 font-cinzel font-semibold dark:bg-black dark:text-white">
                    Notification
                  </h1>
                  {Array.isArray(notifications) && notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                      <Link key={index} to={notification.redirect}>
                        <div
                          onClick={() => handleNotificationClick(notification._id)}
                          className="px-4 py-2 border-b border-b-white hover:bg-gradient-to-b from-[#42275a] to-[#734b6d] dark:bg-black dark:text-white  font-lora"
                        >
                          <p className="text-white">{notification.title} has been released</p>
                          <div className="flex justify-between items-center">
                            <p className="text-[10px]">{moment(notification.date, 'YYYY MM DD HH mm').fromNow()}</p>
                            {notification.isRead ? (
                              <p className="w-5 ">
                                <FaRegEnvelopeOpen />
                              </p>
                            ) : (
                              <p className="w-5">
                                <FaRegEnvelope />
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p className="px-4 pt-4 font-lora">No notifications found</p>
                  )}
                </div>
              </span>
              {/* Dropdown end */}

              {/* -------end here navbar without drop down */}
              {/* dak lite  */}
              <li className=" mr-4" onClick={() => setDarkMode((darkMode) => !darkMode)}>
                {darkMode ? <CiLight size={70} /> : <CiDark size={70} />}
              </li>
              {/* translet  */}
            </ul>
            <li className="flex justify-between gap-3 border p-2 ">
              <button onClick={() => handelChangeLng('en')}> En </button>
              <button onClick={() => handelChangeLng('bn')}> বাং</button>
            </li>

            {/* <NavbarBgChange /> */}
          </div>

          {/* background color change */}

          {/* Profile */}
          {user ? (
            <>
              <div className="dropdown dropdown-end tooltip tooltip-left">
                <div className="flex items-center gap-3 lg:pr-1">
                  <div className="hidden md:block">
                    <h1 className="font-lora font-bold text-base">{user?.displayName}</h1>
                  </div>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ">
                      <img src={user?.photoURL} alt="userPhoto" />
                    </div>
                  </label>
                </div>
                {/* Dropdown Menu */}
                <ul
                  tabIndex={0}
                  className=" menu-sm dropdown-content mt-3 z-[1] shadow border border-white rounded-lg xs:w-72 sm:w-80 px-10  text-white btn-toggle-style bg-gradient-to-b from-[#42275a] to-[#734b6d] overflow-y-auto h-[420px] md:h-[440px] lg:h-auto lg:overflow-hidden"
                >
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar mb-28 mt-5">
                    <div className="w-24 rounded-full">
                      <img src={user?.photoURL} alt="userPhoto" />
                    </div>
                    {/* View Profile Button */}
                    <h1 className="font-lora font-bold text-base mb-2" style={{ whiteSpace: 'nowrap' }}>
                      {user?.displayName}
                    </h1>
                    <Link to={`/myprofile`}>
                      <button className="btn btn-outline text-white" style={{ whiteSpace: 'nowrap' }}>
                        View Profile
                      </button>
                    </Link>
                  </label>
                  {/* Dropdown Nav Start Here */}
                  <NavLink to={`/MyCourses`}>
                    <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                      My Courses
                    </li>
                  </NavLink>
                  <hr />
                  <Link to={'/bookmark'}>
                    <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                      Bookmark
                    </li>
                  </Link>
                  <hr />

                  <Link to="/paymenthistory">
                    <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                      Payment History
                    </li>
                  </Link>
                  <hr />
                  {/* <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Payment Management
                  </li> */}
                  {/* <hr /> */}
                  {/* <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Student Analytics
                  </li> */}
                  <hr />
                  <Link to="/announcements">
                    <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                      Announcement
                    </li>
                  </Link>
                  <hr />

                  {isAdmin && (
                    <>
                      <NavLink to="/dashboard">
                        <li className="hover:font-semibold  py-1 text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                          Dashboard
                        </li>
                      </NavLink>
                    </>
                  )}

                  <hr />

                  <div className="hover:font-semibold pt-2 pb-3 text-start font-lora font-medium ">
                    <button
                      onClick={handleLogOut}
                      className="hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000"
                    >
                      Logout
                    </button>
                  </div>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <NavLink to="/login">
                <button className="relative z-10 md:text-lg rounded-lg border border-white px-4 py-2 btn-outline text-white font-poppins">
                  Join Us
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
