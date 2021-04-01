import React from 'react';
import SayHeySvg from '../../assets/imgs/say-hey.svg';
import Smiley from '../../assets/imgs/smiley.svg';
import { ReactComponent as Cancel } from '../../assets/imgs/cancel.svg';
import Button from '../button/button';

type Props = {};

type State = {
  isOpen: boolean;
};

class SayHey extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  private toggleMenu(): void {
    this.setState((state) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    return (
      <section className='sayHey__container'>
        <div className='sayHey__icon' onClick={this.toggleMenu}>
          <img src={SayHeySvg} alt='Open Menu' />
        </div>
        <section
          className={
            this.state.isOpen ? 'sayHey__contact sayHey__contact--open' : 'sayHey__contact'
          }
        >
          <div className='sayHey__content'>
            <div className='sayHey__cancel' onClick={this.toggleMenu}>
              <Cancel title='Cancel' />
            </div>
            <div className='sayHey__smiley'>
              <a href='mailto:christoph.saile@googlemail.com'>
                <img src={Smiley} alt='Mail' />
              </a>
            </div>
            <div className='sayHey__social'>
              <Button title='Instagram' color='yellow' link='www.google.com' />
              <Button title='Facebook' color='purple' link='www.google.com' />
              <Button title='Github' color='red' link='www.google.com' />
              <Button title='+49 1578 2278711' color='lightblue' link='www.google.com' />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SayHey;
