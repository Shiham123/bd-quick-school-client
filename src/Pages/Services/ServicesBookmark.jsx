import { CiBookmark } from 'react-icons/ci';
import { FaBookmark } from 'react-icons/fa';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ServicesBookmark = (props) => {
  const { loggedInUserEmail, currentProductId } = props;
  const location = useLocation();
  const [isBookmark, setIsBookmark] = useState(false);
  const axiosPublic = useAxiosPublic();

  const currentPathLocation = location.pathname;

  useEffect(() => {
    axiosPublic
      .get(`/api/v2//isBookmark/${currentProductId}/${loggedInUserEmail}`)
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
        console.log(response.data);
        setIsBookmark(true);
      })
      .catch((error) => console.log(error.response?.data.message));
  };

  const handleDeleteBookmark = async () => {
    await axiosPublic
      .delete(`/api/v2/bookmark/${currentProductId}/${loggedInUserEmail}`)
      .then((response) => {
        console.log(response);
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
