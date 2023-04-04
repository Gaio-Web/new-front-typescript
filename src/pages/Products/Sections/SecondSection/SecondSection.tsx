import React from 'react';
import { Container } from './styles';

import UnsplashProductsImage from '../../Components/UnsplashAPI/UnsplashProducts';

interface ISecondSectionProp {
  photoBase64: string;
  products: string;
  src: any;
  onClick: any;
  isAutonomous: any;
  mainColor: string;
  accentColor: string;
  productsKeyWords: string;
}

function SecondSection({ mainColor, accentColor,isAutonomous, photoBase64, products, src, onClick, productsKeyWords}: ISecondSectionProp): JSX.Element{
  return (
    <Container>
      <div className={'second-wrapper'}>
        {isAutonomous == '1' ? (
          <h1 className="sectionTitle" style={{color: mainColor}}>O que ofereço</h1>
        ) : (
          <h1 className="sectionTitle" style={{color: mainColor}}>O que oferecemos</h1>
        )}
        <p>{products}</p>
        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <img fetch-priority={'auto'} src={src} alt="Foto de exemplo do produto ou serviço" loading='lazy'/>
          ) : (
            <UnsplashProductsImage
              data={{
                alt_description: 'office',
                urls: {
                  small: 'https://example.com/image.jpg',
                },
                productsKeyWords:productsKeyWords
              }}
            />
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: accentColor}}>fale com a gente!</button>
      </div>
    </Container>
  );
}
export { SecondSection };
