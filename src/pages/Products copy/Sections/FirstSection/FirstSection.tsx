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
                            <video disablePictureInPicture loop muted autoPlay height='500px'>
                                <source src='https://portal-bucket-rails.s3.amazonaws.com/VID-20230802-WA0050.mp4'/>
                            </video>
                        </>
                    ) : (
                        <>
                            <span className='gifOverlay'/>
                            <span className='secondOverlay'/>
                            <video disablePictureInPicture loop muted autoPlay height='500px'>
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




// import React, { useState, useEffect } from 'react';
// import { Container } from './styles';

// import UnsplashCoverImage from '../../Components/UnsplashAPI/UnsplashCover';
// import WappLogo from '../../../../assets/svg/whatsapp-svgrepo-com.svg';
// import MobileGif from '../../../../assets/Gifs/Stories.gif';
// import DesktopGif from '../../../../assets/Gifs/410_.gif';

// interface IFirstSectionProp {
//   call: string;
//   description: string;
//   photoBase64: string;
//   src: any;
//   onClick: any;
//   mainColor: string;
//   secondaryColor: string;
//   coverKeyWords: string;
// }

// function FirstSection(props: IFirstSectionProp): JSX.Element {
//     const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         const handleResize = () => {
//             setWindowWidth(window.innerWidth);
//         };

//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);

//     const isMobile = windowWidth < 768;

//     return (
//         <Container>
//             <div id='firstSection' className={'first-wrapper'}>
//                 <div className="img-wrapper"  data-aos="fade-up">
//                     {props.photoBase64 === '' ? (
//                         <>
//                             <span className='gifOverlay'/>
//                             <span className='secondOverlay'/>
//                             <img src={isMobile ? MobileGif : DesktopGif} alt={isMobile ? 'gif sua logo aqui' : 'Desktop Image'} loading='lazy'/>
//                         </>
//                     ) : (
//                         <>
//                             <span className='gifOverlay'/>
//                             <span className='secondOverlay'/>
//                             <img src={props.photoBase64} alt={'foto de capa'} loading='lazy'/>
//                         </>
//                     )}
//                 </div>
//                 <div className='contentWrapper'>
//                     <h1>{props.call}</h1>
//                     <p>{props.description}</p>
//                     <button onClick={props.onClick} style={{backgroundColor: '#22b33b'}}>
//                         <div className='buttonContent'>
//                             <img src={WappLogo} alt="logo whats" style={{ margin:'0'}}/>
//                       Conversar por WhatsApp
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </Container>
//     );
// }

// export { FirstSection };

