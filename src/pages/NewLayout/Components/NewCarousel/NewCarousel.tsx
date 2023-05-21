import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Swipe from '../../../../assets/Gifs/animation_500_lhwe2pfh.gif';

interface SliderProps {
  images?: string[];
  firebaseUrl?: any;
}

const SliderContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 80%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  box-sizing: border-box;
  overflow-x: scroll;
  overflow-y: hidden;

  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  @media screen and (max-width: 600px) {
    padding-left: 0;
  }

`;

const SliderWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  gap: 2rem;
`;

const Slide = styled.img`
  /* width: auto;
  height: 300px;
  max-width: 600px;
  flex-shrink: 0; */

  /* width: auto; */
  /* height: 100%; */
  /* max-height: 50%; */
  /* display: block; */
  /* width: fit-content; */
  /* height: 100%; */

  /* max-height: 45vh; */
  /* object-fit: contain; */
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const SwiperGif = styled.img`
  z-index: 99;
  position: absolute;
  margin-top: 35rem;
  margin-left: 90rem;
  width: 150px;
  box-sizing: border-box;
  overflow: hidden;
  background-color: red;

  @media screen and (max-width: 600px) {
    margin-top: 31rem;
    margin-left: 50%;
  }
`;

const NewSlider: React.FC<SliderProps> = ({ firebaseUrl }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    const [isDragging, setIsDragging] = useState(false);
    const [dragStartX, setDragStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setDragStartX(event.clientX - sliderRef.current!.offsetLeft);
        setScrollLeft(sliderRef.current!.scrollLeft);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        event.preventDefault();
        const dragX = event.clientX - sliderRef.current!.offsetLeft;
        const dragOffset = dragX - dragStartX;
    sliderRef.current!.scrollLeft = scrollLeft - dragOffset;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        const scrollDistance = event.deltaY;
        const scrollDirection = Math.sign(scrollDistance);

        if (sliderRef.current) {
            const isHorizontalScroll = Math.abs(event.deltaX) > Math.abs(event.deltaY);
            const isAtScrollBoundary =
        (scrollDirection === -1 && sliderRef.current.scrollLeft === 0) ||
        (scrollDirection === 1 && sliderRef.current.scrollLeft + sliderRef.current.clientWidth === sliderRef.current.scrollWidth);

            if (isHorizontalScroll && !isAtScrollBoundary) {
                event.preventDefault();
                sliderRef.current.scrollLeft += scrollDirection * 100;
            }
        }
    };

    return (
        <SliderContainer
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onWheel={handleWheel}
        >
            <SliderWrapper>

                {/* {images.map((image, index) => (
              <Slide key={index} src={image} alt={`Slide ${index + 1}`} />
            ))} */}
                {firebaseUrl.length > 0 &&
                  firebaseUrl.map((image: string, index: any) => (

                      <Slide src={image} alt={`Slide ${index + 1}`} key={index}/>

                  ))}
            </SliderWrapper>
            {/* <SwiperGif src={Swipe} alt='swiper' /> */}


        </SliderContainer>
    );
};

export default NewSlider;
