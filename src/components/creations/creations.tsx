import React from 'react';
import { setScroll } from '../../helpers/setScroll';

class Creations extends React.Component {
  render() {
    return (
      <section className='creations' {...setScroll(true, 1)}>
        <h2 {...setScroll(true)}>projects</h2>
        <p>
          besides web development, i like to design user interfaces, create meaningful animations,
          and learn more about photography.
        </p>
        <p>feel free to check out some of my most recent projects.</p>
      </section>
    );
  }
}

export default Creations;
