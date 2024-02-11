const ResultAnswer = (props) => {
  const { answerText } = props;
  return (
    <>
      <h1 className="text-white">{answerText}</h1>
    </>
  );
};

export default ResultAnswer;
