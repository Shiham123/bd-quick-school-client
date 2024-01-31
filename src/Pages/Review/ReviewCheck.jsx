

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';
// import { Rating } from '@smastrom/react-rating'

// import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react';



const ReviewCheck = () => {


    const [reviews, setReview] = useState([]);

    useEffect(() => {

        const fetchData = () => {


            fetch('/public/Review.json')
                .then(res => res.json())
                .then(json => {
                    const result = json.sort((a, b) => new Date(b.
                        MarriageDate) - new Date(a.
                            MarriageDate))
                    // console.log(result)


                    setReview(result);

                })

                .catch(e => {
                    console.log('error', e)
                })


        }
        fetchData();


    }, []);




    return (
        <div className='my-12 '>



            <div className='text-3xl text-center mb-16'>
                <h1 className='text-[#C48C46] text-2xl mb-2' >Trusted Brand</h1>
                <p className='text-[#66451c] font-bold text-4xl'>Trust By 1500+ Couples</p>
            </div>
            <div>

            </div>
            <Swiper
                pagination={{
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper w-full lg:w-full border "
            >


               <div className=''> 
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>


                            <div> 
                                <img className='w-full lg:w-[200px] mx-auto rounded-xl h-[300px]' src={review.Couple_img} alt="" />

                                <div className='text-center mb-16'>
                                    <div className='flex flex-col lg:flex-row justify-center items-center lg:gap-48 my-6 '>
{/* 
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={review.Star}
                                            readOnly
                                        /> */}
                                        <p className='font-bold text-2xl text-gray-700'>{review.MarriageDate}</p>
                                    </div>
                                    <p className='text-gray-500 lg:w-[550px] mx-auto'>{review.textfield}</p>

                                </div>

                            </div>
                        </SwiperSlide>)
                    }

               </div>

            </Swiper>
        </div>
    );
};

export default ReviewCheck;