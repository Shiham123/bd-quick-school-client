import Question from './Question';
import ResultAnswer from './ResultAnswer';
import resultImg from '../../assets/resultJpg.png';

const Analysis = () => {
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
      <Question questionText="result question ? " />
      <ResultAnswer answerText="this is answer text" />
    </>
  );
};

export default Analysis;
