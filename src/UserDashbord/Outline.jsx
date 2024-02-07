import React from 'react';
import { Link } from 'react-router-dom';

const Outline = () => {
  return (
    <div>
      <h2 className="text-center text-3xl text-white">
        The outline for this course is currently unavailable.
      </h2>
      <h3 className="text-center text-2xl text-white">
        We are working on it and hope to have it available soon. Please check back later for
        updates.
      </h3>
      <Link to={`/MyCourses`}>
        <button className="btn flex justify-center btn-info rounded-3xl text-center">
          Back to DashBoard
        </button>
      </Link>
    </div>
  );
};

export default Outline;
