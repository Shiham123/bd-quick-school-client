import { AiFillDislike, AiOutlineDislike } from 'react-icons/ai';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

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
      <p className="font-bold font-poppins text-4xl gap-8">Total Like this course : {dislikeData?.totalCountDislike}</p>
    </div>
  );
};

export default DislikeComponent;
