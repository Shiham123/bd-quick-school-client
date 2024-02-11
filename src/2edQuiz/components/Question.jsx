const Question = (props) => {
  const { questionText } = props;
  return (
    <>
      <h1 className="font-lora text-white font-semibold text-2xl flex justify-center items-center first-letter:capitalize tracking-wide">
        {questionText}
      </h1>
    </>
  );
};

export default Question;
