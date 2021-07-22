import React from 'react';
import { setScroll } from '../../helpers/setScroll';

type Props = {
  onMenuChange: () => void;
};

class About extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  private toggleMenu() {
    this.props.onMenuChange();
  }

  render() {
    return (
      <article className='about' {...setScroll(true, 1)}>
        <div className='about__content'>
          <span className='about__stroke'></span>
          <h3>Hello everyone,</h3>
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
            Feel free to{' '}
            <span className='underline' onClick={this.toggleMenu}>
              <b> drop me a line!</b>
            </span>
          </p>
        </div>
      </article>
    );
  }
}

export default About;
