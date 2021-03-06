import React from 'react';
import TimelineItem from './timeline-item/timeline-item';
import Background from '../background/background';

type Content = {
  id: number;
  year: string;
  title: string;
  info: string;
};

type Props = {
  data: Content[];
};

class Timeline extends React.Component<Props> {
  render() {
    return (
      <section className='timeline'>
        <Background section='timeline' items={5} form={'triangle'} />
        <span className='timeline__stroke'></span>
        <div className='timeline__content'>
          {this.props.data.map((_item: Content) => (
            <TimelineItem
              key={_item.id}
              id={_item.id}
              year={_item.year}
              title={_item.title}
              info={_item.info}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Timeline;
