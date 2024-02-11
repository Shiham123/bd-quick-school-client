const Button = (props) => {
  const { btnText, setShowResult, setShowQuiz, showQuiz } = props;

  const handleButton = () => {
    setShowResult(true), setShowQuiz(false);
  };

  return (
    <>
      {showQuiz && (
        <>
          <button
            onClick={handleButton}
            className="border-[1px] border-white/50 font-lora font-semibold text-xl text-white capitalize px-10 py-4 rounded-lg tracking-widest hover:scale-105 transition-all duration-300 hover:bg-black/40"
          >
            {btnText}
          </button>
        </>
      )}
    </>
  );
};

export default Button;
