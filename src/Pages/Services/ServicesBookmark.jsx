import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const ServicesBookmark = (props) => {
  const { loggedInUserEmail, currentProductId } = props;
  const location = useLocation();
  const [isBookmark, setIsBookmark] = useState(false);
  const axiosPublic = useAxiosPublic();

  const currentPathLocation = location.pathname;

  const handleBookmarked = async () => {
    const payload = { loggedInUserEmail, currentProductId, courseRouteLocation: currentPathLocation };
    await axiosPublic
      .post('/api/v2/servicesBookmark/bookmarked', payload)
      .then(() => {
        setIsBookmark(true);
      })
      .catch((error) => console.log(error));
  };

  const handleDeleteBookmark = async () => {
    await axiosPublic
      .delete(`/api/v2/servicesBookmark/bookmark/${currentProductId}/${loggedInUserEmail}`)
      .then(() => {
        setIsBookmark(false);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {isBookmark ? (
        <FaBookmark size={50} className="cursor-pointer" onClick={handleDeleteBookmark} />
      ) : (
        <CiBookmark size={50} className="cursor-pointer" onClick={handleBookmarked} />
      )}
    </div>
  );
};

export default ServicesBookmark;
