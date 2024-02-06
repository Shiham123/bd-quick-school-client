/* eslint-disable react/no-unknown-property */
import Services_banner from '../../Components/Services_Banner/Services_banner';
// import { Link } from 'react-router-dom';
import { ThreeCircles } from 'react-loader-spinner';
// import PayDataFrom from './PayDataFrom';
import { Link } from 'react-router-dom';
import { useGetAllServicesQuery } from '../../redux/services/ServicesApiSlice';

const Services = () => {
  const { data, isLoading } = useGetAllServicesQuery();

  return (
    <div>
      <Services_banner></Services_banner>
      <div className="py-16 w-[90%] md:w-[75%] mx-auto text-white">
        {isLoading ? (
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
            {data?.map((service) => (
              <Link to={`/ServiceDetails/${service._id}`} key={service._id}>
                <div
                  key={service.Id}
                  className="cursor-pointer bg-white text-black rounded-xl shadow-2xl border-b-8 border-borderColorOne transition duration-600 ease-in-out hover:scale-105"
                >
                  <img className="w-[100%] rounded-t-xl border-t " src={service.image} alt="" />
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
