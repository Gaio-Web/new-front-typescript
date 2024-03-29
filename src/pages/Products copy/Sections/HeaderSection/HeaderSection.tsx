import React from 'react';
import { Container } from './styles';
import Insta from '../../../../assets/icons8-instagram-48.png';
import SuaLogo from '../../../../assets/SUA-LOGO-AQUI-BRANCA 1.png';

interface IHeaderSectionProp {
  photoBase64: string;
  secondaryColor: string;
  navColor: string;
  insta?: string;
}

function HeaderSection({
  photoBase64,
  secondaryColor,
  navColor,
  insta,
}: IHeaderSectionProp): JSX.Element {
  return (
    <Container style={{ justifyContent: insta ? 'space-between' : 'center' }}>
      <header>
        <div className="nav">
          {photoBase64 === '' ? (
            <img src={SuaLogo} />
          ) : (
            <img src={photoBase64} />
          )}
          {insta === undefined ? (
            <a
              className="icon"
              href={'https://instagram.com/vizelogo/'}
              target="blank"
            >
              <img className="instaLogo" src={Insta} />
            </a>
          ) : (
            <a
              className="icon"
              href={`https://instagram.com/${insta}`}
              target="blank"
            >
              <img className="instaLogo" src={Insta} />
            </a>
          )}
        </div>
      </header>
    </Container>
  );
}
export { HeaderSection };
