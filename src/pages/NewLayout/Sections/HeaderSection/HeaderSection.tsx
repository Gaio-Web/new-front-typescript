import React from 'react';
import { Container } from './styles';
import {GrInstagram} from 'react-icons/gr';

interface IHeaderSectionProp {
  photoBase64?: string;
  secondaryColor?: string;
  name: string
}

function HeaderSection({ photoBase64, secondaryColor, name}: IHeaderSectionProp): JSX.Element{
  return (
    <Container>

      <h1 style={{ color: secondaryColor }}>{name}</h1>
      <i>
        <GrInstagram size={'25px'} color='rgb(5,55,124)'/>
      </i>
    </Container>
  );
}
export { HeaderSection };
