import Services_banner from '../../Components/Services_Banner/Services_banner';
import { ThreeCircles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useGetAllServicesQuery } from '../../redux/services/ServicesApiSlice';

const Services = () => {
  const { data, isLoading } = useGetAllServicesQuery();

  return (
    <div>
      <Services_banner></Services_banner>
      <div className="py-16 max-w-7xl mx-auto text-white">
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
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-3 lg:mx-0 gap-3 md:gap-5 lg:gap-10 py-10">
            {data?.map((service) => (
              <Link to={`/ServiceDetails/${service._id}`} key={service._id}>
                
                <div
                  key={service.Id}
                  className="cursor-pointer  text-white rounded-xl shadow-2xl shadow-[#2980b9]  "
                >
                  <img className="w-full h-[250px]  rounded-t-xl  " src={service.image} alt="" />
                  <div className="p-4 h-[335px]">
                    <h2 className="text-lg md:text-xl lg:text-xl font-bold py-6 font-lora">{service.title}</h2>
                    <p className=" md:text-lg lg:text-lg font-lora">{service.shortdescription}</p>
                    <div className="flex justify-between items-center mb-2 font-lora mt-2">
                      <div className="flex items-center justify-start gap-2">
                        <img className="w-[30px] h-[30px] rounded-full " src={service.teacherImage} alt="" />
                        <p className="text-lg lg:text-xl font-bold font-lora">{service.teachername}</p>
                      </div>

                      <p className="py-4 text-lg md:text-xl font-bold font-lora">Price: $ {service.price}</p>
                    </div>
                    {/* button */}

                    <button className=" text-white text-xl font-extrabold py-2 px-4 border rounded font-lora mt-1 mb-2">
                      Explore
                    </button>
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
