import { useEffect, useState } from 'react';
import StartQuiz from './components/StartQuiz';
import QuizPage from './components/QuizPage';
import axios from 'axios';

const MainQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);

  useEffect(() => {
    axios('/quiz.json')
      .then((data) => {
        setQuiz(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (quiz.length > questionIndex) {
      setQuestion(quiz[questionIndex]);
    }
  }, [question, questionIndex, quiz]);

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
      <QuizPage showQuiz={showQuiz} quiz={quiz} question={question} />
    </>
  );
};

export default MainQuiz;
