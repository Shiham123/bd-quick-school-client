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
      <div className="p-3 -mt-[30px]">
        <div className="">
          <h2 className="text-center text-4xl">কোর্সসমূহ 🔥</h2>
        </div>
      </div>
      <div className='flex w-[90%] mx-auto justify-between relative p-5 top-[200px]'>
      <button  className="custom-button prev rounded-full border text-5xl" onClick={goPrev}>
          <IoIosArrowBack></IoIosArrowBack>
        </button>
        <button className="custom-button next rounded-full border text-5xl" onClick={goNext}>
          <IoIosArrowForward></IoIosArrowForward>
        </button>
      </div>
      <div className="w-[80%] mx-auto">
      
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
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => setSwiper(swiper)}
          className="mySwiper"
        >
          {posts
            .filter((post) => post.IsRecommended === true)
            .map((post) => (
              <SwiperSlide key={post.Id}>
                <img className="h-[330px] " src={post.ImageUrl} alt={post.Name} />
              </SwiperSlide>
            ))}
        </Swiper>
        
      </div>
    </>
  );
};

export default Courses;
