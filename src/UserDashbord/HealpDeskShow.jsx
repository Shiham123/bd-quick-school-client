import { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/UseAxiosSecure/UseAxiosSecure';
import useAuth from '../Hooks/useAuth/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
const HelpDeskShow = () => {
  const [posts, setPosts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [outcome, setOutcome] = useState('');
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axiosSecure.get('/api/v1/HelpDeskRoutes');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [axiosSecure]);
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
  const [modalOpen, setModalOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();
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

  return (
    <>
      <div onClick={openModal}>
        {posts.map((post, index) => (
          <div key={index} className="post">
            <div className="card max-w-[1300px] border rounded-xl  bg-[#FFFFFF] border-primary-500 mx-auto shadow-xl">
              <div className="card-body">
                <div className="flex justify-center items-center gap-5">
                  <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
                  <p> {user?.displayName}</p>
                </div>
                <p>{formatTimeDifference(post.date)}</p>
                <h2 className="card-title">{post.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
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
                {posts.map((post, index) => (
                  <div key={index} className="post">
                    <div className="card max-w-[1300px] border rounded-xl  bg-[#FFFFFF] border-primary-500 mx-auto shadow-xl">
                      <div className="card-body">
                        <div className="flex justify-center items-center gap-5">
                          <img className="rounded-full w-[48px] h-[48px]" src={user?.photoURL} alt="" />
                          <p> {user?.displayName}</p>
                        </div>
                        <p>{formatTimeDifference(post.date)}</p>
                        <h2 className="card-title">{post.title}</h2>
                        <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
                      </div>
                    </div>
                  </div>
                ))}
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
    </>
  );
};

export default HelpDeskShow;
