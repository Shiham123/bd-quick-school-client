import { useEffect, useState } from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const LikeDislike = (props) => {
  const { currentProductId, loggedInUserEmail } = props;

  const [isLiked, setIsLiked] = useState(false);
  const axiosPublic = useAxiosPublic();

  const handleLike = async () => {
    const likePayload = { loggedInUserEmail, currentProductId };
    await axiosPublic
      .post('/api/v2/like', likePayload) // post like to the database
      .then(() => {
        setIsLiked(true);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  const handleLikeDelete = async (id, email) => {
    await axiosPublic
      .delete(`/api/v2/delete/like/${id}/${email}`) // like delete from database based on id end email
      .then(() => {
        setIsLiked(false);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    axiosPublic
      .get(`/api/v2/like/verify/${loggedInUserEmail}/${currentProductId}`) // get the status based on id and is user like or not
      .then((response) => {
        const isUserLiked = response.data.likeStatus;
        setIsLiked(isUserLiked);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [axiosPublic, currentProductId, loggedInUserEmail]);

  const { data: likedData, refetch } = useQuery({
    queryKey: ['likedData', currentProductId],
    queryFn: async () => {
      const response = await axiosPublic.get(`/api/v2/like/${currentProductId}`); // get the total amount of like
      return response.data;
    },
  });

  return (
    <div>
      {isLiked ? (
        <>
          <AiOutlineLike
            onClick={() => {
              handleLikeDelete(currentProductId, loggedInUserEmail);
            }}
            className="cursor-pointer"
            size={70}
          />
        </>
      ) : (
        <>
          <AiFillLike onClick={handleLike} className="cursor-pointer" size={70} />
        </>
      )}
      <p className="font-bold font-poppins text-4xl gap-8">Total Like this course : {likedData?.totalCountLikes}</p>
    </div>
  );
};

export default LikeDislike;
