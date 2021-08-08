import React from 'react';
import { setScroll } from '../../../helpers/setScroll';
import { isEven } from '../../../helpers/utils';

type Props = {
  id: number;
  title: string;
  link: string;
  meta: string[];
};

class WorkItem extends React.Component<Props> {
  render() {
    return (
      <article
        className='workItem animationItem'
        {...setScroll(true, isEven(this.props.id) ? -1 : 1, 'vertical')}
      >
        <h3>{this.props.title}</h3>
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
