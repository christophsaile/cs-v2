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
            i am based in tübingen-germany and have just completed my bachelor's degree (bsc.) in
            the field of online media at the university of furtwangen (faculty of digital media).
          </p>
          <p>currently i am working as an frontend engineer for an international agency.</p>
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
