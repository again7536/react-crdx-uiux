import { create, StoreApi, UseBoundStore } from 'zustand';
import type { MainMenuItemMobileRendererProps } from '@/components/Discover/MainMenuMobile/MainMenuItemMobile/MainMenuItemMobileRenderer';
import type { SubMenuGroupMobileRendererProps } from '@/components/Discover/MainMenuMobile/SubMenuGroupMobile/SubMenuGroupMobileRenderer';
import { createContext } from 'react';

interface MenuMobileStore {
  isOpen: boolean;
  isTransitionDone: boolean;
  activeMainMenuItemId: string | null;
  mainMenuItems: MainMenuItemMobileRendererProps[];
  subMenuGroups: SubMenuGroupMobileRendererProps[];
  searchValue: string;
  handleOpen: () => void;
  handleClose: () => void;
  handleTransitionDone: (event: React.TransitionEvent<HTMLDivElement>) => void;
  addMainMenuItem: (item: MainMenuItemMobileRendererProps) => void;
  addSubMenuGroup: (item: SubMenuGroupMobileRendererProps) => void;
  removeMainMenuItem: (id: string) => void;
  removeSubMenuGroup: (id: string) => void;
  setSearchValue: (searchValue: string) => void;
  setActiveMainMenuItemId: (id: string) => void;
  setActivePrevMainMenuItem: (id: string) => void;
  setActiveNextMainMenuItem: (id: string) => void;
}

const useMainMenuMobileStore = create<MenuMobileStore>((set, get) => ({
  isOpen: false,
  isTransitionDone: false,
  activeMainMenuItemId: null,
  mainMenuItems: [],
  subMenuGroups: [],
  searchValue: '',
  handleOpen: () => {
    setTimeout(() => {
      set({ isOpen: true });
      document.body.classList.add('is-gnb-mobile');
    }, 100);
  },
  handleClose: () => {
    set({ isOpen: false });
    setTimeout(() => {
      document.body.classList.remove('is-gnb-mobile');
      set({ isTransitionDone: false });
    }, 400);
  },
  handleTransitionDone: (event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    set({ isTransitionDone: true });
    if (!get().isOpen) {
      document.querySelector<HTMLElement>('[aria-controls="mobile-nav"]')?.focus();
    }
  },
  addMainMenuItem: (item) => {
    set((state) => ({
      mainMenuItems: [...state.mainMenuItems, item],
      activeMainMenuItemId: state.activeMainMenuItemId ?? item.id, // set first item as active if there is no active main menu item
    }));
  },
  addSubMenuGroup: (item) => set((state) => ({ subMenuGroups: [...state.subMenuGroups, item] })),
  removeMainMenuItem: (id) => set((state) => ({ mainMenuItems: state.mainMenuItems.filter((i) => i.id !== id) })),
  removeSubMenuGroup: (id) => set((state) => ({ subMenuGroups: state.subMenuGroups.filter((i) => i.id !== id) })),
  setSearchValue: (searchValue) => set({ searchValue }),
  setActivePrevMainMenuItem: (id) => {
    const index = get().mainMenuItems.findIndex((item) => item.id === id);
    if (index <= 0) return;

    set({ activeMainMenuItemId: get().mainMenuItems[index - 1].id });
  },
  setActiveNextMainMenuItem: (id) => {
    const index = get().mainMenuItems.findIndex((item) => item.id === id);
    if (index === -1 || index === get().mainMenuItems.length - 1) return;

    set({ activeMainMenuItemId: get().mainMenuItems[index + 1].id });
  },
  setActiveMainMenuItemId: (id) => {
    set({ activeMainMenuItemId: id });
  },
}));

const MainMenuMobileContext = createContext<UseBoundStore<StoreApi<MenuMobileStore>> | null>(null);

export { useMainMenuMobileStore, MainMenuMobileContext };
export type { MenuMobileStore };
