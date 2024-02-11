import Question from './Question';
import ResultAnswer from './ResultAnswer';
import resultImg from '../../assets/resultJpg.png';

const Analysis = (props) => {
  const { setShowResult, setShowQuiz } = props;

  const handleClick = () => {
    setShowQuiz(true), setShowResult(false);
  };

  return (
    <>
      <div className="flex lg:flex-row md:flex-col flex-col justify-evenly items-center gap-10">
        <div>
          <h1 className="text-white font-lora text-3xl font-light">
            Question analysis <br />{' '}
            <span className="text-green-500 font-semibold">your answer 5 out of 10</span>
          </h1>
        </div>
        <div>
          <img
            src={resultImg}
            alt=""
            className="p-12 hover:border-[1px] border-yellow-100/50 cursor-none hover:shadow-2xl duration-300 transition-all rounded-lg"
            width={500}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <Question questionText="result question ? " />
        <div className="flex">
          <div className="flex flex-col w-1/2 m-8">
            <ResultAnswer answerText="this is answer text" />
            <ResultAnswer answerText="this is answer text" />
          </div>
          <div className="flex flex-col w-1/2 m-8">
            <ResultAnswer answerText="this is answer text" />
            <ResultAnswer answerText="this is answer text" />
          </div>
        </div>
        <button
          onClick={handleClick}
          className="border-[1px] w-1/2 m-auto text-center border-white/50 font-lora font-semibold text-xl text-white capitalize px-10 py-4 rounded-lg tracking-widest hover:scale-105 transition-all duration-300 hover:bg-black/40"
        >
          return to the main page
        </button>
      </div>
    </>
  );
};

export default Analysis;
