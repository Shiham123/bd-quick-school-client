/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useGetAllServicesQuery, useGetIdBasedServicesQuery } from '../../redux/services/ServicesApiSlice';
import AddUploadMenu from './AddUploadMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAddCourseVideoMutation } from '../../redux/services/VideoApiSlice.js/VideoApiSlice';
import Swal from 'sweetalert2';
import moment from 'moment';
import useAxiosSecure from './../../Hooks/UseAxiosSecure/UseAxiosSecure';

const UploadContent = () => {
  const [courseSelect, setSelectedCourse] = useState('');
  const [lessionSelect, setLessionSelect] = useState(null);
  const [topicSelect, setTopicSelect] = useState('');
  const [topicValue, setTopicValue] = useState([]);
  const [loading, setLoading] = useState(false);
  const { data } = useGetAllServicesQuery();
  const { data: idBasedData } = useGetIdBasedServicesQuery(courseSelect);
  const [addVideoCours, isLoading] = useAddCourseVideoMutation();
  const axiosSecure = useAxiosSecure();
  //React Hooks Dependencies
  const { register, handleSubmit, reset } = useForm();
  const date = moment().format('YYYY MM DD HH mm');

  //topic Datas selection based on Lession
  useEffect(() => {
    if (lessionSelect) {
      setTopicValue([]);
    }
    if (lessionSelect) {
      if (idBasedData?.topics?.[lessionSelect]) {
        setTopicValue(idBasedData?.topics?.[lessionSelect]);
      }
    }
  }, [idBasedData, lessionSelect]);

  //upload Video
  const uploadFile = async (videoData) => {
    setLoading(true);
    const data = new FormData();
    data.append('file', videoData);
    data.append('upload_preset', 'videos_preset');

    //Video Clouding Server
    let cloudeName = 'ddezazg6b';
    let reSourceType = 'video';
    let api = `https://api.cloudinary.com/v1_1/${cloudeName}/${reSourceType}/upload`;

    const videoUrl = await axios.post(api, data).then((res) => {
      setLoading(false);
      return res.data?.url;
    });
    return videoUrl;
  };

  //Form Submission
  const onSubmit = async (data) => {
    const videoData = data?.videoFile[0];
    const videoUrl = await uploadFile(videoData);
    if (videoUrl && idBasedData && lessionSelect && topicSelect && courseSelect) {
      const videoDatas = {
        videoUrl,
        videoTitle: data?.title,
        courseID: courseSelect,
        lessionName: lessionSelect,
        topicName: topicSelect,
      };
      addVideoCours(videoDatas)
        .unwrap()
        .then((res) => {
          Swal.fire('Video Successfully Added');

          // New Notification Function sent to the database
          const newNotification = {
            courseId: courseSelect,
            title: data?.title,
            isRead: false,
            date,
          };

          // axios secure and using patch method
          axiosSecure.patch(`/api/v1/notification`, newNotification).then((res) => {
            console.log(res.data);
          });
        })
        // Catching error
        .catch(() => {
          Swal.fire('!!!Sorry,Upload Failed');
        });
    }
  };

  return (
    <div className=" mx-auto px-4">
      <h1 className="xs:text-2xl semi-sm:text-3xl md:text-4xl text-center font-cinzel mt-5" style={{ whiteSpace: 'nowrap' }}>Upload Video Content</h1>
      <hr className="mb-5 border-2 mt-2 border-black xs:w-[300px] semi-sm:w-[380px] md:w-[460px] mx-auto" />
      <AddUploadMenu />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto space-y-12">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {/* course Selection*/}
          <div className="space-y-2 w-full">
            <div>
              <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
                Select course <span className="text-red-700">*</span>
              </label>
              <select
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="select w-full mt-4 max-w-xs"
              // {...register('course', { required: true })}
              >
                <option disabled selected>
                  Choose Course
                </option>
                {data?.map((course) => (
                  <option key={course._id} value={course?._id}>
                    {course?.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Lession Selection*/}
          <div className="space-y-2 w-full">
            <div>
              <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
                Select Lession <span className="text-red-700">*</span>
              </label>
              <select className="select w-full mt-4 max-w-xs" onChange={(e) => setLessionSelect(e.target.value)}>
                <option disabled selected>
                  Choose Lession
                </option>
                {idBasedData?.lessionName?.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {/* Topic Selection*/}
          <div className="space-y-2 w-full">
            <div>
              <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
                Select Topics <span className="text-red-700">*</span>
              </label>
              <select className="select w-full mt-4 max-w-xs" onChange={(e) => setTopicSelect(e.target.value)}>
                <option disabled selected>
                  Choose Topics
                </option>
                {topicValue?.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Video */}
        <div className="space-y-2 col-span-full lg:col-span-1">
          <div>
            <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
              Upload Course Video <span className="text-red-700">*</span>
            </label>
            <div className="flex items-center justify-center w-full mt-3">
              <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  dark:hover:bg-bray-800 dark:bg-gray-700  dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
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
                  <p className="text-xs text-black">3gp,mp4,mpeg,mkv,avi </p>
                </div>
                <input id="dropzone-file" type="file" {...register('videoFile', { required: true })} name="videoFile" />
              </label>
            </div>
          </div>
        </div>

        {/* Course Title */}
        <div className="col-span-full lg:col-span-3">
          <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
            Video Title <span className="text-red-700">*</span>
          </label>
          <input
            className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded mt-3"
            type="text"
            name="title"
            {...register('title', { required: true })}
            placeholder="Enter video Title Here"
          />
        </div>

        {/* Button */}
        <div className="col-span-full mt-5">
          <input
            type="submit"
            value={isLoading || loading ? 'Uploading...' : 'Upload Video'}
            className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] "
          />
        </div>
      </form>
    </div>
  );
};

export default UploadContent;
