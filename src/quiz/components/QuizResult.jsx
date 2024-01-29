import { Link } from 'react-router-dom';
import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';

const QuizResult = (props) => {
  const { showResult, quiz, mark, location } = props;
  return (
    <section style={{ display: `${showResult ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is your result" />

        <div className="flex flex-col justify-center items-center">
          <h1 className="font-lora text-2xl text-white">
            {mark > (quiz.length * 5) / 2 ? 'Awesome' : 'Not good'}
          </h1>
          <h2 className="font-lora text-2xl text-white">
            Your score is <span className="font-semibold">{mark}</span> out of
            <span className="font-semibold">{quiz.length * 5}</span>
          </h2>
        </div>

        <Link to={location.pathname}>
          <QuizButton btnText="Back To the page" />
        </Link>
      </div>
    </section>
  );
};

export default QuizResult;
