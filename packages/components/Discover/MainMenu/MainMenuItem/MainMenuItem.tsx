import { useCallback, useEffect, useLayoutEffect, useState } from 'react';
import { SubMenuItemProps } from '../SubMenuItem/SubMenuItem';
import { useMainMenuStore } from '@/hooks/store/Discover/MainMenu/useMainMenuStore';
import { MainMenuItemContext, useCreateMainMenuItemStore } from '@/hooks/store/Discover/MainMenu/useMainMenuItemStore';
import { useStore } from 'zustand';
import './MainMenuItem.scss';

interface MainMenuItemProps {
  id?: string;
  title: string;
  children: React.ReactElement<SubMenuItemProps>[] | React.ReactElement<SubMenuItemProps>;
}

const MainMenuItem = ({ id, title, children }: MainMenuItemProps) => {
  const [menuHeight, setMenuHeight] = useState(0);
  const { toggleMainMenu, openedSubMenuId, toggleSubMenu, isMainMenuOpened } = useMainMenuStore();
  const mainMenuItemStore = useCreateMainMenuItemStore(id);
  const { id: uniqueId, subMenuIds, isSingleList } = useStore(mainMenuItemStore);

  const isOpened = isMainMenuOpened(uniqueId);

  const handleClickMainMenu = useCallback(() => {
    toggleMainMenu?.(uniqueId);
  }, [toggleMainMenu, uniqueId]);

  useLayoutEffect(() => {
    const activeSubList = document.querySelector(`.gnb-sub-list.active`);
    setMenuHeight(activeSubList?.scrollHeight || 0);
  }, [openedSubMenuId]);

  useEffect(() => {
    if (isOpened) {
      toggleSubMenu?.(subMenuIds[0]);
    }
  }, [subMenuIds, isOpened, toggleSubMenu]);

  return (
    <MainMenuItemContext value={mainMenuItemStore}>
      <li>
        <button
          type="button"
          className={`gnb-main-trigger ${isOpened ? 'active' : ''}`}
          data-trigger="gnb"
          aria-controls={uniqueId}
          aria-expanded={isOpened}
          aria-haspopup="true"
          id={uniqueId}
          onClick={handleClickMainMenu}
        >
          {title}
        </button>

        <div className={`gnb-toggle-wrap ${isOpened ? 'is-open' : ''}`}>
          <div className="gnb-main-list" data-has-submenu={!isSingleList()} style={{ minHeight: menuHeight }}>
            {isSingleList() ? children : <ul>{children}</ul>}
          </div>
        </div>
      </li>
    </MainMenuItemContext>
  );
};

export default MainMenuItem;
export type { MainMenuItemProps };
