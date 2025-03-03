import { useEffect, useState } from 'react';

type WindowSize = 'pc' | 'mob';

const BREAK_POINT = 1024;

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>('pc');

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth >= BREAK_POINT ? 'pc' : 'mob');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
