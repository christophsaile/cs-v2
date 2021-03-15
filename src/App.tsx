import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

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

class App extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
    });
  }

  render() {
    return (
      <main data-scroll-container>
        <section  className='content'>
        <SayHey />
          <section className='page--fullscreen intro' data-scroll-section>
            <Statement>Hey You</Statement>
            <img className='intro__img' src={ChrisCam} alt='Portrait Christoph Saile' />
          </section>
          <section className='page--fullscreen' data-scroll-section>
            <Statement>Àpropos</Statement>
          </section>
          <section className='page' data-scroll-section>
            <About />
          </section>
          <section className='page' data-scroll-section>
            <Timeline data={TimelineContent} />
          </section>
          <section className='page--fullscreen' data-scroll-section>
            <Statement outline={true}>
              Scroll
              <br />
              Further
            </Statement>
          </section>
          <section className='page--fullscreen' data-scroll-section>
            <Statement>Créations</Statement>
          </section>
          <section className='page' data-scroll-section>
            <Work />
          </section>
          <section className='page--fullscreen' data-scroll-section>
            <Statement>
              Thanks for
              <br />
              scrolling
            </Statement>
          </section>
        </section>
      </main>
    );
  }
}

export default App;
