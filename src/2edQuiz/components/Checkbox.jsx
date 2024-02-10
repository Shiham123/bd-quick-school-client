const Checkbox = (props) => {
  const { checkboxText } = props;
  return (
    <>
      <label>
        <input type="checkbox" />
        <span>{checkboxText}</span>
      </label>
    </>
  );
};

export default Checkbox;
