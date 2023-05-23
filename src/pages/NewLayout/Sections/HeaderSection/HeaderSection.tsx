import React from 'react';
import { Container } from './styles';
import { GrInstagram } from 'react-icons/gr';

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
          <i>
            <GrInstagram size={'25px'} color='rgb(5,55,124)' />
          </i>
          <p>@{insta}</p>
        </a>
      )}
    </Container>
  );
}

export { HeaderSection };
