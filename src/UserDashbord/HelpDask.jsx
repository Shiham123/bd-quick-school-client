import { useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth/useAuth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import toast from 'react-hot-toast';
import HelpDeskShow from './HealpDeskShow';
import { useAddHelpPostMutation } from '../redux/services/HelpDeskApiSlice';

const HelpDask = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [outcome, setOutcome] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  // post i use redux
  const [addHelpDesk] = useAddHelpPostMutation();

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onSubmit = async (data) => {
    const newPost = {
      ...data,
      date: new Date().toISOString(),
      userEmail: user.email,
      userPhoto: user.photoURL,
      content: outcome,
    };

    try {
      addHelpDesk(newPost)
        .unwrap()
        .then(() => {
          setOutcome('');
          reset();
          toast.success('Your Announcement has been Added');
          closeModal();
        });
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
      ['link'],
      ['clean'],
    ],
  };
  return (
    <>
      <div className="max-w-[1300px] border shadow-sm rounded-xl p-5 sm:p-7 bg-[#FFFFFF] border-primary-500 mx-auto my-5 ">
        <div className="flex gap-3 justify-center items-center">
          <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
          <input
            type="text"
            onClick={openModal}
            placeholder="Share or Ask Something to Everyone?"
            className="input input-bordered rounded-full w-full"
          />
          {modalOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen">
                <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
                <div className="relative bg-white rounded-lg w-full md:w-1/2 mx-auto p-6">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                    ✕
                  </button>
                  <div className="w-full mx-auto ">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Title</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Title"
                          {...register('title', { required: true })}
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Platform</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Platform"
                          {...register('platform', { required: true })}
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="form-control w-full">
                        <label className="label">
                          <span className="label-text">Post Type</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Post Type"
                          {...register('postType', { required: true })}
                          className="input input-bordered w-full"
                        />
                      </div>
                      <div className="col-span-full">
                        <label className="label">
                          <span className="label-text">Content</span>
                        </label>
                        <ReactQuill modules={modules} className="h-32 mb-12" value={outcome} onChange={setOutcome} theme="snow" />
                      </div>
                      <div className="flex justify-between items-center gap-3 mt-3">
                        <label htmlFor="fileInput" className="custom-file-upload text-[16px]">
                          Photo/Video
                          <input id="fileInput" type="file" style={{ display: 'none' }} />
                        </label>
                        <button type="submit" className="btn-grad btn text-white bg-gray-700 hidden md:block">
                          Create Post
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-between gap-3 mt-3">
          <button className="btn-grad text-[#EE9E1E] hidden md:block h-[70px]" onClick={openModal}>
            Video/image
          </button>
          <button className="btn-grad btn text-white bg-gray-700  hidden md:block " onClick={openModal}>
            Create Post
          </button>
        </div>
      </div>
      <HelpDeskShow />
    </>
  );
};

export default HelpDask;
