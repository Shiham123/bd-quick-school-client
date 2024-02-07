import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { CiLight, CiDark } from 'react-icons/ci';
import useAuth from './../../../Hooks/useAuth/useAuth';
import { ThemeContext } from '../../../context/Darkmode';
import { useTranslation } from 'react-i18next';
import VerifyAdmin from '../../../Hooks/useAdmin/useAdmin';
import NavbarBgChange from './NavbarBgChange';

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('');
  const { user, logOut } = useAuth();
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [isAdmin] = VerifyAdmin();

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

  
  // transletor handelr
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
                  <IoMenuSharp className="text-2xl" />
                </label>
              </div>
              <ul
                tabIndex={0}
                className="menu  menu-sm bg-gradient-to-b from-[#42275a] to-[#734b6d] dropdown-content mt-3 z-[1] font-poppins space-y-4 shadow rounded-box w-52"
              >
                {/* this is dropdown navbar in responsive ------------------- */}

                <li>
                  <details>
                    <summary> {t('Nav1')}</summary>
                    <ul className="text-white">
                      <li>
                        <NavLink
                          to={'/Photoshop'}
                          style={activeRouteStyle}
                          className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                        >
                          {t('skill1')}
                        </NavLink>
                        <NavLink
                          to={'/JavaScript'}
                          style={activeRouteStyle}
                          className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                        >
                          {t('skill2')}
                        </NavLink>
                        <NavLink
                          to={'/HTML'}
                          style={activeRouteStyle}
                          className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                        >
                          {t('skill3')}
                        </NavLink>
                        <NavLink
                          to={'/CSS3'}
                          style={activeRouteStyle}
                          className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                        >
                          {t('skill4')}
                        </NavLink>
                        <NavLink
                          to={'/React'}
                          style={activeRouteStyle}
                          className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                        >
                          {t('skill5')}
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </li>

                <li>
                  <NavLink
                    style={activeRouteStyle}
                    className=" hover:text-[#deb2ac] uppercase font-medium"
                    to={'/admission-test'}
                  >
                    {t('Nav2')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={activeRouteStyle}
                    className=" hover:text-[#deb2ac] uppercase font-medium"
                    to={'/job-Preparation'}
                  >
                    {t('Nav3')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={activeRouteStyle}
                    className=" hover:text-[#deb2ac] uppercase font-medium"
                    to={'/online-batch'}
                  >
                    {t('Nav4')}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={activeRouteStyle}
                    className=" hover:text-[#deb2ac] uppercase font-medium"
                    to={'/services'}
                  >
                    {t('Nav5')}
                  </NavLink>
                </li>
                <li onClick={() => setDarkMode((darkMode) => !darkMode)}>
                  {darkMode ? <CiLight size={60} /> : <CiDark size={60} />}
                </li>
                <div className="flex flex-row gap-3  p-2 ">
                  <button onClick={() => handelChangeLng('en')}> En </button>
                  <button onClick={() => handelChangeLng('bn')}> বাং</button>
                </div>

                {/* this is dropdown navbar in responsive end here ------------------- */}
              </ul>
            </div>
            <NavLink to="/" className="flex items-center justify-center normal-case lg:pl-2">
              <Player
                className="w-16"
                autoplay
                loop
                src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
              ></Player>
              <span className="text-white font-semibold hover:">
                <span className="text-xl text-white font-bold font-cinzel">BD Quick School </span>
              </span>
            </NavLink>
          </div>

          {/* NavLink */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu dropdown-content menu-horizontal px-1 justify-center items-center flex text-base font-poppins">
              {/* ---------- navbar route without dropdown------------ */}

              <li>
                <details>
                  <summary> {t('Nav1')} </summary>
                  <ul className="text-white">
                    <li>
                      <NavLink
                        to={'/Photoshop'}
                        style={activeRouteStyle}
                        className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                      >
                        {t('skill1')}
                      </NavLink>
                      <NavLink
                        to={'/JavaScript'}
                        style={activeRouteStyle}
                        className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                      >
                        {t('skill2')}
                      </NavLink>
                      <NavLink
                        to={'/HTML'}
                        style={activeRouteStyle}
                        className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                      >
                        {t('skill3')}
                      </NavLink>
                      <NavLink
                        to={'/CSS3'}
                        style={activeRouteStyle}
                        className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                      >
                        {t('skill4')}
                      </NavLink>
                      <NavLink
                        to={'/React'}
                        style={activeRouteStyle}
                        className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                      >
                        {t('skill5')}
                      </NavLink>
                    </li>
                  </ul>
                </details>
              </li>

              {/* this is not drop down */}
              <li>
                <NavLink
                  style={activeRouteStyle}
                  className=" hover:text-[#deb2ac] uppercase font-medium"
                  to={'/admission-test'}
                >
                  {t('Nav2')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={activeRouteStyle}
                  className=" hover:text-[#deb2ac] uppercase font-medium"
                  to={'/job-Preparation'}
                >
                  {t('Nav3')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={activeRouteStyle}
                  className=" hover:text-[#deb2ac] uppercase font-medium"
                  to={'/online-batch'}
                >
                  {t('Nav4')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={activeRouteStyle}
                  className=" hover:text-[#deb2ac] uppercase font-medium"
                  to={'/services'}
                >
                  {t('Nav5')}
                </NavLink>
              </li>
              <li>
                <NavLink
                  style={activeRouteStyle}
                  className=" hover:text-[#deb2ac] uppercase font-medium"
                  to={'/MyCourses'}
                >
                  {t('MyCourses')}
                </NavLink>
              </li>

              {/* -------end here navbar without drop down */}
              {/* dak lite  */}
              <li onClick={() => setDarkMode((darkMode) => !darkMode)}>
                {darkMode ? <CiLight size={70} /> : <CiDark size={70} />}
              </li>
              {/* translet  */}
            </ul>
            <li className="flex justify-between gap-3 border p-2 ">
              <button onClick={() => handelChangeLng('en')}> En </button>
              <button onClick={() => handelChangeLng('bn')}> বাং</button>
            </li>

            <NavbarBgChange />
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
                  className=" menu-sm dropdown-content mt-3 z-[1] shadow border border-white rounded-lg w-80 px-10  text-white btn-toggle-style bg-gradient-to-b from-[#42275a] to-[#734b6d] overflow-hidden"
                >
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar mb-28 mt-5">
                    <div className="w-24 rounded-full">
                      <img src={user?.photoURL} alt="userPhoto" />
                    </div>
                    {/* View Profile Button */}
                    <h1
                      className="font-lora font-bold text-base mb-2"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {user?.displayName}
                    </h1>
                    <Link to={`/myprofile`}>
                      <button
                        className="btn btn-outline text-white"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        View Profile
                      </button>
                    </Link>
                  </label>
                  {/* Dropdown Nav Start Here */}
                  <NavLink>
                    <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                      My Courses
                    </li>
                  </NavLink>
                  <hr />
                  <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Bookmark
                  </li>
                  <hr />
                  <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Certificate
                  </li>
                  <hr />
                  <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Payment History
                  </li>
                  <hr />
                  <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Payment Management
                  </li>
                  <hr />
                  <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Student Analytics
                  </li>
                  <hr />
                  <li className="hover:font-semibold py-1  text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                    Announcement
                  </li>
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
