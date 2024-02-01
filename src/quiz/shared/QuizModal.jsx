import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import QuizAnimationJson from '../../assets/json/Animation - 1706526672114.json';
import QuizButton from './QuizButton';
import { Link, useLocation } from 'react-router-dom';
import useLocationContext from '../../context/useLocationContext';

const QuizModal = () => {
  const location = useLocation();
  const { setGlobalLocation } = useLocationContext();

  const [height, setHeight] = useState(400),
    [width, setWidth] = useState(400);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: QuizAnimationJson,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth,
        newHeight = windowWidth < 600 ? 150 : windowWidth < 1024 ? 250 : 400,
        newWidth = windowWidth < 600 ? 150 : windowWidth < 1024 ? 250 : 400;

      setHeight(newHeight), setWidth(newWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to set the global location state
  const setGlobalLocationState = () => {
    setGlobalLocation(location);
  };

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 flex justify-center items-center bg-black/50 rounded-lg">
      <div className="bg-gradient-to-tr from-[#8a2d48] via-[#413f43] to-[#172A3A] w-[70vw] h-[50vh] md:w-[60vw] md:h-[60vh] lg:w-[65vw] lg:h-[65vh] flex flex-col justify-center items-center rounded-lg shadow-2xl shadow-orange-500">
        <Lottie options={defaultOptions} height={height} width={width} />
        <h1 className="text-white m-auto text-center font-cinzel text-xl md:text-3xl lg:text-5xl font-semibold first-letter:uppercase">
          This is a test quiz for your skill test
        </h1>

        <div className="flex gap-8 my-10">
          <Link to={{ pathname: '/quiz', state: location }} onClick={setGlobalLocationState}>
            <QuizButton btnText="Confirm Quiz" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizModal;
