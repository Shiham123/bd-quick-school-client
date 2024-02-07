import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAddServicesMutation } from '../../redux/services/ServicesApiSlice';
import Swal from 'sweetalert2';
import { useState } from 'react';
const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const [outcome, setOutcome] = useState('');
  const [AddServices] = useAddServicesMutation();

  //React quil Modules Design
  const modules = {
    toolbar: [['bold'], ['blockquote'], [{ list: 'bullet' }]],
  };

  //
  const onSubmit = async (data) => {
    //image send to the hosting site
    const { imageFile } = data;
    const imageData = { image: imageFile[0] };
    const res = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
      imageData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    // form Data value
    const formData = {
      title: data?.title,
      description: data?.description,
      image: res?.data?.data?.display_url,
      details: data?.details,
      outcome,
      techer: data?.techer,
      techEdu: data?.techEdu,
      price: data?.price,
    };
    AddServices(formData)
      .unwrap()
      .then(() => {
        Swal.fire('Services Add SuccessFully');
        reset();
        setOutcome(null);
      });
  };
  return (
    <div className="max-w-xl mx-auto px-4">
      <h1 className="uppercase text-center font-bold text-violet-600 mt-6 text-2xl">
        Add course Services
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-8">
          <Divider className=" text-2xl font-bold">Course Information</Divider>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Title
          </label>
          <input
            {...register('title', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Course title"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Description
          </label>
          <input
            {...register('description', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Course description"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Details
          </label>
          <input
            {...register('details', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Course details"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Outcome
          </label>
          <ReactQuill
            modules={modules}
            className="h-32 mb-12"
            value={outcome}
            onChange={setOutcome}
            theme="snow"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Price
          </label>
          <input
            {...register('price', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Course price"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Course Image
          </label>
          <input
            type="file"
            {...register('imageFile', { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </div>
        <div className="my-8">
          <Divider className=" text-2xl font-bold">Teacher Information</Divider>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Teacher Name
          </label>
          <input
            {...register('techer', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Course Teacher Name"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Teacher Education Info
          </label>
          <input
            {...register('techEdu', { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Course Teacher Education Info"
          />
        </div>

        <input
          type="submit"
          className="w-full py-2.5 my-6  px-4 text-xl font-semibold rounded-full bg-yellow-600 focus:outline-none hover:bg-yellow-700 hover:text-gray-200"
        />
      </form>
    </div>
  );
};

export default AddServices;
