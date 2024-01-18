import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper/modules';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
    <div>
      <div className="px-20">
        <div className="mt-16">
          <div className="container mx-auto">
            <h2 className="text-2xl lg:text-4xl text-center lg:text-start font-bold font-poppins text-white mb-5 ">
              Great discounts on select skill development courses!
            </h2>
            <p className="text-base lg:text-lg text-center lg:text-start font-poppins text-white/70 mb-5 lg:mb-0 md:px-5 lg:px-0">
              Get selected BD Quick School courses at special prices throughout the month. Start
              learning now with BD Quick School!
            </p>
          </div>
        </div>
        <div className="flex justify-between relative">
          <button
            className="custom-button prev rounded-full border max-w-full px-[2px] py-[2px] text-white lg:text-5xl md:text-3xl text-xl absolute lg:top-[12rem] lg:left-10 md:top-[21rem] md:left-10 top-[30rem] left-0"
            onClick={goPrev}
          >
            <IoIosArrowBack></IoIosArrowBack>
          </button>
          <button
            className="custom-button next rounded-full border max-w-full px-[2px] py-[2px] lg:text-5xl md:text-3xl text-xl text-white absolute lg:top-[12rem] lg:right-10 md:top-[21rem] md:right-10 top-[30rem] right-0"
            onClick={goNext}
          >
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </div>
        <div className="mt-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 3, spaceBetween: 10 },
              1024: { slidesPerView: 5, spaceBetween: 20 },
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            className="mySwiper lg:max-w-7xl"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.Id}>
                <div className="flex justify-center items-center">
                  <img className="rounded-md" src={post.ImageUrl} alt={post.Name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/*  */}
          <div className="lg:mt-20 md:mt-[15rem] mt-[10rem] text-textColorOne flex justify-center items-center">
            <p className="md:text-sm text-sm lg:text-xl font-medium font-poppins m-auto text-center flex  md:flex md:flex-col lg:flex lg:flex-row justify-center items-center">
              Click to Enroll in 30+ Free Courses
              <MdKeyboardArrowRight className="text-xl mt-1" />
            </p>
          </div>
        </div>

      </div>
      <hr className="w-[400px] mx-auto my-32 border-2" />
    </div>
  );
};

export default Courses;
