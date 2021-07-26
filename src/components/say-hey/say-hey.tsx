import React, { createRef, RefObject } from 'react';
import { ReactComponent as SayHeySvg } from '../../assets/imgs/say-hey.svg';
import { ReactComponent as Smiley } from '../../assets/imgs/smiley.svg';
import { ReactComponent as Cancel } from '../../assets/imgs/cancel.svg';
import { ReactComponent as Facebook } from '../../assets/imgs/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/imgs/instagram.svg';
import { ReactComponent as Github } from '../../assets/imgs/github.svg';
import { addAnimation } from '../../helpers/addAnimation';

type Props = {
  onMenuChange: () => void;
  isMenuOpen: boolean;
};

class SayHey extends React.Component<Props> {
  private facebookRef: RefObject<HTMLAnchorElement>;
  private instagramRef: RefObject<HTMLAnchorElement>;
  private githubRef: RefObject<HTMLAnchorElement>;
  private smileyRef: RefObject<SVGSVGElement>;

  constructor(props: Props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);

    this.smileyRef = createRef();
    this.facebookRef = createRef();
    this.instagramRef = createRef();
    this.githubRef = createRef();
  }

  private toggleMenu() {
    this.props.onMenuChange();
  }

  componentDidUpdate() {
    if (this.props.isMenuOpen) {
      if (this.smileyRef.current) addAnimation(this.smileyRef.current, 'fadeIn', true, '02');
      if (this.facebookRef.current) addAnimation(this.facebookRef.current, 'fadeInUp', true);
      if (this.instagramRef.current)
        addAnimation(this.instagramRef.current, 'fadeInUp', true, '02');
      if (this.githubRef.current) addAnimation(this.githubRef.current, 'fadeInUp', true, '04');
    }
  }

  render() {
    return (
      <section className='sayHey__container'>
        <div className='sayHey__icon' onClick={this.toggleMenu}>
          <SayHeySvg title='Say Hey Icon' />
        </div>
        <section
          className={
            this.props.isMenuOpen
              ? 'sayHey__contact sayHey__contact--open'
              : 'sayHey__contact sayHey__contact--hidden'
          }
        >
          <div className='sayHey__content'>
            <div className='sayHey__cancel' onClick={this.toggleMenu}>
              <Cancel title='Cancel' />
            </div>
            <div className='sayHey__smiley'>
              <a href='mailto:christoph.saile@googlemail.com'>
                <Smiley ref={this.smileyRef} title='Email' />
              </a>
            </div>
            <div className='sayHey__social'>
              <a ref={this.facebookRef} href='https://www.facebook.com/Chris.Saile'>
                <Facebook title='Facebook' />
              </a>
              <a ref={this.instagramRef} href='https://www.instagram.com/christophsaile/'>
                <Instagram title='Instagram' />
              </a>
              <a ref={this.githubRef} href='https://github.com/christophsaile'>
                <Github title='Github' />
              </a>
            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default SayHey;
