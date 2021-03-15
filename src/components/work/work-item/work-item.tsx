import React from 'react';

type Props = {
  title: string;
  img: string;
  link: string;
};

class WorkItem extends React.Component<Props> {
  render() {
    return (
      <div className='workItem'>
        <h3>{this.props.title}</h3>
        <p>{this.props.children}</p>
        <img src={this.props.img} alt={this.props.title} />
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
