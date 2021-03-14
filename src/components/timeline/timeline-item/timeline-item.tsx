import React from 'react';

type Props = {
  id: number;
  year: string;
  title: string;
  info: string;
};

class TimelineItem extends React.Component<Props> {
  render() {
    return (
      <section className='timelineItem'>
        <h3>{this.props.year}</h3>
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
