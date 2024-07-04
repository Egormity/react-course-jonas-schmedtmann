import { useState, useEffect } from 'react';

export function useLocalStorageState(initialState, keyName) {
  const storedValue = JSON.parse(localStorage.getItem(keyName));
  const [value, setValue] = useState(() => (storedValue ? storedValue : initialState));

  useEffect(() => {
    localStorage.setItem(keyName, JSON.stringify(value));
  }, [value, keyName]);

  return [value, setValue];
}
