import Checkbox from './Checkbox';

const Answers = () => {
  const checkedValue = (value) => {
    console.log(value);
  };

  return (
    <div className="flex">
      <div className="flex flex-col w-1/2 m-8">
        <Checkbox checkedValue={checkedValue} checkboxText="option-one" />
        <Checkbox checkedValue={checkedValue} checkboxText="option-two" />
      </div>
      <div className="flex flex-col w-1/2 m-8">
        <Checkbox checkedValue={checkedValue} checkboxText="option-three" />
        <Checkbox checkedValue={checkedValue} checkboxText="option-four" />
      </div>
    </div>
  );
};

export default Answers;
