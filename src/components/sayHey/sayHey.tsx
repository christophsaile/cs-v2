import React from 'react';
import { ReactComponent as SayHeySvg } from '../../assets/imgs/say-hey.svg';
import { ReactComponent as Smiley } from '../../assets/imgs/smiley.svg';
import { ReactComponent as Cancel } from '../../assets/imgs/cancel.svg';

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
          <SayHeySvg title='Say Hey Icon' />
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
              <Smiley title='Email' />
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SayHey;
