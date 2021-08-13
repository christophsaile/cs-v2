import React, { createRef, RefObject } from 'react';
import { addAnimation } from '../../helpers/addAnimation';
import { Link } from 'react-router-dom';

// Components
import Background from '../../components/background/background';

// Assets
import { ReactComponent as Smiley } from '../../images/smiley.svg';
import { ReactComponent as Cancel } from '../../images/cancel.svg';

type Props = {
  isMobile: boolean;
};

class About extends React.Component<Props> {
  private facebookRef: RefObject<HTMLAnchorElement>;
  private instagramRef: RefObject<HTMLAnchorElement>;
  private githubRef: RefObject<HTMLAnchorElement>;
  private numberRef: RefObject<HTMLAnchorElement>;
  private smileyRef: RefObject<SVGSVGElement>;

  constructor(props: Props) {
    super(props);

    this.smileyRef = createRef();
    this.facebookRef = createRef();
    this.instagramRef = createRef();
    this.githubRef = createRef();
    this.numberRef = createRef();
  }

  componentDidMount() {
    if (this.smileyRef.current) addAnimation(this.smileyRef.current, 'fadeIn', true);
    if (this.facebookRef.current) addAnimation(this.facebookRef.current, 'fadeInUp', true);
    if (this.instagramRef.current) addAnimation(this.instagramRef.current, 'fadeInUp', true, '02');
    if (this.githubRef.current) addAnimation(this.githubRef.current, 'fadeInUp', true, '04');
    if (this.numberRef.current) addAnimation(this.numberRef.current, 'fadeInUp', true);
  }

  render() {
    return (
      <main className='about page' data-scroll-container data-scroll-section>
        <section className='about__content'>
          <Link to='/' className='about__cancel styled'>
            <Cancel title='Cancel' />
            <span></span>
          </Link>
          <div className='about__smiley'>
            <a href='mailto:christoph.saile@googlemail.com'>
              <Smiley ref={this.smileyRef} title='Email' />
            </a>
          </div>
          <section className='about__wrapper'>
            <div className='about__social'>
              <h3>social</h3>
              <ul>
                <li>
                  <a
                    className='styled'
                    ref={this.facebookRef}
                    href='https://www.facebook.com/Chris.Saile'
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className='styled'
                    ref={this.instagramRef}
                    href='https://www.instagram.com/christophsaile/'
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className='styled'
                    ref={this.githubRef}
                    href='https://github.com/christophsaile'
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div className='about__contact'>
              <h3>contact</h3>
              <a className='styled' ref={this.numberRef} href='tel:+4915782278711'>
                +49 1578 2278711
              </a>
            </div>
          </section>
        </section>
        <Background
          id='about'
          settings={{
            uFrequency: 1.2,
            uAmplitude: 1.2,
            uDensity: 1.3,
            uStrength: 1.1,
            uOpacity: 0.9,
          }}
        />
      </main>
    );
  }
}
export default About;
