// config.ts

import { Project } from './types';

export const projects: Project[] = [
  {
    id: 0,
    name: 'Iron Buddy',
    description: 'A workout tracker',
    availability: [
      {
        platform: 'iOS',
        link: 'https://apps.apple.com/nl/app/ironbuddy/id1502158010',
        screenShots: [
          require('./assets/IronBuddy/screen-shot-0.png'),
          require('./assets/IronBuddy/screen-shot-1.png'),
          require('./assets/IronBuddy/screen-shot-2.png'),
        ],
      },
    ],
  },
];

export const copyWrite = 'Ⓒ 2020 Kamaal Farah';
