const QuizButton = (props) => {
  const { btnText, onClick, disabled } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="disabled:bg-red-200 bg-transparent text-white font-poppins font-semibold tracking-widest capitalize border-[1px] border-white px-8 py-4 rounded-lg text-xl hover:scale-110 duration-300 transition-all"
    >
      {btnText}
    </button>
  );
};

export default QuizButton;
