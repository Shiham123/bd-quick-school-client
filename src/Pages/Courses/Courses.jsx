/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Courses = () => {
  const [posts, setPosts] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/public/Course_data.json');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <div className=" ">
        <div className="container mx-auto lg:pl-12">
          <h2 className=" text-2xl lg:text-4xl text-center lg:text-start font-bold text-white mb-5">Great discounts on select skill development courses!</h2>
          <p className='text-base lg:text-lg text-center lg:text-start font-medium text-white mb-5 lg:mb-0 md:px-5 lg:px-0'>Get selected BD Quick School courses at special prices throughout the month. Start learning now with BD Quick School!</p>
        </div>
      </div>
      <div className='flex   justify-between relative top-[150px] '>
        <button className="custom-button prev rounded-full border max-w-full px-[2px] py-[2px] text-white ml-40 text-5xl hidden lg:block" onClick={goPrev}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
        <button className="custom-button next rounded-full border max-w-full px-[2px] py-[2px] text-5xl text-white mr-80 hidden lg:block" onClick={goNext}>
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>
      <div className="pb-20 ml-12 md:ml-4 md:mr-4 lg:mr-40 lg:ml-0">

        <Swiper
          slidesPerView={1}
          spaceBetween={5}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          className="mySwiper lg:max-w-7xl"
        >
          {posts
            .filter((post) => post.IsRecommended === true)
            .map((post) => (
              <SwiperSlide key={post.Id}>
                <img className=" rounded-md" src={post.ImageUrl} alt={post.Name} />
              </SwiperSlide>
            ))}
        </Swiper>
        <p className='text-xl md:text-center font-medium mt-6 text-[#1CAB55]'>Click to enroll in 30+ free courses</p>
      </div>
      <hr className="w-[400px] mx-auto mb-20 border-2" />
    </>
  );
};

export default Courses;
