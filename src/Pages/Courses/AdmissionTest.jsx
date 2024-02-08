import axios from 'axios';
import { useEffect, useState } from 'react';

const AdmissionTest = () => {
  // store data in state
  const [admissionTest, setAdmissionTest] = useState([]);

  // Fetch Data from the server
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('Admission_test.json');
        setAdmissionTest(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-lora">
      {/* Admission Banner start here */}
      <div className="w-[100%] bg-gradient-to-r from-black to-red-900">
        <div className="w-[70%] mx-auto flex flex-col lg:flex-row items-center justify-between py-10 lg:py-2">
          <div className="w-[90%] lg:w-[60%] text-white">
            <h2 className="text-4xl 2xl:text-5xl font-extrabold leading-snug 2xl:leading-snug">
              Check Your University Admission Preparation For Free !
            </h2>
            <button className="bg-servicesBg text-white font-bold py-3 px-6 border-b-4 border-borderColorOne hover:border-black rounded my-8 text-xl">
              Give Test Exam
            </button>
          </div>
          <div className="w-[90%] lg:w-[40%] py-6">
            <img
              className="w-[80%] mx-auto"
              src="https://cdn.10minuteschool.com/images/Medi-web_2_1705561549733.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Admission Banner End here */}

      {/* Admission Card Start here */}
      <div className="w-[70%] mx-auto">
        <h2 className="text-4xl font-bold py-12 text-white">Admission Test Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 pb-24">
          {admissionTest.map((admission, idx) => (
            <div
              key={idx}
              className="bg-white cursor-pointer rounded-lg shadow-2xl border transition duration-600 ease-in-out hover:scale-105 hover:border-[#1CAB55]"
            >
              <img className="w-[100%] rounded-t-lg" src={admission.image} alt="" />
              <div className="px-4">
                <h2 className="text-2xl font-semibold py-3">{admission.name}</h2>
                <h2 className="text-xl">Course: {admission.year}</h2>
                <h2 className="text-[17px] py-3">University: {admission.university}</h2>
                <h2 className="text-xl">Price: $ {admission.price}</h2>
                <button className="bg-servicesBg text-white font-bold py-1 px-3 border-b-4 border-borderColorOne hover:border-black rounded my-4">
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Admission Card End here */}
    </div>
  );
};

export default AdmissionTest;
