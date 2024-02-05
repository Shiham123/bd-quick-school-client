import { useEffect, useState } from 'react';
import { FiAlignJustify } from 'react-icons/fi';
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showResponsiveBar, setShowResponsiveBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const responsiveNavbar = () => {
      if (window.innerWidth <= 1024) {
        setShowResponsiveBar(true);
      } else {
        setShowResponsiveBar(false);
        setShowDropdown(false);
      }
    };

    window.addEventListener('resize', responsiveNavbar);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', responsiveNavbar);
    };
  }, []);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <section>
      <nav className="flex justify-between items-center p-4">
        <NavLink to="/" className="flex justify-center items-center normal-case lg:pl-2">
          <Player
            className="w-16"
            autoplay
            loop
            src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
          />
          <span className="font-cinzel font-semibold text-white tracking-widest text-xl md:text-2xl lg:text-2xl">
            BD Quick School
          </span>
        </NavLink>
        {showResponsiveBar ? (
          <FiAlignJustify size={50} color="white" onClick={handleIconClick} />
        ) : (
          <>
            <div className="flex gap-4 justify-between">
              <NavLink
                to={'/addMissionTest'}
                className={({ isActive }) =>
                  isActive ? 'text-yellow-400 bg-gray-700' : 'text-white'
                }
              >
                <span className="px-4 py-2 font-lora font-light text-2xl tracking-wide capitalize">
                  add Mission test
                </span>
              </NavLink>
              <NavLink to={'/jobPreparation'}>Job preparation</NavLink>
              <NavLink to={'/onlineBatch'}>Online batch</NavLink>
              <NavLink to={'/services'}>Our services</NavLink>
            </div>
            <div>Div three</div>
          </>
        )}
      </nav>

      {showResponsiveBar && showDropdown && (
        <div>
          <div>drop down Div two</div>
          <div>drop down Div three</div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
