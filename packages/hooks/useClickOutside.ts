import { useEffect } from "react";

function useClickOutside(
  refOrSelector: React.RefObject<HTMLElement> | string,
  callback: () => void
) {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const element =
        typeof refOrSelector === "string"
          ? document.querySelector<HTMLElement>(refOrSelector)
          : refOrSelector.current;

      if (!element?.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [refOrSelector, callback]);
}

export default useClickOutside;
