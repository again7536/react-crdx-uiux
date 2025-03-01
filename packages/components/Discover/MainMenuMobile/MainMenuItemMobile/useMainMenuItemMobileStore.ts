import { create, StoreApi, UseBoundStore } from 'zustand';
import { SubMenuGroupMobileProps } from '../SubMenuGroupMobile/SubMenuGroupMobile';
import { createContext, useRef } from 'react';
interface MainMenuItemMobileStore {
  id: string;
  subMenuGroup: SubMenuGroupMobileProps | null;
  addSubMenuGroup: (subMenuGroup: SubMenuGroupMobileProps) => void;
  removeSubMenuGroup: () => void;
}

const createMainMenuItemMobileStore = (id: string) => {
  return create<MainMenuItemMobileStore>((set) => ({
    id,
    subMenuGroup: null,
    addSubMenuGroup: (subMenuGroup) => set(() => ({ subMenuGroup })),
    removeSubMenuGroup: () => set(() => ({ subMenuGroup: null })),
  }));
};

const useCreateMainMenuItemMobileStore = (id: string) => {
  return useRef(createMainMenuItemMobileStore(id)).current;
};

const MainMenuItemMobileContext = createContext<UseBoundStore<StoreApi<MainMenuItemMobileStore>> | null>(null);

export { createMainMenuItemMobileStore, useCreateMainMenuItemMobileStore, MainMenuItemMobileContext };
export type { MainMenuItemMobileStore };
