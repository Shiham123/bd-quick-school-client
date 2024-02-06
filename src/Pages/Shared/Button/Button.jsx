const Button = (props) => {
  const { buttonText, click } = props;
  return (
    <>
      <button
        onClick={click}
        className="border-[1px] bg-transparent border-white px-8 py-4 rounded-lg text-white text-3xl font-cinzel font-semibold tracking-widest hover:bg-yellow-500 duration-200 transition-colors hover:border-none my-10"
      >
        {buttonText}
      </button>
    </>
  );
};

export default Button;
