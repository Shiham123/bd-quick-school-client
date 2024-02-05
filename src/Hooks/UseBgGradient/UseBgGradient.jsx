import { useEffect } from 'react';
import { useState } from 'react';

const bgGradientImg = [
  'bg-img-one',
  'bg-img-two',
  'bg-img-three',
  'bg-img-four',
  'bg-img-five',
  'bg-img-six',
  'bg-img-seven',
];

const UseBgGradient = () => {
  const [gradient, setGradient] = useState('bg-img-one');
  const htmlBody = document.body;

  const changeGradient = () => {
    const currentIndex = bgGradientImg.indexOf(gradient),
      nextIndex = currentIndex + (1 % bgGradientImg.length),
      nextGradient = bgGradientImg[nextIndex];

    htmlBody.classList.remove(gradient);
    htmlBody.classList.add(nextGradient);
    setGradient(nextGradient);
    localStorage.setItem('theme', nextGradient);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme'),
      initialTheme = savedTheme || bgGradientImg[0];

    htmlBody.classList.add(initialTheme);
    setGradient(initialTheme);
  }, [htmlBody.classList]);

  return { changeGradient, gradient };
};

export default UseBgGradient;
