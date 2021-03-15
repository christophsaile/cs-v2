import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

// Components
import Statement from './components/statement/statement';
import Timeline from './components/timeline/timeline';
import About from './components/about/about';

// Content
import TimelineContent from './components/timeline/timeline.json';

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
        <SayHey />
        <section className='page--fullscreen intro' data-scroll-section >
          <Statement title='Hey You' />
          <img data-scroll className='intro__img' src={ChrisCam} alt='Portrait Christoph Saile' />
        </section>
        <section className='page--fullscreen' data-scroll-section >
          <Statement data-scroll title='Àpropos' />
        </section>
        <section className='page' data-scroll-section>
          <About />
        </section>
        <section className='page' data-scroll-section >
          <Timeline data={TimelineContent}/>
        </section>
      </main>
    );
  }
}

export default App;
