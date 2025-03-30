import { SubMenuGroupMobileProps } from './SubMenuGroupMobile';
import React, { useRef, useCallback, useMemo } from 'react';
import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface SubMenuGroupMobileRendererProps extends SubMenuGroupMobileProps {
  mainMenuItemId: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const SubMenuGroupMobileRenderer = ({
  title,
  children,
  className,
  mainMenuItemId,
  ...props
}: SubMenuGroupMobileRendererProps) => {
  const prevIntersectionYRef = useRef<number>(0);
  const gnbSubListref = useRef<HTMLDivElement>(null);
  const { isOpen, setActivePrevMainMenuItem, setActiveNextMainMenuItem, setActiveMainMenuItemId } =
    useMainMenuMobileStore();

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (!isOpen) return;

      const currentIntersectionY = entries[0].boundingClientRect.y;
      const prevIntersectionY = prevIntersectionYRef.current;

      if (entries[0].isIntersecting) {
        setActiveMainMenuItemId(mainMenuItemId);
      } else if (currentIntersectionY > prevIntersectionY) {
        setActivePrevMainMenuItem(mainMenuItemId);
      } else if (currentIntersectionY < prevIntersectionY) {
        setActiveNextMainMenuItem(mainMenuItemId);
      }

      prevIntersectionYRef.current = entries[0].boundingClientRect.y;
    },
    [isOpen, mainMenuItemId, setActivePrevMainMenuItem, setActiveNextMainMenuItem],
  );

  const intersectionOptions = useMemo(
    () => ({
      root: document.querySelector<HTMLDivElement>('.gnb-body')!,
      rootMargin: '0px',
      threshold: [1.0],
    }),
    [],
  );

  useIntersectionObserver(gnbSubListref.current!, onIntersect, intersectionOptions);

  return (
    <div
      {...props}
      className={`gnb-sub-list ${className}`}
      role="tabpanel"
      ref={gnbSubListref}
      aria-labelledby={mainMenuItemId}
    >
      <h2 className="sub-title">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
};

export default React.memo(SubMenuGroupMobileRenderer);
export type { SubMenuGroupMobileRendererProps };
