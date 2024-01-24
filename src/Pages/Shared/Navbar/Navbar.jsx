import { Link, NavLink } from 'react-router-dom';
import { IoMenuSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import NavPages from './PageLists.json';
import { Player } from '@lottiefiles/react-lottie-player';
import useAuth from './../../../Hooks/useAuth/useAuth';

const Navbar = () => {
  // const user = false;
  const [stickyClass, setStickyClass] = useState('');
  const { user, logOut } = useAuth();

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

  const Navlinks = (
    <>
      {NavPages.map((page, index) => {
        return page.submenu ? (
          <li key={index}>
            <details>
              <summary>{page?.page}</summary>
              <ul className=" text-white z-10">
                {page.submenu &&
                  page?.submenu.map((menu) => {
                    return (
                      <li key={menu?.id}>
                        <NavLink
                          style={activeRouteStyle}
                          className="px-8 py-2 mb-1 bg-gradient-to-b from-[#42275a] to-[#734b6d]  hover:text-[#deb2ac] uppercase font-medium "
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
          <>
            <li>
              <NavLink
                style={activeRouteStyle}
                className=" hover:text-[#deb2ac] uppercase font-medium"
                to={page.href}
              >
                {page?.page}
              </NavLink>
            </li>
          </>
        );
      })}
    </>
  );

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
            <NavLink to="/" className="flex items-center justify-center normal-case lg:pl-5">
              <Player
                className="w-16"
                autoplay
                loop
                src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
              ></Player>
              <span className="text-white font-semibold hover:">
                <span className="text-base md:text-lg lg:text-xl text-white font-bold font-cinzel">BD Quick School </span>
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
                <div className="flex items-center gap-3">
                  <div className="hidden md:block">
                    <h1 className="font-lora font-bold text-base">{user?.displayName}</h1>
                  </div>
                  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full ">
                      <img src={user?.photoURL} alt="userPhoto" />
                    </div>
                  </label>
                </div>
                <ul
                  tabIndex={0}
                  className=" menu-sm dropdown-content mt-3 z-[1] shadow rounded-lg w-52  text-white btn-toggle-style bg-gradient-to-b from-[#42275a] to-[#734b6d]"
                >
                  <li className="hover:font-semibold py-2 border-b">{user?.displayName}</li>
                  <li className="hover:font-semibold  border-b py-2">
                    <button>
                      <Link to="/dashboard">Dashboard</Link>
                    </button>
                  </li>

                  <li className="hover:font-semibold py-2">
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <div>
              <NavLink to="/login" className="lg:pr-5">
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
