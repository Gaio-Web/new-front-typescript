import React, { useState } from 'react';
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { StyledButton } from '../../../../global/Button';
import { LoadingComponent } from '../../Components/Skeleton';

import { Modal } from './Components/Modal';
import { FileInputComponent } from '../../../../global/uploads/CoverUpload';

interface IFirstSecPops {
  call: string | undefined;
  description: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: any;

  toast: (value: boolean | undefined) => void;
}

function Schedules({ call, description, img, isLoading, userID, toast }: IFirstSecPops): JSX.Element {
    const [clicked, setClicked] = useState(false);
    const [color, setColor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(false);

    const [isFileSelected, setFileSelected] = useState<boolean>(false);

    const handleChange = (event: any) => {
        setColor(event.target.value);
    };

    const HandleOnFileSelect = () => {
        toast(true);
    };

    return (
        <Container >
            <Modal
                modalIsVisible={modalIsVisible}
                setModalIsVisible={() => setModalIsVisible(false)}
                userID={userID}
            />
            <Header>
                <h1>Horários</h1>
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
                <p
                    style={{
                        fontStyle: 'italic',
                        color: 'rgba(0,0,0,0.5)',
                        fontSize: '14px',
                        textAlign: 'justify',
                        letterSpacing: '0.5px',
                    }}
                >Você pode subir uma imagem personalizada para os horários</p>
            </ImageContainer>
        </Container>
    );
}

export { Schedules };
