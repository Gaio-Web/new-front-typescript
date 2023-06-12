import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import styled, { css } from "styled-components";
import { TextField } from "@mui/material";
import { StyledButton } from "../../../../../global/Button";
import { handleSubmit } from "../../../Utils/mongoReq";

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string;
}

function Modal({ modalIsVisible, setModalIsVisible, userID }: IModalProps): JSX.Element {
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

  const [title, setTitle] = useState<string>('');

  const [qlt1, setQlt1] = useState<string>('');
  const [qlt2, setQlt2] = useState<string>('');
  const [qlt3, setQlt3] = useState<string>('');

  const [qualitydescription1, setQualitydescription1] = useState<string>('')
  const [qualitydescription2, setQualitydescription2] = useState<string>('')
  const [qualitydescription3, setQualitydescription3] = useState<string>('')


  const handleFormSubmit = useCallback((event: any) => {
    event.preventDefault();

    handleSubmit(
      [
        {
          "field": "thirdTitle",
          "value":  title
        },
        {
          "field": "quality1",
          "value":  qlt1
        },
        {
          "field": "quality2",
          "value":  qlt2
        },
        {
          "field": "quality3",
          "value":  qlt3
        },
        {
          "field": "qualitydescription1",
          "value":  qualitydescription1
        },
        {
          "field": "qualitydescription2",
          "value":  qualitydescription2
        },
        {
          "field": "qualitydescription3",
          "value":  qualitydescription3
        },

      ],
      userID
    );
  }, [qlt1, qlt2, qlt3, qualitydescription1, qualitydescription2, qualitydescription3, userID])

  return (
    // @ts-ignore
    <Container isVisible={modalIsVisible} onSubmit={handleFormSubmit}>
      <Header>
      <h1 style={{ fontSize: '26px', color: '#1b1b1b'}}>Terceira sessão</h1>
      <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b"/>
      </Header>

        <TextField
          id="outlined-basic"
          label="Título da sessão"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

      <Wrapper>

      <div className="difs-wrapper">
        <h4 style={{color: '#1b1b1b'}}>Diferencial 1</h4>
        <TextField
          id="outlined-basic"
          label="Título do diferencial 1"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          onChange={(e) => setQlt1(e.target.value)}
          value={qlt1}
        />

        <TextField
          id="outlined-multiline-static"
          label="Conteúdo"
          multiline
          rows={4}
          onChange={(e) => setQualitydescription1(e.target.value)}
          value={qualitydescription1}
          />
        </div>

        <div className="difs-wrapper">
        <h4 style={{color: '#1b1b1b'}}>Diferencial 2</h4>
        <TextField
          id="outlined-basic"
          label="Título do diferencial 2"
          variant="outlined"
          sx={{ width: '100%', color: 'red'}}
          margin="normal"
          onChange={(e) => setQlt2(e.target.value)}
          value={qlt2}
        />

        <TextField
          id="outlined-multiline-static"
          label="Conteúdo"
          multiline
          rows={4}
          onChange={(e) => setQualitydescription2(e.target.value)}
          value={qualitydescription2}
          />
        </div>

        <div className="difs-wrapper">
          <h4 style={{color: '#1b1b1b'}}>Diferencial 3</h4>
            <TextField
              id="outlined-basic"
              label="Título do diferencial 3"
              variant="outlined"
              sx={{ width: '100%', color: 'red'}}
              margin="normal"
              onChange={(e) => setQlt3(e.target.value)}
              value={qlt3}
            />

            <TextField
              id="outlined-multiline-static"
              label="Conteúdo"
              multiline
              rows={4}
              onChange={(e) => setQualitydescription3(e.target.value)}
              value={qualitydescription3}
              />
         </div>
     </Wrapper>
      <StyledButton width="larger" children="Salvar textos" type="submit" mt="1rem"/>
    </Container>
  )
}

export { Modal }


const Container = styled.form`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  /* bottom: 0; */
  z-index: 5;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  box-sizing: border-box;

  /* overflow: hidden; */
  overflow-y: scroll;

  background: #eee;
  backdrop-filter: blur(1);

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

  & .difs-wrapper {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #eaeaea;
  }
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

const Wrapper = styled.div`
  width: 100%;
  height: 75%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 1rem;

  border: 1px solid #c4c4c4;
  border-radius: 8px;

  gap: 1rem;
  background-color: #eaeaea;;
`;
