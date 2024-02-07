import { Link, useNavigate } from 'react-router-dom';
import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';
import useLocationContext from '../../context/useLocationContext';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';
import useAuth from '../../Hooks/useAuth/useAuth';

const calculateResult = (mark, quizLength) => {
  return mark > (quizLength * 5) / 2 ? 'Awesome' : 'Not good';
};

const QuizResult = (props) => {
  const servicesLocation = useLocationContext();
  const { showResult, quiz, mark, location } = props;
  const servicesUrl = servicesLocation.location.pathname;

  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();

  const splitId = servicesUrl.slice().split('/');
  let servicesId = splitId[2];

  const resultText = calculateResult(mark, quiz.length);

  const postData = () => {
    const submittedData = { submitQuiz: true, name: user?.displayName, servicesUrl, resultText };

    axiosPublic
      .post(`/api/v2/quizUsers/${servicesId}/${user.email}`, submittedData)
      .then((response) => {
        console.log(response);
        navigate(servicesUrl, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <section style={{ display: `${showResult ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is your result" />

        <div className="flex flex-col justify-center items-center">
          <h1 className="font-lora text-xl md:text-2xl lg:text-3xl font-semibold text-white my-5">
            {resultText}
          </h1>
          <h2 className="font-lora text-xl md:text-2xl lg:text-3xl font-semibold text-white my-5">
            Your score is <span className="font-semibold">{mark}</span> out of
            <span className="font-semibold">{quiz.length * 5}</span>
          </h2>
        </div>

        <Link to={location.pathname}>
          <QuizButton btnText="Return course page" onClick={postData} />
        </Link>
      </div>
    </section>
  );
};

export default QuizResult;
