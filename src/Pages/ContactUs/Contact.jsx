import Slide from 'react-reveal/Slide';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth/useAuth';

const Contact = () => {
  const form = useRef();
  const { user } = useAuth();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3fn3d5q', 'template_k75jrfr', form.current, 'oeP2CdHS4lol_O1Ab').then(
      (result) => {
        console.log(result.text);
        console.log('message sent');
        e.target.reset();
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your message sent',
          showConfirmButton: false,
          timer: 1500,
        });
        e;
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="bg-[#052646]">
      <div className="px-6 md:px-24 pt-24 md:pt-28 pb-24">
        <div className="text-center">
          <h3 className="text-white font-bold text-2xl uppercase">contact Us</h3>
          <h3 className="text-secondary font-bold text-3xl uppercase">without hesitation</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4 pt-8">
          <Slide left>
            <div>
              <img
                className="rounded-lg shadow-lg mt-5"
                style={{ height: '430px', width: '470px' }}
                src="https://i.postimg.cc/PrQc59v3/giphy.gif"
                alt=""
              />
            </div>
          </Slide>

          <form ref={form} onSubmit={sendEmail}>
            <Slide right>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white font-bold uppercase">Your name*</span>
                    </label>
                    <input
                      type="text"
                      defaultValue={user?.displayName}
                      name="user_name"
                      placeholder="Name"
                      className="input input-bordered w-full"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white font-bold uppercase">Your Email*</span>
                    </label>
                    <input
                      type="Email"
                      defaultValue={user?.email}
                      required
                      placeholder="Email"
                      name="user_email"
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-white font-bold uppercase">Subject*</span>
                  </label>
                  <input type="text" placeholder="Subject" className="input input-bordered w-full" />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text uppercase text-white font-bold">Your Message*</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24" placeholder="Message" name="message"></textarea>
                </div>
                <input className="btn btn-secondary text-white w-full font-bold" type="submit" value="send message" />
              </div>
            </Slide>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
