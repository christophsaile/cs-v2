import React, { createRef, RefObject } from 'react';
import Sphere, { Settings } from '../../webgl/sphere';
import { setScroll } from '../../helpers/setScroll';

type Props = {
  id: string;
  settings: Settings;
};

type State = {
  isInView: boolean;
};

class Background extends React.Component<Props, State> {
  private canvasRef: RefObject<HTMLDivElement>;
  private observer: MutationObserver;
  private sphere!: Sphere;

  constructor(props: Props) {
    super(props);
    this.canvasRef = createRef();
    this.state = { isInView: false };
    this.observer = new MutationObserver((_mutations) => this.observeIsInView(_mutations));
  }

  private observeIsInView = (_mutations: MutationRecord[]): void => {
    const target: HTMLElement = _mutations[0].target as HTMLElement;
    if (target.classList.contains('is-inview') && target.id === this.props.id) {
      this.setState({ isInView: true });
    } else {
      this.setState({ isInView: false });
    }
  };

  componentDidMount() {
    this.initSphere();
    this.initObserver();
    this.addClassForAboutPage();
  }

  componentDidUpdate() {
    if (this.state.isInView) {
      this.sphere.isInView();
    } else {
      this.sphere.isNotInView();
    }
  }

  componentWillUnmount() {
    this.sphere.isNotInView();
    this.observer.disconnect();
  }

  private initSphere = (): void => {
    if (this.canvasRef.current) {
      this.sphere = new Sphere(this.props.settings, this.canvasRef.current);
    }
    this.sphere.init();
  };

  private initObserver = (): void => {
    if (this.canvasRef.current)
      this.observer.observe(this.canvasRef.current, {
        attributeFilter: ['class'],
      });
  };

  private addClassForAboutPage = (): void => {
    if (this.props.id === 'about') this.canvasRef.current?.classList.add('is-inview');
  };

  render() {
    return (
      <div
        ref={this.canvasRef}
        id={this.props.id}
        className='background'
        {...setScroll(true)}
        data-scroll-repeat
      />
    );
  }
}

export default Background;
