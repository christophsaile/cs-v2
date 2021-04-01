import React from 'react';

type Props = {
  outline?: boolean;
  center?: boolean;
};

class Statement extends React.Component<Props> {
  render() {
    return (
      <section className='statement__container'>
        <h2
          className={`statement__title ${this.props.center ? 'statement__title--center' : ''} ${
            this.props.outline ? 'statement__title--outline' : ''
          }`}
        >
          {this.props.children}
        </h2>
      </section>
    );
  }
}

export default Statement;
