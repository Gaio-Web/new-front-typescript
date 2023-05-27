import React from "react";
import { Container, Recomendation, ImgWrapper } from './styles'
import { StyledButton } from "../../../../global/Button";

interface IFormHeaderProps {
  img: string | undefined;
  name: string | undefined;
}

function FormHeader({img, name}: IFormHeaderProps ): JSX.Element {
  return (
    <Container>
      <p className="title">Bem vindo <strong>{name}</strong>!</p>

      {/* <input /> */}
      <ImgWrapper>
      <img src={img}/>
      <StyledButton width="larger" children="Trocar logo"/>
      <Recomendation>Dimenssões recomendadas: <strong>200x75</strong></Recomendation>
      </ImgWrapper>
    </Container>
  )
}

export { FormHeader }
