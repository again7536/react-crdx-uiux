import { useCallback, useMemo, useState } from 'react';
import SubMenuItem, { SubMenuItemProps } from '../SubMenuItem/SubMenuItem';
import { getMainMenuUniqueId } from '@/utils/MainMenuUtil';
interface MainMenuItemProps {
  id?: string;
  title: string;
  subMenus: SubMenuItemProps[];
  openedMenuId?: string;
  onClickMainMenu?: (id: string, event?: React.MouseEvent<HTMLButtonElement>) => void;
}

const MainMenuItem = ({ id, title, subMenus, openedMenuId, onClickMainMenu }: MainMenuItemProps) => {
  const [openedSubMenu, setOpenedSubMenu] = useState<string>();
  const uniqueId = useMemo(() => id ?? getMainMenuUniqueId(), []);

  const handleClickMainMenu = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onClickMainMenu?.(uniqueId, event);
    },
    [onClickMainMenu, uniqueId],
  );

  return (
    <li>
      <button
        type="button"
        className={`gnb-main-trigger ${openedMenuId === uniqueId ? 'active' : ''}`}
        data-trigger="gnb"
        aria-controls={uniqueId}
        aria-expanded={openedMenuId === uniqueId}
        aria-haspopup="true"
        id={uniqueId}
        onClick={handleClickMainMenu}
      >
        {title}
      </button>

      <div className={`gnb-toggle-wrap ${openedMenuId === uniqueId ? 'is-open' : ''}`}>
        <div className="gnb-main-list" data-has-submenu="true">
          <ul>
            {subMenus.map((subMenu) => (
              <SubMenuItem
                key={subMenu.title}
                {...subMenu}
                openedSubMenuId={openedSubMenu}
                onClickSubMenu={(subMenuId) => setOpenedSubMenu(openedSubMenu === subMenuId ? undefined : subMenuId)}
              />
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default MainMenuItem;
export type { MainMenuItemProps };
