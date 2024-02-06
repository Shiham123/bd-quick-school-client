import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Courses = () => {
  const [posts, setPosts] = useState([]);
  // const [swiperRef, setSwiperRef] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('Course_data.json');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="lg:px-20">
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

        <div className="mt-10">
          <Swiper
            // onSwiper={setSwiperRef}
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              type: 'fraction',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {posts.map((post) => (
              <SwiperSlide key={post.Id}>
                <div className="flex justify-center items-center">
                  <img className="rounded-md" src={post.ImageUrl} alt={post.Name} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="lg:mt-20 md:mt-[15rem] mt-[5rem] text-textColorOne flex justify-center items-center">
            <p className="md:text-sm text-sm lg:text-xl font-medium font-poppins m-auto text-center flex md:flex md:flex-col lg:flex lg:flex-row justify-center items-center">
              Click to Enroll in 30+ Free Courses
            </p>
          </div>
        </div>
      </div>
      <hr className="w-[400px] mx-auto my-32 border-2" />
    </div>
  );
};

export default Courses;
