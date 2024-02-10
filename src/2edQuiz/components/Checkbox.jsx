import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

const Checkbox = (props) => {
  const { checkboxText, checkedValue } = props;
  const [checked, setChecked] = useState(false);

  const handleCheckbox = () => {
    const checkedToggle = !checked;
    setChecked(checkedToggle);
    checkedValue(checkedToggle);
  };

  return (
    <div
      onClick={handleCheckbox}
      className={`m-4 border-2 border-white/50 rounded-lg flex flex-row p-5 cursor-pointer ${
        checked ? 'bg-black/50' : 'bg-transparent'
      }`}
    >
      <label className="flex gap-4">
        <input type="checkbox" checked={checked} className="rounded-full" />
        <span className="text-white font-poppins font-semibold text-sm tracking-widest first-letter:capitalize">
          {checkboxText}
        </span>
        <FaCheck />
      </label>
    </div>
  );
};

export default Checkbox;
