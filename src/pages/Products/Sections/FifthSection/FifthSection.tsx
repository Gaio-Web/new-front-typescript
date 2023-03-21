import React from 'react';
import { Container } from './styles';

interface IFifthSectionProp {
  photoBase64: string;
  history: string;
  src: any;
  color: any;
  onClick: any;
}

function FifthSection({ photoBase64, history, src, color, onClick}: IFifthSectionProp): JSX.Element{
  return (
    <Container>
      <div className={'fifth-wrapper'}>
        <h1 className="sectionTitle" style={{ color: color }}>
            Nossa História
        </h1>
        <p>{history}</p>

        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <img fetch-priority={'auto'} src={src} alt="Foto exemplo da história" loading='lazy'/>
          ) : (
            <img fetch-priority={'low'} src={photoBase64} alt={'foto da história'} loading='lazy'/>
          )}
        </div>
        <button onClick={onClick}>Conversar por WhatsApp</button>
      </div>
    </Container>
  );
}
export { FifthSection };
