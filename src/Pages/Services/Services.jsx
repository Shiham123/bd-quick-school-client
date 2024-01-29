/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react';
import Services_banner from '../../Components/Services_Banner/Services_banner';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThreeCircles } from 'react-loader-spinner';
// import PayDataFrom from './PayDataFrom';
import { Link } from 'react-router-dom';

const Services = () => {
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
      <Services_banner></Services_banner>
      <div className="py-16 w-[90%] md:w-[75%] mx-auto text-white">
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
          <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-10 py-10">
            {services.map((service) => (
              <Link to={`/ServiceDetails/${service.Id}`} key={service.Id}>
             
                <div key={service.Id} className="cursor-pointer bg-white text-black rounded-xl shadow-2xl border-b-8 border-borderColorOne transition duration-600 ease-in-out hover:scale-105">
                  <img className="w-[100%] rounded-t-xl border-t" src={service.image} alt="" />
                  <div className="p-4">
                    <h2 className="text-3xl font-bold py-6">{service.title}</h2>
                    <p className="text-xl">{service.description}</p>
                    <p className="py-6 text-2xl font-bold">Price: ${service.price}</p>
                    <button className="bg-servicesBg text-white font-bold py-2 px-4 border-b-4 border-borderColorOne hover:border-black rounded">
                      Explore
                    </button>
                    {/* <PayDataFrom/> */}
                  </div>
                </div>
               </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;