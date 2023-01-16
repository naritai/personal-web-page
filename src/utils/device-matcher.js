export const isMobileScreen = () => {
  const isSSR = window === undefined;
  return isSSR ? true : window.matchMedia('only screen and (max-width: 768px').matches;
}