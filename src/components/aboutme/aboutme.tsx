import React from 'react';
import { setScroll } from '../../helpers/setScroll';
import { Link } from 'react-router-dom';

type Props = {};

class Aboutme extends React.Component<Props> {
  render() {
    return (
      <article className='aboutme' {...setScroll(true, 1)}>
        <div className='aboutme__content'>
          <p>I am a Frontend Developer from Germany living in Furtwangen.</p>
          <p>Currently I am studying OnlineMedien (B.Sc.) at the University of Furtwangen.</p>
          <p>
            Besides Frontend Development I am interested in UI-Design, 3D-Animations and
            Photography.
          </p>
          <p>
            Feel free to{' '}
            <Link to='/about' className='highlight'>
              drop me a line
            </Link>
          </p>
          <span className='aboutme__stroke'></span>
        </div>
      </article>
    );
  }
}

export default Aboutme;
