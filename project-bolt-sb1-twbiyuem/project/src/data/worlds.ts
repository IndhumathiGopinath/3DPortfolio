import type { WorldInfo } from '../types';

export const worldsData: Record<string, WorldInfo> = {
  roots: {
    title: 'Roots World',
    description: 'Explore my childhood and school life journey',
    color: '#ff6b6b',
    position: [-2, 2, 0],
  },
  discovery: {
    title: 'Discovery World',
    description: 'Journey through my college life and achievements',
    color: '#4ecdc4',
    position: [2, 2, 0],
  },
  dreamscape: {
    title: 'Dreamscape World',
    description: 'Experience my current work and aspirations',
    color: '#ffe66d',
    position: [0, 2, 2],
  },
  future: {
    title: 'Future Vision World',
    description: 'Peek into my goals and future vision',
    color: '#a8e6cf',
    position: [0, 2, -2],
  },
};