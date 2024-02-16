/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';
import { Player } from '@lottiefiles/react-lottie-player';

const UserCOurse = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    axios
      .get(`https://quiz-school-server.vercel.app/payment/user/${user?.email}`)
      .then((response) => {
        console.log(response);
        const filteredServices = response.data.filter((service) => service.paidStatus === true);
        setServices(filteredServices);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div>
      <div className="w-[100%] md:w-[75%] mx-auto text-white">
        {loading ? (
          <h2 className="flex justify-center items-center min-h-[60vh]">
            <ThreeCircles height="100" width="100" color="#4fa94d" visible={true} ariaLabel="three-circles-rotating" />
          </h2>
        ) : services.length === 0 ? (
          <div className="flex justify-center items-center min-h-[60vh]">
            <Player className="" autoplay loop src="/JWpqkpQcm6.json"></Player>
          </div>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-x-10 gap-y-10 py-10">
            {services.map((service) => (
              <div key={service.Id} className="card md:card-side p-2 border shadow-xl">
                <figure>
                  <img className="rounded-xl" src={service?.product?.image} alt="course" />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title">{service?.product?.title}</h2>
                  <p>{service?.product?.teachername}</p>
                  <div className=" flex gap-4 md:flex-row flex-col  justify-between">
                    <Link to={`Video`}>
                      <button className="btn ">Continue Course</button>
                    </Link>
                    <Link to={`outline`}>
                      <button className="btn btn-primary btn-outline">Outline</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCOurse;
