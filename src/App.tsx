import React from 'react';
import Statement from './components/statement/statement';
import SayHey from './components/sayHey/sayHey';

class App extends React.Component {
  render() {
    return (
      <main>
        <SayHey />
        <section className='page'>
          <Statement title='Hey You' />
        </section>
        <section className='page'>
          <Statement title='Àpropos' />
        </section>
      </main>
    );
  }
}

export default App;
