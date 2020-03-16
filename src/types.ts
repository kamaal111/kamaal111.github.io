// types.ts

export type Availability = 'iOS';

export interface Project {
  id: number;
  name: string;
  description: string;
  availability: Availability[];
}
