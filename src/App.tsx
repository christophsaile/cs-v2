import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { isMobile, isTablet } from 'react-device-detect';
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
  isMenuOpen: boolean;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isMobile: this.checkScreenSize(),
      isMenuOpen: false,
    };

    this.handleMenu = this.handleMenu.bind(this);
  }

  private handleResize = (): void => {
    this.checkScreenSize() ? this.setState({ isMobile: true }) : this.setState({ isMobile: false });
    if (!isMobile && !isTablet) {
      window.location.reload();
    }
  };

  private checkScreenSize = (): boolean => {
    return window.innerWidth > 768 ? false : true;
  };

  private handleMenu(): void {
    this.setState((state) => ({
      isMenuOpen: !state.isMenuOpen,
    }));
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.handleResize();
      }, 250)
    );

    const lscroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
      smartphone: {
        smooth: true,
        direction: 'vertical',
      },
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
    const setScroll = (scroll: boolean, scrollSpeed: number, scrollDirection?: string) => {
      return {
        'data-scroll': scroll,
        'data-scroll-speed': scrollSpeed,
        'data-scroll-direction': scrollDirection,
      };
    };

    return (
      <main data-scroll-container>
        <section className='content'>
          <SayHey isMenuOpen={this.state.isMenuOpen} onMenuChange={this.handleMenu} />
          <section className='page page--fullscreen intro' data-scroll-section>
            <Statement center={true}>
              <span data-scroll data-scroll-speed='-2' data-scroll-direction='vertical'>
                Hey{this.state.isMobile && <br />} You
              </span>
            </Statement>
            <img
              className='intro__img'
              src={ChrisCam}
              alt='Portrait Christoph Saile'
              {...(this.state.isMobile
                ? setScroll(true, 1, 'vertical')
                : setScroll(true, -1, 'vertical'))}
            />
          </section>
          <section className='page' data-scroll-section>
            <Statement>
              <span {...(this.state.isMobile ? '' : setScroll(true, -4, 'vertical'))}>Àpropos</span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <About onMenuChange={this.handleMenu} />
          </section>
          <section className='page' data-scroll-section>
            <Timeline data={TimelineContent} />
          </section>
          <section className='page' data-scroll-section>
            <Statement center={true}>
              <span data-scroll data-scroll-speed='4' data-scroll-direction='vertical'>
                Scroll <br />
                Further
              </span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Statement>
              <span data-scroll data-scroll-speed='-4' data-scroll-direction='vertical'>
                Créations
              </span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Work />
          </section>
          <section className='page' data-scroll-section>
            <Statement center={true}>
              <span>Thanks!</span>
            </Statement>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
