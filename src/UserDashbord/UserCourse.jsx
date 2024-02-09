/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
// import PayDataFrom from './PayDataFrom';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';

const UserCOurse = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  console.log(user);
  useEffect(() => {
    axios
      .get(`https://quiz-school-server.vercel.app/payment/user/${user?.email}`)
      .then((response) => {
        setServices(response.data);
        setLoading(false);
        console.log('for response', response);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, [user?.email]);

  return (
    <div>
      <div className=" w-[90%] md:w-[75%] mx-auto text-white">
        {loading ? (
          <h2 className="flex justify-center items-center min-h-[60vh]">
            <ThreeCircles
              height="100"
              width="100"
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </h2>
        ) : (
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-x-10 gap-y-10 py-10">
            {services?.map((service) => (
              <div key={service.Id} className="card md:card-side p-2 border shadow-xl">
                <figure>
                  <img className="rounded-xl" src={service?.product?.image} alt="course" />
                </figure>
                <div className="card-body text-white">
                  <h2 className="card-title">{service?.product?.title}</h2>
                  <p>{service?.product?.techer}</p>
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
