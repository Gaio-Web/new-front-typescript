import React from 'react';
import { Container } from './styles';

interface ISecondSectionProp {
  photoBase64: string;
  products: string;
  src: any;
  onClick: any;
  isAutonomous: any;
  mainColor: string;
  accentColor: string;
  coverKeyWords: string;
}

function SecondSection({ mainColor, accentColor,isAutonomous, photoBase64, products, src, onClick, coverKeyWords}: ISecondSectionProp): JSX.Element{
    return (
        <Container>
            <div id='secondSection' className={'second-wrapper'}>
                <div className='title-n-prod'>
                    {isAutonomous == '1' ? (
                        <h1 className="sectionTitle" style={{color: mainColor}}>O que ofereço</h1>
                    ) : (
                        <h1 className="sectionTitle" style={{color: mainColor}}>O que oferecemos</h1>
                    )}
                    <p>{products}</p>

                    <button onClick={onClick} style={{backgroundColor: accentColor, color: 'white', marginTop: '20px', width: '100%'}} className='btn-1'>Fale com a gente!</button>
                </div>
                <div className="img-wrapper"  data-aos="fade-up">
                    <img src={photoBase64} alt={'foto de capa'} loading='lazy'/>
                </div>
                <button onClick={onClick} style={{backgroundColor: accentColor, marginTop: '2rem', width: '100%'}} className='btn-2'>Fale com a gente!</button>
                {/* <button onClick={onClick}> teste</button> */}
            </div>
        </Container>
    );
}
export { SecondSection };
