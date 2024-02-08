import useAuth from '../Hooks/useAuth/useAuth';
import { Link } from 'react-router-dom';

const UserName = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="flex border rounded-full gap-36 justify-center items-center w-1/2 mx-auto p-2 ">
        <h2 className="text-2xl text-center  text-white">
          কোর্স শুরুর গুরুত্তপূর্ণ নির্দেশনা গুলো দেখার জন্য
        </h2>
        <Link to={`next-step`}>
          <button className="btn"> ক্লিক করুন</button>
        </Link>
      </div>

      <h2 className="text-3xl text-start py-5 w-[90%] md:w-[75%] mx-auto text-white">
        Welcome Back {user?.displayName}, Ready For Your Next Lesson?
      </h2>
    </div>
  );
};

export default UserName;
