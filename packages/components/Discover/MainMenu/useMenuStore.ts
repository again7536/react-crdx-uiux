import { createContext } from 'react';
import { create, StoreApi, UseBoundStore } from 'zustand';

interface MenuContextType {
  openedMainMenuId: string | null;
  openedSubMenuId: string | null;
  toggleMainMenu: (id: string | null) => void;
  toggleSubMenu: (id: string | null) => void;
}

const useMenuStore = create<MenuContextType>((set) => ({
  openedMainMenuId: null,
  openedSubMenuId: null,
  toggleMainMenu: (id) =>
    set((state) => ({ openedMainMenuId: state.openedMainMenuId === id ? null : id, openedSubMenuId: null })),
  toggleSubMenu: (id) => set((state) => ({ openedSubMenuId: state.openedSubMenuId === id ? null : id })),
}));

interface MainMenuStore {
  id: string;
  hasSubMenu: boolean;
  setHasSubMenu: (hasSubMenu: boolean) => void;
}

interface SubMenuStore {
  id: string;
  variant: 'menu' | 'link' | 'external-link' | 'menu-description';
  isSingleList: boolean;
  setVariant: (variant: 'menu' | 'link' | 'external-link' | 'menu-description') => void;
  setIsSingleList: (isSingleList: boolean) => void;
}

const createMainMenuStore = (id: string) => {
  return create<MainMenuStore>((set) => ({
    id,
    hasSubMenu: false,
    setHasSubMenu: (hasSubMenu) => set(() => ({ hasSubMenu })),
  }));
};

const createSubMenuStore = (id: string) => {
  return create<SubMenuStore>((set) => ({
    id,
    variant: 'menu',
    isSingleList: false,
    setVariant: (variant) => set(() => ({ variant })),
    setIsSingleList: (isSingleList) => set(() => ({ isSingleList })),
  }));
};

const MainMenuContext = createContext<UseBoundStore<StoreApi<MainMenuStore>> | null>(null);
const SubMenuContext = createContext<UseBoundStore<StoreApi<SubMenuStore>> | null>(null);

export { useMenuStore, createMainMenuStore, createSubMenuStore, MainMenuContext, SubMenuContext };
