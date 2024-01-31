import axios from 'axios';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';


const Review = () => {
    const [posts, setPosts] = useState([]);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('Review.json');
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
                        <h2 className="text-2xl lg:text-4xl text-center  font-bold font-poppins text-white mb-5 ">
                            Why we are the first choice of students and parents?
                        </h2>
                       
                    </div>
                </div>
                <div className="flex justify-between  items-center relative z-10 ">
                    <button
                        className="custom-button lg:block hidden prev rounded-full border max-w-full px-[2px] py-[2px] text-white lg:text-5xl md:text-3xl text-xl absolute lg:top-[12rem] lg:left-10 md:top-[21rem] md:left-10 top-[30rem] left-0"
                        onClick={goPrev}
                    >
                        <IoIosArrowBack></IoIosArrowBack>
                    </button>
                    <button
                        className="custom-button lg:block hidden next rounded-full border max-w-full px-[2px] py-[2px] lg:text-5xl md:text-3xl text-xl text-white absolute lg:top-[12rem] lg:right-10 md:top-[21rem] md:right-10 top-[30rem] right-0"
                        onClick={goNext}
                    >
                        <IoIosArrowForward></IoIosArrowForward>
                    </button>
                </div>
                <div className="mt-10">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={3}
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
                                <div className="flex justify-center items-center ">
                                    <img className="rounded-md" src={post.Profile_img} alt={post.Date} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    
                </div>
            </div>
            <hr className="w-[400px] mx-auto my-32 border-2" />
        </div>
    );
};

export default Review;
