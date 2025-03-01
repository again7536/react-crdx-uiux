import { MainMenuItemMobileProps } from './MainMenuItemMobile';

const MainMenuItemMobileRenderer = ({ title, className, id, ...props }: MainMenuItemMobileProps) => {
  return (
    <li>
      <a {...props} className={`gnb-main-trigger ${className}`}>
        {title}
      </a>
    </li>
  );
};

export default MainMenuItemMobileRenderer;
export type { MainMenuItemMobileProps };
