import React from 'react';
import WorkItem from './work-item/work-item';
import Background from '../background/background';

type Content = {
  id: number;
  title: string;
  link: string;
  description: string;
};

type Props = {
  data: Content[];
};

class Work extends React.Component<Props> {
  private createMarkup = (_description: string) => {
    return { __html: _description };
  };

  render() {
    return (
      <section className='work'>
        <Background section='work' items={5} form={'circle'} />
        <div className='work__content'>
          {this.props.data.map((_item: Content) => (
            <WorkItem key={_item.id} id={_item.id} title={_item.title} link={_item.link}>
              <p dangerouslySetInnerHTML={this.createMarkup(_item.description)} />
            </WorkItem>
          ))}
        </div>
      </section>
    );
  }
}

export default Work;
