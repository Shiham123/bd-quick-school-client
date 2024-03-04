import { useTranslation } from 'react-i18next';

const Work = () => {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto mb-32">
      <h1 className="text-white xs:text-lg sm:text-xl semi-sm:text-2xl md:text-3xl lg:text-4xl font-cinzel font-semibold text-center mb-10">
        {' '}
        {t('HowItWork')}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 font-lora">
        <div className="xs:w-[250px] sm:w-[300px] semi-sm:w-[350px] md:w-[180px] lg:w-[350px] mx-auto">
          <img src="https://i.ibb.co/4mFY1sX/25-layers.png" className="mx-auto" alt="" />
          <h2 className="semi-sm:text-2xl md:text-xl lg:text-2xl font-bold text-white text-center mt-4 mb-6">
            {t('Signup')}
          </h2>
          <p className="text-white/70 text-center xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base"> {t('Signup1')}</p>
        </div>
        <div className="xs:w-[250px] sm:w-[300px] semi-sm:w-[350px] md:w-[180px] lg:w-[350px] mx-auto">
          <img src="https://i.ibb.co/NScDsqv/21-layers-123x123-1.png" className="mx-auto" alt="" />
          <h2 className="semi-sm:text-2xl md:text-xl lg:text-2xl font-bold text-white text-center mt-4 mb-6">
            {t('Selectcourse')}
          </h2>
          <p className="text-white/70 text-center xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base"> {t('Selectcourse1')}</p>
        </div>
        <div className="xs:w-[250px] sm:w-[300px] semi-sm:w-[350px] md:w-[180px] lg:w-[350px] mx-auto">
          <img src="https://i.ibb.co/Jn9Fbmy/28-layers.png" className="mx-auto" alt="" />
          <h2 className="semi-sm:text-2xl md:text-xl lg:text-2xl font-bold text-white text-center mt-4 mb-6">
            {t('StartLearning')}
          </h2>
          <p className="text-white/70 text-center xs:text-sm sm:text-sm semi-sm:text-base md:text-base lg:text-base">{t('StartLearning1')}</p>
        </div>
      </div>
      <hr className=" xs:w-[300px] sm:w-[350px] semi-sm:w-[400px] mx-auto mt-32 mb-10 border-2" />
    </div>
  );
};

export default Work;
