import { useEffect, useState } from 'react';
import Services_banner from '../../Components/Services_Banner/Services_banner';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/public/Services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Services_banner></Services_banner>
      <div className="py-16 w-[90%] md:w-[75%] mx-auto text-white">
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-x-10 gap-y-10 py-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="cursor-pointer bg-white text-black rounded-xl shadow-2xl border-b-8 border-[#2c122e] transition duration-600 ease-in-out hover:scale-105"
            >
              <img className="w-[100%] rounded-t-xl border-t" src={service.image} alt="" />
              <div className="p-4">
                <h2 className="text-3xl font-bold py-6">{service.title}</h2>
                <p className="text-xl">{service.description}</p>
                <p className="py-6 text-2xl font-bold">Price: ${service.price}</p>
                <button class="bg-[#654168] text-white font-bold py-2 px-4 border-b-4 border-[#2c122e] hover:border-[#000000] rounded">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
