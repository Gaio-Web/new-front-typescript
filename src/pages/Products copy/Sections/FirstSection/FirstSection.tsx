import React from 'react';
import { Container } from './styles';

import UnsplashCoverImage from '../../Components/UnsplashAPI/UnsplashCover';
import WappLogo from '../../../../assets/svg/whatsapp-svgrepo-com.svg';
import Gif from '../../../../assets/Gifs/WhatsApp-Video-2023-08-02-at-18.25.04.gif';

interface IFirstSectionProp {
  call: string;
  description: string;
  photoBase64: string;
  src: any;
  onClick: any;
  mainColor: string;
  secondaryColor: string;
  coverKeyWords: string;
}

function FirstSection({mainColor, secondaryColor, call, description, photoBase64, src, onClick, coverKeyWords}: IFirstSectionProp): JSX.Element {
    return (
        <Container >
            <div id='firstSection' className={'first-wrapper'}>
                <div className="img-wrapper"  data-aos="fade-up">
                    {photoBase64 == '' ? (
                        <>
                            <span className='gifOverlay'/>
                            <span className='secondOverlay'/>
                            <video disablePictureInPicture  loop muted autoPlay playsInline height='500px'>
                                <source src='https://portal-bucket-rails.s3.amazonaws.com/VID-20230802-WA0050.mp4'/>
                            </video>
                        </>
                    ) : (
                        <>
                            <span className='gifOverlay'/>
                            <span className='secondOverlay'/>
                            <video disablePictureInPicture  loop muted autoPlay playsInline height='500px'>
                                <source src='https://portal-bucket-rails.s3.amazonaws.com/VID-20230802-WA0050.mp4'/>
                            </video>
                        </>
                    )}
                </div>
                <div className='contentWrapper'>
                    <h1>{call}</h1>
                    <p>{description}</p>
                    <button onClick={onClick} style={{backgroundColor: ('#22b33b')}}>
                        <div className='buttonContent'> <img src={WappLogo} alt="logo whats" style={{ margin:'0'}}/>
                        Conversar por WhatsApp
                        </div>
                    </button>
                </div>
            </div>
        </Container>
    );
}

export { FirstSection };
