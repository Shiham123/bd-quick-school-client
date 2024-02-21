import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

const JobPreparation = () => {
  // store data in state
  const [paidJobPreparation, setPaidJobPreparation] = useState([]);
  const [freeJobPreparation, setFreeJobPreparation] = useState([]);
  const [feedBacks, setFeedBack] = useState([]);
  const axiosPublic = useAxiosPublic();

  // Fetch Data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosPublic.get('/api/v2/getJob');
        // const response = await axios.get('Job_Preparation_Paid.json');
        
        setPaidJobPreparation(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
   
      try {
        const response = await axios.get('http://localhost:5000/api/v2/getFreeJob');
        setFreeJobPreparation(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('FeedBack.json');
        setFeedBack(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="font-lora">
      {/* Paid Job Preparation */}
      <div className="w-[70%] mx-auto">
        <h2 className="text-5xl font-bold pt-20 text-white">Job Preparation All Courses</h2>
        <h2 className="text-4xl font-bold py-12 text-white">Paid Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 pb-12">
          {paidJobPreparation.map((admission) => (
            <div
              key={admission.id}
              className="text-white cursor-pointer rounded-lg shadow-2xl shadow-green-900 border transition duration-600 ease-in-out hover:scale-105 hover:border-[#1CAB55]"
            >
              <img className="w-[100%] rounded-t-lg" src={admission.image} alt="" />
              <div className="px-4">
                <h2 className="text-xl font-semibold py-3">{admission.title}</h2>
                <h2 className="text-xl">Price: $ {admission.price}</h2>

                <Link to={`/jobdetails/${admission._id}`} key={admission._id}>
                  <button className="bg-white text-black font-bold py-1 px-3 border-b-4 border-borderColorOne hover:border-black rounded my-4">
                    Purchase
                  </button>
                  </Link>
              
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* free job preparation */}
      <div className="w-[70%] mx-auto">
        <h2 className="text-4xl font-bold py-12 text-white">Free Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 pb-24">
          {freeJobPreparation.map((admission, idx) => (
            <div
              key={idx}
              className="text-white cursor-pointer rounded-lg shadow-2xl shadow-green-900 border transition duration-600 ease-in-out hover:scale-105 hover:border-[#1CAB55]"
            >
              <img className="w-[100%] rounded-t-lg" src={admission.image} alt="" />
              <div className="px-4">
                <h2 className="text-xl font-semibold py-3">{admission.course}</h2>
                <h2 className="text-xl">Price: $ {admission.price}</h2>

                <Link to={`/freeCoursejobdetails/${admission._id}`} key={admission._id}>
                <button className="bg-white text-black font-bold py-1 px-3 border-b-4 border-borderColorOne hover:border-black rounded my-4">
                  Purchase
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FeedBack from former student */}
      <div className="w-[70%] mx-auto">
        <h2 className="text-4xl font-bold py-12 text-white text-center">
          Video Feedback From Former Student{' '}
        </h2>
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-10 pb-24">
          {feedBacks.map((feedBack, idx) => (
            <div key={idx}>
              <div key={idx} className="bg-white border-2 border-[#1CAB55] overflow-hidden">
                <div className="rounded-lg overflow-hidden">
                  <iframe
                    src={feedBack.url}
                    title="YouTube Video"
                    allowFullScreen
                    className="mx-auto py-4 px-4 w-[100%] h-[400px]"
                  ></iframe>
                </div>
                <div className="px-4">
                  <h2 className="text-2xl font-bold">{feedBack.title}</h2>
                  <h2 className="pb-8">{feedBack.description}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPreparation;
