import React from 'react';
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
        data-scroll
        data-scroll-speed={isEven(this.props.id) ? '-2' : '2'}
        data-scroll-direction='vertical'
      >
        <h3 data-scroll data-scroll-speed='1'>
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
