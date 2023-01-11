export const isMobileScreen = () => {
  return window.matchMedia('only screen and (max-width: 768px').matches;
}