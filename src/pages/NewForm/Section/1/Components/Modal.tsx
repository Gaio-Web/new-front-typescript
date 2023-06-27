import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { Button, Switch, TextField } from '@mui/material';
import { StyledButton } from '../../../../../global/Button';
import { handleSubmit } from '../../../Utils/mongoReq';
import { ContentWrapper, ImageContainer, TextWrapper } from '../../styles';
import { LoadingComponent } from '../../../Components/Skeleton';
import { FileInputComponent } from '../../../../../global/uploads/CoverUpload';

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string;

  img?: string | undefined;
  isLoading?: any;

  isFirstButtonDisabled: string | undefined;

  photoToast: (value: boolean | undefined) => void;
  toast: (value: boolean | undefined) => void;
  btnToast: (value: boolean | undefined) => void;
}

function Modal({ modalIsVisible, isFirstButtonDisabled, setModalIsVisible, userID, isLoading, img, photoToast, toast, btnToast }: IModalProps): JSX.Element {
    useEffect(() => {
        document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
    }, [modalIsVisible]);

    const [clicked, setClicked] = useState<boolean>(false);
    const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);
    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');
    const [sendingUrl, setSendingUrl] = useState('');

    const [disableBtn, setDisableBtn] = useState<boolean | null>(false);
    const [isBtnDisabled, setIsBtnDisabled] = useState<boolean>();

    useEffect(() => {
        console.log(isFirstButtonDisabled);
        if (isFirstButtonDisabled === 'off'){
            setIsBtnDisabled(true);
        }
    }, []);

    const handlePhotoClick = () => {
        setClicked(!clicked);
        console.log('hue');
    };

    const HandleOnFileSelect = () => {
        photoToast(true);
    };

    const handleConfirmModalCall = (url: any) => {
        setConfirmModalIsVisible(true);
        setSendingUrl(url);
    };

    const handleClick = useCallback( async (event: any) => {
        event.preventDefault();

        setDisableBtn(!disableBtn);


        const btnSuccess = await handleSubmit(
            [
                {
                    'field': 'isFirstButtonDisabled',
                    'value': disableBtn ? 'on' : 'off'
                },
            ],
            userID
        );

        btnToast(btnSuccess);

        if(isFirstButtonDisabled === 'on'){
            setIsBtnDisabled(true);
        } else {
            setIsBtnDisabled(false);
        }

    }, [userID]);

    const blank = ' ';

    const handleFormSubmit = useCallback( async (event: any) => {
        event.preventDefault();

        const success = await handleSubmit(
            [
                {
                    'field': 'call',
                    'value':  title
                },
                {
                    'field': 'description',
                    'value':  desc
                },
            ],
            userID
        );

        toast(success);
        setTitle('');
        setDesc('');

    }, [title, desc, userID]);

    return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
        <Container isVisible={modalIsVisible} onSubmit={handleFormSubmit}>
            <Header>
                <h1 style={{ fontSize: '26px', color: '#1b1b1b'}}>Primeira sessão</h1>
                <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b"/>
            </Header>

            <Wrapper>
                <TextField
                    id="outlined-basic"
                    label="Título da sessão"
                    variant="outlined"
                    sx={{ width: '100%', color: 'red'}}
                    margin="normal"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />

                <TextField
                    id="outlined-multiline-static"
                    label="Conteúdo"
                    multiline
                    rows={4}
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                />

                <StyledButton
                    w="larger"
                    h="3rem"
                    children="Salvar textos"
                    type="submit"
                    mt="1rem"
                    onClick={setModalIsVisible}
                />

                <ContentWrapper  mt='1rem'>
                    <div className="header">
                        <h4>Desabilitar botão da sessão</h4>
                        <p> No momento o botão está
                            {/* <strong> */}
                            {
                                isBtnDisabled ? (
                                    <>
                                        <strong
                                            style={{
                                                color: 'red'
                                            }}
                                        >
                                            {blank} desabilitado
                                        </strong>
                                    </>
                                ) : (
                                    <>
                                        <strong
                                            style={{
                                                color: 'green'
                                            }}>
                                            {blank} habilitado
                                        </strong>
                                    </>
                                )
                            }
                        </p>
                    </div>
                    <Button
                        variant={'contained'}
                        onClick={handleClick}
                        type="button"
                        sx={{
                            width: '100%',
                            height: '3rem'
                        }}
                    >
                        {
                            isBtnDisabled ? 'Habilitar  botão' : ' Desabilitar botão'
                        }
                    </Button>
                </ContentWrapper>

                <ImageContainer
                    style={{ marginTop: '1rem'}}
                >
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
            </Wrapper>
        </Container>
    );
}

export { Modal };

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
  padding: 1rem 20rem;

  box-sizing: border-box;

  overflow: hidden;

  background: #eee;
  backdrop-filter: blur(1);

  opacity: 0;
  pointer-events: none;
  transform: translateY(50px);

  transition: .5s;

  @media screen and (max-width: 800px) {
    padding: 1rem;
  }

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
`;

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
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: scroll;
  /* overflow: auto; */
  display: flex;
  flex-direction: column;
  /* padding-bottom: 1rem; */
`;
