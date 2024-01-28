import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';

const QuizPage = (props) => {
  const {
    quiz,
    showQuiz,
    allQuestion,
    questionIndex,
    nextQuestion,
    checkAnswer,
    buttonDisabled,
    correctAnswer,
    selectedAnswer,
    showingResult,
  } = props;

  return (
    <section style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is very basic quiz for admission" />

        {/* all quiz */}

        <div className="flex flex-col border-2 m-20 px-10 py-10 rounded-lg w-4/5">
          <div className="flex justify-between items-center">
            <h5 className="font-lora text-white text-2xl">
              {' '}
              <span className="font-bold">Question :</span> {allQuestion?.question}
            </h5>
            <span className="text-white font-lora font-light text-2xl">
              {quiz.indexOf(allQuestion) + 1} / {quiz.length}
            </span>
          </div>

          <div>
            {allQuestion?.options?.map((item, index) => {
              return (
                <button
                  onClick={(event) => checkAnswer(event, item)}
                  className={`flex text-white font-lora font-light text-xl border-[1px] w-full gap-4 my-4 px-8 py-6 ${
                    correctAnswer === item && 'bg-success'
                  }`}
                  disabled={buttonDisabled}
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* next question  */}
          <div>
            {questionIndex + 1 !== quiz.length ? (
              <QuizButton
                btnText="next question"
                onClick={nextQuestion}
                disabled={!selectedAnswer}
              />
            ) : (
              <QuizButton btnText="start over" onClick={showingResult} disabled={!selectedAnswer} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
