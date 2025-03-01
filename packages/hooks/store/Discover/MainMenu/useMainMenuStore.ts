import { create } from 'zustand';

interface MenuContextType {
  openedMainMenuId: string | null;
  openedSubMenuId: string | null;
  toggleMainMenu: (id: string | null) => void;
  toggleSubMenu: (id: string | null) => void;
}

const useMainMenuStore = create<MenuContextType>((set) => ({
  openedMainMenuId: null,
  openedSubMenuId: null,
  toggleMainMenu: (id) =>
    set((state) => ({ openedMainMenuId: state.openedMainMenuId === id ? null : id, openedSubMenuId: null })),
  toggleSubMenu: (id) => set((state) => ({ openedSubMenuId: state.openedSubMenuId === id ? null : id })),
}));

export { useMainMenuStore };
