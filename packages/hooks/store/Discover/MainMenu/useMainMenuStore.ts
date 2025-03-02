import { create } from 'zustand';

interface MenuContextType {
  openedMainMenuId: string | null;
  openedSubMenuId: string | null;
  toggleMainMenu: (mainMenuId: string | null) => void;
  toggleSubMenu: (subMenuId: string | null) => void;
  isMainMenuOpened: (mainMenuId: string) => boolean;
  isSubMenuOpened: (subMenuId: string) => boolean;
}

const useMainMenuStore = create<MenuContextType>((set, get) => ({
  openedMainMenuId: null,
  openedSubMenuId: null,
  toggleMainMenu: (id) =>
    set((state) => ({ openedMainMenuId: state.openedMainMenuId === id ? null : id, openedSubMenuId: null })),
  toggleSubMenu: (id) => set((state) => ({ openedSubMenuId: state.openedSubMenuId === id ? null : id })),
  isMainMenuOpened: (id) => id === get().openedMainMenuId,
  isSubMenuOpened: (id) => id === get().openedSubMenuId,
}));

export { useMainMenuStore };
