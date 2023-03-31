import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

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
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = window.outerWidth <= 500 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <SwiperSlide>

            <img className='pgImg' src={url} alt='alt'/>

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export { Carousel };
