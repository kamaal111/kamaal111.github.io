import { projects } from './config';

export function punctuation({ index, arrayLength }) {
  if (index === arrayLength - 2) return ' and ';
  if (index < arrayLength - 1) return ', ';
  return '.';
}

export function getUniquePlatforms() {
  return projects
    .reduce((prev, current) => {
      if (current.availability) {
        current.availability.forEach((value) => {
          if (!prev.includes(value.platform)) prev.push(value.platform);
        });
      }
      return prev;
    }, [])
    .reduce((constructed, element, index, uniquePlatforms) => {
      const value = `${constructed}${element}${punctuation({
        index,
        arrayLength: uniquePlatforms.length,
      })}`;
      return value;
    }, '');
}
