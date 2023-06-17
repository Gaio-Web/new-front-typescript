import React from 'react';
import { Container } from './styles';

import UnsplashCoverImage from '../../Components/UnsplashAPI/UnsplashCover';
import WappLogo from '../../../../assets/svg/whatsapp-svgrepo-com.svg'

interface IFirstSectionProp {
  call: string;
  description: string;
  photoBase64: string;
  src: any;
  onClick: any;
  mainColor: string;
  coverKeyWords: string;
}

function FirstSection({mainColor, call, description, photoBase64, src, onClick, coverKeyWords}: IFirstSectionProp): JSX.Element {
  return (
    <Container>
      <div id='firstSection' className={'first-wrapper'}>
        <h1 style={{color: mainColor}}>{call}</h1>
        <p style={{color: mainColor}}>{description}</p>
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
        {/* <button onClick={onClick} style={{backgroundColor: secondaryColor}}>Vamos conversar!</button>  cor removida a pedido da VIZE */}
        <button onClick={onClick} style={{backgroundColor: ("#22b33b")}}> <div className='buttonContent'> <img src={WappLogo} alt="logo whats" style={{ margin:'0'}}/> Conversar por WhatsApp</div> </button>
      </div>
    </Container>
  );
}

export { FirstSection };
