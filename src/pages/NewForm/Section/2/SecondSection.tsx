import React, { useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles'
import { FaEdit } from 'react-icons/fa'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";
import { Modal } from "./Components/Modal";

interface ISecondSecPops {
  products: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: string | undefined;
}

function SecondSection({ products, img, isLoading, userID }: ISecondSecPops): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  userID = '5584991097445'

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }


  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  return (
    <Container >
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
      />
      <Header>
        <h1>Segunda sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
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
