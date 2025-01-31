import { create } from "zustand";

interface DropItemStore {
  selectedId: string | null;
  toggleSelectedId: (id: string | null) => void;
}

export const useDropItemStore = create<DropItemStore>((set) => ({
  selectedId: null,
  toggleSelectedId: (id) =>
    set((state) => ({ selectedId: state.selectedId === id ? null : id })),
}));
