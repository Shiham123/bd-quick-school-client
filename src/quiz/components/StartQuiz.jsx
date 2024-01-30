import QuizHeading from '../shared/QuizHeading';

const StartQuiz = (props) => {
  const { showStart, startQuiz } = props;

  return (
    <section style={{ display: `${showStart ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center">
        <QuizHeading headingText="This is basic quiz for admission" />
        <button
          onClick={startQuiz}
          className="bg-transparent text-white font-poppins font-semibold tracking-widest capitalize border-[1px] border-white px-8 py-4 rounded-lg text-xl hover:scale-110 duration-300 transition-all"
        >
          Start quiz
        </button>
      </div>
    </section>
  );
};

export default StartQuiz;
