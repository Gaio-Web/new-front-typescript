import React from 'react';
import { Container } from './styles';

import UnsplasHistoryImage from '../../Components/UnsplashAPI/UnsplashHistory';

interface IFifthSectionProp {
  photoBase64: string;
  history: string;
  src: any;
  onClick: any;
  isAutonomous: string;
  mainColor: string;
  accentColor: string;
  historyKeyWords: string;
}

function FifthSection({isAutonomous, mainColor, accentColor, photoBase64, history, src, onClick, historyKeyWords}: IFifthSectionProp): JSX.Element{
  return (
    <Container>
      <div className={'fifth-wrapper'}>
        {isAutonomous == '1' ? (
          <h1 className="sectionTitle" style={{ color: mainColor }}>
            Minha História
          </h1>
        ):(
          <h1 className="sectionTitle" style={{ color: mainColor }}>
          Nossa História
          </h1>
        )}
        <p>{history}</p>

        <div className="img-wrapper"  data-aos="fade-up">
          {photoBase64 == '' ? (
            <img fetch-priority={'auto'} src={src} alt="Foto exemplo da história" loading='lazy'/>
          ) : (
            <UnsplasHistoryImage
              data={{
                alt_description: 'office',
                urls: {
                  small: 'https://example.com/image.jpg',
                },
                historyKeyWords: historyKeyWords
              }}
            />
          )}
        </div>
        <button onClick={onClick} style={{ backgroundColor: accentColor }}>Conversar por WhatsApp</button>
      </div>
    </Container>
  );
}
export { FifthSection };
