import { useCallback, useEffect, useMemo } from 'react';
import { SubMenuItemProps } from '../SubMenuItem/SubMenuItem';
import { getMainMenuUniqueId } from '@/utils/MainMenuUtil';
import { useMainMenuStore } from '@/hooks/store/Discover/MainMenu/useMainMenuStore';
import { MainMenuContext, useCreateMainMenuItemStore } from '@/hooks/store/Discover/MainMenu/useMainMenuItemStore';
import { useStore } from 'zustand';

interface MainMenuItemProps {
  id?: string;
  title: string;
  children: React.ReactElement<SubMenuItemProps>[] | React.ReactElement<SubMenuItemProps>;
}

const MainMenuItem = ({ id, title, children }: MainMenuItemProps) => {
  const { openedMainMenuId, toggleMainMenu } = useMainMenuStore();
  const uniqueId = useMemo(() => id ?? getMainMenuUniqueId(), []);
  const mainMenuStore = useCreateMainMenuItemStore(uniqueId);
  const { hasSubMenu, setHasSubMenu } = useStore(mainMenuStore);

  useEffect(() => {
    setHasSubMenu(Array.isArray(children) && children.length > 0);
  }, [children, setHasSubMenu]);

  const handleClickMainMenu = useCallback(() => {
    toggleMainMenu?.(uniqueId);
  }, [toggleMainMenu, uniqueId]);

  return (
    <MainMenuContext value={mainMenuStore}>
      <li>
        <button
          type="button"
          className={`gnb-main-trigger ${openedMainMenuId === uniqueId ? 'active' : ''}`}
          data-trigger="gnb"
          aria-controls={uniqueId}
          aria-expanded={openedMainMenuId === uniqueId}
          aria-haspopup="true"
          id={uniqueId}
          onClick={handleClickMainMenu}
        >
          {title}
        </button>

        <div className={`gnb-toggle-wrap ${openedMainMenuId === uniqueId ? 'is-open' : ''}`}>
          <div className="gnb-main-list" data-has-submenu={hasSubMenu ? 'true' : 'false'}>
            {hasSubMenu && <ul>{children}</ul>}
            {!hasSubMenu && children}
          </div>
        </div>
      </li>
    </MainMenuContext>
  );
};

export default MainMenuItem;
export type { MainMenuItemProps };
