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

  return (
    <li role="none" id={id}>
      <a
        {...props}
        className={`gnb-main-trigger ${isActive ? 'active' : ''} ${className}`}
        role="tab"
        aria-selected={isActive}
        aria-controls={props.href?.substring(1)}
      >
        {title}
      </a>
    </li>
  );
};

export default MainMenuItemMobileRenderer;
export type { MainMenuItemMobileRendererProps };
