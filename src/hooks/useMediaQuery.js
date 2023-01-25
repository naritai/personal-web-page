import { useState, useEffect } from 'react';

const getInitialMatch = (mq) => {
  if (typeof window !== 'undefined') {
    return window.matchMedia(mq).matches;
  }
  return false;
}
// Don't use for blocks with animation on the first screen 
// When page updated they bulk into a mess for a second - visually feels like a junk
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(getInitialMatch(query));

  const handleMediaChange = (event) => setMatches(event.matches);

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    if (matchMedia.addListener) {
      matchMedia.addListener(handleMediaChange);
    } else {
      matchMedia.addEventListener('change', handleMediaChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleMediaChange);
      } else {
        matchMedia.removeEventListener('change', handleMediaChange);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return matches;
}