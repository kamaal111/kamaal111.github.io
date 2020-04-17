import { projects } from './config';
import { Platform } from './types';

export const punctuation = ({
  index,
  arrayLength,
}: {
  index: number;
  arrayLength: number;
}) => {
  if (index === arrayLength - 2) return ' and ';
  else if (index < arrayLength - 1) return ', ';
  return '.';
};

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
      constructed += `${element}${punctuation({
        index,
        arrayLength: uniquePlatforms.length,
      })}`;
      return constructed;
    }, '');
};
