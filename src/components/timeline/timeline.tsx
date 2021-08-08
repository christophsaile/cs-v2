import React from 'react';

// Components
import TimelineItem from './timeline-item/timeline-item';

type Content = {
  id: number;
  year: string;
  title: string;
  info: string;
};

type Props = {
  data: Content[];
  isMobile: boolean;
};

class Timeline extends React.Component<Props> {
  render() {
    return (
      <section className='timeline'>
        <div className='timeline__content'>
          <span className='timeline__stroke'></span>
          {this.props.data.map((_item: Content) => (
            <TimelineItem
              key={_item.id}
              id={_item.id}
              year={_item.year}
              title={_item.title}
              info={_item.info}
              isMobile={this.props.isMobile}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Timeline;
