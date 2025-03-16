import React, { useCallback, useEffect, useMemo } from 'react';
import { useMainMenuMobileStore } from '@/hooks/store/Discover/MainMenuMobile/useMainMenuMobileStore';
import {
  useCreateMainMenuItemMobileStore,
  MainMenuItemMobileContext,
} from '@/hooks/store/Discover/MainMenuMobile/useMainMenuItemMobileStore';
import { useStore } from 'zustand';

interface MainMenuItemMobileProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
}

// NOTE. This component delegates rendering to MainMenuItemMobileRenderer.
const MainMenuItemMobile = ({ children, className, id, ...props }: MainMenuItemMobileProps) => {
  const memoizedId = useMemo(() => id ?? window.crypto.randomUUID(), [id]);
  const { addMainMenuItem, removeMainMenuItem, activeMainMenuItemId, setActiveMainMenuItemId } =
    useMainMenuMobileStore();
  const mainMenuItemStore = useCreateMainMenuItemMobileStore(memoizedId);
  const { subMenuGroup } = useStore(mainMenuItemStore);

  const handleClick = useCallback(() => {
    setActiveMainMenuItemId(memoizedId);
  }, [memoizedId, setActiveMainMenuItemId]);

  useEffect(() => {
    addMainMenuItem({
      ...props,
      id: memoizedId,
      href: props.href ?? `#${subMenuGroup?.id}`, // anchor submenu group to main menu item
      className,
      activeMainMenuItemId,
      onClick: handleClick,
    });

    return () => {
      removeMainMenuItem(memoizedId);
    };
  }, [memoizedId, className, subMenuGroup?.id, activeMainMenuItemId, handleClick, JSON.stringify(props)]);

  return <MainMenuItemMobileContext value={mainMenuItemStore}>{children}</MainMenuItemMobileContext>;
};

export default React.memo(MainMenuItemMobile);
export type { MainMenuItemMobileProps };
