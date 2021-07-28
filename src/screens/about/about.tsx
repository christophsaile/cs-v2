import React, { createRef, RefObject } from 'react';
import { addAnimation } from '../../helpers/addAnimation';
import { Link } from 'react-router-dom';

//Assets
import { ReactComponent as Smiley } from '../../assets/imgs/smiley.svg';
import { ReactComponent as Cancel } from '../../assets/imgs/cancel.svg';

type Props = {};

class Aboutme extends React.Component<Props> {
  private facebookRef: RefObject<HTMLAnchorElement>;
  private instagramRef: RefObject<HTMLAnchorElement>;
  private githubRef: RefObject<HTMLAnchorElement>;
  private smileyRef: RefObject<SVGSVGElement>;

  constructor(props: Props) {
    super(props);

    this.smileyRef = createRef();
    this.facebookRef = createRef();
    this.instagramRef = createRef();
    this.githubRef = createRef();
  }

  componentDidUpdate() {
    if (this.smileyRef.current) addAnimation(this.smileyRef.current, 'fadeIn', true, '02');
    if (this.facebookRef.current) addAnimation(this.facebookRef.current, 'fadeInUp', true);
    if (this.instagramRef.current) addAnimation(this.instagramRef.current, 'fadeInUp', true, '02');
    if (this.githubRef.current) addAnimation(this.githubRef.current, 'fadeInUp', true, '04');
  }

  render() {
    return (
      <main className='about' data-scroll-container>
        <section className='about__content' data-scroll-section>
          <Link to='/' className='about__cancel'>
            <Cancel title='Cancel' />
          </Link>
          <div className='about__smiley'>
            <a href='mailto:christoph.saile@googlemail.com'>
              <Smiley ref={this.smileyRef} title='Email' />
            </a>
          </div>
          <div className='about__social'>
            <a ref={this.facebookRef} href='https://www.facebook.com/Chris.Saile'>
              Facebook
            </a>
            <a ref={this.instagramRef} href='https://www.instagram.com/christophsaile/'>
              Instagram
            </a>
            <a ref={this.githubRef} href='https://github.com/christophsaile'>
              Github
            </a>
          </div>
        </section>
      </main>
    );
  }
}
export default Aboutme;
