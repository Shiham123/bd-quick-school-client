/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PayDataFrom from './PayDataFrom';

const ServiceDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch('/Services.json')
      .then((response) => response.json())
      .then((data) => {
        const selectedCourse = data.find((c) => c.Id === id);
        setCourse(selectedCourse);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center flex-col my-28">
      <div className="text-white font-poppins">
        <div className="flex justify-center items-center flex-col">
          <h2 className="font-poppins text-3xl font-semibold my-10 uppercase">Course Details</h2>
          <img src={course.image} className="rounded-lg border-[1px] border-white" alt="" />
          <div className="py-10">
            <p className="font-poppins text-xl font-semibold">Name: {course.title}</p>
            <p className="font-poppins text-xl font-semibold">Price: ${course.price}</p>
          </div>
        </div>
      </div>
      <PayDataFrom course={course} id={id} />
    </div>
  );
};

export default ServiceDetails;
