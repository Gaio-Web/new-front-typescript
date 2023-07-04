import React from 'react';
import { Container } from './styles';

import UnsplashCoverImage from '../../Components/UnsplashAPI/UnsplashCover';

interface IFirstSectionProp {
  call: string | undefined;
  description: string | undefined;
  photoBase64: string | undefined;
  src: any;
  onClick?: any;
  mainColor: string | undefined;
  secondaryColor: string | undefined;
  coverKeyWords: string;
  isFirstPhotoHidden: string | undefined;
}

function FirstSection({mainColor, secondaryColor, call, description, photoBase64, src, onClick, coverKeyWords, isFirstPhotoHidden}: IFirstSectionProp): JSX.Element {
    return (
        <Container style={{backgroundColor: mainColor, }}>
            <div id='firstSection' className={'first-wrapper'}>
                <div className='main-content-wrapper'>
                    <div className='call-n-desc'>
                        <h1>{call}</h1>
                        <p>{description}</p>
                        <button onClick={onClick} style={{backgroundColor: secondaryColor, width: '100%', marginTop: '2rem'}} className='btn-1'>Vamos conversar!</button>
                    </div>
                    {
                        isFirstPhotoHidden === 'on' || isFirstPhotoHidden === '' || isFirstPhotoHidden === null || isFirstPhotoHidden === undefined ? (
                            <>
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
                                        <img src={photoBase64} alt={'foto de capa'} loading='lazy'/>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                            </>
                        )
                    }

                </div>


                <button onClick={onClick} style={{backgroundColor: secondaryColor}} className='btn-2'>Vamos conversar!</button>
            </div>
        </Container>
    );
}

export { FirstSection };
