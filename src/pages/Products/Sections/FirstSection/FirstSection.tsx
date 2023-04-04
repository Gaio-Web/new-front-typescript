import React from 'react';
import { Container } from './styles';

import UnsplashCoverImage from '../../Components/UnsplashAPI/UnsplashCover';

interface IFirstSectionProp {
  call: string;
  description: string;
  photoBase64: string;
  src: any;
  onClick: any;
  mainColor: string;
  secondaryColor: string;
  coverKeyWords: string;
}

function FirstSection({mainColor, secondaryColor, call, description, photoBase64, src, onClick, coverKeyWords}: IFirstSectionProp): JSX.Element {
  return (
    <Container style={{backgroundColor: mainColor}}>
      <div
        className={'first-wrapper'}
      >
        <h1>{call}</h1>
        <p>{description}</p>
        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <UnsplashCoverImage
              data={{
                alt_description: 'office',
                urls: {
                  small: 'https://example.com/image.jpg',
                },
                coverKeyWords: coverKeyWords
              }}
            />
          ) : (
            <img fetch-priority={'low'} src={photoBase64} alt={'foto de capa'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: secondaryColor}}>Vamos conversar!</button>
      </div>
    </Container>
  );
}

export { FirstSection };
