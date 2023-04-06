import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper';
//import { EffectCards } from 'swiper';

// import images
import Photo1 from '../../../../assets/foto1.png';
import Photo2 from '../../../../assets/foto2.png';
import Photo3 from '../../../../assets/foto3.png';
import vertical from '../../../../assets/capaSerena.png';

interface ICarouselProps{
  firebaseUrl:any;
}

function Carousel({firebaseUrl}:ICarouselProps) {
  if (!firebaseUrl) {
    return(
      <>
        <Swiper
          slidesPerView={'auto'}
          //effect={'cards'}
          //spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          loop={true}
          grabCursor={true}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={'content-wrapper'}>
              <img src={Photo1}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={'content-wrapper'}>
              <img src={Photo1}/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={'content-wrapper'}>
              <img src={Photo1}/>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    );
  }


  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        //effect={'cards'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        grabCursor={true}
        modules={[Pagination]}
        className="mySwiper"
      >

        {firebaseUrl.map((url: string) => (
          <SwiperSlide key={url}>
            <div className={'content-wrapper'} >
              <img className='pgImg' style={{margin:'0'}} src={url}/>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </>
  );
}

export { Carousel };
