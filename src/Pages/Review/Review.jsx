import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import { Rating, StickerStar } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';


const Review = () => {
  const [posts, setPosts] = useState([]);
  const [swiper, setSwiper] = useState(null);
  const { t, i18n } = useTranslation();
  const axiosPublic = useAxiosPublic();
// react color
  const myStyles = {
    itemShapes: StickerStar,
    activeFillColor: '#8505a8',
    inactiveFillColor: '#e6bbf2'
  }


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/api/v2/update/status/:id');
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
      <div className=" lg:px-20">
        <div className="mt-16">
          <div className="container mx-auto">
            <h2 className="text-2xl font-cinzel lg:text-5xl text-center  font-bold  text-white mb-5 ">
              {t('review1')} <br /> <br /> {t('review2')}
            </h2>
          </div>
        </div>
        <div className="flex justify-between  items-center relative z-10 ">
          <button
            className="custom-button lg:block hidden prev rounded-full border max-w-full px-[2px] py-[2px] text-white lg:text-4xl md:text-3xl text-xl absolute lg:top-[12rem] lg:left-16 md:top-[21rem] md:left-10 top-[30rem] left-0"
            onClick={goPrev}
          >
            <IoIosArrowBack></IoIosArrowBack>
          </button>
          <button
            className="custom-button lg:block hidden next rounded-full border max-w-full px-[2px] py-[2px] lg:text-4xl md:text-3xl text-xl text-white absolute lg:top-[12rem] lg:right-16 md:top-[21rem] md:right-10 top-[30rem] right-0"
            onClick={goNext}
          >
            <IoIosArrowForward></IoIosArrowForward>
          </button>
        </div>
        <div className="mt-10">
          {/* swiper  */}

          <Swiper
            slidesPerView={1}
            spaceBetween={3}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 10 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
            onSwiper={(swiper) => setSwiper(swiper)}
            className="mySwiper lg:max-w-7xl"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.Id}>
                <div className="flex justify-center items-center gap-10 p-2 md:p-1 lg:p-0">
                  

                  <div className="   bg-base-100 dark:text-black hover:bg-slate-200 shadow-xl mt-5 pt-1 relative  border-2  border-gray-500 rounded-2xl md:h-[330px] lg:h-[320px] ">
                    <div className="absolute h-[150px] w-[150px]  mx-auto rounded-full -left-5 -top-4 -right-62 avatar flex justify-center ">
                      <div className="w-10 h-10 rounded-full ">
                        <img
                          className="bg-violet-400 w-2 h-2 rounded-full p-2"
                          src="https://i.ibb.co/pW9yjpj/Fx8oL.png"
                        />
                      </div>
                    </div>

                   {/* rating,status */}

                    <div className="card-body  px-6 py-10">
                      <p className="w-full text-start mx-auto text-base font-lora">
                        {post.textarea}
                      </p>

                      <p className="w-full text-start mx-auto text-base font-lora mt-10 leading-none">
                        {post.fullname}
                      </p>
                      <p className="w-full text-start mx-auto text-base font-lora leading-none ">
                        {post.designation}
                      </p>
                      <p className=" ">
                        <Rating
                          itemStyles={myStyles}
                          style={{ maxWidth: 90 }}
                          value={post.rating}
                          readOnly
                        />
                      </p>

                      
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* for horizontal line */}
      <hr className="w-[400px] mx-auto my-32 border-2" />
    </div>
  );
};

export default Review;
