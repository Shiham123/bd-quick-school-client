const QuizPage = (props) => {
  const { quiz, showQuiz, question } = props;

  return (
    <section style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
      <div className="flex flex-col border-2 m-20 px-10 py-10 rounded-lg">
        <h5 className="font-lora text-white text-2xl">
          {' '}
          <span className="font-bold">Question :</span> {question?.question}
        </h5>

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
    </section>
  );
};

export default QuizPage;
