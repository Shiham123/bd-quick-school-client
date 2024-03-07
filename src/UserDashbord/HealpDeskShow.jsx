/* eslint-disable no-unused-vars */
import {  useState } from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaRegClock } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import {
  useAddCommentPostMutation,
  useGetAllHelpPostQuery,
  useGetIdBasedCommentQuery,
  useGetIdBasedPostQuery,
} from '../redux/services/HelpDeskApiSlice';
const HelpDeskShow = () => {
  const { user } = useAuth();
  const [outcome, setOutcome] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [selectedPost, setSelectedPost] = useState('');
  // const [comments, setComments] = useState([]);

  // redux data get
  const { data: posts } = useGetAllHelpPostQuery();

  const { data: comments } = useGetIdBasedCommentQuery(selectedPost);
  const { data: helpPost } = useGetIdBasedPostQuery(selectedPost);
  const [addComment] = useAddCommentPostMutation();
  console.log(helpPost);

  // get post data
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await axiosSecure.get('/api/v1/HelpDeskRoutes');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching posts:', error);
  //     }
  //   };

  //   fetchPosts();
  // }, [axiosSecure]);

  // // get comments data
  // useEffect(() => {
  //   const fetchComments = async () => {
  //     if (selectedPost) {
  //       try {
  //         const commentResponse = await axiosSecure.get(/api/v1/CommentRoutes/${selectedPost._id});
  //         setComments(commentResponse.data);
  //         console.log(commentResponse.data);
  //       } catch (error) {
  //         console.error('Error fetching comments:', error);
  //       }
  //     }
  //   };

  //   fetchComments();
  // }, [axiosSecure, selectedPost]);

  const formatTimeDifference = (publishedTime) => {
    const currentTime = new Date();
    const timeDifference = currentTime - new Date(publishedTime);
    const secondsDifference = Math.floor(timeDifference / 1000);

    if (secondsDifference < 60) {
      return `${secondsDifference} seconds ago`;
    } else if (secondsDifference < 3600) {
      const minutesDifference = Math.floor(secondsDifference / 60);
      return `${minutesDifference} minute${minutesDifference !== 1 ? 's' : ''} ago`;
    } else if (secondsDifference < 86400) {
      const hoursDifference = Math.floor(secondsDifference / 3600);
      return `${hoursDifference} hour${hoursDifference !== 1 ? 's' : ''} ago`;
    } else if (secondsDifference < 2592000) {
      const daysDifference = Math.floor(secondsDifference / 86400);
      return `${daysDifference} day${daysDifference !== 1 ? 's' : ''} ago`;
    } else if (secondsDifference < 31536000) {
      const monthsDifference = Math.floor(secondsDifference / 2592000);
      return `${monthsDifference} month${monthsDifference !== 1 ? 's' : ''} ago`;
    } else {
      const yearsDifference = Math.floor(secondsDifference / 31536000);
      return `${yearsDifference} year${yearsDifference !== 1 ? 's' : ''} ago`;
    }
};

  // make a modal for user comment

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const onSubmit = async (data) => {
    const Comments = {
      ...data,
      date: new Date().toISOString(),
      userEmail: user.email,
      userPhoto: user.photoURL,
      postId: helpPost._id,
    };

    try {
      addComment(Comments)
        .unwrap()
        .then(() => {
          setOutcome('');
          reset();
          toast.success('Your comment has been Added');
          closeModal();
        });
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    <>
      <div onClick={openModal} className='border rounded-lg border-[#e5e7eb] shadow-2xl xs:max-w-[300px] sm:max-w-[350px] semi-sm:max-w-[400px] md:max-w-[750px] lg:max-w-6xl mx-auto'>
        {posts?.map((post, index) => (
          <div key={index} onClick={() => setSelectedPost(post._id)} className="post">
            <div className="card ">
              <div className="card-body text-white">
                <div className='flex items-center justify-between'>
                  <div className="flex  items-center gap-5">
                    <img className="rounded-full w-12 h-12" src={user?.photoURL} alt="" />
                    <div>
                      <p className='text-base font-cinzel font-bold' style={{ whiteSpace: 'nowrap' }}> {user?.displayName}</p>
                      <span className='flex items-center gap-2 font-lora text-xs'>
                        <FaRegClock />
                        <p>{formatTimeDifference(post.date)}</p>
                      </span>
                    </div>
                  </div>
                  <div className='flex items-center gap-2 font-cinzel'>
                    <button className='btn btn-sm hidden md:block'>Announcement</button>
                    <button className='flex items-center gap-2'>
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 256 256" className="text-sm hidden md:block" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M238.15,78.54,177.46,17.86a20,20,0,0,0-28.3,0L97.2,70c-12.43-3.33-36.68-5.72-61.74,14.5a20,20,0,0,0-1.6,29.73l45.46,45.47-39.8,39.8a12,12,0,0,0,17,17l39.8-39.81,45.47,45.46A20,20,0,0,0,155.91,228c.46,0,.93,0,1.4-.05A20,20,0,0,0,171.87,220c4.69-6.23,11-16.13,14.44-28s3.45-22.88.16-33.4l51.7-51.87A20,20,0,0,0,238.15,78.54Zm-74.26,68.79a12,12,0,0,0-2.23,13.84c3.43,6.86,6.9,21-6.28,40.65L54.08,100.53c21.09-14.59,39.53-6.64,41-6a11.67,11.67,0,0,0,13.81-2.29l54.43-54.61,55,55Z"></path></svg>
                      <p className='hidden md:block'>Pinned</p>
                    </button>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold font-cinzel  mt-4">{post.title}</h2>
                <div className='font-lora' dangerouslySetInnerHTML={{ __html: post.content }}></div>
                <div className='flex items-center semi-sm:gap-6 md:gap-0 justify-between mt-6'>
                  <span className='flex items-center gap-2'>
                    <FaRegCommentDots />
                    <p>{comments?.filter((comment) => comment?.postId === post._id).length} comments</p>
                  </span>
                  <div className='flex items-center gap-2 font-cinzel'>
                    <button className='btn btn-sm btn-outline border-white text-white hidden md:block'>Website</button>
                    <div className='hidden sm:block'>
                      <button className='flex items-center gap-2 btn btn-sm btn-outline border-white text-white'>
                        <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true" className="text-sm" color="#0885c4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" ><path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"></path></svg>
                        Suggestion
                      </button>
                    </div>
                  </div>
                </div>
                {/* show comment data  */}
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
            <div className="relative bg-white rounded-lg xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] md:w-1/2 mx-auto p-6">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                ✕
              </button>
              <div className="w-full mx-auto ">
                {selectedPost && (
                  <div className="">
                    <div className="card-body">
                      <div className="flex justify-center items-center gap-5">
                        <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
                        <p> {user?.displayName}</p>
                      </div>
                      <p>{formatTimeDifference(helpPost?.date)}</p>
                      <h2 className="card-title">{helpPost?.title}</h2>
                      <div dangerouslySetInnerHTML={{ __html: helpPost?.content }}></div>
                    </div>
                    <h3>Comments</h3>
                    <ul>
                      {comments?.map((comment, index) => (
                        <li key={index}>
                          <div className="flex items-center gap-5">
                            <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
                            <p> {user?.displayName}</p>
                            <p>{formatTimeDifference(comment?.date)}</p>
                          </div>
                          <p className="text-start px-16 bg-slate-400"> {comment?.Comment}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full border p-2">
                    <input
                      type="text"
                      placeholder="Write on your mind?"
                      {...register('Comment', { required: true })}
                      className="input  w-full border-none "
                      style={{ border: 'none' }}
                    />
                    <div className="flex justify-between items-center gap-3 mt-3">
                      <label htmlFor="fileInput" className="custom-file-upload text-[16px]">
                        Photo
                        <input id="fileInput" type="file" style={{ display: 'none' }} />
                      </label>
                      <button type="submit" className="btn-grad btn text-white bg-gray-700 hidden md:block">
                        Post Comment
                      </button>
                    </div>{' '}
                  </div>
                </form>
                {/* show comments  */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HelpDeskShow;