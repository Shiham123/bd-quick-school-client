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
    <div className=" mx-auto px-4">
      <h1 className="uppercase text-center font-bold text-violet-600 mt-6 text-2xl">
        Add course Services
      </h1>

      <section className='lg:p-16'>
        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
          <div className="my-8">
            <Divider className=" text-2xl font-bold">Course Information</Divider>
          </div>
          <fieldset className="grid grid-cols-4 gap-6  rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <div>
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">Upload Course Image <span className="text-red-700">*</span></h2>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg className="w-8 h-8 mb-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                      </svg>
                      <p className="mb-2 text-sm text-black"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-black">SVG, PNG, JPG or GIF </p>
                    </div>
                    <input id="dropzone-file" type="file" {...register('imageFile', { required: true })} name='courseimage' />
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">Course Title <span className="text-red-700">*</span></h2>
                <input className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="title" {...register('title', { required: true })} placeholder="Enter Course Title Here" id="" />
              </div>
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">Short Description <span className="text-red-700">*</span></h2>
                <input className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="shortdescription" {...register('shortdescription', { required: true })} placeholder="Enter Course Description Here" id="" />
              </div>
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">Course Price <span className="text-red-700">*</span></h2>
                <input className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="price" {...register("price")} placeholder="Enter Course Price Here" id="" />
              </div>
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">Course Details <span className="text-red-700">*</span></h2>
                <input className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="details" {...register("details")} placeholder="Enter Course Details Here" id="" />
              </div>
              



              <div className="col-span-full mt-5">
                <input type="submit" value="Submit Courses" className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] " />
              </div>
            </div>
          </fieldset>
        </form>
      </section>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
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
      </form> */}
    </div>
  );
};

export default AddServices;
