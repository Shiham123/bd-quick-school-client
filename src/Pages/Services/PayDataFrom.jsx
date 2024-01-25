/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/Authprovider';

const PayDataFrom = ({ course, id }) => {
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const onSubmit = async (data) => {
    data.productId = id;
    fetch('http://localhost:5000/api/v1/order', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });
    const servayIteam = {
      Name: data.Name,
      Subject: data.Subject,
    };
  };
  return (
    <>
      <div className=" max-w-screen-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register('Name', { required: true })}
              className="input input-bordered w-full "
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Subject"
                {...register('Subject', { required: true })}
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <button type="submit" className="btn mt-5">
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default PayDataFrom;
