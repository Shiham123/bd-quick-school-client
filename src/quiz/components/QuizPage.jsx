import QuizHeading from '../shared/QuizHeading';

const QuizPage = (props) => {
  const { quiz, showQuiz, question } = props;

  return (
    <section style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is very basic quiz for admission" />

        {/* all quiz */}

        <div className="flex flex-col border-2 m-20 px-10 py-10 rounded-lg w-4/5">
          <div className="flex justify-between items-center">
            <h5 className="font-lora text-white text-2xl">
              {' '}
              <span className="font-bold">Question :</span> {question?.question}
            </h5>
            <span className="text-white font-lora font-light text-2xl">
              {quiz.indexOf(question) + 1} / {quiz.length}
            </span>
          </div>

          <div>
            {question?.options?.map((item, index) => {
              return (
                <button
                  className="flex text-white font-lora font-light text-xl border-[1px] w-full gap-4 my-4 px-8 py-6"
                  key={index}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizPage;
