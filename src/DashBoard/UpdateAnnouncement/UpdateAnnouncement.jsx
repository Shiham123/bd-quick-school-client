import { useState } from 'react';
import { useForm } from 'react-hook-form';
import ReactQuill from 'react-quill';
import { useLoaderData, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useUpdateAnnouncementMutation } from '../../redux/services/AnnouncementSlice';

const UpdateAnnouncement = () => {
  const [updateData] = useUpdateAnnouncementMutation();
  //   const [outcome, setOutcome] = useState('')
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const announcements = useLoaderData();
  const [outcomeFormValue, setOutcomeFormValue] = useState(announcements.outcome);

  // Onsubmit By React Hook
  const onSubmit = async (data) => {
    // console.log(data)
    const item = {
      announcementtitle: data?.announcementtitle,
      announcemensubdescription: data?.announcemensubdescription,
      outcome: outcomeFormValue,
      id: announcements._id,
    };
    updateData(item)
      .unwrap()
      .then(() => {
        toast.success('Your Announcement have been updated');
        navigate('/dashboard/manageannouncements');
      });
  };
  // Handle Outcome Change
  const handleOutcomeChange = (value) => {
    setOutcomeFormValue(value);
  };

  //React quil Modules Design
  const modules = {
    toolbar: [['bold'], ['blockquote'], [{ list: 'bullet' }]],
  };

  return (
    <div className="mx-auto px-4 min-h-screen">
      <h1 className=" text-2xl lg:text-4xl text-center font-cinzel mt-10">Update Annnouncement</h1>
      <hr className="mb-5 border-2 mt-2 border-black w-[300px] lg:w-[430px] mx-auto" />
      <section className="lg:p-28">
        <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
          <fieldset className="grid gap-6  font-lora dark:bg-gray-900">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* Announcement Title */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Announcement Title <span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  defaultValue={announcements.announcementtitle}
                  name="announcementtitle"
                  {...register('announcementtitle', { required: true })}
                  placeholder="Enter Announcement Title Here"
                  id=""
                />
              </div>
              {/* Announcement Sub-Description */}
              <div className="col-span-full lg:col-span-3">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Announcement Sub-Description <span className="text-red-700">*</span>
                </h2>
                <input
                  className="pt-4 pb-4 pl-2 md:p-4 w-full border border-black  text-base font-normal text-[#1B1A1A99] rounded"
                  type="text"
                  defaultValue={announcements.announcemensubdescription}
                  name="announcemensubdescription"
                  {...register('announcemensubdescription', { required: true })}
                  placeholder="Enter Announcement Sub-Description Here"
                  id=""
                />
              </div>
              {/* Announcement Description */}
              <div className="col-span-full">
                <h2 className=" text-base md:text-xl font-semibold text-black mb-2 lg:mb-4">
                  Announcement Description <span className="text-red-700">*</span>
                </h2>
                <ReactQuill
                  modules={modules}
                  className="h-32 mb-12"
                  // defaultValue={announcements.outcome}
                  value={outcomeFormValue}
                  onChange={handleOutcomeChange}
                  theme="snow"
                />
              </div>
            </div>
          </fieldset>
          {/* Button */}
          <div className="col-span-full mt-5">
            <input
              type="submit"
              value="Submit Announcement"
              className="btn btn-block bg-[#4357AD] text-lg text-[#fff] hover:bg-[#154360] "
            />
          </div>
        </form>
      </section>
      <Toaster />
    </div>
  );
};

export default UpdateAnnouncement;
