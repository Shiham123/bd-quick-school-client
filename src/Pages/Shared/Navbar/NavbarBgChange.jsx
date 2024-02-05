import UseBgGradient from '../../../Hooks/UseBgGradient/UseBgGradient';

const NavbarBgChange = () => {
  const { changeGradient, bgGradientImg } = UseBgGradient();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    changeGradient(selectedValue);
  };

  return (
    <div>
      <label htmlFor="bg-color" className="bg-transparent">
        <select
          onChange={handleSelectChange}
          className="bg-transparent font-lora font-light capitalize text-xl outline-none p-4"
        >
          {bgGradientImg.map((imgClass, index) => {
            return (
              <option
                key={index}
                value={imgClass}
                className="text-black font-lora font-light text-xl outline-none p-4 bg-accent"
              >
                {imgClass}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
};

export default NavbarBgChange;
