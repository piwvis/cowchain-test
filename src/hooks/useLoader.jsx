import { create } from "zustand";

export const useLoader = create((set) => ({
  isLoading: true,
  isRendering: true,
  setIsLoading: (value) => set({ isLoading: value }),
  setIsRendering: (value) => set({ isRendering: value })
}));
