import React from 'react';
import { setScroll } from '../../helpers/setScroll';
import { Link } from 'react-router-dom';

type Props = {};

class Aboutme extends React.Component<Props> {
  render() {
    return (
      <article className='aboutme' {...setScroll(true, -1, 'vertical')}>
        <section className='aboutme__content'>
          <h3 {...setScroll(true)}>about</h3>
          <p>
            currently, i live in tübingen and study online media (bsc.) at the university of
            furtwangen (faculty of digital media).
          </p>
          <p>
            besides my studies, i am a working student at an international, digital agency as
            frontend developer.
          </p>
          <p>
            if you have any questions or want to create something unique with me, do not hesitate to
            get in touch with me.
          </p>
          <p>
            <Link to='/about' className='styled upper arrow'>
              contact me
            </Link>
          </p>
        </section>
      </article>
    );
  }
}

export default Aboutme;
