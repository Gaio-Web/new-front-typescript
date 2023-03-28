import React from 'react';
import { Container } from './styles';

interface IFifthSectionProp {
  photoBase64: string;
  history: string;
  src: any;
  onClick: any;
  mainColor: string;
  accentColor: string;
}

function FifthSection({ mainColor, accentColor, photoBase64, history, src, onClick}: IFifthSectionProp): JSX.Element{
  return (
    <Container>
      <div className={'fifth-wrapper'}>
        <h1 className="sectionTitle" style={{ color: mainColor }}>
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
        <button onClick={onClick} style={{ backgroundColor: accentColor }}>Conversar por WhatsApp</button>
      </div>
    </Container>
  );
}
export { FifthSection };
