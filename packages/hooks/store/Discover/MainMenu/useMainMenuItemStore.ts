import { getMainMenuUniqueId } from '@/utils/MainMenuUtil';
import { createContext, useRef } from 'react';
import { create, StoreApi, UseBoundStore } from 'zustand';

interface MainMenuItemStore {
  id: string;
  subMenuIds: string[];
  addSubMenu: (subMenuId: string) => void;
  removeSubMenu: (subMenuId: string) => void;
  isSingleList: () => boolean;
}

const createMainMenuItemStore = (id?: string) => {
  return create<MainMenuItemStore>((set, get) => ({
    id: id ?? getMainMenuUniqueId(),
    subMenuIds: [],
    addSubMenu: (subMenuId) => set((state) => ({ subMenuIds: [...state.subMenuIds, subMenuId] })),
    removeSubMenu: (subMenuId) => set((state) => ({ subMenuIds: state.subMenuIds.filter((id) => id !== subMenuId) })),
    isSingleList: () => {
      const { subMenuIds } = get();
      return subMenuIds.length <= 1;
    },
  }));
};
const useCreateMainMenuItemStore = (id?: string) => {
  return useRef(createMainMenuItemStore(id)).current;
};

const MainMenuItemContext = createContext<UseBoundStore<StoreApi<MainMenuItemStore>> | null>(null);

export { createMainMenuItemStore, useCreateMainMenuItemStore, MainMenuItemContext };
