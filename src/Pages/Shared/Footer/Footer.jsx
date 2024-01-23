import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa6';
import { CiTwitter } from 'react-icons/ci';
import { IoIosArrowForward } from 'react-icons/io';
import { Player } from '@lottiefiles/react-lottie-player';

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto mt-10">

        <div className="flex flex-col lg:flex-row lg:gap-28">

          <div className="mb-5  lg:ml-0">

            <div className="flex items-center  ml-22 md:ml-5 lg:ml-0  mb-3">

              {/* lottie animation image start here*/}
              <div className='w-20  ml-14 md:ml-0 lg:ml-0'>
                <Player
                  className="w-16  "
                  autoplay
                  loop
                  src="https://lottie.host/f3cfffce-06c0-498f-92b2-3c564fb9f40f/DVZgFbgX9m.json"
                ></Player>

              </div>
              {/* lottie animation image end here*/}

              {/* website name start here*/}
             
              <a className="w-64  text-xl text-white font-bold font-cinzel">BD Quick School</a>

              {/* website name end here*/}

            </div>

            {/* website description start here*/}
            <p className="text-base text-white font-semibold w-[400px] md:w-full lg:w-[540px] mx-auto text-center md:text-start lg:mx-0 md:ml-5 md:pr-6  font-lora">
              Welcome to BD Quick School, your reliable destination for comprehensive educational
              support. We seamlessly integrate innovative learning methodologies with a nurturing
              approach to prioritize your academic success
            </p>

            {/* website description ends here*/}


            {/* social logo start here*/}

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

            {/* social logo start here*/}

          </div>

          

          <div className="flex flex-col items-center justify-center md:flex-row gap-5 lg:gap-28 mt-5 mb-5">

            {/* Our Services start here*/}

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
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium hover:translate-x-4 hover:ease-out hover:duration-1000 font-poppins">
                  Privacy Policy
                </span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">Refund Policy</span>
              </div>
              <div className="flex items-center gap-3 text-white hover:text-[#ffbe0b] mb-1 mt-2 hover:translate-x-4 hover:ease-out hover:duration-1000">
                <IoIosArrowForward />
                <span className="text-lg font-medium font-poppins">User Terms</span>
              </div>
            </div>

            {/* Our Services ends here*/}

            {/* Quick Links start here*/}

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

            {/* Quick Links end here*/}


            {/* Gallary start here*/}

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


            {/* Gallary end here */}
          </div>
        </div>
      </div>


      <hr className="pb-5" />

      {/* last part */}
      <div className=" container mx-auto pb-5 flex items-center justify-between flex-col lg:flex-row">
        <small className="text-white text-base font-semibold pb-5 pt-3">
          {' '}
          BD Quick School © 2024. All rights reserved.
        </small>
        <div className="flex items-center gap-5 lg:mr-5">
          <p className="text-white text-base font-semibold ">Privacy Policy</p>
          <p className="text-white text-base font-semibold ">Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
