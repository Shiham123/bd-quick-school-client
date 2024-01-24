
/* eslint-disable no-unused-vars */
import React from 'react';
import { useParams } from 'react-router-dom';

const PaymentSuccses = () => {
    const {tranID}= useParams()
    return (
        <div>
            <h2>Paymenst Succsess {tranID} </h2>
        </div>
    );
};

export default PaymentSuccses;