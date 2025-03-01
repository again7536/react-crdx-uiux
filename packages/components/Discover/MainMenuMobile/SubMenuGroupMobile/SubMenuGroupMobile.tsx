import React, { useContext, useEffect, useMemo } from 'react';
import { useMainMenuMobileStore } from '../useMainMenuMobileStore';
import { SubMenuItemMobileProps } from '../SubMenuItemMobile/SubMenuItemMobile';
import { MainMenuItemMobileContext } from '../MainMenuItemMobile/useMainMenuItemMobileStore';
import { useStore } from 'zustand';

interface SubMenuGroupMobileProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactElement<SubMenuItemMobileProps>[];
}

// NOTE. This component delegates rendering to SubMenuGroupMobileRenderer.
const SubMenuGroupMobile = ({ id, title, children, className, ...props }: SubMenuGroupMobileProps) => {
  const memoizedId = useMemo(() => id ?? window.crypto.randomUUID(), [id]);
  const { addSubMenuGroup, removeSubMenuGroup } = useMainMenuMobileStore();
  const mainMenuItemStore = useContext(MainMenuItemMobileContext);
  const { addSubMenuGroup: addSubMenuGroupToMainMenuItem, removeSubMenuGroup: removeSubMenuGroupFromMainMenuItem } =
    useStore(mainMenuItemStore!);

  useEffect(() => {
    addSubMenuGroup({ id: memoizedId, title, children, className, ...props });
    addSubMenuGroupToMainMenuItem({ id: memoizedId, title, children, className, ...props });
    return () => {
      removeSubMenuGroup(memoizedId);
      removeSubMenuGroupFromMainMenuItem();
    };
  }, [memoizedId, title, className, children, ...Object.values(props)]);

  return null;
};

export default React.memo(SubMenuGroupMobile);
export type { SubMenuGroupMobileProps };
