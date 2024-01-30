import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/Authprovider';
import axios from 'axios';

const PayDataFrom = ({ id }) => {
  const { handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const onSubmit = async (data) => {
    data.productId = id;
    data.name = user.name;
    data.email = user.email;

    try {
      const response = await axios.post('http://localhost:5000/api/v1/order', data);
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
