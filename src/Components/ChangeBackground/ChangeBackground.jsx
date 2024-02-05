import { useState } from 'react';
import UseBgGradient from '../../Hooks/UseBgGradient/UseBgGradient';
import Button from '../../Pages/Shared/Button/Button';
import Heading from '../../Pages/Shared/Heading/Heading';

const ChangeBackground = () => {
  const { changeGradient } = UseBgGradient();

  const [iconColor, setIconColor] = useState('white');
  const [iconRotate, setIconRotate] = useState('rotate-0');
  const [headingColor, setHeadingColor] = useState('text-white');

  const handleMouseEnter = () => {
    setIconColor('yellow');
    setIconRotate('rotate-90');
    setHeadingColor('text-yellow-500');
  };

  const handleMouseLeave = () => {
    setIconColor('white');
    setIconRotate('rotate-0');
    setHeadingColor('text-white');
  };

  return (
    <section
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="border-[1px] border-white flex flex-col items-center justify-center m-4 rounded-lg"
    >
      <Heading
        iconColor={iconColor}
        headingColor={headingColor}
        iconRotate={iconRotate}
        headingText="change your background"
      />
      <Button click={changeGradient} buttonText="change background" />
    </section>
  );
};

export default ChangeBackground;
