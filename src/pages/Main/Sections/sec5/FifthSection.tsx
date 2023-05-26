import React from 'react';
import { Container } from './styles';

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
              <div className='content-wrapper'>
                {isAutonomous == '1' ? (
                  <h1 className="sectionTitle" style={{ color: mainColor }}>
            Minha História
                    </h1>
                ):(
                  <h1 className="sectionTitle" style={{ color: mainColor }}>
          Nossa História
                    </h1>
                )}
                <p className='history'>{history}</p>

                  <button onClick={onClick} style={{ backgroundColor: accentColor, width: '100%' }} className='btn'>Conversar por WhatsApp</button>
                </div>
                <div className="img-wrapper"  data-aos="fade-up">
                  <img src={photoBase64} alt={'foto de capa'} loading='lazy'/>
                </div>
                <button onClick={onClick} style={{ backgroundColor: accentColor }} className='btn-2'>Conversar por WhatsApp</button>
            </div>
        </Container>
    );
}
export { FifthSection };