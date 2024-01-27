import { useForm } from 'react-hook-form';

const PayDataFrom = ({ course, id }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    data.productId = id;

    fetch('http://localhost:5000/api/v1/order', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        window.location.replace(result.url);
        console.log(result);
      });

    const sarvayItem = { Name: data.Name, Subject: data.Subject };
    console.log(sarvayItem);
  };
  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 flex-col">
          <div className="w-full">
            <label htmlFor="name" className="text-white font-poppins font-semibold text-2xl">
              Name
            </label>
            <input
              type="text"
              placeholder="type your name"
              className="w-full text-xl font-poppins text-black outline-none px-4 py-2 rounded-lg my-4"
              {...register('Name', { required: true })}
            />
          </div>
          <div className="flex gap-5">
            <div className="form-control w-full ">
              <label htmlFor="subject" className="text-white font-poppins font-semibold text-2xl">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="w-full text-xl font-poppins text-black outline-none px-4 py-2 rounded-lg my-4"
                {...register('Subject', { required: true })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-white py-4 rounded-lg text-2xl font-semibold font-poppins hover:bg-transparent border-[1px] border-white hover:text-white duration-200 transition-all"
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};

export default PayDataFrom;
