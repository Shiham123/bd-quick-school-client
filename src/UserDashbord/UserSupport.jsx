/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SupportSytem from './SupportSytem';

const UserSupport = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();
  const handeljoinRoom = useCallback(() => {
    navigate(`/MyCourses/room/${value}`);
  }, [navigate, value]);
  return (
    <div>
      <SupportSytem />

      {/* <div className=" text-center py-10">
        <div>
          <div>
            <input className="input input-bordered join-item" placeholder="Search" />
          </div>
        </div>

        <button className="btn join-item">Search</button>
      </div> */}
      <div className="text-center py-10 ">
        <input
          className="input input-bordered join-item w-1/2 p-5"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Enter Room Code"
        />
        <button className="btn join-item rounded-r-full" onClick={handeljoinRoom}>
          Join
        </button>
      </div>
    </div>
  );
};

export default UserSupport;
