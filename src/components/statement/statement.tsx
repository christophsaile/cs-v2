import React from 'react';

type Props = {
  outline?: boolean;
};

class Statement extends React.Component<Props> {
  render() {
    return (
      <section className='statement__container'>
        <h2 className='statement__title'>{this.props.children}</h2>
      </section>
    );
  }
}

export default Statement;
