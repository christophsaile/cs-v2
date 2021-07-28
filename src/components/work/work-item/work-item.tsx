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
        {...setScroll(true, isEven(this.props.id) ? -2 : 2, 'vertical')}
      >
        <h3 {...setScroll(true, 1)}>{this.props.title}</h3>
        <div className='workItem__meta'>
          {this.props.meta.map((_item: string, _index: number) => (
            <span key={_index}>{_item}</span>
          ))}
        </div>
        {this.props.children}
        <div className='workItem__explore'>
          <a target='_blank' rel='noreferrer' href={this.props.link}>
            explore
          </a>
        </div>
      </article>
    );
  }
}

export default WorkItem;
