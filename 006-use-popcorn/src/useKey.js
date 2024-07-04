import { useEffect } from 'react';

export function useKey(button, whatToDo) {
  useEffect(() => {
    // prettier-ignore
    const closeOnEscape = document.addEventListener('keydown', e => e.key.toLowerCase() === button.toLowerCase() && whatToDo());
    document.removeEventListener('keydown', closeOnEscape);
  }, [button, whatToDo]);
}
