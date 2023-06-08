import React, { useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles'
import { FaEdit } from 'react-icons/fa'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";

import { Modal } from "./Components/Modal";
import { FileInputComponent } from "../../../../global/uploads/CoverUpload";

interface IFirstSecPops {
  call: string | undefined;
  description: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: any;

  toast: (value: boolean | undefined) => void;
}

function FirstSection({ call, description, img, isLoading, userID, toast }: IFirstSecPops): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [isFileSelected, setFileSelected] = useState<boolean>(false);

  userID = '5584991097445'

  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const HandleOnFileSelect = () => {
    toast(true)
  }

  return (
    <Container >
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
      />
      <Header>
        <h1>Primeira sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{call}</p>
          }
        />
      </TextWrapper>

    <TextWrapper>
      <h4>Descrição</h4>
      <LoadingComponent
        loading={isLoading}
        height="4rem"
        component={
          <p>{description}</p>
        }
      />
    </TextWrapper>
      <ImageContainer>
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
              img === '' ? (
                <img src={img}/>
              ) : (
                <>
                </>
              )
          }
        />
        <FileInputComponent
          userID={userID}
          onValueChange={HandleOnFileSelect}
        />
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

export { FirstSection }
