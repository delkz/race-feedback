import { create } from 'zustand'

export const useStore = create((set) => ({

  connectionToIracing: false,
  isLoading:false,
  toogleConnectionToIracing: () => set((state) => ({ connectionToIracing: !state.connectionToIracing })),
  toogleIsLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}))
