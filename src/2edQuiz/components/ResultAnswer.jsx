const ResultAnswer = (props) => {
  const { answerText } = props;
  return (
    <>
      <div className="m-4 border-2 border-white/50 rounded-lg flex flex-row p-5 cursor-pointer justify-between bg-black/50">
        <h1 className="text-white font-poppins font-semibold text-sm tracking-widest first-letter:capitalize">
          {answerText}
        </h1>
      </div>
    </>
  );
};

export default ResultAnswer;
