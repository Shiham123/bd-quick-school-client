/* eslint-disable no-unused-vars */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './styles.css';
const Courses = () => {
  const [posts, setPosts] = useState([]);

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

  return (
    <>
      <div className="p-3 -mt-[30px]">
        <div className="">
          <h2 className="text-center text-4xl">কোর্সসমূহ 🔥</h2>
        </div>
      </div>
      <div className='w-1/2 mx-auto'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {posts
          .filter((post) => post.IsRecommended === true)
          .map((post) => (
            <SwiperSlide key={post.Id}>
              <img className='h-[330px] ' src={post.ImageUrl} alt={post.Name} />
            </SwiperSlide>
          ))}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
      </div>
    </>
  );
};

export default Courses;
