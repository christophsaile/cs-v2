import React, { createRef, RefObject } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { debounce } from './helpers/debounce';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { addAnimation } from './helpers/addAnimation';

// Components
import Home from './screens/home/home';
import About from './screens/about/about';
import Sphere from './webgl/sphere';

type Props = {};
type State = {
  isMobile: boolean;
};

class App extends React.Component<Props, State> {
  private canvasRef: RefObject<HTMLDivElement>;
  private logoRef: RefObject<HTMLAnchorElement>;

  constructor(props: Props) {
    super(props);

    this.state = {
      isMobile: this.checkScreenSize(),
    };

    this.canvasRef = createRef();
    this.logoRef = createRef();
  }

  componentDidMount() {
    this.handleResize();
    this.initSphere();
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

  private initSphere = (): void => {
    Sphere.addCanvas(this.canvasRef.current);
    Sphere.addCamera();
    Sphere.addMesh();
    Sphere.addEventListeners();
    Sphere.onResize();
    Sphere.update();
  };

  private initAnimation = (): void => {
    if (this.canvasRef.current) addAnimation(this.canvasRef.current, 'fadeIn', true, '02');
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
        <Switch>
          <Route exact path='/' render={() => <Home isMobile={this.state.isMobile} />} />
          <Route path='/about' render={() => <About isMobile={this.state.isMobile} />} />
        </Switch>
        <div className='animate__slower' ref={this.canvasRef} />
      </Router>
    );
  }
}

export default App;
