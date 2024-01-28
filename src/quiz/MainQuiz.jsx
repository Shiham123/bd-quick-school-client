import { useEffect, useState } from 'react';
import StartQuiz from './components/StartQuiz';
import QuizPage from './components/QuizPage';
import axios from 'axios';

const MainQuiz = () => {
  const [quiz, setQuiz] = useState([]);

  const [showStart, setShowStart] = useState(true),
    [showQuiz, setShowQuiz] = useState(false),
    [allQuestion, setAllQuestion] = useState({}),
    [questionIndex, setQuestionIndex] = useState(0),
    [selectedAnswer, setSelectedAnswer] = useState(''),
    [correctAnswer, setCorrectAnswer] = useState(''),
    [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {
    axios('/quiz.json')
      .then((data) => {
        setQuiz(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (quiz.length > questionIndex) {
      setAllQuestion(quiz[questionIndex]);
    }
  }, [allQuestion, questionIndex, quiz]);

  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(allQuestion.answer), setSelectedAnswer(selected), setButtonDisabled(true);
    }
  };

  const nextQuestion = () => {
    console.log('object');
    setQuestionIndex(questionIndex + 1);
  };

  const startOver = () => {
    setQuestionIndex(0);
  };

  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  return (
    <>
      <StartQuiz startQuiz={startQuiz} showStart={showStart} />
      <QuizPage
        showQuiz={showQuiz}
        quiz={quiz}
        allQuestion={allQuestion}
        questionIndex={questionIndex}
        checkAnswer={checkAnswer}
        correctAnswer={correctAnswer}
        nextQuestion={nextQuestion}
        buttonDisabled={buttonDisabled}
        startOver={startOver}
      />
    </>
  );
};

export default MainQuiz;
