import React from 'react';

type Props = {
  title: string;
};

class Statement extends React.Component<Props> {
  render() {
    return <div className='statement'>{this.props.title}</div>;
  }
}

export default Statement;
