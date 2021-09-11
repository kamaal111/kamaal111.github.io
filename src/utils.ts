import { projects } from './config';

export function punctuation({
  index,
  arrayLength,
}: {
  index: number;
  arrayLength: number;
}) {
  if (index === arrayLength - 2) return ' and ';
  if (index < arrayLength - 1) return ', ';
  return '.';
}

export function getUniquePlatforms() {
  return projects
    .reduce((prev: string[], current) => {
      if (current.availability) {
        current.availability.forEach((value) => {
          if (!prev.includes(value.platform)) prev.push(value.platform);
        });
      }
      return prev;
    }, [])
    .reduce((constructed, element, index, uniquePlatforms) => {
      return `${constructed}${element}${punctuation({
        index,
        arrayLength: uniquePlatforms.length,
      })}`;
    }, '');
}
