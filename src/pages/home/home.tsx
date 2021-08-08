import React from 'react';
import { map, clamp } from '../../helpers/utils';
import LocomotiveScroll from 'locomotive-scroll';

// Components
import Statement from '../../components/statement/statement';
import Timeline from '../../components/timeline/timeline';
import About from '../../components/aboutme/aboutme';
import Work from '../../components/work/work';
import Background from '../../components/background/background';
import { setScroll } from '../../helpers/setScroll';

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
          const opacityVal =
            progress < 0.4
              ? clamp(map(progress, 0, 0.4, 0, 1), 0.4, 1)
              : clamp(map(progress, 0.6, 1, 1, 0), 0.4, 1);
          obj.currentElements[key].el.style.filter = `opacity(${opacityVal})`;
        }
      }
    });

    _lscroll.update();
  };

  render() {
    return (
      <>
        <div className='fixed'>
          <SayHey />
          {this.props.isMobile && <div className='gradient' />}
        </div>
        <main className='home' data-scroll-container data-scroll-section>
          <section className='content'>
            <section className='page intro'>
              <Statement intro={true}>
                <span {...setScroll(true, 1)}>
                  hi, i am chris, a web-developer from germany. i am happy to see you here.
                </span>
              </Statement>
              <Background
                id='intro'
                settings={{
                  uFrequency: 1.2,
                  uAmplitude: 1.2,
                  uDensity: 1.3,
                  uStrength: 1.1,
                  uOpacity: 0.9,
                }}
              />
            </section>
            <section className='page'>
              <About />
            </section>
            <section className='page'>
              <Timeline data={TimelineContent} isMobile={this.props.isMobile} />
            </section>
            <section className='page'>
              <Statement>
                <span {...setScroll(true, 1)}>
                  check out some of the projects i did in the past
                </span>
              </Statement>
              <Background
                id='creation'
                settings={{
                  uFrequency: 1.4,
                  uAmplitude: 1.9,
                  uDensity: 1.3,
                  uStrength: 1.4,
                  uOpacity: 0.9,
                }}
              />
            </section>
            <section className='page'>
              <Work data={WorkContent} />
            </section>
            <section className='page'>
              <Statement>
                <span {...setScroll(true, 1)}>
                  thanks for your interest in me, have a nice day.
                </span>
              </Statement>
              <Background
                id='end'
                settings={{
                  uFrequency: 0.9,
                  uAmplitude: 1.3,
                  uDensity: 1.4,
                  uStrength: 1.0,
                  uOpacity: 0.9,
                }}
              />
            </section>
          </section>
        </main>
      </>
    );
  }
}
export default Home;
