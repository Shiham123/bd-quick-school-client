const QuizButton = (props) => {
  const { btnText, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-transparent text-white font-poppins font-semibold tracking-widest capitalize border-[1px] border-white px-8 py-4 rounded-lg text-xl hover:scale-110 duration-300 transition-all"
    >
      {btnText}
    </button>
  );
};

export default QuizButton;
