export type World = 'home' | 'roots' | 'discovery' | 'dreamscape' | 'future';

export interface WorldInfo {
  title: string;
  description: string;
  color: string;
  position: [number, number, number];
}