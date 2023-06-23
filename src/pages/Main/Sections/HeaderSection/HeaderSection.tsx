import React from 'react';
import { Container } from './styles';
import { GrInstagram } from 'react-icons/gr';

import Insta from '../../../../assets/svg/icons8-instagram-48.png';

interface IHeaderSectionProp {
  photoBase64?: string;
  secondaryColor?: string;
  name: string;
  insta: string;
}

function HeaderSection({ photoBase64, secondaryColor, name, insta }: IHeaderSectionProp): JSX.Element {
    return (
        <Container style={{ justifyContent: insta ?  'space-between' : 'center'}} >
            {
                photoBase64 === '' ? (

                    <h1 style={{ color: secondaryColor }}>{name}</h1>
                ): (
                    <img src={photoBase64}/>
                )
            }
            {insta === '' ? (
                <></>
            ) : (
                <a className='icon' href={`https://instagram.com/${insta}`} target='blank'>
                    <img src={Insta} style={{width: '40px'}}/>
                    {/* <GrInstagram size={'25px'} color='rgb(5,55,124)' /> */}
                    <p>@{insta}</p>
                </a>
            )}
        </Container>
    );
}

export { HeaderSection };
