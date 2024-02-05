import { FaArrowRightLong } from 'react-icons/fa6';

const Heading = (props) => {
  const { headingText, iconRotate, iconColor, headingColor } = props;

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold py-4 transition-all duration-300 ${headingColor}`}
        >
          {headingText}
        </h1>
        <FaArrowRightLong
          size={60}
          color={iconColor}
          className={`${iconRotate} transition-all duration-300 my-8`}
        />
      </div>
    </>
  );
};

export default Heading;
