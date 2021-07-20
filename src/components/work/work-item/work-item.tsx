import React from 'react';
import { isEven } from '../../../helpers/utils';

type Props = {
  id: number;
  title: string;
  link: string;
};

class WorkItem extends React.Component<Props> {
  render() {
    return (
      <div
        className='workItem animationItem'
        data-scroll
        data-scroll-speed={isEven(this.props.id) ? '-2' : '2'}
        data-scroll-direction='vertical'
      >
        <h3 className='underline' data-scroll data-scroll-speed='1'>
          {this.props.title}
        </h3>
        {this.props.children}
        <div className='workItem__explore'>
          <a target='_blank' rel='noreferrer' href={this.props.link}>
            explore
          </a>
        </div>
      </div>
    );
  }
}

export default WorkItem;
