export const addAnimation = (
  _elem: HTMLElement,
  _effect: string,
  _removeAfterAnimation: boolean,
  _delay?: number
): void => {
  const effectClasslist = ['animate__animated', 'animate__' + _effect];
  const delayClasslist = ['animate__delay-' + _delay + 's'];
  const buildClasslists = _delay ? effectClasslist.concat(delayClasslist) : effectClasslist;

  buildClasslists.forEach((_item: string) => {
    _elem.classList.add(_item);
  });

  _removeAfterAnimation &&
    _elem.addEventListener('animationend', () => {
      buildClasslists.forEach((_item: string) => {
        _elem.classList.remove(_item);
      });
    });
};
