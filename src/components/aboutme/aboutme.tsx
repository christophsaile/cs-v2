import React from 'react';
import { setScroll } from '../../helpers/setScroll';
import { Link } from 'react-router-dom';

type Props = {};

class Aboutme extends React.Component<Props> {
  render() {
    return (
      <article className='aboutme' {...setScroll(true, 1)}>
        <section className='aboutme__content'>
          <div className='aboutme__text' {...setScroll(true)}>
            <p>
              i like to explore everything that has to do with web development and love to create
              websites that step a little out of the ordinary.
            </p>
            <p>
              currently, i live in tübingen and study online media (bsc.) at the university of
              furtwangen. besides my studies, i am working as a working student at an digital agency
              as a frontend developer.
            </p>
            <p>
              besides web development, i like to design user interfaces, create meaningful
              animations, and learn more about photography.
            </p>
            <p>
              if you have any questions or want to create something unique with me, do not hesitate
              to get in touch with me.
            </p>
            <p>
              <Link to='/about' className='styled upper arrow'>
                contact me
              </Link>
            </p>
          </div>
        </section>
      </article>
    );
  }
}

export default Aboutme;
