import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
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
  //         const commentResponse = await axiosSecure.get(`/api/v1/CommentRoutes/${selectedPost._id}`);
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
      <div onClick={openModal}>
        {posts?.map((post, index) => (
          <div key={index} onClick={() => setSelectedPost(post._id)} className="post">
            <div className="card max-w-[1300px] border rounded-xl  bg-[#FFFFFF] border-primary-500 mx-auto shadow-xl">
              <div className="card-body">
                <div className="flex justify-center items-center gap-5">
                  <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
                  <p> {user?.displayName}</p>
                </div>
                <p>{formatTimeDifference(post.date)}</p>
                <h2 className="card-title">{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                <p>{comments?.filter((comment) => comment?.postId === post._id).length} comments</p>
                {/* show comment data  */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50" onClick={closeModal}></div>
            <div className="relative bg-white rounded-lg w-full md:w-1/2 mx-auto p-6">
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
                          <div className="flex  items-center gap-5">
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
