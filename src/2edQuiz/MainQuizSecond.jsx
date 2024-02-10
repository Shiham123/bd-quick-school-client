import Answers from './components/Answers';
import Hints from './components/Hints';
import ProgressBar from './components/ProgressBar';

const MainQuizSecond = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center py-8 px-4">
        <h1 className="text-white text-xl md:text-2xl lg:text-3xl font-cinzel font-semibold text-center">
          Pick three of your favorite star wars films
        </h1>
        <p className="text-white/70 text-sm md:text-xl lg:text-2xl font-cinzel font-light py-4">
          question can have multiple answers
        </p>
      </div>
      <Answers />
      <ProgressBar />
      <Hints />
    </div>
  );
};

export default MainQuizSecond;
