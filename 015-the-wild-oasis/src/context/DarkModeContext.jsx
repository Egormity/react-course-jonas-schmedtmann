import { createContext, useContext, useEffect } from 'react';

import { useLocalStorageState } from '../hooks/useLocalStorageState';

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(false, 'isDarkMode');

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark-mode');
    else document.documentElement.classList.add('light-mode');
  }, []);

  function toggleDarkMode() {
    setIsDarkMode(isDark => !isDark);
    document.documentElement.classList.toggle('dark-mode');
    document.documentElement.classList.toggle('light-mode');
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
