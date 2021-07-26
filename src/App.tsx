import React, { createRef, RefObject } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { isMobile, isTablet } from 'react-device-detect';
import { debounce } from './helpers/debounce';
import { map, clamp } from './helpers/utils';
import { setScroll } from './helpers/setScroll';
import { addAnimation } from './helpers/addAnimation';

// Components
import Statement from './components/statement/statement';
import Timeline from './components/timeline/timeline';
import About from './components/about/about';
import Work from './components/work/work';

// Content
import TimelineContent from './components/timeline/timeline-data.json';
import WorkContent from './components/work/work-data.json';

// Assets
import SayHey from './components/say-hey/say-hey';
import ChrisCam from './assets/imgs/chris-cam.png';

type Props = {};
type State = {
  isMobile: boolean;
  isMenuOpen: boolean;
};

class App extends React.Component<Props, State> {
  private heyYouTextRef: RefObject<HTMLElement>;
  private heyYouImgRef: RefObject<HTMLImageElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMobile: this.checkScreenSize(),
      isMenuOpen: false,
    };

    this.handleMenu = this.handleMenu.bind(this);

    this.heyYouTextRef = createRef();
    this.heyYouImgRef = createRef();
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.handleResize();
      }, 250)
    );

    this.initLscroll();
    if (!this.state.isMobile) this.initAnimation();
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

  private initLscroll = (): void => {
    const lscroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
      smartphone: {
        smooth: false,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'horizontal',
        horizontalGesture: true,
        breakpoint: 768,
      },
    });

    if (!this.state.isMobile) this.animateItems(lscroll);
  };

  private animateItems = (_lscroll: any) => {
    _lscroll.on('scroll', (obj: any) => {
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

    _lscroll.update();
  };

  private initAnimation = (): void => {
    const heyYouText = this.heyYouTextRef.current;
    const heyYouImg = this.heyYouImgRef.current;
    if (heyYouText) addAnimation(heyYouText, 'fadeIn', true);
    if (heyYouImg) addAnimation(heyYouImg, 'fadeIn', true, '06');
  };

  render() {
    return (
      <main data-scroll-container>
        <section className='content'>
          <SayHey isMenuOpen={this.state.isMenuOpen} onMenuChange={this.handleMenu} />
          <section className='page page--fullscreen intro' data-scroll-section>
            <Statement>
              <span {...setScroll(true, -2, 'vertical')} ref={this.heyYouTextRef}>
                Hey{this.state.isMobile && <br />} You
              </span>
            </Statement>
            <img
              ref={this.heyYouImgRef}
              className='intro__img'
              src={ChrisCam}
              alt='Portrait Christoph Saile'
              {...setScroll(true, 2, 'vertical')}
            />
          </section>
          <section className='page' data-scroll-section>
            <Statement>
              <span {...setScroll(true, -4, 'vertical')}>Àpropos</span>
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
              <span {...setScroll(true, 4, 'vertical')}>
                Scroll <br />
                Further
              </span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Statement>
              <span {...setScroll(true, -4, 'vertical')}>Créations</span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Work data={WorkContent} />
          </section>
          <section className='page' data-scroll-section>
            <Statement center={true}>
              <span {...setScroll(true)}>Thanks!</span>
            </Statement>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
