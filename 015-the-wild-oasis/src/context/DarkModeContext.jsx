import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const isModeInLocalStorage = localStorage.getItem('dark-mode');
  const [isDarkMode, setIsDarkMode] = useState(
    isModeInLocalStorage
      ? Boolean(+isModeInLocalStorage)
      : window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      document.documentElement.classList.remove('light-mode');
    }
    if (!isDarkMode) {
      document.documentElement.classList.add('light-mode');
      document.documentElement.classList.remove('dark-mode');
    }
    localStorage.setItem('dark-mode', isDarkMode ? 1 : 0);
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode(isDark => !isDark);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (context === undefined) throw new Error('Dark mode context was used outside of DarkModeProvider');
  return context;
}

export { DarkModeProvider, useDarkMode };
