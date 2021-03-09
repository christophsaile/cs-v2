import React from 'react';

type Props = {
  title: string;
};

class Statement extends React.Component<Props> {
  render() {
    return (
      <section className='statement__container'>
        <div className='statement__title'>{this.props.title}</div>
      </section>
    );
  }
}

export default Statement;
