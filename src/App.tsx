import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Statement from './components/statement/statement';

import SayHey from './components/sayHey/sayHey';
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
        <section data-scroll-section className='page intro'>
          <Statement title='Hey You' />
          <img data-scroll className='intro__img' src={ChrisCam} alt='Portrait Christoph Saile' />
        </section>
        <section data-scroll-section className='page'>
          <Statement data-scroll title='Àpropos' />
        </section>
      </main>
    );
  }
}

export default App;
