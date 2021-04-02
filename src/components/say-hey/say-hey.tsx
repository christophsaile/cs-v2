import React from 'react';
import { ReactComponent as SayHeySvg } from '../../assets/imgs/say-hey.svg';
import { ReactComponent as Smiley } from '../../assets/imgs/smiley.svg';
import { ReactComponent as Cancel } from '../../assets/imgs/cancel.svg';
import Button from '../button/button';

type Props = {
  onMenuChange: () => void;
  isMenuOpen: boolean;
};

class SayHey extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  private toggleMenu() {
    this.props.onMenuChange();
  }

  render() {
    return (
      <section className='sayHey__container'>
        <div className='sayHey__icon' onClick={this.toggleMenu}>
          <SayHeySvg title='Say Hey Icon' />
        </div>
        <section
          className={
            this.props.isMenuOpen ? 'sayHey__contact sayHey__contact--open' : 'sayHey__contact'
          }
        >
          <div className='sayHey__content'>
            <div className='sayHey__cancel' onClick={this.toggleMenu}>
              <Cancel title='Cancel' />
            </div>
            <div className='sayHey__smiley'>
              <a href='mailto:christoph.saile@googlemail.com'>
                <Smiley title='Email' />
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
