import React, { useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles'
import { FaEdit } from 'react-icons/fa'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";

interface ISecondSecPops {
  products: string | undefined;
  img: string | undefined;
  isLoading: any;
}

function SecondSection({ products, img, isLoading }: ISecondSecPops): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  const handleClick = () => {
    setClicked(!clicked);
  }


  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  return (
    <Container >
      <Header>
        <h1>Segunda sessão</h1>
        <FaEdit/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
        <p>O que oferecemos</p>
      </TextWrapper>

    <TextWrapper>
      <h4>Descrição</h4>
      <LoadingComponent
        loading={isLoading}
        height="4rem"
        component={
          <p>{products}</p>
        }
      />
    </TextWrapper>



      <ImageContainer>
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
           <img src={img} />
          }
        />

        <StyledButton width={'larger'} children='Mudar foto'/>
      </ImageContainer>

      <InputWrapper >
    <h4>Cor de fundo</h4>
      <div className="color-input-wrapper" style={{ borderColor: color }}>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="color-input"

          />
        <p>{color}</p>
      </div>
      <StyledButton children="Atualizar cor" width="larger" bgColor={color}/>
    </InputWrapper>
    </Container>
  )
}

export { SecondSection }
