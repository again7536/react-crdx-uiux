import { createContext, useRef } from 'react';
import { create, StoreApi, UseBoundStore } from 'zustand';

interface MainMenuStore {
  id: string;
  hasSubMenu: boolean;
  setHasSubMenu: (hasSubMenu: boolean) => void;
}

const createMainMenuItemStore = (id: string) => {
  return create<MainMenuStore>((set) => ({
    id,
    hasSubMenu: false,
    setHasSubMenu: (hasSubMenu) => set(() => ({ hasSubMenu })),
  }));
};
const useCreateMainMenuItemStore = (id: string) => {
  return useRef(createMainMenuItemStore(id)).current;
};

const MainMenuContext = createContext<UseBoundStore<StoreApi<MainMenuStore>> | null>(null);

export { createMainMenuItemStore, useCreateMainMenuItemStore, MainMenuContext };
