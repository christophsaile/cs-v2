import GSAP from 'gsap';
import React, { RefObject, createRef } from 'react';

type Props = {};

class Cursor extends React.Component<Props> {
  private bigCursorRef: RefObject<HTMLDivElement>;
  private smallCursorRef: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);
    this.bigCursorRef = createRef();
    this.smallCursorRef = createRef();
  }

  componentDidMount() {
    this.initCursor();
  }

  private initCursor = () => {
    document.addEventListener('mousemove', (e) => {
      GSAP.to(this.bigCursorRef.current, {
        x: e.x - 15,
        y: e.y - 15,
        duration: 0.4,
      });
      GSAP.to(this.smallCursorRef.current, {
        x: e.x - 5,
        y: e.y - 7,
        duration: 0.1,
      });
    });
  };

  render() {
    return (
      <div className='cursor'>
        <div ref={this.bigCursorRef} className='cursor__ball cursor__ball--big '>
          <svg height='30' width='30'>
            <circle cx='15' cy='15' r='12' strokeWidth='0'></circle>
          </svg>
        </div>

        <div ref={this.smallCursorRef} className='cursor__ball cursor__ball--small'>
          <svg height='10' width='10'>
            <circle cx='5' cy='5' r='4' strokeWidth='0'></circle>
          </svg>
        </div>
      </div>
    );
  }
}

export default Cursor;
