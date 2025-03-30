import { useEffect } from 'react';

const useIntersectionObserver = (
  target: HTMLElement,
  callback: IntersectionObserverCallback, // NOTE. should be memoized
  options?: IntersectionObserverInit,
) => {
  useEffect(() => {
    if (!target) return;
    // console.log(target, callback, options);

    const observer = new IntersectionObserver(callback, options);
    observer.observe(target);
    return () => observer.disconnect();
  }, [callback, options, target]);
};

export default useIntersectionObserver;
