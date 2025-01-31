import { create } from "zustand";

interface DropdownContextType {
  openId: string | null;
  toggleDropdown: (id: string | null) => void;
}

const useDropdownStore = create<DropdownContextType>((set) => ({
  openId: null,
  toggleDropdown: (id) =>
    set((state) => ({ openId: state.openId === id ? null : id })),
}));

export { useDropdownStore };
