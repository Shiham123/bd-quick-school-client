import Answers from './components/Answers';
import Hints from './components/Hints';
import ProgressBar from './components/ProgressBar';

const MainQuizSecond = () => {
  return (
    <div>
      <div>
        <h1>Pick three of your favorite star wars films</h1>
        <p>question can have multiple answers</p>
      </div>
      <Answers />
      <ProgressBar />
      <Hints />
    </div>
  );
};

export default MainQuizSecond;
