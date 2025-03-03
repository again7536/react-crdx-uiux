import { create, StoreApi, UseBoundStore } from 'zustand';
import type { MainMenuItemMobileRendererProps } from '@/components/Discover/MainMenuMobile/MainMenuItemMobile/MainMenuItemMobileRenderer';
import type { SubMenuGroupMobileRendererProps } from '@/components/Discover/MainMenuMobile/SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { createContext } from 'react';

interface MenuMobileStore {
  isOpen: boolean;
  activeMainMenuItemId: string | null;
  mainMenuItems: MainMenuItemMobileRendererProps[];
  subMenuGroups: SubMenuGroupMobileRendererProps[];
  searchValue: string;
  setIsOpen: (isOpen: boolean) => void;
  addMainMenuItem: (item: MainMenuItemMobileRendererProps) => void;
  addSubMenuGroup: (item: SubMenuGroupMobileRendererProps) => void;
  removeMainMenuItem: (id: string) => void;
  removeSubMenuGroup: (id: string) => void;
  setSearchValue: (searchValue: string) => void;
  setActiveMainMenuItemId: (id: string) => void;
}

const useMainMenuMobileStore = create<MenuMobileStore>((set) => ({
  isOpen: false,
  activeMainMenuItemId: null,
  mainMenuItems: [],
  subMenuGroups: [],
  searchValue: '',
  setIsOpen: (isOpen) => set({ isOpen }),
  addMainMenuItem: (item) =>
    set((state) => ({
      mainMenuItems: [...state.mainMenuItems, item],
      activeMainMenuItemId: state.activeMainMenuItemId ?? item.id, // set first item as active if there is no active main menu item
    })),
  addSubMenuGroup: (item) => set((state) => ({ subMenuGroups: [...state.subMenuGroups, item] })),
  removeMainMenuItem: (id) => set((state) => ({ mainMenuItems: state.mainMenuItems.filter((i) => i.id !== id) })),
  removeSubMenuGroup: (id) => set((state) => ({ subMenuGroups: state.subMenuGroups.filter((i) => i.id !== id) })),
  setSearchValue: (searchValue) => set({ searchValue }),
  setActiveMainMenuItemId: (id) => set({ activeMainMenuItemId: id }),
}));

const MainMenuMobileContext = createContext<UseBoundStore<StoreApi<MenuMobileStore>> | null>(null);

export { useMainMenuMobileStore, MainMenuMobileContext };
export type { MenuMobileStore };
