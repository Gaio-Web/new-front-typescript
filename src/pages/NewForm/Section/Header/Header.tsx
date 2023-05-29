import React from "react";
import { Container, Recomendation, ImgWrapper } from './styles'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";

interface IFormHeaderProps {
  img: string | undefined;
  name: string | undefined;
  isLoading: any;
}

function FormHeader({img, name, isLoading}: IFormHeaderProps ): JSX.Element {
  return (
    <Container>
      <p className="title" >Bem vindo! <LoadingComponent
        height="1.5rem"
        width="25%"
        loading={isLoading}
        component={
          <strong>{name}</strong>
        }
      /></p>

      {/* <input /> */}
      <ImgWrapper>
      <LoadingComponent
        height="10rem"
        loading={isLoading}
        component={
          <img src={img}/>
        }
      />
      <StyledButton width="larger" children="Trocar logo"/>
      <Recomendation>Dimenssões recomendadas: <strong>200x75</strong></Recomendation>
      </ImgWrapper>
    </Container>
  )
}

export { FormHeader }
