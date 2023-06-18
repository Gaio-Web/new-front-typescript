import React, { useCallback, useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles'
import { FaEdit } from 'react-icons/fa'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";
import { Modal } from "./Components/Modal";
import { FileInputComponent } from "../../../../global/uploads/OfferUpload";
import { handleSubmit } from "../../Utils/mongoReq";

interface ISecondSecPops {
  products: string | undefined;
  userID: string | undefined;
  secondTitle: string | undefined;

  img?: string | undefined;
  isLoading: any;

  toast: (value: boolean | undefined) => void;
  toastFromModal: (value: boolean | undefined) => void;
}

function SecondSection({ products, img, isLoading, userID, secondTitle, toast, toastFromModal }: ISecondSecPops): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  }

  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const HandleOnFileSelect = () => {
    toast(true)
  }

  const handleText = () => {
    toastFromModal(true)
  }

  return (
    <Container id="second">
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={handleText}
        photoToast={HandleOnFileSelect}
        img={img}
        isLoading={isLoading}
      />
      <Header>
        <h1>Segunda sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
          <LoadingComponent
            loading={isLoading}
            height="4rem"
            component={
              secondTitle == '' ? (
                <>
                  <p>O que oferecemos</p>
                </>
              ) : (
                <>
                  <p>{secondTitle}</p>
                </>
              )
            }
          />
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
      <h4>Foto da sessão</h4>
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
            img == '' ? (
              <>
                <p style={{
                  lineHeight: '24px',
                  textAlign: 'justify'
                }}>
                  Você ainda não subiu nenhuma foto,
                  use o ícone <FaEdit /> para enviar
                  a foto da segunda sessão
                </p>
              </>
            ) : (
              <>
                <img src={img} style={{ maxWidth: '40vh', height: 'auto'}}/>
              </>
            )
        }
        />
      </ImageContainer>
    </Container>
  )
}

export { SecondSection }
