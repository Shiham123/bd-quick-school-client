import { FaGraduationCap } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaIdCard } from 'react-icons/fa';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { GiTeacher } from 'react-icons/gi';
import { TfiLocationPin } from 'react-icons/tfi';
import { useTranslation } from 'react-i18next';

const ChooseUs = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto mb-28">
      <h1 className="xs:text-lg sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-bold text-white text-center mb-20">
        {' '}
        {t('Whychooseus')}
      </h1>
      <div className="font-lora grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 lg:gap-16 md:ml-3">
        {/* 1st Step */}
        <div className="flex items-start justify-center md:justify-start gap-5 md:gap-4">
          <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#DD9933]">
            <FaGraduationCap className=" xs:text-xl sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          </div>
          <div className="xs:w-52 sm:w-64 semi-sm:w-72 md:w-64 lg:w-72">
            <h3 className="text-white text-xl lg:text-2xl mb-5"> {t('Professionalchoice')}</h3>
            <p className="text-white xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('Professionalchoice1')}</p>
          </div>
        </div>
        {/* 2nd Step */}
        <div className="flex items-start justify-center md:justify-start gap-5 md:gap-4">
          <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#18BC6D]">
            <FaBook className="xs:text-xl sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          </div>
          <div className="xs:w-52 sm:w-64 semi-sm:w-72 md:w-64 lg:w-72">
            <h3 className="text-white text-xl lg:text-2xl mb-5">{t('Qualitycontrol')}</h3>
            <p className="text-white xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('Qualitycontrol1')}</p>
          </div>
        </div>
        {/* 3rd Step */}
        <div className="flex items-start justify-center md:justify-start gap-5 md:gap-4">
          <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#FFCC51]">
            <FaIdCard className="xs:text-xl sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          </div>
          <div className="xs:w-52 sm:w-64 semi-sm:w-72 md:w-64 lg:w-72">
            <h3 className="text-white text-xl lg:text-2xl mb-5">{t('Hearts')}</h3>
            <p className="text-white xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('Hearts1')}</p>
          </div>
        </div>
        {/* 4th Step */}
        <div className="flex items-start justify-center md:justify-start gap-5 md:gap-4">
          <div className="py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#0F78EF]">
            <TbAdjustmentsHorizontal className="xs:text-xl sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          </div>
          <div className="xs:w-52 sm:w-64 semi-sm:w-72 md:w-64 lg:w-72">
            <h3 style={{ whiteSpace: 'nowrap' }} className="text-white text-xl lg:text-2xl mb-5">{t('WiderangeofCourses')}</h3>
            <p className="text-white xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('WiderangeofCourses1')}</p>
          </div>
        </div>
        {/* 5th Step */}
        <div className="flex items-start justify-center md:justify-start gap-5 md:gap-4">
          <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#F98F27]">
            <GiTeacher className="xs:text-xl sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          </div>
          <div className="xs:w-56 sm:w-64 semi-sm:w-72 md:w-64 lg:w-72">
            <h3 style={{ whiteSpace: 'nowrap' }} className="text-white text-xl lg:text-2xl mb-5">{t('CommunicativeMethod')}</h3>
            <p  className="text-white xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('CommunicativeMethod1')}</p>
          </div>
        </div>
        {/* 6th Step */}
        <div className="flex items-start justify-center md:justify-start gap-5 md:gap-4">
          <div className=" py-4 px-4 lg:py-5 lg:px-5 border rounded-full bg-[#0FB1B3]">
            <TfiLocationPin className="xs:text-xl sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl text-white" />
          </div>
          <div className="xs:w-52 sm:w-64 semi-sm:w-72 md:w-64 lg:w-72">
            <h3 className="text-white text-xl lg:text-2xl mb-5">{t('CentralLocation')}</h3>
            <p className="text-white xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('CentralLocation1')}</p>
          </div>
        </div>
      </div>
      <hr className=" xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] mx-auto mt-32 mb-10 border-2" />
    </div>
  );
};

export default ChooseUs;
