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

function Carousel() {
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
        <SwiperSlide>
          <div className={'content-wrapper'}>
            <img className="pgImg" src={vertical} alt={'foto-1'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={'content-wrapper'}>
            <img className="pgImg" src={Photo1} alt={'foto-2'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={'content-wrapper'}>
            <img className="pgImg" src={Photo3} alt={'foto-2'} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={'content-wrapper'}>
            <img className="pgImg" src={Photo2} alt={'foto-2'} />
          </div>
        </SwiperSlide>

        {/* tem que fazer um images.map quando construir o forms e começar a receber imagens.
        <CarouselContainer>
        {images.map(img => (
            <div className='imgWrapper'> <CarouselSlide src={img}/> </div>
        ))}
        </CarouselContainer> */}
      </Swiper>
    </>
  );
}

export { Carousel };
