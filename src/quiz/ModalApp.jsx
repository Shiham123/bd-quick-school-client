import { useState } from 'react';
import QuizBtn from './QuizBtn';
import QuizModal from './shared/QuizModal';

const ModalApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <QuizBtn openModal={openModal} />
      {isModalOpen && <QuizModal closeModal={closeModal} />}
    </>
  );
};

export default ModalApp;
