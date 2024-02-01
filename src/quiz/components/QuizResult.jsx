import { Link } from 'react-router-dom';
import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';
import useLocationContext from '../../context/useLocationContext';
import useAuth from '../../Hooks/useAuth/useAuth';
import useAxiosPublic from '../../Hooks/useAxiosPublic/useAxiosPublic';

const QuizResult = (props) => {
  const { user } = useAuth();
  const servicesLocation = useLocationContext();
  const axiosPublic = useAxiosPublic();

  const loggedInUserName = user?.displayName;
  const loggedInUserEmail = user?.email;
  const servicesUrl = servicesLocation.location.pathname;

  const postedData = { loggedInUserEmail, loggedInUserName, servicesUrl };

  const postData = () => {
    axiosPublic
      .post('/api/v2/quizUsers', postedData)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  const { showResult, quiz, mark, location } = props;
  // const { closeModal } = useLocationContext();
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
          <QuizButton btnText="Back To the page" onClick={postData} />
        </Link>
      </div>
    </section>
  );
};

export default QuizResult;
