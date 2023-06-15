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
  img?: string | undefined;
  isLoading: any;
  userID: string | undefined;
  secondTitle: string | undefined;

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
    <Container >
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={handleText}
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
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
            img == '' ? (
              <>

              </>
            ) : (
              <>
                <img src={img} />
              </>
            )
        }
        />

        <FileInputComponent
          userID={userID}
          onValueChange={HandleOnFileSelect}
        />
      </ImageContainer>

    </Container>
  )
}

export { SecondSection }
