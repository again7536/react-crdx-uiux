import { useEffect } from 'react';

// NOTE. callback should be memoized
const useResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void,
  target: HTMLElement,
  options?: ResizeObserverOptions,
) => {
  useEffect(() => {
    const observer = new ResizeObserver(callback);
    observer.observe(target, options);

    return () => {
      observer.disconnect();
    };
  }, [callback, target]);
};

export default useResizeObserver;
