import React from 'react';
import { setScroll } from '../../../helpers/setScroll';

type Props = {
  id: number;
  title: string;
  link: string;
  meta: string[];
};

class WorkItem extends React.Component<Props> {
  render() {
    return (
      <article {...setScroll(true)} className='workItem animationItem'>
        <h3 {...setScroll(true, 2)}>{this.props.title}</h3>
        <div className='workItem__meta'>
          {this.props.meta.map((_item: string, _index: number) => (
            <span key={_index}>{_item}</span>
          ))}
        </div>
        {this.props.children}
        <div className='workItem__explore'>
          <a className='upper explore styled' href={this.props.link} rel='noreferrer'>
            <span>explore</span>
          </a>
        </div>
      </article>
    );
  }
}

export default WorkItem;
