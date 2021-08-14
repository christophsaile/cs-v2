import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

type Props = {
  imgs: string[];
  isMobile: boolean;
};

class Gallery extends React.Component<Props> {
  private checkImages = (): number => {
    return this.props.imgs.length;
  };

  private renderGallery = (): JSX.Element => {
    let renderItem: JSX.Element;
    if (this.checkImages() === 1) {
      renderItem = this.settingsOneItem();
    } else if (this.checkImages() < 1 && this.checkImages() <= 3) {
      renderItem = this.settingsTwoItems();
    } else {
      renderItem = this.settingsMoreThanThreeItems();
    }
    return renderItem;
  };

  private settingsOneItem = (): JSX.Element => {
    return <img className='gallery__img' src={this.props.imgs[0]} alt='' />;
  };

  private settingsTwoItems = (): JSX.Element => {
    return (
      <Swiper
        navigation
        spaceBetween={40}
        slidesPerView={1}
        loop
        centeredSlides
        className='mySwiper'
      >
        {this.renderSlides()}
      </Swiper>
    );
  };

  private settingsMoreThanThreeItems = (): JSX.Element => {
    return (
      <Swiper
        navigation
        spaceBetween={50}
        slidesPerView={this.props.isMobile ? 1 : 'auto'}
        loop
        className='mySwiper'
      >
        {this.renderSlides()}
      </Swiper>
    );
  };

  private renderSlides = (): JSX.Element[] => {
    return this.props.imgs.map((_item: string, _index: number) => (
      <SwiperSlide key={_index}>
        <img src={_item} alt='' />
      </SwiperSlide>
    ));
  };

  render() {
    return <>{this.renderGallery()}</>;
  }
}

export default Gallery;
