/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';

// import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
// import PayDataFrom from './PayDataFrom';
import { Link } from 'react-router-dom';

const UserCOurse = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('Services.json')
      .then((response) => {
        setServices(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

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
              <div key={service.Id} className="card md:card-side p-2 bg-base-100 shadow-xl">
                <figure>
                  <img className="rounded-xl" src={service.image} alt="Movie" />
                </figure>
                <div className="card-body text-black">
                  <h2 className="card-title">{service.title}</h2>
                  <p>{service.techer}</p>
                  <div className=" flex gap-4 md:flex-row flex-col  justify-between">
                    <Link to={`Video`}>
                      {' '}
                      <button className="btn btn-primary">Continue Course</button>
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