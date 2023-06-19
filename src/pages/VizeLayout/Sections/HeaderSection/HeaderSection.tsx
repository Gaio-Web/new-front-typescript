import React from 'react';
import { Container } from './styles';

interface IHeaderSectionProp {
  photoBase64: string;
  navColor: string;
  mainColor: string;
}

function HeaderSection({ photoBase64, navColor, mainColor}: IHeaderSectionProp): JSX.Element{
  return (
    <Container>
      <header>
        <div className="nav" style={{ backgroundColor: `${navColor}` }}>
          {photoBase64 == '' ? (
            <h1 style={{ color: mainColor }}>Sua logo aqui</h1>
          ) : (
            <img fetch-priority={'high'} src={photoBase64} alt={'logo'} />
          )}
        </div>
      </header>
    </Container>
  );
}
export { HeaderSection };
