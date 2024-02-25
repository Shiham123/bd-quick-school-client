import { useState, useRef } from 'react';
import Swal from 'sweetalert2';
import Select from 'react-select';
import { useAddReviewPostMutation } from '../../redux/services/ReviewApiSlice';

// react select options
const Rating = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

const ReviewForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const formRef = useRef();

  const [FormPost] = useAddReviewPostMutation();
  // console.log(FormPost);

  const handleAddReview = async (event) => {
    event.preventDefault();
    const form = formRef.current;

    const fullname = form.fullname.value;
    const designation = form.designation.value;
    const rating = selectedOption ? selectedOption.value : null; // Get selected rating value
    const textarea = form.textarea.value;
    const ReviewForm = { fullname, designation, rating, textarea, status: 'pending' };
    console.log(ReviewForm);

   
    try {
      FormPost(ReviewForm)
        .unwrap()
        .then(() => {
          form.reset();
          document.getElementById('my_modal_5').close();
          Swal.fire({
            title: 'Success!',
            text: 'Feedback Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        });
    } catch (error) {
      console.error('Error adding feedback:', error);
    }

  };

  const handleCancel = () => {
    // Reset the form
    formRef.current.reset();
    // Close the modal
    document.getElementById('my_modal_5').close();
  };

  return (
    <div className=''>
      <div className="card-actions justify-end">
        <button
          className="btn bg-violet-500 text-white text-2xl text-center w-[250px] mx-auto font-bold mb-[150px]"
          onClick={() => document.getElementById('my_modal_5').showModal()}
        >
          Feedback Form
        </button>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box ">
            <div className="modal-action mx-0">
              {/* form start here */}

              <form onSubmit={handleAddReview} ref={formRef} className="card-body pt-0 w-[360px] md:w-[450px] mx-auto ">
                {/* Full name */}
                <div className="form-control w-full">
                  <label className="label w-full">
                    <span className="label-text text-xl font-bold font-lora">Enter Your Full Name</span>
                  </label>
                  <input type="text" placeholder="Full Name" name="fullname" className="input input-bordered" required />
                </div>

                {/* Designation */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold font-lora">Enter Your Designation</span>
                  </label>
                  <input type="text" placeholder="Designation" name="designation" className="input input-bordered" required />
                </div>

                {/* rating */}
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text text-xl font-bold font-lora">Rating</span>
                  </label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={Rating}
                    //for color
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        text: 'black',
                        primary25: '#B75CFF',
                        primary: '#8F00FF ',
                        font: 'extrabold',
                      },
                    })}
                  />
                </div>

                {/* feedback */}
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-xl font-bold font-lora">Share Your Feedback</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    name="textarea"
                    placeholder="Bio (Less than 50 words)"
                    required
                  ></textarea>
                </label>

                {/* submit and cancel the form */}
                <div className="form-control mt-6">
                  <button type="submit" className="btn bg-violet-600 text-xl font-bold font-lora  text-white">
                    Submit
                  </button>
                  <button type="button" onClick={handleCancel} className="btn bg-violet-600 text-xl font-bold font-lora  text-white">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* for horizontal line */}
      <hr className="w-[400px] mx-auto my- border-2 mb-32" />

    </div>
  );
};

export default ReviewForm;