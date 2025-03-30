import { useEffect } from 'react';

function useClickOutside(element: HTMLElement, callback: () => void) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!element?.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [element, callback]);
}

export default useClickOutside;
