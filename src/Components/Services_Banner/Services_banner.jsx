import { IoMdArrowDropdown } from 'react-icons/io';
import servicesBannerImg from '/src/assets/services_banner.jpg';
import { useTranslation } from 'react-i18next';

const Services_banner = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="w-[100%] relative">
      {/* banner image start here */}

      <img className="w-[100%] h-[80vh] lg:h-[50vh] object-cover" src={servicesBannerImg} alt="" />

      {/* banner image end here */}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500 via-purple-800 to-purple-600 opacity-75"></div>

      <div className="w-full lg:w-[50%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-10]">
        {/* banner title start here */}
        <h1 className="text-3xl md:text-5xl lg:text-5xl font-extrabold md:font-bold text-center ">
          {' '}
          {t('servie1')}
        </h1>
        {/* banner title end here */}

        {/* banner description start here */}
        <p className="py-6 text-lg text-center  px-4 md:px-10">{t('servie2')}</p>
        {/* banner description end here */}

        {/* scroll below button start here */}

        <div className="w-[80%] md:w-[50%] lg:w-[30%] mx-auto">
          <button className="bg-servicesBg flex justify-center items-center text-white font-bold py-4 px-8 border-b-4 border-[#2c122e] hover:border-[#000000] rounded text-xl lg:w-full  mx-auto">
            <p className="text-sm md:text-base">Scroll Below </p>
            <IoMdArrowDropdown />
          </button>
        </div>

        {/* scroll below button end here */}
      </div>
    </div>
  );
};

export default Services_banner;
