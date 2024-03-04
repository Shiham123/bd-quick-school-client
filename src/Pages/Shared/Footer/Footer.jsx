import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa6';
import { CiTwitter } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto mt-10">
        <div className="flex flex-col lg:flex-row lg:gap-28">
          <div className="mb-5  lg:ml-0">
            <div className="flex items-center xs:ml-8 sm:ml-14 md:ml-5 lg:ml-0 gap-5 md:gap-3 mb-3">
              <Player
                className="xs:w-12 sm:w-14 semi-sm:w-20"
                autoplay
                loop
                src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
              ></Player>
              <a className=" semi-sm:w-64 text-xl text-white font-bold font-cinzel">BD Quick School</a>
            </div>
            <p className="text-base text-white font-semibold xs:w-[310px] sm:w-[350px] semi-sm:w-[400px] mx-auto text-center md:text-start lg:mx-0 md:ml-5 font-lora">
              Welcome to BD Quick School, your reliable destination for comprehensive educational support. We seamlessly integrate
              innovative learning methodologies with a nurturing approach to prioritize your academic success
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-4 ml-0 md:ml-5 lg:ml-0">
              <div className="border max-w-full px-3 py-3 rounded-full hover:bg-[#0AB99D] cursor-pointer">
                <FaFacebookF className="text-white text-2xl" />
              </div>
              <div className="border max-w-full px-3 py-3 rounded-full hover:bg-[#0AB99D] cursor-pointer">
                <FaInstagram className="text-white text-2xl" />
              </div>
              <div className="border max-w-full px-3 py-3 rounded-full hover:bg-[#0AB99D] cursor-pointer">
                <FaPinterestP className="text-white text-2xl" />
              </div>
              <div className="border max-w-full px-3 py-3 rounded-full hover:bg-[#0AB99D] cursor-pointer">
                <CiTwitter className="text-white text-2xl" />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 lg:gap-28 mt-5 mb-5">
            <div className="mb-5 overflow-hidden ml-5 lg:ml-0">
              <h2 className="text-2xl text-white font-bold mb-5 font-cinzel">Our Services</h2>
              <div className="flex items-center gap-3 text-white mb-1 hover:text-[#ffbe0b] hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Career</span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Join as a teacher</span>
              </div>
              {/* <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
               <Link to={`/PrivacyPolicy`}> <span className="text-lg font-medium hover:translate-x-4 hover:ease-out hover:duration-1000 font-poppins">
                  Privacy Policy
                </span></Link>
              </div> */}
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Refund Policy</span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">User Terms</span>
              </div>
            </div>
            <div className="mb-5 overflow-hidden ml-5 lg:ml-0">
              <h2 className="text-2xl text-white font-bold mb-5 font-cinzel">Quick Links</h2>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Blog And Article</span>
              </div>
              <div className="flex items-center gap-3 hover:text-[#ffbe0b] text-white mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Notes and Guides</span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Book store</span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Integrations</span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Free download</span>
              </div>
            </div>
            <div className="mb-5 ml-5 lg:ml-0">
              <h2 className="text-2xl text-white font-bold mb-5 font-cinzel">Gallery</h2>
              <div className="grid grid-cols-3 gap-3 ">
                <img src="https://i.ibb.co/3Cfdnqz/thumb-1-1.png" alt="" />
                <img className="rounded-md" src="https://i.ibb.co/TBr86s7/thumb-1-2.jpg" alt="" />
                <img className="rounded-md" src="https://i.ibb.co/Jjq4zdj/thumb-1-3.jpg" alt="" />
                <img className="rounded-md" src="https://i.ibb.co/6FNKX33/thumb-1-4.jpg" alt="" />
                <img className="rounded-md" src="https://i.ibb.co/KFjsRck/thumb-1-5.jpg" alt="" />
                <img className="rounded-md" src="https://i.ibb.co/34c6sD6/thumb-1-6.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="pb-5" />
      <div className=" container mx-auto pb-5 flex items-center justify-between flex-col lg:flex-row">
        <small  className="text-white xs:text-sm sm:text-base font-semibold pb-5 pt-3"> BD Quick School © 2024. All rights reserved.</small>
        <div className="flex items-center gap-5">
          <Link to={`/PrivacyPolicy`}>
            {' '}
            <p className="text-white text-base font-semibold ">Privacy Policy</p>
          </Link>
          <p className="text-white text-base font-semibold ">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
