import BannerCard from './BannerCard';
import { Player } from '@lottiefiles/react-lottie-player';

const Banner = () => {
  return (
    <section className="container  mx-auto mt-20 ">
      <div className="flex flex-col justify-center items-center gap-5 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-between">
        {/* left side */}
        <div className="w-2/3 flex justify-center items-center">
          <div>
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-white font-normal font-poppins capitalize">
              6th-HSC class <br /> Online batch admission is going on!
            </h1>
            <p className="text-white/70 lg:text-2xl md:text-xl text-sm font-poppins py-5">
              💯 to 💯 preparation of complete syllabus with experienced teachers throughout 2023!
            </p>

            {/* banner card component */}
            <div>
              <BannerCard />
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="lg:w-1/3 w-2/3">
          <Player
            className=""
            autoplay
            loop
            src="https://lottie.host/1b057336-efff-4816-87be-4cd9a6a69e38/uU7QQc28rA.json"
          ></Player>
        </div>
      </div>
    </section>
  );
};

export default Banner;
