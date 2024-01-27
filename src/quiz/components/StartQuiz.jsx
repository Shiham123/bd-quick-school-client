const StartQuiz = (props) => {
  const { showStart, startQuiz } = props;

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-cinzel font-semibold tracking-widest py-12 uppercase">
          This is basic quiz for admission
        </h1>
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
