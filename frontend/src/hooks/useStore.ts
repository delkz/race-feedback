import { create } from 'zustand'

export const useStore = create((set) => ({

  connectionToIracing: false,
  toogleConnectionToIracing: () => set((state) => ({ connectionToIracing: !state.connectionToIracing })),
    
  connectionToServer: false,
  toogleConnectionToServer: () => set((state) => ({ connectionToServer: !state.connectionToServer })),
  setConnectionToServer: (value: boolean) => set(() => ({ connectionToServer: value })),

  isLoading:false,
  toogleIsLoading: () => set((state) => ({ isLoading: !state.isLoading })),
}))
