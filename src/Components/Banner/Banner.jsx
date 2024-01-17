import { useState } from 'react';
import bannerImg from '../../assets/bannerImg1-removebg-preview.png';
import newBannerImg from '../../assets/bannerImg2-removebg-preview.png';
import BannerCard from './BannerCard';

const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="container  mx-auto mt-16 ">
      <div className="flex flex-col justify-center items-center gap-4 md:flex md:flex-col md:justify-center md:items-center lg:flex lg:flex-row lg:justify-between">
        {/* left side */}
        <div className="w-2/3 flex justify-center items-center">
          <div>
            <h1 className="lg:text-5xl md:text-4xl text-3xl text-white font-normal font-serif capitalize">
              6th-HSC class <br /> Online batch admission is going on!
            </h1>
            <p className="text-white/70 lg:text-2xl md:text-xl text-sm font-serif py-5">
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
          <div
            className="w-full h-full rounded-lg"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <img
              src={isHovered ? bannerImg : newBannerImg}
              className={`w-full h-full bg-contain bg-no-repeat rounded-lg transition-all duration-300 ${
                isHovered ? 'scale-110' : 'scale-110'
              }`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
