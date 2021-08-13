import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Components
import Gallery from '../../components/gallery/gallery';

// Assets
import { ReactComponent as Cancel } from '../../images/cancel.svg';

type Props = {
  isMobile: boolean;
};

const Explore = (props: Props) => {
  const location = useLocation<{ title: string; imgs: string[] }>();
  const { imgs, title } = location.state;

  return (
    <section className='explore page'>
      <Link to='/' className='explore__cancel styled'>
        <Cancel title='Cancel' />
        <span></span>
      </Link>
      <div className='explore__slider'>
        <Gallery isMobile={props.isMobile} imgs={imgs} />
        <h2 className='explore__title'>{title}</h2>
      </div>
    </section>
  );
};

export default Explore;
