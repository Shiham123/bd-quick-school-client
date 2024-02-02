import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import '../Faq/Faq.css';
const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className=" bg-gradient-to-r from-[#350D13] via-[#79212E] to-[#3E0F16] dark:from-[#1A1B1F] dark:via-[#1A1B1F] dark:to-[#1A1B1F]  shadow-md  border-black pt-5 pb-16 ">
      <h2 className="text-white font-bold font-cinzel  text-4xl text-center py-2">
        Bd Quick School Admission Success in 2023{' '}
      </h2>
      <h4 className="text-white font-lora text-center text-2xl pb-3 ">The success of 2023 is the inspiration for 2024</h4>

      <div className="group p-4  rounded-lg flex flex-col justify-center items-center gap-2 transition-all duration-300   ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex  flex-col border-white border-opacity-0 bg-[#00000042] dark:bg-[#1A1B1F] text-center font-lora  gap-4 items-center lg:w-96  rounded-xl shadow-2xl p-5  ">
            <h1 className="text-white  font-semibold font-lora tracking-widest ">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h2 className="text-center font-lora text-6xl">
                  {counterOn && <CountUp start={0} end={9386} duration={4} delay={0} />}
                </h2>
              </ScrollTrigger>
              <br />
             <span className='font-lora' >  Total students</span>
            </h1>
          </div>
          <div className="flex flex-col border-white border-opacity-0 bg-[#00000042] dark:bg-[#1A1B1F] gap-4 font-lora  items-center lg:w-96 rounded-xl shadow-2xl p-5 ">
            <h1 className="text-white  font-semibold font-lora tracking-widest">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h2 className="text-center font-lora text-6xl">
                  {counterOn && <CountUp start={0} end={800} duration={4} delay={0} />} +
                </h2>
              </ScrollTrigger>
              <br /> <span className='font-lora'>A chance student</span>
            </h1>
          </div>
          <div className="flex flex-col border-white border-opacity-0 bg-[#00000042] dark:bg-[#1A1B1F]  gap-4 items-center lg:w-96 rounded-xl shadow-2xl p-5 ">
            <h1 className="text-white  font-semibold font-lora tracking-widest">
              <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <h2 className="text-center font-lora text-6xl">
                  {counterOn && <CountUp start={0} end={24} duration={4} delay={0} />}
                </h2>
              </ScrollTrigger>
              <br />
              Top 100 chance students
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
