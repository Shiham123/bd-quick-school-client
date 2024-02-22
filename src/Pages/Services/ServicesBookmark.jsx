import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServicesBookmark = (props) => {
  const { loggedInUserEmail, currentProductId } = props;
  const location = useLocation();
  const [isBookmark, setIsBookmark] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [showBookmarkRoute, setIsShowBookmarkRoute] = useState(false);

  const currentPathLocation = location.pathname;

  useEffect(() => {
    axiosPublic
      .get(`/api/v2/isBookmark/${currentProductId}/${loggedInUserEmail}`)
      .then((response) => {
        const isExitsBookmark = response.data?.isBookmark;
        setIsBookmark(isExitsBookmark);
      })
      .catch((error) => console.log(error.response));
  }, [axiosPublic, currentProductId, loggedInUserEmail]);

  const handleBookmarked = async () => {
    const payload = { loggedInUserEmail, currentProductId, courseRouteLocation: currentPathLocation };
    await axiosPublic
      .post('/api/v2/bookmarked', payload)
      .then((response) => {
        toast.success('you have added to bookmark', { position: 'bottom-center' });
        setIsShowBookmarkRoute(true);
        console.log(response.data);
        setIsBookmark(true);
      })
      .catch((error) => console.log(error.response?.data.message));
  };

  const handleDeleteBookmark = async () => {
    await axiosPublic
      .delete(`/api/v2/bookmark/${currentProductId}/${loggedInUserEmail}`)
      .then(() => {
        toast.success('you have remove bookmark', { position: 'bottom-center' });
        setIsShowBookmarkRoute(false);
        setIsBookmark(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex items-center my-20 gap-4">
      {isBookmark ? (
        <FaBookmark color="#07bc0c" size={30} className="cursor-pointer" onClick={handleDeleteBookmark} />
      ) : (
        <CiBookmark color="#07bc0c" size={30} className="cursor-pointer" onClick={handleBookmarked} />
      )}

      <div>
        {showBookmarkRoute ? (
          <Link to={`/bookmark`}>
            <button className="bg-transparent border-2 border-darkGreen rounded-lg text-darkGreen font-poppins font-semibold px-4 py-2">
              Go to bookmark
            </button>
          </Link>
        ) : (
          <button className="bg-transparent border-2 border-darkGreen rounded-lg text-darkGreen font-poppins font-semibold px-4 py-2">
            Don&apos;t bookmark this?
          </button>
        )}
      </div>
    </div>
  );
};

export default ServicesBookmark;
