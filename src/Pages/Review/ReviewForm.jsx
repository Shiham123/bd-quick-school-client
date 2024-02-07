import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useRef } from "react";

const ReviewForm = () => {
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
                            <form onSubmit={handleAddReview} ref={formRef} className="card-body pt-0 w-[360px] md:w-[450px] mx-auto ">
                                <div className="form-control w-full">
                                    <label className="label w-full">
                                        <span className="label-text text-xl font-bold font-lora">Enter Your Full Name</span>
                                    </label>
                                    <input type="text" placeholder="Full Name" name="fullname" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold font-lora">Enter Your Designation</span>
                                    </label>
                                    <input type="text" placeholder="Designation" name="designation" className="input input-bordered" required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-xl font-bold font-lora">Rating</span>
                                    </label>
                                    <input type="number" placeholder="Rating" name="rating" className="input input-bordered" required />
                                </div>
                                <label className="form-control w-full">
                                    <div className="label">
                                        <span className="label-text text-xl font-bold font-lora">Share Your Feedback</span>
                                    </div>
                                    <textarea className="textarea textarea-bordered h-24" name="textarea" placeholder="Bio (Less than 50 words)" required></textarea>
                                </label>
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
