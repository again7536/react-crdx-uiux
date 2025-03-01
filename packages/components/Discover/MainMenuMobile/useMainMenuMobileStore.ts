import { create, StoreApi, UseBoundStore } from 'zustand';
import { MainMenuItemMobileProps } from './MainMenuItemMobile/MainMenuItemMobileRenderer';
import { SubMenuGroupMobileProps } from './SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { LinkProps } from '@/components/Action/Link/Link';
import { createContext } from 'react';

interface MenuMobileStore {
  mainMenuItems: MainMenuItemMobileProps[];
  subMenuGroups: SubMenuGroupMobileProps[];
  bottomLinks: LinkProps[];
  addMainMenuItem: (item: MainMenuItemMobileProps) => void;
  addSubMenuGroup: (item: SubMenuGroupMobileProps) => void;
  addBottomLink: (item: LinkProps) => void;
  removeMainMenuItem: (id: string) => void;
  removeSubMenuGroup: (id: string) => void;
  removeBottomLink: (id: string) => void;
}

const useMainMenuMobileStore = create<MenuMobileStore>((set) => ({
  mainMenuItems: [],
  subMenuGroups: [],
  bottomLinks: [],
  addMainMenuItem: (item) => set((state) => ({ mainMenuItems: [...state.mainMenuItems, item] })),
  addSubMenuGroup: (item) => set((state) => ({ subMenuGroups: [...state.subMenuGroups, item] })),
  addBottomLink: (item) => set((state) => ({ bottomLinks: [...state.bottomLinks, item] })),
  removeMainMenuItem: (id) => set((state) => ({ mainMenuItems: state.mainMenuItems.filter((i) => i.id !== id) })),
  removeSubMenuGroup: (id) => set((state) => ({ subMenuGroups: state.subMenuGroups.filter((i) => i.id !== id) })),
  removeBottomLink: (id) => set((state) => ({ bottomLinks: state.bottomLinks.filter((i) => i.id !== id) })),
}));

const MainMenuMobileContext = createContext<UseBoundStore<StoreApi<MenuMobileStore>> | null>(null);

export { useMainMenuMobileStore, MainMenuMobileContext };
export type { MenuMobileStore };
