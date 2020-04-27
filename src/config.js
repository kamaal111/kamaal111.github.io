// config.js

const IronBuddy = {
  id: 0,
  name: 'Iron Buddy',
  techUsed: [
    {
      tech: 'SwiftUI',
      reason: 'Main UI framework',
    },
    {
      tech: 'Combine',
      reason: 'I have used Combine to handle model state',
    },
    {
      tech: 'Core Data',
      reason: 'Main persistance framework',
    },
    {
      tech: 'GitHub Actions',
      reason: 'Continues Integration',
    },
    {
      tech: 'XCTest',
      reason: 'Unit tests',
    },
    {
      tech: 'UserDefaults',
      reason: 'To persist small tasks',
    },
    {
      tech: 'Golang',
      reason: 'To create exercises json',
    },
  ],
  description:
    "Going to the gym is pointless if you're not progressing. With Iron Buddy, logging in your workouts has never been easier.",
  availability: [
    {
      platform: 'iOS',
      link:
        'https://apps.apple.com/nl/app/ironbuddy/id1502158010#?platform=iphone',
      screenShots: [],
    },
  ],
};

const ColorSelector = {
  id: 1,
  name: 'Color Selector',
  techUsed: [
    {
      tech: 'SwiftUI',
      reason: 'Main UI framework',
    },
    {
      tech: 'Combine',
      reason: 'I have used Combine to handle model state',
    },
    {
      tech: 'Core Data',
      reason: 'Main persistance framework',
    },
  ],
  description: 'This is a super awesome color picker.',
  availability: [
    {
      platform: 'iOS',
      link:
        'https://apps.apple.com/nl/app/color-selector/id1506270066#?platform=iphone',
      screenShots: [],
    },
    {
      platform: 'iPadOS',
      link:
        'https://apps.apple.com/nl/app/color-selector/id1506270066#?platform=ipad',
      screenShots: [],
    },
  ],
};

export const projects = [IronBuddy, ColorSelector];

export const copyWrite = 'Ⓒ 2020 Kamaal Farah';
