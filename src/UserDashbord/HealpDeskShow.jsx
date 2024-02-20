import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/UseAxiosSecure/UseAxiosSecure';
import useAuth from '../Hooks/useAuth/useAuth';

const HelpDeskShow = () => {
  const [posts, setPosts] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
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
  return (
    <div>
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
  );
};

export default HelpDeskShow;
