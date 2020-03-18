// types.ts

export type Platform = 'iOS';

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
}
