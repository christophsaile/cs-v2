export const setScroll = (scroll: boolean, scrollSpeed: number, scrollDirection?: string) => {
  return {
    'data-scroll': scroll,
    'data-scroll-speed': scrollSpeed,
    'data-scroll-direction': scrollDirection,
  };
};
