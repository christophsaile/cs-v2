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
          <h3 {...setScroll(true)}>Hello everyone,</h3>
          <p {...setScroll(true)}>
            my name is Christoph Saile.
            <br />I am a Frontend Developer from Germany living in Furtwangen.
            <br />
            Currently I am studying OnlineMedien (B.Sc.) at the University of Furtwangen.
            <br />
            Besides Frontend Development I am interested in UI-Design, 3D-Animations and
            Photography.
          </p>
          <p {...setScroll(true)}>
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
