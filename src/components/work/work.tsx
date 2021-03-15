import React from 'react';
import WorkItem from './work-item/work-item';

// Assets
import cigarettePack from '../../assets/imgs/cigarette-pack-open.png';
import intranet from '../../assets/imgs/intranet.png';

class Work extends React.Component {
  render() {
    return (
      <section className='work'>
        <div className='work__content'>
          <WorkItem title='L&S-Cigarettes' img={cigarettePack} link='www.google.de'>
            <b>L&S - Cigaretts</b> is an University project I did for the lecture Responsive
            Webdesign.
            <br />
            The Goal was to create a <b>Landingpage</b> for a product of your choice and show it in
            an <b>opposite context</b>.
            <br />I choosed cigaretts as my product and healthy as the opposite context.
          </WorkItem>
          <WorkItem title='Digital Media Intranet redesign' img={intranet} link='www.google.de'>
            As a part of an University project I had the challenge to create an
            <b>interactive prototype</b> for the faculty of Digital Media.
          </WorkItem>
        </div>
      </section>
    );
  }
}

export default Work;
