import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { debounce } from './helpers/debounce';

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
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      //direction: 'horizontal',
    });
  }

  render() {
    return (
      <main data-scroll-container>
        <section className='content'>
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
