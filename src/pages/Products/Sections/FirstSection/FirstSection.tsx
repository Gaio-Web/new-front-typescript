import React from 'react';
import { Container } from './styles';

interface IFirstSectionProp {
  call: string;
  description: string;
  photoBase64: string;
  src: any;
  onClick: any;
  mainColor: string;
  secondaryColor: string;
}

function FirstSection({mainColor, secondaryColor, call, description, photoBase64, src, onClick}: IFirstSectionProp): JSX.Element {
  return (
    <Container style={{backgroundColor: mainColor}}>
      <div
        className={'first-wrapper'}
      >
        <h1>{call}</h1>
        <p>{description}</p>
        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <img fetch-priority={'auto'} src={src}  alt="Foto de capa exemplo" loading='lazy'/>
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
