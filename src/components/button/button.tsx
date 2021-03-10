import React from 'react';

type Props = {
  title: string;
  color: string;
  link: string;
};

class Button extends React.Component<Props> {
  render() {
    return (
      <button className={'button button--' + this.props.color}>
        <a rel='noreferrer' target='_blank' href={this.props.link}>{this.props.title}</a>
      </button>
    );
  }
}

export default Button;
