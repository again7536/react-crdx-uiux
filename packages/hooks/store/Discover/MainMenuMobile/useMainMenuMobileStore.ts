import { create, StoreApi, UseBoundStore } from 'zustand';
import type { MainMenuItemMobileProps } from '@/components/Discover/MainMenuMobile/MainMenuItemMobile/MainMenuItemMobileRenderer';
import type { SubMenuGroupMobileProps } from '@/components/Discover/MainMenuMobile/SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { createContext } from 'react';

interface MenuMobileStore {
  isOpen: boolean;
  mainMenuItems: MainMenuItemMobileProps[];
  subMenuGroups: SubMenuGroupMobileProps[];
  setIsOpen: (isOpen: boolean) => void;
  addMainMenuItem: (item: MainMenuItemMobileProps) => void;
  addSubMenuGroup: (item: SubMenuGroupMobileProps) => void;
  removeMainMenuItem: (id: string) => void;
  removeSubMenuGroup: (id: string) => void;
}

const useMainMenuMobileStore = create<MenuMobileStore>((set) => ({
  isOpen: false,
  mainMenuItems: [],
  subMenuGroups: [],
  setIsOpen: (isOpen) => set({ isOpen }),
  addMainMenuItem: (item) => set((state) => ({ mainMenuItems: [...state.mainMenuItems, item] })),
  addSubMenuGroup: (item) => set((state) => ({ subMenuGroups: [...state.subMenuGroups, item] })),
  removeMainMenuItem: (id) => set((state) => ({ mainMenuItems: state.mainMenuItems.filter((i) => i.id !== id) })),
  removeSubMenuGroup: (id) => set((state) => ({ subMenuGroups: state.subMenuGroups.filter((i) => i.id !== id) })),
}));

const MainMenuMobileContext = createContext<UseBoundStore<StoreApi<MenuMobileStore>> | null>(null);

export { useMainMenuMobileStore, MainMenuMobileContext };
export type { MenuMobileStore };
