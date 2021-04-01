import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { debounce } from './helpers/debounce';
import { map, clamp } from './helpers/utils';

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

    lscroll.on('scroll', (obj: any) => {
      for (const key of Object.keys(obj.currentElements)) {
        if (obj.currentElements[key].el.classList.contains('animationItem')) {
          let progress = obj.currentElements[key].progress;
          const saturateVal =
            progress < 0.3
              ? clamp(map(progress, 0, 0.3, 0, 1), 0.3, 1)
              : clamp(map(progress, 0.7, 1, 1, 0), 0.3, 1);
          const brightnessVal =
            progress < 0.3
              ? clamp(map(progress, 0, 0.3, 0, 1), 0.3, 1)
              : clamp(map(progress, 0.7, 1, 1, 0), 0.3, 1);
          obj.currentElements[
            key
          ].el.style.filter = `saturate(${saturateVal}) brightness(${brightnessVal})`;
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
            <Statement outline={true} center={true}>
              <span data-scroll data-scroll-speed='-2' data-scroll-direction='vertical'>
                Scroll
              </span>
              <span data-scroll data-scroll-speed='1' data-scroll-direction='vertical'>
                Further
              </span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Statement>Créations</Statement>
          </section>
          <section className='page' data-scroll-section>
            <Work />
          </section>
          <section className='page page--fullscreen' data-scroll-section>
            <Statement outline={true} center={true}>
              <span data-scroll data-scroll-speed='-2' data-scroll-direction='vertical'>
                Thank
              </span>
              <span data-scroll data-scroll-speed='1' data-scroll-direction='vertical'>
                You!
              </span>
            </Statement>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
