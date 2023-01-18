export const isMobileScreen = () => {
  const isSSR = typeof window === 'undefined';
  return isSSR
    ? false
    : window.matchMedia('only screen and (max-width: 768px').matches;
};
