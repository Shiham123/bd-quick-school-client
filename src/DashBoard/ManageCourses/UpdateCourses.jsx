import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useUpdateServicesMutation } from '../../redux/services/ServicesApiSlice';
import { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCourses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    _id,
    designation,
    details,
    graduation,
    image,
    outcome,
    postgraduation,
    price,
    shortdescription,
    teacherImage,
    teachername,
    title,
  } = location.state;
  const { register, handleSubmit } = useForm();
  //Update Api Fetching
  const [UpdateCourse] = useUpdateServicesMutation();
  const [outcomeFormValue, setOutcome] = useState(outcome);
  const [imageLink, setImageLink] = useState({});

  //React quil Modules Design
  const modules = {
    toolbar: [['bold'], ['blockquote'], [{ list: 'bullet' }]],
  };

  //
  const onSubmit = async (data) => {
    //image send to the hosting site
    const { imageFile, teacherImageFile } = data;
    if (imageFile.length > 0 && teacherImageFile.length > 0) {
      // Function to upload an image and return the URL
      const uploadImage = async (file) => {
        const imageData = new FormData();
        imageData.append('image', file[0]);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
          imageData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        return response.data.data.display_url;
      };

      // Upload both images concurrently
      const [courseImageUrl, teacherImageUrl] = await Promise.all([
        uploadImage(imageFile),
        uploadImage(teacherImageFile),
      ]);
      setImageLink({
        teacherImageUrl,
        courseImageUrl,
      });
    }

    // form Data value
    const formData = {
      id: _id,
      image: imageLink?.courseImageUrl || image,
      title: data?.title,
      shortdescription: data?.shortdescription,
      price: data?.price,
      details: data?.details,
      outcome: outcomeFormValue,
      teacherImage: imageLink?.teacherImageUrl || teacherImage,
      teachername: data?.teachername,
      graduation: data?.graduation,
      postgraduation: data?.postgraduation,
      designation: data?.designation,
    };

    //Update
    UpdateCourse(formData)
      .unwrap()
      .then(() => {
        Swal.fire('Updated Successfully');
        navigate('/dashboard/manage/courses');
      });
  };
  return (
    <div className=" mx-auto px-4">
      <h1 className="text-4xl text-center font-cinzel mt-5">Update Course</h1>
      <hr className="mb-5 border-2 mt-2 border-black w-[260px] mx-auto" />

      <section className="lg:p-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="container flex flex-col mx-auto space-y-12"
        >
          {/* Divider */}
          <div className="mb-8">
            <Divider className=" text-2xl font-bold font-cinzel">Course Information</Divider>
          </div>
          {/* Course Information Data */}
          <fieldset className="grid grid-cols-4 gap-6  font-lora dark:bg-gray-900">
            {/* Upload Image */}
            <div className="space-y-2 col-span-full lg:col-span-1">
              <div>
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Update Course Image <span className="text-red-700">*</span>
                </h2>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <img src={image} alt="teacher image" className="w-1/2 h-12 mb-2" />
                      <svg
                        className="w-8 h-8 mb-4 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="mb-2 text-sm text-black">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-black">SVG, PNG, JPG or GIF </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      {...register('imageFile')}
                      name="imageFile"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Course Title */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Course Title <span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="title"
                  {...register('title', { required: true })}
                  placeholder="Enter Course Title Here"
                  defaultValue={title}
                />
              </div>
              {/* Short Description */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Short Description <span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="shortdescription"
                  {...register('shortdescription', { required: true })}
                  placeholder="Enter Course Description Here"
                  defaultValue={shortdescription}
                />
              </div>
              {/* Course Price */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Course Price <span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="price"
                  {...register('price')}
                  placeholder="Enter Course Price Here"
                  defaultValue={price}
                />
              </div>
              {/* Course Details */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Course Details <span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="details"
                  {...register('details')}
                  placeholder="Enter Course Details Here"
                  defaultValue={details}
                />
              </div>
              {/* Course Outcome */}
              <div className="col-span-full">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Course Outcome <span className="text-red-700">*</span>
                </h2>
                <ReactQuill
                  modules={modules}
                  className="h-32 mb-12"
                  value={outcomeFormValue}
                  onChange={setOutcome}
                  theme="snow"
                />
              </div>
            </div>
          </fieldset>
          {/* Divider */}
          <div className="my-8">
            <Divider className=" text-2xl font-bold font-cinzel">Teacher Information</Divider>
          </div>
          {/* Teacher Information Input */}
          <fieldset className="grid grid-cols-4 gap-6 font-lora  dark:bg-gray-900">
            {/* Upload Teacher Image */}
            <div className="space-y-2 col-span-full lg:col-span-1">
              <div>
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Update Teacher Image <span className="text-red-700">*</span>
                </h2>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6 rounded-lg px-2">
                      <img src={teacherImage} alt="teacher image" className="w-1/2 h-12 mb-2" />
                      <svg
                        className="w-8 h-8 mb-4 text-black"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>

                      <p className="mb-2 text-sm text-black">
                        <span className="font-semibold">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-black">SVG, PNG, JPG or GIF </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      {...register('teacherImageFile')}
                      name="teacherImageFile"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Teacher Name */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Teacher Name<span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="teachername"
                  {...register('teachername', { required: true })}
                  placeholder="Enter Teacher Name Here"
                  defaultValue={teachername}
                />
              </div>
              {/* Teacher Qualification(Graduation) */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Teacher Qualification(Graduation)<span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="graduation"
                  {...register('graduation', { required: true })}
                  placeholder="Enter Teacher Name Here"
                  defaultValue={graduation}
                />
              </div>
              {/* Teacher Qualification(Post Graduation) */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Teacher Qualification(Post Graduation)<span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="postgraduation"
                  {...register('postgraduation', { required: true })}
                  placeholder="Enter Teacher Name Here"
                  defaultValue={postgraduation}
                />
              </div>
              {/* Teacher Designation */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Teacher Designation<span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  name="designation"
                  {...register('designation', { required: true })}
                  placeholder="Enter Teacher Name Here"
                  defaultValue={designation}
                />
              </div>
            </div>
          </fieldset>

          {/* Button */}
          <div className="col-span-full mt-5">
            <input
              type="submit"
              value="Update Course"
              className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] "
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default UpdateCourses;
