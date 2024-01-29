import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';

const QuizResult = (props) => {
  const { showResult, quiz, startOver, mark } = props;
  return (
    <section style={{ display: `${showResult ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is your result" />

        <div className="flex flex-col justify-center items-center">
          <h1 className="font-lora text-2xl text-white">
            {mark > (quiz.length * 5) / 2 ? 'Awesome' : 'Not good'}
          </h1>
          <h2 className="font-lora text-2xl text-white">
            Your score is <span className="font-semibold">{mark}</span> out of{' '}
            <span className="font-semibold">{quiz.length * 5}</span>
          </h2>
        </div>

        <QuizButton btnText="Again start" onClick={startOver} />
      </div>
    </section>
  );
};

export default QuizResult;