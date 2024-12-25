import { create } from 'zustand';
import type { World } from '../types';

interface WorldStore {
  currentWorld: World;
  isTransitioning: boolean;
  setWorld: (world: World) => void;
  setTransitioning: (transitioning: boolean) => void;
}

export const useWorldStore = create<WorldStore>((set) => ({
  currentWorld: 'home',
  isTransitioning: false,
  setWorld: (world) => set({ currentWorld: world }),
  setTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
}));