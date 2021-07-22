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
        <p className='timelineItem__title'>{this.props.title}</p>
        <p className='timelineItem__info'>{this.props.info}</p>
        <div className='timelineItem__number'>
          <span>{this.props.id}</span>
        </div>
      </section>
    );
  }
}

export default TimelineItem;
