function classNames(names: (string | Record<string, boolean>)[]) {
  return names
    .reduce((acc, name) => {
      if (typeof name === 'string') {
        return [...acc, name];
      }

      const keys = Object.entries(name)
        .filter(([, value]) => value)
        .map(([key]) => key);

      return [...acc, ...keys];
    }, [] as string[])
    .join(' ');
}

export default classNames;
