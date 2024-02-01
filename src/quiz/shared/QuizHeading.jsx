const QuizHeading = (props) => {
  const { headingText } = props;
  return (
    <div>
      <h1 className="text-white m-auto text-center text-2xl md:text-3xl lg:text-5xl font-cinzel font-semibold tracking-widest py-12 uppercase">
        {headingText}
      </h1>
    </div>
  );
};

export default QuizHeading;
