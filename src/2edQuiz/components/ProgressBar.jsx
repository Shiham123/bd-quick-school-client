import Button from './Button';

const ProgressBar = () => {
  return (
    <div>
      <div>
        <span> arrow_back </span>
      </div>
      <div>
        <div>24% Complete!</div>
        <div>
          <div></div>
        </div>
      </div>
      <div>
        <Button btnText="next question" />
      </div>
    </div>
  );
};

export default ProgressBar;
