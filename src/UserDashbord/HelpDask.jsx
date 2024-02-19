// import { useEffect, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import useAuth from '../Hooks/useAuth/useAuth';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const HelpDask = () => {
//   const { user } = useAuth();
//   const { register, handleSubmit } = useForm();
//   const [outcome, setOutcome] = useState('');
//   const [modalOpen, setModalOpen] = useState(false);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const storedPosts = localStorage.getItem('posts');
//     if (storedPosts) {
//       setPosts(JSON.parse(storedPosts));
//     }
//   }, []);

//   const onSubmit = (data) => {
//     const newPost = {
//       ...data,
//       date: new Date().toISOString(),
//       userEmail: user.email,
//       userPhoto: user.photoURL,
//       content: outcome,
//     };
//     const updatedPosts = [...posts, newPost];
//     setPosts(updatedPosts);
//     localStorage.setItem('posts', JSON.stringify(updatedPosts));
//     closeModal();
//   };

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const modules = {
//     toolbar: [
//       [{ header: '1' }, { header: '2' }, { font: [] }],
//       [{ size: [] }],
//       ['bold', 'italic', 'underline', 'strike', 'blockquote'],
//       [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
//       ['link'],
//       ['clean'],
//     ],
//   };
//   const formatTimeDifference = (publishedTime) => {
//     const currentTime = new Date();
//     const timeDifference = currentTime - new Date(publishedTime);
//     const secondsDifference = Math.floor(timeDifference / 1000);

//     if (secondsDifference < 60) {
//       return `${secondsDifference} seconds ago`;
//     } else if (secondsDifference < 3600) {
//       const minutesDifference = Math.floor(secondsDifference / 60);
//       return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
//     } else if (secondsDifference < 86400) {
//       const hoursDifference = Math.floor(secondsDifference / 3600);
//       return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
//     } else if (secondsDifference < 2592000) {
//       const daysDifference = Math.floor(secondsDifference / 86400);
//       return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
//     } else if (secondsDifference < 31536000) {
//       const monthsDifference = Math.floor(secondsDifference / 2592000);
//       return `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''} ago`;
//     } else {
//       const yearsDifference = Math.floor(secondsDifference / 31536000);
//       return `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''} ago`;
//     }
//   };
//   console.log(posts);
//   return (
//     <>
//       <div className="max-w-[1300px] border shadow-sm rounded-xl p-5 sm:p-7 bg-[#FFFFFF] border-primary-500 mx-auto my-5 ">
//         <div className="flex gap-3 justify-center items-center">
//           <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
//           <input
//             type="text"
//             onClick={openModal}
//             placeholder="Share or Ask Something to Everyone?"
//             className="input input-bordered rounded-full w-full"
//           />
//           {modalOpen && (
//             <div className="fixed inset-0 z-50 overflow-y-auto">
//               <div className="flex items-center justify-center min-h-screen">
//                 <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
//                 <div className="relative bg-white rounded-lg w-full md:w-1/2 mx-auto p-6">
//                   <button
//                     className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//                     onClick={closeModal}
//                   >
//                     ✕
//                   </button>
//                   <div className="w-full mx-auto ">
//                     <form onSubmit={handleSubmit(onSubmit)}>
//                       <div className="form-control w-full">
//                         <label className="label">
//                           <span className="label-text">Title</span>
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Title"
//                           {...register('title', { required: true })}
//                           className="input input-bordered w-full"
//                         />
//                       </div>
//                       <div className="form-control w-full">
//                         <label className="label">
//                           <span className="label-text">Platform</span>
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Platform"
//                           {...register('platform', { required: true })}
//                           className="input input-bordered w-full"
//                         />
//                       </div>
//                       <div className="form-control w-full">
//                         <label className="label">
//                           <span className="label-text">Post Type</span>
//                         </label>
//                         <input
//                           type="text"
//                           placeholder="Post Type"
//                           {...register('postType', { required: true })}
//                           className="input input-bordered w-full"
//                         />
//                       </div>
//                       <div className="col-span-full">
//                         <label className="label">
//                           <span className="label-text">Content</span>
//                         </label>
//                         <ReactQuill
//                           modules={modules}
//                           className="h-32 mb-12"
//                           value={outcome}
//                           onChange={setOutcome}
//                           theme="snow"
//                         />
//                       </div>
//                       <div className="flex justify-between items-center gap-3 mt-3">
//                         <label htmlFor="fileInput" className="custom-file-upload text-[16px]">
//                           Photo/Video
//                           <input id="fileInput" type="file" style={{ display: 'none' }} />
//                         </label>
//                         <button
//                           type="submit"
//                           className="btn-grad btn text-white bg-gray-700 hidden md:block"
//                         >
//                           Create Post
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="flex justify-between gap-3 mt-3">
//           <button className="btn-grad text-[#EE9E1E] hidden md:block h-[70px]" onClick={openModal}>
//             Video/image
//           </button>
//           <button
//             className="btn-grad btn text-white bg-gray-700  hidden md:block "
//             onClick={openModal}
//           >
//             Create Post
//           </button>
//         </div>
//       </div>

//       {posts.map((post, index) => (
//         <div key={index} className="post">
//           <div className="card max-w-[1300px] border rounded-xl  bg-[#FFFFFF] border-primary-500 mx-auto shadow-xl">
//             <div className="card-body">
//               <div className="flex justify-center items-center gap-5">
//                 <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
//                 <p> {user?.displayName}</p>
//               </div>
//               <p>{formatTimeDifference(post.date)}</p>
//               <h2 className="card-title">{post.title}</h2>
//               <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default HelpDask;
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../Hooks/useAuth/useAuth';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import useAxiosSecure from '../Hooks/UseAxiosSecure/UseAxiosSecure';
import toast from 'react-hot-toast';
import HelpDeskShow from './HealpDeskShow';

const HelpDask = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const [outcome, setOutcome] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

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
      const itemRes = await axiosSecure.post('/api/v1/HelpDeskRoutes', newPost);
      if (itemRes.data.insertedId) {
        reset();
        setOutcome('');
        toast.success('Your Announcement has been Added');
        closeModal();
      }
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
      {/* Removed posts mapping for now */}
    </>
  );
};

export default HelpDask;
