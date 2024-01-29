import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import useAuth from './../../../Hooks/useAuth/useAuth';
import axios from 'axios';

const Navbar = () => {
  // const user = false;
  const [stickyClass, setStickyClass] = useState('');
  const { user, logOut } = useAuth();
  const [NavPages, setNavPages] = useState([]);

  // Handle Logout Function to logout the User
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
            `fixed top-0 transition bg-gradient-to-b from-[#42275a] to-[#734b6d]  bg-opacity-100 duration-1000 ease-in-out`
          )
        : setStickyClass('');
    }
  };

  const activeRouteStyle = ({ isActive }) => {
    return {
      color: isActive ? '#C3FCF1' : '',
      fontWeight: isActive ? 'bold' : '',
    };
  };

  useEffect(() => {
    axios
      .get('NavpageLists.json')
      .then((res) => setNavPages(res.data))
      .catch((err) => console.log(err));
  }, []);

  const Navlinks = NavPages.map((page) => {
    return page.submenu ? (
      <li key={page?.id}>
        <details>
          <summary>{page?.page}</summary>
          <ul className=" text-white ">
            {page?.submenu &&
              page?.submenu.map((menu) => {
                return (
                  <li key={menu?.id}>
                    <NavLink
                      style={activeRouteStyle}
                      className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium"
                      to={menu?.href}
                    >
                      {menu?.page}
                    </NavLink>
                  </li>
                );
              })}
          </ul>
        </details>
      </li>
    ) : (
      <li key={page?.id}>
        <NavLink
          style={activeRouteStyle}
          className=" hover:text-[#deb2ac] uppercase font-medium"
          to={page.href}
        >
          {page?.page}
        </NavLink>
      </li>
    );
  });

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
                {Navlinks}
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
              {Navlinks}
            </ul>
          </div>

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
                    <h1
                      className="font-lora font-bold text-base mb-2"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {user?.displayName}
                    </h1>
                    <Link to="/myprofile">
                      <button
                        className="btn btn-outline text-white"
                        style={{ whiteSpace: 'nowrap' }}
                      >
                        View Profile
                      </button>
                    </Link>
                  </label>
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
                  <NavLink to="/dashboard">
                    <li className="hover:font-semibold  py-1 text-start font-lora font-medium hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                      Dashboard
                    </li>
                  </NavLink>
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
