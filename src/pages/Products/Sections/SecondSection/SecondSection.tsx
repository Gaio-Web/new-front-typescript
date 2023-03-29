import React from 'react';
import { Container } from './styles';

interface ISecondSectionProp {
  photoBase64: string;
  products: string;
  src: any;
  onClick: any;
  isAutonomous: any;
  mainColor: string;
  accentColor: string;
}

function SecondSection({ mainColor, accentColor,isAutonomous, photoBase64, products, src, onClick}: ISecondSectionProp): JSX.Element{
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
            <img fetch-priority={'low'}
              src={photoBase64}
              alt={'foto do produto/serviço'}
              loading='lazy'
            />
          )}
        </div>
        <button onClick={onClick} style={{backgroundColor: accentColor}}>fale com a gente!</button>
      </div>
    </Container>
  );
}
export { SecondSection };
