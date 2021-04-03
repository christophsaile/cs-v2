import React from 'react';

import { ReactComponent as Triangle } from '../../assets/imgs/triangle.svg';
import { ReactComponent as Circle } from '../../assets/imgs/circle.svg';

type Props = {
  section: string;
  items: number;
  form: Form;
};

type Form = 'triangle' | 'circle';

class Background extends React.Component<Props> {
  private renderBackground = (section: string, items: number, form: Form) => {
    const arrayOfItems: number[] = Array.from({ length: items }, (_, i) => i + 1);
    return (
      <div className={'background--' + section}>
        {arrayOfItems.map((number: number) => {
          let item;
          switch (form) {
            case 'triangle':
              item = <Triangle className={`${form} ${form + '__' + number}`} />;
              break;
            case 'circle':
              item = <Circle className={`${form} ${form + '__' + number}`} />;
              break;
          }
          return item;
        })}
      </div>
    );
  };

  render() {
    return (
      <div className='background'>
        {this.renderBackground(this.props.section, this.props.items, this.props.form)}
      </div>
    );
  }
}

export default Background;
