import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useRef, useState } from "react";
import Select from 'react-select';

// react select options
const Rating = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },

];

const ReviewForm = () => {

    //from react selector
    const [selectedOption, setSelectedOption] = useState(null);

    const formRef =useRef()
    const axiosPublic = useAxiosPublic();

    const handleAddReview = event => {
        

        event.preventDefault();
        const form = event.target;

        const fullname = form.fullname.value;
        const designation = form.designation.value;
        const rating = form.rating.value;
        const textarea = form.textarea.value;
        const ReviewForm = { fullname, designation, rating, textarea, status: 'pending' };

        console.log(ReviewForm);

        //send data to the server 

        axiosPublic.post('/api/v2/reviewpost', ReviewForm)
            .then(res => {
                console.log(res.data);
                formRef.current.reset();
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });

                    // Close the modal after successful submission
                    document.getElementById('my_modal_5').close();
                }
            })
            .catch(error => {
                console.error('Error adding feedback:', error);
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add feedback',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
            });
    };

    return (
        <div>
            <div className="card-actions justify-end">
                <button className="btn bg-violet-500 text-white text-2xl text-center w-[250px] mx-auto font-bold mb-[150px]" onClick={() => document.getElementById('my_modal_5').showModal()}>Feedback Form</button>
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
                                                font:'extrabold'
                                                //  #A32EFF
                                            },
                                        })}
                                        name="rating"

                                    />
                                    {/* <input type="number" placeholder="Rating" name="rating" className="input input-bordered" required /> */}
                                </div>

                                {/* feedback */}
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl font-bold font-lora">Share Your Feedback</span>
                                    </div>
                                    <textarea className="textarea textarea-bordered h-24" name="textarea" placeholder="Bio (Less than 50 words)" required></textarea>
                                </label>

                                {/* close the form */}
                                <div className="form-control mt-6">
                                    <button onClick={() => document.getElementById('my_modal_5').close()} type="submit" className="btn bg-violet-600 text-xl font-bold font-lora  text-white">Submit</button>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default ReviewForm;
