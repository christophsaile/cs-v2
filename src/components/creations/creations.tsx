import React from 'react';
import { setScroll } from '../../helpers/setScroll';

class Creations extends React.Component {
  render() {
    return (
      <section className='creations' {...setScroll(true, -1, 'vertical')}>
        <h3 {...setScroll(true)}>projects</h3>
        <p>
          i like to explore everything that has to do with web development and love to create
          websites that step a little out of the ordinary.
        </p>
        <p>
          besides web development, i like to design user interfaces, create meaningful animations
          and learn more about photography.
        </p>
        <p>feel free to check out some of my most recent projects.</p>
      </section>
    );
  }
}

export default Creations;
