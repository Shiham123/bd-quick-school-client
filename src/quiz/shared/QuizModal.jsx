import Lottie from 'react-lottie';
import QuizAnimationJson from '../../assets/json/Animation - 1706526672114.json';

const QuizModal = (props) => {
  const { closeModal } = props;

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: QuizAnimationJson,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' },
  };

  return (
    <div className="fixed right-0 left-0 top-0 bottom-0 px-2 py-4 overflow-scroll z-50 flex justify-center items-center bg-black/50">
      <div className="bg-white w-1/2 h-1/2 ">
        <h1 className="text-black">This is quiz modal</h1>
        <Lottie options={defaultOptions} height={200} width={200} />
        <button className="text-black" onClick={closeModal}>
          Close modal
        </button>
      </div>
    </div>
  );
};

export default QuizModal;
