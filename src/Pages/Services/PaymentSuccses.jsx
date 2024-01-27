/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccses = () => {
  const { tranID } = useParams();
  return (
    <div className="h-full">
      <h2 className="text-white">payment Succsess {tranID} </h2>
    </div>
  );
};

export default PaymentSuccses;
