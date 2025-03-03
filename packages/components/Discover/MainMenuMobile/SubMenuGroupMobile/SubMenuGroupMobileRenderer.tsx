import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { SubMenuGroupMobileProps } from './SubMenuGroupMobile';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';

interface SubMenuGroupMobileRendererProps extends SubMenuGroupMobileProps {
  mainMenuItemId: string;
}

const SubMenuGroupMobileRenderer = ({
  title,
  children,
  className,
  mainMenuItemId,
  ...props
}: SubMenuGroupMobileRendererProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { setActiveMainMenuItemId } = useMainMenuMobileStore();

  useEffect(() => {
    const gnbBody = document.querySelector<HTMLDivElement>('.gnb-body')!;
    const handleScroll = () => {
      if (
        gnbBody.scrollTop >= ref.current!.offsetTop ||
        gnbBody.clientHeight + gnbBody.scrollTop >= gnbBody.scrollHeight
      ) {
        setActiveMainMenuItemId(mainMenuItemId);
      }
    };
    gnbBody.addEventListener('scroll', handleScroll);

    return () => {
      gnbBody.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div {...props} className={`gnb-sub-list ${className}`} role="tabpanel" ref={ref} aria-labelledby={mainMenuItemId}>
      <h2 className="sub-title">{title}</h2>
      <ul>{children}</ul>
    </div>
  );
};

export default SubMenuGroupMobileRenderer;
export type { SubMenuGroupMobileRendererProps };
