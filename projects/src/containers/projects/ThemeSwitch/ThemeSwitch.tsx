import React, { useEffect, useState } from 'react';
import { Theme, ThemeProvider } from '../../../context/useTheme';
import './ThemeSwitch.css';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    document
      .querySelector('.theme-container-card')
      ?.classList.remove('dark', 'light');
    document.querySelector('.theme-container-card')?.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div className="theme-container">
        <button className="theme-container-button" onClick={toggleTheme}>
          Click to Change the Theme
        </button>
        <div className="theme-container-card light"> This is Theme Toggle</div>
      </div>
    </ThemeProvider>
  );
};

export default ThemeSwitch;
