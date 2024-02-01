import { createContext, useState } from 'react';

const ThemeContext = createContext();

const Darkmode = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={`h-full w-full ${darkMode ? 'dark' : ''}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export { Darkmode, ThemeContext };
