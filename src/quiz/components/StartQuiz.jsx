import QuizButton from '../shared/QuizButton';
import QuizHeading from '../shared/QuizHeading';
import QuizPara from '../shared/QuizPara';

const StartQuiz = (props) => {
  const { showStart, startQuiz } = props;

  return (
    <section style={{ display: `${showStart ? 'block' : 'none'}` }}>
      <div className="flex flex-col justify-center items-center mt-[10rem]">
        <div className="flex flex-col justify-center items-center">
          <QuizHeading headingText="This is basic quiz for admission" />
          <QuizPara paraText="only one time you can participate in quiz after submit quiz your are not able to participate second time" />
          <QuizPara paraText="each quiz has 5 mark -  Total mark is 50 - Total Quiz 10" />
        </div>
        <QuizButton btnText="Start quiz" onClick={startQuiz} />
        {/* <button
          onClick={startQuiz}
          className="bg-transparent text-white font-poppins font-semibold tracking-widest capitalize border-[1px] border-white px-8 py-4 rounded-lg text-xl hover:scale-110 duration-300 transition-all"
        ></button> */}
      </div>
    </section>
  );
};
//
export default StartQuiz;
