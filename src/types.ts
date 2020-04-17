// types.ts

export type Platform = 'iOS' | 'iPadOS' | 'macOS';

export interface TechUsed {
  tech: string;
  reason: string;
}

export interface AvailabilityType {
  platform: Platform;
  link: string;
  screenShots: string[];
}

export interface Project {
  id: number;
  name: string;
  description: string;
  availability: AvailabilityType[] | null;
  techUsed: TechUsed[];
}
