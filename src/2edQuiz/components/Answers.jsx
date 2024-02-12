import useQuiz from '../../Hooks/useFirebaseDB.js/useQuiz';
import Checkbox from './Checkbox';
import Question from './Question';

const Answers = (props) => {
  const { showQuiz } = props;
  const checkedValue = (value) => {
    console.log(value);
  };

  const { isLoading, isError, quiz } = useQuiz();
  console.log(quiz);

  return (
    <>
      {showQuiz && (
        <>
          <Question questionText="Which is the right answer ? " />
          <div className="flex">
            <div className="flex flex-col w-1/2 m-8">
              <Checkbox checkedValue={checkedValue} checkboxText="option-one" />
              <Checkbox checkedValue={checkedValue} checkboxText="option-two" />
            </div>
            <div className="flex flex-col w-1/2 m-8">
              <Checkbox checkedValue={checkedValue} checkboxText="option-three" />
              <Checkbox checkedValue={checkedValue} checkboxText="option-four" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Answers;
