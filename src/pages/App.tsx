import React, { Suspense } from 'react';
import { isMobile, isTablet } from 'react-device-detect';
import { debounce } from '../helpers/debounce';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Cursor from '../components/cursor/cursor';
const Home = React.lazy(() => import('./home/home'));
const About = React.lazy(() => import('./about/about'));
const Explore = React.lazy(() => import('./explore/explore'));
const NoMatch = React.lazy(() => import('./no-match/no-match'));

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
    this.handleResize();
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

  render() {
    return (
      <Router>
        <Suspense fallback={<div></div>}>
          <Switch>
            <Route exact path='/' render={() => <Home isMobile={this.state.isMobile} />} />
            <Route path='/about' render={() => <About isMobile={this.state.isMobile} />} />
            <Route
              path='/explore/:slug'
              render={() => <Explore isMobile={this.state.isMobile} />}
            />
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </Suspense>
        {!isMobile && <Cursor />}
      </Router>
    );
  }
}

export default App;
