import { useState } from 'react';
import Answers from './components/Answers';
import Hints from './components/Hints';
import ProgressBar from './components/ProgressBar';
import Result from './pages/Result';

const MainQuizSecond = () => {
  const [showResult, setShowResult] = useState(false);
  const [showQuiz, setShowQuiz] = useState(true);

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
      <Answers showQuiz={showQuiz} />
      <ProgressBar setShowResult={setShowResult} setShowQuiz={setShowQuiz} showQuiz={showQuiz} />
      <Hints />
      <Result showResult={showResult} setShowResult={setShowResult} setShowQuiz={setShowQuiz} />
    </div>
  );
};

export default MainQuizSecond;
