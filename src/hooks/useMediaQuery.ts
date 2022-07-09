import * as React from 'react';

function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    function listener() {
      if (matches === media.matches) return;

      setMatches(media.matches);
    }

    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', listener);
    };
  }, [matches, query]);

  return matches;
}

export default useMediaQuery;
