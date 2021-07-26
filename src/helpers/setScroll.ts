export const setScroll = (_scroll: boolean, _scrollSpeed?: number, _scrollDirection?: string) => {
  return {
    'data-scroll': _scroll,
    'data-scroll-speed': _scrollSpeed,
    'data-scroll-direction': _scrollDirection,
  };
};
