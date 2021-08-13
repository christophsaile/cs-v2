import React from 'react';
import { useLocation } from 'react-router-dom';

// Components
import Gallery from '../../components/gallery/gallery';

type Props = {
  isMobile: boolean;
};

const Explore = (props: Props) => {
  const location = useLocation<{ imgs: string[] }>();
  const { imgs } = location.state;

  return (
    <section className='explore page'>
      <div className='explore__slider'>
        <Gallery data={imgs} />
      </div>
    </section>
  );
};

export default Explore;
