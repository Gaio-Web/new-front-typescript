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
            <UnsplashProductsImage
              data={{
                alt_description: 'office',
                urls: {
                  small: 'https://example.com/image.jpg',
                },
                productsKeyWords:productsKeyWords
              }}
            />
          ) : (
            <img fetch-priority={'low'} src={photoBase64} alt={'foto de capa'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: accentColor}}>fale com a gente!</button>
        {/* <button onClick={onClick}> teste</button> */}
      </div>
    </Container>
  );
}
export { SecondSection };
