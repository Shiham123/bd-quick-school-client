const QuizPara = (props) => {
  const { paraText } = props;
  return (
    <section>
      <p className="text-white/80 w-2/3 m-auto text-center my-10 tracking-wider text-sm md:text-xl lg:text-2xl first-letter:capitalize font-lora font-medium">
        {paraText}
      </p>
    </section>
  );
};

export default QuizPara;
