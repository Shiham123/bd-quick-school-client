import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';

const QuizResult = (props) => {
  const { showResult, quiz, startOver } = props;
  return (
    <section style={{ display: `${showResult ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is your result" />

        <div>
          <h1>{quiz.length}</h1>
        </div>

        <QuizButton btnText="Again start" onClick={startOver} />
      </div>
    </section>
  );
};

export default QuizResult;
