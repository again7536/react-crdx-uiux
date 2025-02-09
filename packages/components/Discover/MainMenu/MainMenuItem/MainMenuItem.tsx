import { useCallback, useMemo } from 'react';
import { SubMenuItemProps } from '../SubMenuItem/SubMenuItem';
import { getMainMenuUniqueId } from '@/utils/MainMenuUtil';
import { useMenuStore } from '../useMenuStore';

interface MainMenuItemProps {
  id?: string;
  title: string;
  children: React.ReactElement<SubMenuItemProps>[] | React.ReactElement<SubMenuItemProps>;
}

const MainMenuItem = ({ id, title, children }: MainMenuItemProps) => {
  const { openedMainMenuId, toggleMainMenu } = useMenuStore();
  const uniqueId = useMemo(() => id ?? getMainMenuUniqueId(), []);

  const handleClickMainMenu = useCallback(() => {
    toggleMainMenu?.(uniqueId);
  }, [toggleMainMenu, uniqueId]);

  return (
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
        <div className="gnb-main-list" data-has-submenu="true">
          <ul>{children}</ul>
        </div>
      </div>
    </li>
  );
};

export default MainMenuItem;
export type { MainMenuItemProps };
