import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import styled, { css } from "styled-components";
import { Skeleton, ImageList, ImageListItem } from "@mui/material";
import { StyledButton } from "../../../../../../global/Button";
import { ConfirmModal } from "./ConfirmModal";

interface IModalProps {
  imgsUrls: any;
  modalIsVisible: any;
  setModalIsVisible: any;
}

function Modal({ modalIsVisible, setModalIsVisible, imgsUrls }: IModalProps): JSX.Element {
  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  const [clicked, setClicked] = useState<boolean>(false);

  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);

  const handlePhotoClick = () => {
    setClicked(!clicked)
    console.log('hue')
  }

  const [sendingUrl, setSendingUrl] = useState('');

  const handleConfirmModalCall = (url: any) => {
    setConfirmModalIsVisible(true);
    setSendingUrl(url)
  }

  return (
    // @ts-ignore
    <Container isVisible={modalIsVisible}>
      <ConfirmModal
        confirmModalIsVisible={confirmModalIsVisible}
        setConfirmModalIsVisible={() => setConfirmModalIsVisible(false)}
        imgUrl={sendingUrl}
      />
      <Header>
      <h1 style={{ fontSize: '26px', color: 'white'}}>Galeria de fotos</h1>
      <IoClose size={45} onClick={setModalIsVisible}/>
      </Header>
      <p style={{ fontSize: '18px', color: 'white'}}>Toque na foto para remover</p>
      <IMGWrapper>
      <ImageList
            sx={{
              width: '100%',
              height: 'fit-content',
            }} cols={2}>
            {imgsUrls.map((url: string) => (
              <div className='imageWrapper'
              key={url}
            >
                <img
                  src={url}
                  loading="lazy"
                  onClick={() => handleConfirmModalCall(url)}
                />
              </div>
            ))}
          </ImageList>
      </IMGWrapper>
      <StyledButton width="larger" children="Escolher fotos"/>
    </Container>
  )
}

export { Modal }


const Container = styled.section`
  position: fixed;
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  box-sizing: border-box;

  overflow: hidden;

  background: rgba(17, 18, 17, 0.95);
  background: rgb(5, 55, 124) 95%;

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  ${({ isVisible }: any) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);

    > svg {
      transform: rotate(0deg);
    }

    nav {
      transform: scale(1);
    }
  `}
`;

const Header = styled.div`
  width: 100%;
  height: 3.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const IMGWrapper = styled.div`
  background-color: #eee;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  margin: 15px 0;

  overflow-y: scroll;

  width: 100%;
  height: 80%;

  box-sizing: border-box;

  & .imageWrapper {
    height: fit-content;

    > img {
      width: 100%;
      border-radius: 8px;
    }
  }
`
