import React, { useCallback } from 'react';
import { MainMenuItemMobileProps } from './MainMenuItemMobile';

interface MainMenuItemMobileRendererProps extends MainMenuItemMobileProps {
  activeMainMenuItemId: string | null;
}

const MainMenuItemMobileRenderer = ({
  title,
  className,
  id,
  activeMainMenuItemId,
  ...props
}: MainMenuItemMobileRendererProps) => {
  const isActive = activeMainMenuItemId === id;

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      props.onClick?.(event);

      event.preventDefault();
      if (!props.href) return;
      document.querySelector<HTMLDivElement>('.gnb-body')?.scrollTo({
        left: 0,
        top: document.getElementById(props.href?.substring(1))?.offsetTop,
        behavior: 'smooth',
      });
    },
    [props.href, props.onClick],
  );

  return (
    <li role="none" id={id}>
      <a
        {...props}
        className={`gnb-main-trigger ${isActive ? 'active' : ''} ${className}`}
        role="tab"
        aria-selected={isActive}
        aria-controls={props.href?.substring(1)}
        onClick={handleClick}
      >
        {title}
      </a>
    </li>
  );
};

export default React.memo(MainMenuItemMobileRenderer);
export type { MainMenuItemMobileRendererProps };
