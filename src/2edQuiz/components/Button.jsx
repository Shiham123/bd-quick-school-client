const Button = (props) => {
  const { btnText } = props;
  return (
    <>
      <button className="btn">{btnText}</button>
    </>
  );
};

export default Button;
