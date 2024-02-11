import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/Authprovider';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import { useParams } from 'react-router-dom';

const PayDataFrom = () => {
  const { handleSubmit } = useForm();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  // Function to format the date and time
  const formatDate = () => {
    const currentDate = new Date();
    const month = currentDate.toLocaleString('default', { month: 'long' });
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    return `${month} ${day}, ${year}`;
  };
  const onSubmit = async (data) => {
    data.productId = id;
    data.name = user.displayName;
    data.email = user.email;
    data.dateTime = formatDate();
    data.photo = user.photoURL;
    try {
      const response = await axiosPublic.post(`/api/v1/order`, data);
      const result = response.data;
      window.location.replace(result.url);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className=" max-w-screen-2xl mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button
            type="submit"
            className="w-full py-2.5 my-6  px-4 text-xl font-semibold rounded-full bg-yellow-600 focus:outline-none hover:bg-yellow-700 hover:text-gray-200"
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default PayDataFrom;
