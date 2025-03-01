import { create } from 'zustand';
import { createContext, useRef } from 'react';
import { UseBoundStore, StoreApi } from 'zustand';

interface SubMenuStore {
  id: string;
  variant: 'menu' | 'link' | 'external-link' | 'menu-description';
  isSingleList: boolean;
  setVariant: (variant: 'menu' | 'link' | 'external-link' | 'menu-description') => void;
  setIsSingleList: (isSingleList: boolean) => void;
}

const createSubMenuItemStore = (id: string) => {
  return create<SubMenuStore>((set) => ({
    id,
    variant: 'menu',
    isSingleList: false,
    setVariant: (variant) => set(() => ({ variant })),
    setIsSingleList: (isSingleList) => set(() => ({ isSingleList })),
  }));
};
const useCreateSubMenuItemStore = (id: string) => {
  return useRef(createSubMenuItemStore(id)).current;
};

const SubMenuContext = createContext<UseBoundStore<StoreApi<SubMenuStore>> | null>(null);

export { useCreateSubMenuItemStore, SubMenuContext };
