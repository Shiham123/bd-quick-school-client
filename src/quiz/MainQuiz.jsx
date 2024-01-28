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

    if (selected === allQuestion.answer) {
      event.target.classList.add('bg-success');
    } else {
      event.target.classList.add('bg-error');
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer('');
    setCorrectAnswer('');
    setButtonDisabled(false);

    const wrongBtn = document.querySelector('button.bg-error');
    wrongBtn?.classList.remove('bg-error');

    const correctBtn = document.querySelector('button.bg-success');
    correctBtn?.classList.remove('bg-success');

    setQuestionIndex(questionIndex + 1);
  };

  const startOver = () => {
    setSelectedAnswer('');
    setCorrectAnswer('');
    setButtonDisabled(false);
    setQuestionIndex(0);

    const wrongBtn = document.querySelector('button.bg-error');
    wrongBtn?.classList.remove('bg-error');

    const correctBtn = document.querySelector('button.bg-success');
    correctBtn?.classList.remove('bg-success');
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
        selectedAnswer={selectedAnswer}
        nextQuestion={nextQuestion}
        buttonDisabled={buttonDisabled}
        startOver={startOver}
      />
    </>
  );
};

export default MainQuiz;
