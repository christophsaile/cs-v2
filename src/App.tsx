import React from 'react';
import Statement from './components/statement/statement';
import SayHey from './components/sayHey/sayHey';
import ChrisCam from './assets/imgs/chris-cam.png';

class App extends React.Component {
  render() {
    return (
      <main>
        <SayHey />
        <section className='page intro'>
          <Statement title='Hey You' />
          <img className='intro__img' src={ChrisCam} alt='Portrait Christoph Saile' />
        </section>
        <section className='page'>
          <Statement title='Àpropos' />
        </section>
      </main>
    );
  }
}

export default App;
