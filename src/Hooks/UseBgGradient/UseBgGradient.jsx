import { useEffect } from 'react';
import { useState } from 'react';

const bgGradientImg = [
  'gradient-one',
  'gradient-two',
  'gradient-three',
  'gradient-four',
  'gradient-five',
  'gradient-six',
  'gradient-seven',
];

const UseBgGradient = () => {
  const [gradient, setGradient] = useState('gradient-one');
  const htmlBody = document.body;

  const changeGradient = () => {
    const currentIndex = bgGradientImg.indexOf(gradient);
    const nextIndex = (currentIndex + 1) % bgGradientImg.length;
    const nextGradient = bgGradientImg[nextIndex];

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

  return { changeGradient, gradient, bgGradientImg };
};

export default UseBgGradient;
