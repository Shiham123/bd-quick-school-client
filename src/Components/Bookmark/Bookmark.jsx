import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

const Bookmark = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: bookmarkedData } = useQuery({
    queryKey: ['bookmarked', user?.email],
    queryFn: async () => {
      const response = await axiosPublic(`/api/v2/getBookmark/${user.email}`);
      return response.data.combinedData;
    },
  });

  return (
    <div>
      {bookmarkedData?.map((item) => {
        const { _id, loggedInUserEmail, currentProductId, courseRouteLocation, servicesData } = item;

        return (
          <div key={_id}>
            <h1 className="text-white">{loggedInUserEmail}</h1>
            {servicesData ? (
              <>
                <h1>{servicesData.title}</h1>
              </>
            ) : (
              <>
                <h1>hello</h1>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Bookmark;
