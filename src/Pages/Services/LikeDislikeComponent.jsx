import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const LikeDislikeComponent = (props) => {
  const { currentProductId, loggedInUserEmail } = props;
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const axiosPublic = useAxiosPublic();

  // check from database is user liked ?
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

  // check from database is user disliked ?
  useEffect(() => {
    axiosPublic(`/api/v2/dislike/verify/${loggedInUserEmail}/${currentProductId}`)
      .then((response) => {
        const isUserDisliked = response.data.dislikeStatus;
        setIsDisliked(isUserDisliked);
      })
      .catch((error) => console.log(error));
  }, [axiosPublic, currentProductId, loggedInUserEmail]);

  // get liked data from database
  const { data: likedData, refetch: fetchLiked } = useQuery({
    queryKey: ['likedData', currentProductId],
    queryFn: async () => {
      const response = await axiosPublic.get(`/api/v2/like/${currentProductId}`); // get the total amount of like
      return response.data;
    },
  });

  // get disliked data from database
  const { data: dislikeData, refetch: fetchDisliked } = useQuery({
    queryKey: ['dislikeData', currentProductId],
    queryFn: async () => {
      const response = await axiosPublic.get(`/api/v2/dislike/${currentProductId}`);
      return response.data;
    },
  });

  // like posted to the database
  const handleLike = async () => {
    const likePayload = { loggedInUserEmail, currentProductId };
    await axiosPublic
      .post('/api/v2/like', likePayload) // post like to the database
      .then(() => {
        setIsLiked(true);
        fetchLiked();
      })
      .catch((error) => console.log(error));
  };

  // handle dislike posted in database
  const handleDislike = async () => {
    const dislikePayload = { loggedInUserEmail, currentProductId };
    await axiosPublic
      .post('/api/v2/dislike', dislikePayload)
      .then(() => {
        setIsDisliked(true);
        fetchDisliked();
      })
      .catch((error) => console.log(error));
  };

  // like delete based on id and email
  const handleLikeDelete = async (id, email) => {
    await axiosPublic
      .delete(`/api/v2/delete/like/${id}/${email}`) // like delete from database based on id end email
      .then(() => {
        setIsLiked(false);
        fetchLiked();
      })
      .catch((error) => console.log(error));
  };

  // dislike delete based on id and email
  const handleDislikeDelete = async (id, email) => {
    await axiosPublic
      .delete(`/api/v2/dislike/delete/${id}/${email}`)
      .then(() => {
        setIsDisliked(false);
        fetchDisliked();
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
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

      {/* -------------------- */}

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
    </>
  );
};

export default LikeDislikeComponent;
