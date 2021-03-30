import React from 'react';

type Props = {
  outline?: boolean;
  center?: boolean;
};

class Statement extends React.Component<Props> {
  render() {
    return (
      <section className='statement__container' data-scroll data-scroll-speed='1'>
        <h2
          className={
            this.props.center ? 'statement__title statement__title--center' : 'statement__title'
          }
        >
          {this.props.children}
        </h2>
      </section>
    );
  }
}

export default Statement;
