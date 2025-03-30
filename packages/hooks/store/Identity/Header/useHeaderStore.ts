import { create, StoreApi, UseBoundStore } from 'zustand';
import { createContext } from 'react';
import type { MainMenuMobileProps } from '@/components/Discover/MainMenuMobile/MainMenuMobile';

interface HeaderStore {
  mainMenuMobile: Omit<MainMenuMobileProps, 'children'> | null;
  addMainMenuMobile: (item: Omit<MainMenuMobileProps, 'children'>) => void;
  removeMainMenuMobile: () => void;
}

const useHeaderStore = create<HeaderStore>((set) => ({
  mainMenuMobile: null,
  addMainMenuMobile: (item) => set({ mainMenuMobile: item }),
  removeMainMenuMobile: () => set({ mainMenuMobile: null }),
}));

const HeaderContext = createContext<UseBoundStore<StoreApi<HeaderStore>> | null>(null);

export { useHeaderStore, HeaderContext };
export type { HeaderStore };
