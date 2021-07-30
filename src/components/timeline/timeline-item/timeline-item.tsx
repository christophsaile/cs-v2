import React from 'react';
import { setScroll } from '../../../helpers/setScroll';
import { isEven } from '../../../helpers/utils';

type Props = {
  id: number;
  year: string;
  title: string;
  info: string;
};

class TimelineItem extends React.Component<Props> {
  render() {
    return (
      <section
        className='timelineItem animationItem'
        {...setScroll(true, isEven(this.props.id) ? -2 : 2, 'vertical')}
      >
        <h3 className='underline' {...setScroll(true, 1)}>
          {this.props.year}
        </h3>
        <p className='timelineItem__info' {...setScroll(true)}>
          {this.props.title} <br />
          <span className='highlight'>@ </span>
          {this.props.info}
        </p>
      </section>
    );
  }
}

export default TimelineItem;
