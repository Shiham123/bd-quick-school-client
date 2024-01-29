import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import QuizAnimationJson from '../../assets/json/Animation - 1706526672114.json';
import QuizButton from './QuizButton';

const QuizModal = (props) => {
  const { closeModal } = props;

  const [dimensions, setDimensions] = useState({
    width: window.innerWidth * 0.5,
    height: window.innerHeight * 0.5,
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: QuizAnimationJson,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth * 0.5, height: window.innerHeight * 0.5 });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 flex justify-center items-center bg-black/50 rounded-lg">
      <div className="bg-gradient-to-tr from-[#8a2d48] via-[#413f43] to-[#172A3A] w-full h-full lg:w-[70vw] lg:h-[70vh] flex flex-col justify-center items-center rounded-lg">
        <Lottie options={defaultOptions} height={dimensions.height} width={dimensions.width} />
        <h1 className="text-white font-lora text-xl md:text-3xl lg:text-5xl font-semibold">
          This is quiz modal
        </h1>

        <QuizButton btnText="Close modal" onClick={closeModal} />
      </div>
    </div>
  );
};

export default QuizModal;
