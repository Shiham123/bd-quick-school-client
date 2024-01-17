import { FaArrowRightLong } from 'react-icons/fa6';

import hscLogo from '../../assets/HSCLogo.png';
import sscLogo from '../../assets/SSCLogo.png';
import classFiveLogo from '../../assets/class5.png';
import classEightLogo from '../../assets/class8.png';

const BannerCard = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between my-10 cursor-pointer gap-4">
      {/* per item */}
      <div className="group p-4 border-2 border-white/50 rounded-lg flex flex-col justify-center items-center gap-2 hover:translate-y-1 transition-all duration-300 hover:border-b-8 hover:bg-transparent">
        <div>
          <img src={hscLogo} width={70} height={70} alt="" />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white font-semibold font-poppins tracking-widest">
            HSC Batch <span className="group-hover:text-yellow-400">2024</span>
          </h1>

          {/* Icon with hover effect */}
          <FaArrowRightLong
            className="cursor-pointer transition-all duration-200 group-hover:-rotate-90"
            size={30}
            color="white"
          />
        </div>
      </div>

      {/* per item */}
      <div className="group p-4 border-2 border-white/50 rounded-lg flex flex-col justify-center items-center gap-2 hover:translate-y-1 transition-all duration-300 hover:border-b-8 hover:bg-transparent">
        <div>
          <img src={sscLogo} width={70} height={70} alt="" />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white font-semibold font-poppins tracking-widest">
            SSC Batch <span className="group-hover:text-yellow-400">2024</span>
          </h1>

          {/* Icon with hover effect */}
          <FaArrowRightLong
            className="cursor-pointer transition-all duration-200 group-hover:-rotate-90"
            size={30}
            color="white"
          />
        </div>
      </div>
      {/* per item */}
      <div className="group p-4 border-2 border-white/50 rounded-lg flex flex-col justify-center items-center gap-2 hover:translate-y-1 transition-all duration-300 hover:border-b-8 hover:bg-transparent">
        <div>
          <img src={classEightLogo} width={70} height={70} alt="" />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white font-semibold font-poppins tracking-widest">
            Class Eight <span className="group-hover:text-yellow-400">2024</span>
          </h1>

          {/* Icon with hover effect */}
          <FaArrowRightLong
            className="cursor-pointer transition-all duration-200 group-hover:-rotate-90"
            size={30}
            color="white"
          />
        </div>
      </div>
      {/* per item */}
      <div className="group p-4 border-2 border-white/50 rounded-lg flex flex-col justify-center items-center gap-2 hover:translate-y-1 transition-all duration-300 hover:border-b-8 hover:bg-transparent">
        <div>
          <img src={classFiveLogo} width={70} height={70} alt="" />
        </div>

        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-white font-semibold font-poppins tracking-widest">
            Class Five <span className="group-hover:text-yellow-400">2024</span>
          </h1>

          {/* Icon with hover effect */}
          <FaArrowRightLong
            className="cursor-pointer transition-all duration-200 group-hover:-rotate-90"
            size={30}
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
