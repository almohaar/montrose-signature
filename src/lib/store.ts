import { create } from "zustand";

interface UIState {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  mobileMenuOpen: false,
  toggleMobileMenu: () => set((s) => ({ mobileMenuOpen: !s.mobileMenuOpen })),
}));
