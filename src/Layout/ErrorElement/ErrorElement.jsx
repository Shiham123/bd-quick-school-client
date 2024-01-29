import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";


const ErrorElement = () => {
  return (
    <div className="text-center mb-5 pb-10 lg:pb-48">
      <div className=" w-32 md:w-40 lg:w-56 ml-20 md:ml-52 lg:ml-[720px] pt-10">
        <Player
          className=""
          autoplay
          loop
          src="https://lottie.host/fb8f91a5-5ae6-4447-9cff-e5f00cd1bd8a/VkxyLbOdyD.json"
        ></Player>
      </div>
      <div className="w-96 md:w-2/3 lg:w-1/3 mx-auto">
        <Player
          className=""
          autoplay
          loop
          src="https://lottie.host/4915d8e0-0b54-4b68-8f02-caa383711301/5t3cax9NlO.json"
        ></Player>
      </div>
      <h2 className='md:text-5xl text-white font-bold mt-5'>
        NOT FOUND
      </h2>
      <Link to="/"><button className="btn btn-accent text-white mt-7">Go Home</button></Link>
    </div>
  );
};

export default ErrorElement;
