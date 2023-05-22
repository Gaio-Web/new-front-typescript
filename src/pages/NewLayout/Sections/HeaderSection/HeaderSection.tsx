import React from 'react';
import { Container } from './styles';
import {GrInstagram} from 'react-icons/gr';

interface IHeaderSectionProp {
  photoBase64?: string;
  secondaryColor?: string;
  name: string;
  insta: string;
}

function HeaderSection({ photoBase64, secondaryColor, name, insta}: IHeaderSectionProp): JSX.Element{
    return (
        <Container>

            <h1 style={{ color: secondaryColor }}>{name}</h1>
            <div className='icon'>

                <i>
                    <GrInstagram size={'25px'} color='rgb(5,55,124)'/>
                </i>
                <a href={`https://instagram.com/${insta}`}>@{insta}</a>
            </div>
        </Container>
    );
}
export { HeaderSection };
