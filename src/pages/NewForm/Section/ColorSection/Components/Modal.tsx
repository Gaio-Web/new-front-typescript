import React, { useCallback, useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styled, { css } from "styled-components";
import { TextField } from "@mui/material";
import { StyledButton } from "../../../../../global/Button";
import { handleSubmit } from "../../../Utils/mongoReq";
import { ColorOption, ColorPicker } from "./ColorPicker/styles";

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string | undefined;

  toast: (value: boolean | undefined) => void;
}

function Modal({ modalIsVisible, setModalIsVisible, userID, toast }: IModalProps): JSX.Element {
  const [mainColor, setMainColor] = useState<string>('#034AA3');
  const [secondaryColor, setSecondaryColor] = useState<string>('#034AA3');
  const [accentColor, setAccentColor] = useState<string>('#034AA3');

  const [options, setoptions] = useState([
    { mainColor: '#EB596E', secondaryColor: '#6883BA', accentColor:'#3C0919', title: 'Carmine' },
    { mainColor: '#F4972B', secondaryColor: '#264653', accentColor:'#2A9D8F', title: 'Laranja' },
    { mainColor: '#FD3997', secondaryColor: '#383961', accentColor:'#5F758E', title: 'Rosa' },
    { mainColor: '#5E8B7E', secondaryColor: '#9F7E69', accentColor:'#003459', title: 'Verde' },
    { mainColor: '#00ADB5', secondaryColor: '#1B4965', accentColor:'#B49A67', title: 'Azul' },
    { mainColor: '#6868AC', secondaryColor: '#C17767', accentColor:'#23967F', title: 'Lilás' },
    { mainColor: '#6B0BE6', secondaryColor: '#453823', accentColor:'#39A2AE', title: 'Roxo' },
    { mainColor: '#00000', secondaryColor: '#8D775F', accentColor:'#A71D31', title: 'Preto' },
    { mainColor: '#B4A5A5', secondaryColor: '#5B5941', accentColor:'#3E6990', title: 'Areia' },
    { mainColor: '#D80C0C', secondaryColor: '#390040', accentColor:'#730071', title: 'Vermelho' },
    { mainColor: '#25D8A7', secondaryColor: '#696D7D', accentColor:'#19381F', title: 'Turquesa' },
    { mainColor: '#6D6D6D', secondaryColor: '#2DC7FF', accentColor:'#0A369D', title: 'Cinza' },
]);

  useEffect(() => {
    document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
  }, [modalIsVisible]);

  const [clicked, setClicked] = useState<boolean>(false);

  const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);

  const [sendingUrl, setSendingUrl] = useState('');

  const handleConfirmModalCall = (url: any) => {
    setConfirmModalIsVisible(true);
    setSendingUrl(url)
  }

  const handleSendColor = useCallback( async (event: any) => {
    event.preventDefault();

    const success = await handleSubmit(
      [{
        "field": "mainColor",
        "value": mainColor
      },{
        "field": "secondaryColor",
        "value": secondaryColor
      },{
        "field": "accentColor",
        "value": accentColor
      }],
      userID
    );

    toast(success);
    setMainColor('');
    setSecondaryColor('');
    setAccentColor('');

  }, [mainColor, secondaryColor, accentColor, userID])

  return (
    // @ts-ignore
    <Container isVisible={modalIsVisible}
      onSubmit={handleSendColor}>
      <Header>
      <h1 style={{ fontSize: '26px', color: '#1b1b1b'}}>Paleta de cores</h1>
      <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b"/>
      </Header>

      <Wrapper>
      <ColorPicker style={{ backgroundColor: mainColor }}>
        <div className="options">
            {options.map((opt) => (
                <div
                    className={mainColor  === opt.mainColor ? 'selected' : 'non-selected'}
                    onClick={() => {
                        if (opt.mainColor !== undefined && opt.secondaryColor !== undefined && opt.accentColor !== undefined) {
                            setMainColor(opt.mainColor);
                            setSecondaryColor(opt.secondaryColor);
                            setAccentColor(opt.accentColor);
                        }
                    }}
                >
                    <ColorOption>
                        <div className='mainColor' style={{ backgroundColor: opt.mainColor }}></div>
                        <div className='secondaryColor' style={{ backgroundColor: opt.secondaryColor }}></div>
                        <div className='accentColor' style={{ backgroundColor: opt.accentColor }}></div>
                    </ColorOption>
                    <h1>{opt.title}</h1>
                </div>
            ))}
        </div>

        { secondaryColor == '#034AA3' ? (
            <></>
        ) : (
            <div className='colorDemonstration'>
                <div className='demonstrationWrapper'>
                    <div className='exampleSecondary' style={{ backgroundColor: secondaryColor }}></div>
                    <h4>Cor secundária</h4>
                </div>

                <div className='demonstrationWrapper'>
                    <div className='exampleAccent' style={{ backgroundColor: accentColor }}></div>
                    <h4>Cor de destaque</h4>
              </div>
            </div>
        )}
    </ColorPicker>
      </Wrapper>
      <StyledButton w="larger" children="Salvar cores" type="submit" mt="1rem" onClick={setModalIsVisible}/>
    </Container>
  )
}

export { Modal }


const Container = styled.form`
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
  height: 100%;
  overflow: scroll;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  /* padding-bottom: 1rem; */
`;
