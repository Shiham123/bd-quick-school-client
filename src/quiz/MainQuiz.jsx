import { useEffect, useState } from 'react';
import StartQuiz from './components/StartQuiz';
import QuizPage from './components/QuizPage';

const MainQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    fetch('/quiz.json')
      .then((response) => response.json())
      .then((data) => {
        setQuiz(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };
  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
      <QuizPage showQuiz={showQuiz} quiz={quiz} />
    </>
  );
};

export default MainQuiz;
