import React, { useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles'
import { FaEdit } from 'react-icons/fa'
import { StyledButton } from "../../../../global/Button";
import { Skeleton } from "@mui/material";
import { LoadingComponent } from "../../Components/Skeleton";
import { Modal } from "./Components/Modal";
import { FileInputComponent } from "../../../../global/uploads/HistUpload";

interface IFirstSecPops {
  call: string | undefined;
  history: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: any;
  title: string | undefined;

  toast: (value: boolean | undefined) => void;
  toastFromModal: (value: boolean | undefined) => void;
}

function FifthSection({ call, history, img, isLoading, userID, title, toast, toastFromModal }: IFirstSecPops): JSX.Element {
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
    <Container>
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        userID={userID}
        toast={handleText}
      />
      <Header>
        <h1>Quinta sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
        <LoadingComponent
            loading={isLoading}
            height="2rem"
            component={
              title == '' ? (
                <>
                    <p>Nossa história</p>
                </>
              ) : (
                <>
                    <p>{title}</p>
                </>
              )
            }
          />
      </TextWrapper>

    <TextWrapper>
      <h4>Descrição</h4>
      <LoadingComponent
        loading={isLoading}
        height="6rem"
        component={
          <p>{history}</p>
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
             <img src={img}/>
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

export { FifthSection }
