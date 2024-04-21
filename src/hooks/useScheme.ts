import * as React from 'react';

type Schema = 'light' | 'dark';

function useScheme(): Schema | undefined {
  const [matches, setMatches] = React.useState<Schema | undefined>(
    undefined
  );

  React.useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const scheme = media.matches ? 'dark' : 'light';
    if (scheme !== matches) {
      setMatches(scheme);
    }

    function listener(e: MediaQueryListEvent): void {
      if (matches === (e.matches ? 'dark' : 'light')) return;

      setMatches(e.matches ? 'dark' : 'light');
    }

    media.addEventListener('change', listener);

    return () => {
      media.removeEventListener('change', listener);
    };
  }, [matches]);

  return matches;
}

export default useScheme;
