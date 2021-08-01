import React from 'react';
import { setScroll } from '../../helpers/setScroll';
import { map, clamp } from '../../helpers/utils';
import LocomotiveScroll from 'locomotive-scroll';

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

type Props = {
  isMobile: boolean;
};
class Home extends React.Component<Props> {
  componentDidMount() {
    this.initLscroll();
  }

  private initLscroll = (): void => {
    const lscroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      direction: 'horizontal',
      smartphone: {
        smooth: false,
        direction: 'vertical',
      },
      tablet: {
        smooth: true,
        direction: 'horizontal',
        horizontalGesture: true,
        breakpoint: 768,
      },
    });

    if (!this.props.isMobile) this.animateItems(lscroll);
  };

  private animateItems = (_lscroll: any) => {
    _lscroll.on('scroll', (obj: any) => {
      for (const key of Object.keys(obj.currentElements)) {
        if (obj.currentElements[key].el.classList.contains('animationItem')) {
          let progress = obj.currentElements[key].progress;
          const saturateVal =
            progress < 0.3
              ? clamp(map(progress, 0, 0.3, 0, 1), 0.3, 1)
              : clamp(map(progress, 0.7, 1, 1, 0), 0.3, 1);
          const brightnessVal =
            progress < 0.3
              ? clamp(map(progress, 0, 0.3, 0, 1), 0.3, 1)
              : clamp(map(progress, 0.7, 1, 1, 0), 0.3, 1);
          obj.currentElements[
            key
          ].el.style.filter = `saturate(${saturateVal}) brightness(${brightnessVal})`;
        }
      }
    });

    _lscroll.update();
  };

  render() {
    return (
      <main className='home' data-scroll-container>
        <section className='content'>
          <SayHey />
          <div className='gradient' />
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
              <span {...setScroll(true)}>thanks for your interest in me, have a nice day.</span>
            </Statement>
          </section>
        </section>
      </main>
    );
  }
}
export default Home;
