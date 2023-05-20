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
  coverKeyWords: string;
}

function FifthSection({isAutonomous, mainColor, accentColor, photoBase64, history, src, onClick, coverKeyWords}: IFifthSectionProp): JSX.Element{
  return (
    <Container>
      <div id='fifthSection' className={'fifth-wrapper'}>
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
            <UnsplasHistoryImage
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
        <button onClick={onClick} style={{ backgroundColor: accentColor }}>Conversar por WhatsApp</button>
      </div>
    </Container>
  );
}
export { FifthSection };
