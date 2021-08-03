import React, { createRef, RefObject, Suspense } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { debounce } from './helpers/debounce';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addAnimation } from './helpers/addAnimation';

// Components
import Cursor from './components/cursor/cursor';
const Home = React.lazy(() => import('./screens/home/home'));
const About = React.lazy(() => import('./screens/about/about'));

type Props = {};
type State = {
  isMobile: boolean;
};

class App extends React.Component<Props, State> {
  private logoRef: RefObject<HTMLAnchorElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMobile: this.checkScreenSize(),
    };

    this.logoRef = createRef();
  }

  componentDidMount() {
    this.handleResize();
    this.initAnimation();
  }

  private handleResize = (): void => {
    window.addEventListener(
      'resize',
      debounce(() => {
        this.checkScreenSize()
          ? this.setState({ isMobile: true })
          : this.setState({ isMobile: false });
        if (!isMobile && !isTablet) {
          window.location.reload();
        }
      }, 250)
    );
  };

  private checkScreenSize = (): boolean => {
    return window.innerWidth > 768 ? false : true;
  };

  private initAnimation = (): void => {
    if (this.logoRef.current) addAnimation(this.logoRef.current, 'fadeInLeft', true, '12');
  };

  render() {
    return (
      <Router>
        <Link
          ref={this.logoRef}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          to='/'
          className='logo'
        >
          chris
        </Link>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path='/' render={() => <Home isMobile={this.state.isMobile} />} />
            <Route path='/about' render={() => <About isMobile={this.state.isMobile} />} />
          </Switch>
        </Suspense>
        {!isMobile && <Cursor />}
      </Router>
    );
  }
}

export default App;
