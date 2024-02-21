import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

const LikeComponent = (props) => {
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
          <button className="cursor-pointer">
            <AiFillLike
              onClick={() => {
                handleLikeDelete(currentProductId, loggedInUserEmail);
              }}
              size={70}
            />
          </button>
        </>
      ) : (
        <>
          <button className="cursor-pointer disabled:cursor-default">
            <AiOutlineLike onClick={handleLike} size={70} />
          </button>
        </>
      )}
      <p className="font-bold font-poppins text-4xl gap-8">
        Total Like this course : {likedData?.totalCountLikes === undefined ? 0 : likedData?.totalCountLikes}
      </p>
    </div>
  );
};

const DislikeComponent = (props) => {
  const { currentProductId, loggedInUserEmail } = props;
  const axiosPublic = useAxiosPublic();
  const [isDisliked, setIsDisliked] = useState(false);

  const { data: dislikeData, refetch } = useQuery({
    queryKey: ['dislikeData', currentProductId],
    queryFn: async () => {
      const response = await axiosPublic.get(`/api/v2/dislike/${currentProductId}`);
      return response.data;
    },
  });

  useEffect(() => {
    axiosPublic(`/api/v2/dislike/verify/${loggedInUserEmail}/${currentProductId}`)
      .then((response) => {
        const isUserDisliked = response.data.dislikeStatus;
        setIsDisliked(isUserDisliked);
      })
      .catch((error) => console.log(error));
  }, [axiosPublic, currentProductId, loggedInUserEmail]);

  const handleDislike = async () => {
    const dislikePayload = { loggedInUserEmail, currentProductId };
    await axiosPublic
      .post('/api/v2/dislike', dislikePayload)
      .then(() => {
        setIsDisliked(true);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  const handleDislikeDelete = async (id, email) => {
    await axiosPublic
      .delete(`/api/v2/dislike/delete/${id}/${email}`)
      .then(() => {
        setIsDisliked(false);
        refetch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {isDisliked ? (
        <AiFillDislike size={70} onClick={() => handleDislikeDelete(currentProductId, loggedInUserEmail)} className="cursor-pointer" />
      ) : (
        <AiOutlineDislike size={70} className="cursor-pointer" onClick={handleDislike} />
      )}
      <p className="font-bold font-poppins text-4xl gap-8">
        Total Like this course : {dislikeData?.totalCountDislike === undefined ? 0 : dislikeData?.totalCountDislike}
      </p>
    </div>
  );
};

const LikeDislikeComponent = (props) => {
  const { loggedInUserEmail, currentProductId } = props;

  return (
    <>
      <LikeComponent loggedInUserEmail={loggedInUserEmail} currentProductId={currentProductId} />
      <DislikeComponent loggedInUserEmail={loggedInUserEmail} currentProductId={currentProductId} />
    </>
  );
};

export default LikeDislikeComponent;
