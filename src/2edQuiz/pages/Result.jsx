import Analysis from '../components/Analysis';
import Summary from '../components/Summary';

const Result = (props) => {
  const { showResult, setShowQuiz, setShowResult } = props;
  return (
    <div>
      {showResult && (
        <>
          <Summary />
          <Analysis setShowQuiz={setShowQuiz} setShowResult={setShowResult} />
        </>
      )}
    </div>
  );
};

export default Result;
