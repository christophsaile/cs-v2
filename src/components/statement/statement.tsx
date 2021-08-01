import React, { createRef, RefObject } from 'react';
import { addAnimation } from '../../helpers/addAnimation';

type Props = {
  intro?: boolean;
  center?: boolean;
};

class Statement extends React.Component<Props> {
  private containerRef: RefObject<HTMLDivElement>;

  constructor(props: Props) {
    super(props);

    this.containerRef = createRef();
  }

  componentDidMount() {
    if (this.props.intro) {
      if (this.containerRef.current) addAnimation(this.containerRef.current, 'fadeIn', true, '02');
    }
  }

  render() {
    return (
      <section
        ref={this.containerRef}
        className={`statement__container ${this.props.intro ? 'animate__slow' : ''}`}
      >
        <h2 className={`statement__title ${this.props.center ? 'statement__title--center' : ''} `}>
          {this.props.children}
        </h2>
      </section>
    );
  }
}

export default Statement;
