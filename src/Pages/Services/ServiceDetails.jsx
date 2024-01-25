
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PayDataFrom from "./PayDataFrom";


const ServiceDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch("/public/Services.json") 
      .then((response) => response.json())
      .then((data) => {
        const selectedCourse = data.find((c) => c.Id === id);
        setCourse(selectedCourse);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="text-white">
        <h2>Course Details</h2>
        <img src={course.image} alt="" />
        <p>Name: {course.title}</p>
        <p>Price: ${course.price}</p>
      </div>
      <PayDataFrom course={course}id={id} />
    </div>
  );
};

export default ServiceDetails;
