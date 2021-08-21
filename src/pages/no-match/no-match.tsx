import React, { createRef, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { addAnimation } from '../../helpers/addAnimation';

// Components
import SayHey from '../../components/say-hey/say-hey';

type Props = {};
class NoMatch extends React.Component {
  private logoRef: RefObject<HTMLAnchorElement>;

  constructor(props: Props) {
    super(props);
    this.logoRef = createRef();
  }
  componentDidMount() {
    this.initAnimation();
  }

  private initAnimation = (): void => {
    if (this.logoRef.current) addAnimation(this.logoRef.current, 'fadeInLeft', true, '12');
  };
  render() {
    return (
      <section className='noMatch page'>
        <div className='fixed'>
          <Link ref={this.logoRef} to='/' className='logo upper styled'>
            chris
          </Link>
          <SayHey />
        </div>
        <div className='noMatch__background'>404</div>
        <div className='noMatch__content'>
          <div className='noMatch__text'>
            <h2>something went wrong</h2>
            <p>please navigate somewhere else. there is nothing to see here.</p>
            <p>double-check the address you entered.</p>
            <Link className='noMatch__link upper styled arrow' to='/'>
              Go Back
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default NoMatch;
