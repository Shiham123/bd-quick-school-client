import { useQuery } from '@tanstack/react-query';
import useAuth from '../../Hooks/useAuth/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { Link } from 'react-router-dom';

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
    <div className="lg:m-20 md:m-10 m-10 lg:grid lg:grid-cols-2 flex gap-8 flex-col justify-center items-start">
      {bookmarkedData?.map((item) => {
        const { _id, courseRouteLocation, servicesData } = item;

        return (
          <div
            className="flex lg:flex-row md:flex-col flex-col gap-4 bg-transparent border-2 border-white/50 p-4 rounded-lg w-full"
            key={_id}
          >
            <div className="w-full h-full">
              <img
                src={servicesData?.image}
                className="rounded-lg object-contain w-full h-full hover:scale-110 duration-300 transition-all"
                alt=""
              />
            </div>
            <div className="flex flex-col my-10 gap-4">
              <h1 className="text-orange-300 font-poppins lg:text-2xl md:text-xl text-sm">
                <span className="font-semibold tracking-widest text-orange-400">Title : {''}</span> {servicesData?.title}
              </h1>
              <h1 className="text-orange-300 font-poppins lg:text-2xl md:text-xl text-sm">
                <span className="font-semibold tracking-widest text-orange-400">Category : {''}</span> {servicesData?.category}
              </h1>
              <p className="text-orange-300 lg:text-2xl md:text-xl text-sm font-semibold">
                <span className="text-orange-400">Short description : {''}</span>
                {servicesData?.shortdescription}
              </p>
              <p className="text-orange-300 lg:text-2xl md:text-xl text-sm font-semibold">
                <span className="text-orange-400">Price : ${''}</span>
                {servicesData?.price}
              </p>
              <Link to={`${courseRouteLocation}`}>
                <button className="bg-transparent px-4 py-2 border-[1px] border-orange-200 rounded-lg text-orange-200 font-cinzel font-semibold text-xl hover:bg-orange-200 hover:text-black transition-all duration-300">
                  Go To course
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Bookmark;
