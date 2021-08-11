import React, { createRef, RefObject } from 'react';
import { map, clamp } from '../../helpers/utils';
import LocomotiveScroll from 'locomotive-scroll';
import { Link } from 'react-router-dom';
import { addAnimation } from '../../helpers/addAnimation';

// Components
import Statement from '../../components/statement/statement';
import Timeline from '../../components/timeline/timeline';
import Aboutme from '../../components/aboutme/aboutme';
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
  private logoRef: RefObject<HTMLAnchorElement>;
  private lscroll: any;

  constructor(props: Props) {
    super(props);
    this.logoRef = createRef();
  }
  componentDidMount() {
    this.initLscroll();
    this.initAnimation();
  }

  private initAnimation = (): void => {
    if (this.logoRef.current) addAnimation(this.logoRef.current, 'fadeInLeft', true, '12');
  };

  private initLscroll = (): void => {
    this.lscroll = new LocomotiveScroll({
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

    if (!this.props.isMobile) this.animateItems();
  };

  private animateItems = () => {
    this.lscroll.on('scroll', (obj: any) => {
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

    this.lscroll.update();
  };

  render() {
    return (
      <>
        <div className='fixed'>
          <Link
            ref={this.logoRef}
            onClick={() => {
              this.lscroll.scrollTo(0, 0);
            }}
            to='/'
            className='logo upper styled'
          >
            chris
          </Link>
          <SayHey />
          {this.props.isMobile && <div className='gradient' />}
        </div>
        <main className='home' data-scroll-container data-scroll-section>
          <section className='content'>
            <section className='page intro'>
              <Statement intro={true}>
                <span {...setScroll(true, 1)}>
                  hey, i am chris, a web developer from germany. i am excited to see you here.
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
              <Aboutme />
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
