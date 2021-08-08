import React from 'react';
import { setScroll } from '../../../helpers/setScroll';
import { isEven } from '../../../helpers/utils';

type Props = {
  id: number;
  year: string;
  title: string;
  info: string;
  isMobile: boolean;
};

class TimelineItem extends React.Component<Props> {
  render() {
    return (
      <section
        className={`timelineItem animationItem ${
          isEven(this.props.id) ? 'timelineItem--even' : ''
        }`}
        {...(!this.props.isMobile ? setScroll(true) : '')}
      >
        <h3 {...setScroll(true, 2)}>{this.props.year}</h3>
        <p className='timelineItem__info' {...(this.props.isMobile ? setScroll(true) : '')}>
          {this.props.title} <br />
          <span className='highlight'>@ </span>
          {this.props.info}
        </p>
      </section>
    );
  }
}

export default TimelineItem;
