import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { debounce } from './helpers/debounce';
import { map, clamp, randomNumber } from './helpers/utils';

// Components
import Statement from './components/statement/statement';
import Timeline from './components/timeline/timeline';
import About from './components/about/about';
import Work from './components/work/work';

// Content
import TimelineContent from './components/timeline/timeline-data.json';

// Assets
import SayHey from './components/say-hey/say-hey';
import ChrisCam from './assets/imgs/chris-cam.png';

type Props = {};
type State = {
  isMobile: boolean;
};
class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isMobile: this.checkScreenSize(),
    };
  }

  private checkScreenSize = (): boolean => {
    return window.innerWidth > 768 ? false : true;
  };

  private handleResize = (): void => {
    this.checkScreenSize() ? this.setState({ isMobile: true }) : this.setState({ isMobile: false });
  };

  componentDidMount() {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.handleResize();
      }, 250)
    );

    // eslint-disable-next-line
    const lscroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: this.state.isMobile ? 'vertical' : 'horizontal',
    });

    const elems: HTMLElement[] = [].slice.call(document.querySelectorAll('.animationItem'));
    const rotationsArr = Array.from({ length: elems.length }, () => randomNumber(-30, 30));
    const translationArr = Array.from({ length: elems.length }, () => randomNumber(-100, 100));
    lscroll.on('scroll', (obj: any) => {
      for (const key of Object.keys(obj.currentElements)) {
        const el = obj.currentElements[key].el;
        const idx = elems.indexOf(el);
        if (obj.currentElements[key].el.classList.contains('animationItem')) {
          let progress = obj.currentElements[key].progress;
          //const scaleVal = progress < 0.5 ? clamp(map(progress,0,0.5,1.2,0.5),0.5,1.2) : clamp(map(progress,0.5,1,0.5,1.2),0.5,1.2);
          const rotationVal =
            progress > 0.6
              ? clamp(
                  map(progress, 0.6, 1, 0, rotationsArr[idx]),
                  Math.min(0, rotationsArr[idx]),
                  Math.max(0, rotationsArr[idx])
                )
              : 0;
          const translationVal =
            progress > 0.6
              ? clamp(
                  map(progress, 0.6, 1, 0, translationArr[idx]),
                  Math.min(0, translationArr[idx]),
                  Math.max(0, translationArr[idx])
                )
              : 0;
          //obj.currentElements[key].el.style.transform = `scale(${scaleVal})`
          obj.currentElements[
            key
          ].el.style.transform = `translateY(${translationVal}%) rotate(${rotationVal}deg)`;
        }
      }
    });
    lscroll.update();
  }

  render() {
    return (
      <main data-scroll-container>
        <section className='content'>
          <div className='background' data-scroll-section></div>
          <SayHey />
          <section className='page page--fullscreen intro' data-scroll-section>
            <Statement center={true}>Hey{this.state.isMobile && <br />} You</Statement>
            <img className='intro__img' src={ChrisCam} alt='Portrait Christoph Saile' />
          </section>
          <section className='page' data-scroll-section>
            <Statement>Àpropos</Statement>
          </section>
          <section className='page' data-scroll-section>
            <About />
          </section>
          <section className='page' data-scroll-section>
            <Timeline data={TimelineContent} />
          </section>
          <section className='page' data-scroll-section>
            <Statement outline={true}>
              Scroll
              <br />
              Further
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Statement>Créations</Statement>
          </section>
          <section className='page' data-scroll-section>
            <Work />
          </section>
          <section className='page page--fullscreen' data-scroll-section>
            <Statement center={true}>Thanks!</Statement>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
