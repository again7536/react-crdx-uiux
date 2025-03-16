import { useEffect } from 'react';

const useFocusTrap = (trap: HTMLElement) => {
  useEffect(() => {
    if (!trap) return;
    const focusableElements = trap.querySelectorAll<HTMLElement>(`a, button, [tabindex="0"], input, textarea, select`);

    if (!focusableElements.length) return;

    const firstFocusableElement = focusableElements[0];
    const lastFocusableElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        if (event.shiftKey && document.activeElement === firstFocusableElement) {
          event.preventDefault();
          lastFocusableElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
          // 모달 오픈 후 첫 초점 역방향 제어(modal-content가 첫초점이 아니면 사용 안해도 됨)
        } else if (event.key === 'Tab' && event.shiftKey && document.activeElement === trap) {
          event.preventDefault();
          lastFocusableElement.focus();
        }
      }
    };

    trap.addEventListener('keydown', handleKeyDown);

    return () => {
      trap.removeEventListener('keydown', handleKeyDown);
    };
  }, [trap]);
};

export default useFocusTrap;
