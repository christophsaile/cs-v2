import React from 'react';
import { setScroll } from '../../../helpers/setScroll';
import { Link } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  slug: string;
  meta: string[];
  imgs: string[];
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
          <Link
            className='upper arrow styled'
            to={{
              pathname: '/explore/' + this.props.slug,
              state: { title: this.props.title, imgs: this.props.imgs },
            }}
          >
            <span>explore</span>
          </Link>
        </div>
      </article>
    );
  }
}

export default WorkItem;
