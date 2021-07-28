import React from 'react';
import { setScroll } from '../../helpers/setScroll';

// Components
import Statement from '../../components/statement/statement';
import Timeline from '../../components/timeline/timeline';
import About from '../../components/aboutme/aboutme';
import Work from '../../components/work/work';

// Content
import TimelineContent from '../../components/timeline/timeline-data.json';
import WorkContent from '../../components/work/work-data.json';

// Assets
import SayHey from '../../components/say-hey/say-hey';

class Home extends React.Component {
  render() {
    return (
      <main className='home' data-scroll-container>
        <section className='content'>
          <SayHey />
          <section className='page page--fullscreen intro' data-scroll-section>
            <Statement>
              <span {...setScroll(true, -2, 'vertical')}>
                hi, i am chris, a web-developer from germany. i am happy to see you here.
              </span>
              {/* placeholder image */}
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <About />
          </section>
          <section className='page' data-scroll-section>
            <Timeline data={TimelineContent} />
          </section>
          <section className='page page--fullscreen' data-scroll-section>
            <Statement>
              <span {...setScroll(true, -4, 'vertical')}>créations</span>
            </Statement>
          </section>
          <section className='page' data-scroll-section>
            <Work data={WorkContent} />
          </section>
          <section className='page' data-scroll-section>
            <Statement center={true}>
              <span {...setScroll(true)}>Thanks!</span>
            </Statement>
          </section>
        </section>
      </main>
    );
  }
}
export default Home;
