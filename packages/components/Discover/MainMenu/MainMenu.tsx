import { MainMenuItemProps } from './MainMenuItem/MainMenuItem';

interface MainMenuProps {
  children: React.ReactElement<MainMenuItemProps>[] | React.ReactElement<MainMenuItemProps>;
}

const MainMenu = ({ children }: MainMenuProps) => {
  return (
    <nav className="krds-main-menu">
      <div className="inner">
        <ul className="gnb-menu" aria-label="메인 메뉴">
          {children}
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
export type { MainMenuProps };
