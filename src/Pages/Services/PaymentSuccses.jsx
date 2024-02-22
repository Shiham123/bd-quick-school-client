/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';
import Video from './VideoStreming';

const PaymentSuccses = () => {
  const { tranID } = useParams();
  return (
    <div>
      <h2 className="my-4  text-white text-2xl">Paymenst Succsess {tranID} </h2>
      <div className="w-[50%] mx-auto py-6">
        {/* <Video></Video> */}
         
         
      </div>
    </div>
  );
};

export default PaymentSuccses;
