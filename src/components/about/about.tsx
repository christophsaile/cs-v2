import React from 'react';

class About extends React.Component {
  render() {
    return (
      <article className='about'>
        <div className='about__content'>
          <span className='about__stroke'></span>
          <h3>Hello,</h3>
          <p>
            my name is <b>Christoph Saile</b>.
            <br />I am a <b>Frontend Developer</b> from Germany living in Furtwangen.
            <br />
            Currently I am studying <b>OnlineMedien (B.Sc.)</b> at the{' '}
            <b>University of Furtwangen</b>.
            <br />
            Besides Frontend Development I am interested in UI-Design, 3D-Animations and
            Photography.
          </p>
          <p>
            Feel free to <b>drop me a line!</b>
          </p>
        </div>
      </article>
    );
  }
}

export default About;
