import React from 'react';
import { Link } from 'react-router-dom';

//Assets
import { ReactComponent as SayHeySvg } from '../../assets/imgs/say-hey.svg';

type Props = {};

class SayHey extends React.Component<Props> {
  render() {
    return (
      <section className='sayHey__container'>
        <Link to='/about' className='sayHey__icon'>
          <SayHeySvg title='Say Hey Icon' />
        </Link>
      </section>
    );
  }
}

export default SayHey;
