import { projects } from './config';
import { Platform } from './types';

export const getUniquePlatforms = () => {
  return projects
    .reduce((prev: Platform[], current) => {
      if (current.availability) {
        for (const value of current.availability) {
          if (!prev.includes(value.platform)) prev.push(value.platform);
        }
      }
      return prev;
    }, [])
    .reduce((constructed, element, index, uniquePlatforms) => {
      let punctuation = '.';
      if (index === uniquePlatforms.length - 2) punctuation = ' and ';
      else if (index < uniquePlatforms.length - 1) punctuation = ', ';
      constructed += `${element}${punctuation}`;
      return constructed;
    }, '');
};
