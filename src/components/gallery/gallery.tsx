import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

type Props = {
  data: string[];
};

class Gallery extends React.Component<Props> {
  componentDidMount() {}

  // private initSwiper =() => {
  //   this.swiper = new Swiper(".swiper-container", {
  //     loop: true,
  //     slidesPerView: "auto",
  //     spaceBetween: 40,
  //     centeredSlides: true,
  //     navigation: {
  //       nextEl: ".swiper-button-next",
  //       prevEl: ".swiper-button-prev"
  //     }
  //   });
  // }

  render() {
    return (
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        loop
        centeredSlides
        className='mySwiper'
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {this.props.data.map((_item: string, _index: number) => (
          <SwiperSlide key={_index}>
            <img src={_item} alt='' />
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
}

export default Gallery;
