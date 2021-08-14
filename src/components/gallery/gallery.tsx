import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

type Props = {
  imgs: string[];
  imgsM: boolean;
  isMobile: boolean;
};

class Gallery extends React.Component<Props> {
  private checkImages = (): number => {
    return this.props.imgs.length;
  };

  private mobileString = (_path: string) => {
    return _path.slice(0, 8) + 'm-' + _path.slice(8);
  };

  private renderGallery = (): JSX.Element => {
    let renderItem: JSX.Element;
    this.checkImages() === 1
      ? (renderItem = this.settingsOneItem())
      : (renderItem = this.settingsMoreThanOneItem());
    return renderItem;
  };

  private settingsOneItem = (): JSX.Element => {
    return <img className='gallery__img' src={this.props.imgs[0]} alt='' />;
  };

  private settingsMoreThanOneItem = (): JSX.Element => {
    return (
      <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={1}
        loop
        centeredSlides
        className='mySwiper'
      >
        {this.renderSlides()}
      </Swiper>
    );
  };

  private renderSlides = (): JSX.Element[] => {
    return this.props.imgs.map((_item: string, _index: number) => (
      <SwiperSlide key={_index}>
        {this.props.imgsM ? (
          <picture>
            <source srcSet={_item} media='(min-width: 768px)' />
            <img src={this.mobileString(_item)} alt='' />
          </picture>
        ) : (
          <img src={_item} alt='' />
        )}
      </SwiperSlide>
    ));
  };

  render() {
    return <>{this.renderGallery()}</>;
  }
}

export default Gallery;
