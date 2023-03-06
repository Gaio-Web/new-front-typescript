import React, { FC } from 'react';
import styled from 'styled-components';
import './styles.css';

interface Props {
  images: string[];
}

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 64vw;
  max-height: 60vh;
  padding: 0 5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scroll-padding: 3.5rem 0;
  background: transparent;
`;

const CarouselSlide = styled.img`
  flex: 0 0 100%;
  padding: 12px 4px;
  max-height: 400px;
  max-width: 90vw;
  border-radius: 30px;
  scroll-snap-align: center;
  filter: drop-shadow(0px 6px 7px rgba(150, 150, 150, 1));
`;

const Carousel: FC<Props> = ({ images }) => {
  return (
    <CarouselContainer>
      {images.map((img) => (
        <div className='imgWrapper'>
          <CarouselSlide src={img} />
        </div>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
