import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../Faq/Faq.css';
import { useTranslation } from 'react-i18next';
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  const { t, i18n } = useTranslation();
  return (
    <div className=" bg-gradient-to-r from-[#350D13] via-[#79212E] to-[#3E0F16] dark:from-[#1A1B1F] dark:via-[#1A1B1F] dark:to-[#1A1B1F]  shadow-md  border-black pt-5 pb-16 ">
      <h2 className="text-white font-bold font-cinzel  text-4xl text-center py-2">
        {t('sucsees1')}
      </h2>
      <h4 className="text-white font-lora text-center text-2xl pb-3 "> {t('sucsees2')}</h4>

      <div className="group p-4  rounded-lg flex flex-col justify-center items-center gap-2 transition-all duration-300   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex  flex-col border-white border-opacity-0 bg-[#00000042] dark:bg-[#1A1B1F] text-center font-lora  gap-4 items-center lg:w-96  rounded-xl shadow-2xl p-5  ">
            <h1 className="text-white  font-semibold font-lora tracking-widest ">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h2 className="text-center font-lora text-6xl">
                  {counterOn && <CountUp start={0} end={'9386'} duration={4} delay={0} />}
                </h2>
              </ScrollTrigger>
              <br />
              <span className="font-lora"> {t('sucsees3')}</span>
            </h1>
          </div>
          <div className="flex flex-col border-white border-opacity-0 bg-[#00000042] dark:bg-[#1A1B1F] gap-4 font-lora  items-center lg:w-96 rounded-xl shadow-2xl p-5 ">
            <h1 className="text-white  font-semibold font-lora tracking-widest">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h2 className="text-center font-lora text-6xl">
                  {counterOn && <CountUp start={0} end={800} duration={4} delay={0} />} +
                </h2>
              </ScrollTrigger>
              <br /> <span className="font-lora"> {t('sucsees4')}</span>
            </h1>
          </div>
          <div className="flex flex-col border-white border-opacity-0 bg-[#00000042] dark:bg-[#1A1B1F]  gap-4 items-center lg:w-96 rounded-xl shadow-2xl p-5 ">
            <h1 className="text-white  font-semibold font-lora tracking-widest">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h2 className="text-center font-lora text-6xl">
                  {counterOn && <CountUp start={0} end={24}  duration={4} delay={0} />}
                </h2>
              </ScrollTrigger>
              <br />
              {t('sucsees5')}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
