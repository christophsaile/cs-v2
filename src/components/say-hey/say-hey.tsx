import React, { createRef, RefObject } from 'react';
import { Link } from 'react-router-dom';
import { addAnimation } from '../../helpers/addAnimation';

//Assets
import { ReactComponent as SayHeySvg } from '../../images/say-hey.svg';

type Props = {};

class SayHey extends React.Component<Props> {
  private sayHeyRef: RefObject<HTMLAnchorElement>;

  constructor(props: Props) {
    super(props);

    this.sayHeyRef = createRef();
  }

  componentDidMount() {
    if (this.sayHeyRef.current) addAnimation(this.sayHeyRef.current, 'fadeInRight', true, '12');
  }

  render() {
    return (
      <section className='sayHey__container'>
        <Link ref={this.sayHeyRef} to='/about' className='sayHey__icon upper'>
          <SayHeySvg title='Say Hey Icon' />
        </Link>
      </section>
    );
  }
}

export default SayHey;
