import React from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { debounce } from './helpers/debounce';
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

  render() {
    return (
      <Router>
        <Link
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
      </Router>
    );
  }
}

export default App;
