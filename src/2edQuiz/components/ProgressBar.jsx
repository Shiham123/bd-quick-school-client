import Button from './Button';

const ProgressBar = (props) => {
  const { setShowResult, setShowQuiz, showQuiz } = props;
  return (
    <div className="flex justify-center">
      <Button
        setShowResult={setShowResult}
        setShowQuiz={setShowQuiz}
        showQuiz={showQuiz}
        btnText="next question"
      />
    </div>
  );
};

export default ProgressBar;
