import { useForm } from 'react-hook-form';
import { useCoursePatchMutation, useGetAllServicesQuery, useGetIdBasedServicesQuery } from '../../redux/services/ServicesApiSlice';
import { useState } from 'react';
import Swal from 'sweetalert2';

const AddUploadMenu = () => {
  const { data } = useGetAllServicesQuery();
  const { register, handleSubmit, reset } = useForm();
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedLession, setSelectedLession] = useState(null);
  const [updatedCourse] = useCoursePatchMutation();
  const { data: idBasedData } = useGetIdBasedServicesQuery(selectedCourse);
  //
  const onSubmit = async (data) => {
    updatedCourse(data)
      .unwrap()
      .then(() => {
        Swal.fire('Adding Successfully');
        reset();
      });
  };

  const handleTopic = async (e) => {
    e.preventDefault();
    const topicName = e.target.topicName.value;
    updatedCourse({ topicName, course: selectedCourse, topicLessionName: selectedLession })
      .unwrap()
      .then(() => {
        Swal.fire('Adding Successfully');
        e.target.reset();
      });
  };
  return (
    <div className="flex gap-x-4 md:justify-between flex-wrap p-2">
      {/* Add lession */}
      <div className="form-control">
        <label className="cursor-pointer label justify-start gap-4">
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            onClick={() => {
              document.getElementById('my_modal_5').showModal();
            }}
          />
          <span className="label-text">Add Lession Name</span>
        </label>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Course Selection*/}
              <div className="my-2 w-full flex items-center gap-2 flex-col md:flex-row">
                <label className="text-base font-semibold text-black hidden md:block">
                  Choose Course <span className="text-red-700">*</span>
                </label>
                <select className="select w-full max-w-xs" {...register('course', { required: true })}>
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
              <div className="col-span-full lg:col-span-3">
                <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
                  Lession Name <span className="text-red-700">*</span>
                </label>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded mt-3"
                  type="text"
                  {...register('lessionName', { required: true })}
                  placeholder="Enter Lession Name"
                />
              </div>
              <div className="modal-action">
                <input type="submit" value="Save" className="btn bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360]" />
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      {/* Add Topic */}
      <div className="form-control">
        <label className="cursor-pointer label justify-start gap-4">
          <input
            type="checkbox"
            className="checkbox checkbox-success"
            onClick={() => {
              document.getElementById('my_modal_6').showModal();
            }}
          />
          <span className="label-text">Add Topics Name</span>
        </label>
        <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <form onSubmit={handleTopic}>
              {/* Course Selection*/}
              <div className="my-2 w-full flex items-center gap-2 flex-col md:flex-row">
                <label className="text-base font-semibold text-black hidden md:block">
                  Choose Course <span className="text-red-700">*</span>
                </label>
                <select className="select w-full max-w-xs" onChange={(e) => setSelectedCourse(e.target.value)} required>
                  {data?.map((course) => (
                    <option key={course._id} value={course?._id}>
                      {course?.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Lession Selection*/}
              <div className="space-y-2 w-full my-2">
                <div>
                  <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
                    Select Lession <span className="text-red-700">*</span>
                  </label>
                  <select
                    className="select w-full mt-4 max-w-xs"
                    {...register('lession', { required: true })}
                    onChange={(e) => setSelectedLession(e.target.value)}
                  >
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
              <div className="col-span-full lg:col-span-3">
                <label className=" text-base  font-semibold text-black mb-2 lg:mb-4">
                  Topics Name <span className="text-red-700">*</span>
                </label>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded mt-3"
                  type="text"
                  name="topicName"
                  placeholder="Enter Topics Name"
                />
              </div>
              <div className="modal-action">
                <input type="submit" value="Save" className="btn bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360]" />
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default AddUploadMenu;
