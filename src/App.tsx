import React from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { isMobile, isTablet } from 'react-device-detect';
import { debounce } from './helpers/debounce';
import { map, clamp } from './helpers/utils';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Home from './screens/home/home';
import About from './screens/about/about';

type Props = {};
type State = {
  isMobile: boolean;
};

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isMobile: this.checkScreenSize(),
    };
  }

  componentDidMount() {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.handleResize();
      }, 250)
    );

    this.initLscroll();
  }

  private handleResize = (): void => {
    this.checkScreenSize() ? this.setState({ isMobile: true }) : this.setState({ isMobile: false });
    if (!isMobile && !isTablet) {
      window.location.reload();
    }
  };

  private checkScreenSize = (): boolean => {
    return window.innerWidth > 768 ? false : true;
  };

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

    if (!this.state.isMobile) this.animateItems(lscroll);
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
      <Router>
        <Link to='/' className='logo'>
          chris
        </Link>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    );
  }
}

export default App;
