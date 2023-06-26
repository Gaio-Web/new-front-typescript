/* eslint-disable react/no-children-prop */
import React, { useCallback, useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { Box, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { StyledButton } from '../../../../../global/Button';
import { handleSubmit } from '../../../Utils/mongoReq';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs, { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TextWrapper } from '../../styles';

interface IModalProps {
  modalIsVisible: any;
  setModalIsVisible: any;
  userID: string;
}

function Modal({ modalIsVisible, setModalIsVisible, userID }: IModalProps): JSX.Element {

    const [seg, setSeg] = useState<string>('');
    const [ter, setTer] = useState<string>('');
    const [qua, setQua] = useState<string>('');
    const [qui, setQui] = useState<string>('');
    const [sex, setSex] = useState<string>('');

    const [segCheck, setSegCheck] = useState<boolean>(false);
    const [terCheck, setTerCheck] = useState<boolean>(false);
    const [quaCheck, setQuaCheck] = useState<boolean>(false);
    const [quiCheck, setQuiCheck] = useState<boolean>(false);
    const [sexCheck, setSexCheck] = useState<boolean>(false);

    const [value, setValue] = useState<Dayjs | null>(dayjs());

    useEffect(() => {
        document.body.style.overflowY = modalIsVisible ? 'hidden' : 'auto';
    }, [modalIsVisible]);

    const [clicked, setClicked] = useState<boolean>(false);

    const [confirmModalIsVisible, setConfirmModalIsVisible] = useState(false);

    const handlePhotoClick = () => {
        setClicked(!clicked);
        console.log('hue');
    };

    const [sendingUrl, setSendingUrl] = useState('');

    const handleConfirmModalCall = (url: any) => {
        setConfirmModalIsVisible(true);
        setSendingUrl(url);
    };

    const [title, setTitle] = useState<string>('');
    const [desc, setDesc] = useState<string>('');

    const [openAt, setOpenAt] = useState<Dayjs | null>(null);
    const [closeAt, setCloseAt] = useState<Dayjs | null>(null);

    const handleFormSubmit = useCallback((event: any) => {
        event.preventDefault();

        handleSubmit(
            [
                {
                    'field': 'segunda',
                    'value':  seg
                },
                {
                    'field': 'terca',
                    'value':  ter
                },
                {
                    'field': 'quarta',
                    'value':  qua
                },
                {
                    'field': 'quinta',
                    'value':  ter
                },
                {
                    'field': 'sexta',
                    'value':  ter
                },
            ],
            userID
        );
    }, [title, desc, userID, seg, ter, qua, qui, sex, segCheck, terCheck, quaCheck, quiCheck, sexCheck]);

    // const handleDayChange = (day: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const checked = event.target.checked;

    //     // Fazer algo específico para o dia selecionado
    //     switch (day) {
    //     case 'seg':
    //         setSegCheck(checked);
    //         setSeg(checked ? `${openAt?.hour()}:${(openAt?.minute() < 10 ? '0':'') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute()<10?'0':'') + closeAt?.minute()}` : '');
    //         break;
    //     case 'ter':
    //         setTerCheck(checked);
    //         setTer(checked ? `${openAt?.hour()}:${(openAt?.minute()<10?'0':'') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute()<10?'0':'') + closeAt?.minute()}` : '');
    //         break;
    //     case 'qua':
    //         setQuaCheck(checked);
    //         setQua(checked ? `${openAt?.hour()}:${(openAt?.minute()<10?'0':'') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute()<10?'0':'') + closeAt?.minute()}` : '');
    //         break;
    //     case 'qui':
    //         setQuiCheck(checked);
    //         setQui(checked ? `${openAt?.hour()}:${(openAt?.minute()<10?'0':'') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute()<10?'0':'') + closeAt?.minute()}` : '');
    //         break;
    //     case 'sex':
    //         setSexCheck(checked);
    //         setSex(checked ? `${openAt?.hour()}:${(openAt?.minute()<10?'0':'') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute()<10?'0':'') + closeAt?.minute()}` : '');
    //         break;
    //     default:
    //         break;
    //     }
    // };

    const handleDayChange = (day: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;

        const formattedTime = `${openAt?.hour()}:${(openAt?.minute() < 10 ? '0' : '') + openAt?.minute()} ás ${closeAt?.hour()}:${(closeAt?.minute() < 10 ? '0' : '') + closeAt?.minute()}`;

        switch (day) {
        case 'seg':
            setSegCheck(checked);
            setSeg(checked ? formattedTime : '');
            break;
        case 'ter':
            setTerCheck(checked);
            setTer(checked ? formattedTime : '');
            break;
        case 'qua':
            setQuaCheck(checked);
            setQua(checked ? formattedTime : '');
            break;
        case 'qui':
            setQuiCheck(checked);
            setQui(checked ? formattedTime : '');
            break;
        case 'sex':
            setSexCheck(checked);
            setSex(checked ? formattedTime : '');
            break;
        default:
            break;
        }
    };


    return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
        <Container isVisible={modalIsVisible}
            onSubmit={handleFormSubmit}>
            <Header>
                <h1 style={{ fontSize: '26px', color: '#1b1b1b'}}>Horário de funcionado</h1>
                <IoClose size={45} onClick={setModalIsVisible} color="#1b1b1b"/>
            </Header>

            <DayWrapper>
                <div>
                    <h3>Semana</h3>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}>

                        <TimeField label="Abre às" format='HH:mm' value={openAt} onChange={(newValue) => setOpenAt(newValue)} sx={{ width: '100%'}}/>
                        <TimeField label="Fecha às" format='HH:mm' value={closeAt} onChange={(newValue) => setCloseAt(newValue)} sx={{ width: '100%'}}/>
                    </Box>
                </LocalizationProvider>

                {/* <Wrapper>
                    <h4>O seu estabelecimento trabalha no modelo de 24 horas?</h4>
                    <FormGroup>
                        <Box sx={{ width: '100%', height: '3rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
                            <FormControlLabel control={<Checkbox />} label="Sim" />

                            <FormControlLabel control={<Checkbox />} label="Não" />
                        </Box>
                    </FormGroup>
                </Wrapper> */}

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                            onChange={handleDayChange('seg')}
                            checked={segCheck}
                        />
                        <p>Seg</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                            onChange={handleDayChange('ter')}
                            checked={terCheck}
                        />
                        <p>Ter</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                            onChange={handleDayChange('qua')}
                            checked={quaCheck}
                        />
                        <p>Qua</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                            onChange={handleDayChange('qui')}
                            checked={quiCheck}
                        />
                        <p>Qui</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                            onChange={handleDayChange('sex')}
                            checked={sexCheck}
                        />
                        <p>Sex</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                        />
                        <p>Sab</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                        />
                        <p>Dom</p>
                    </CheckboxWrapper>

                </Box>
            </DayWrapper>

            <DayWrapper
                style={{
                    marginTop: '2rem',
                    marginBottom: '2rem'
                }}
            >
                <div>
                    <h3>Final de semana</h3>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        gap: '1rem'
                    }}>
                        {/* <DemoContainer components={['TimeField']}> */}
                        <TimeField label="Abre às" format='HH:mm' value={openAt} onChange={(newValue) => setOpenAt(newValue)} sx={{ width: '100%'}}/>
                        <TimeField label="Fecha às" format='HH:mm' value={closeAt} onChange={(newValue) => setCloseAt(newValue)} sx={{ width: '100%'}}/>
                        {/* </DemoContainer> */}
                    </Box>
                </LocalizationProvider>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                    }}
                >
                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                        />
                        <p>Sab</p>
                    </CheckboxWrapper>

                    <CheckboxWrapper>
                        <Checkbox
                            sx={{
                                '& .MuiSvgIcon-root': { fontSize: 28 }
                            }}
                        />
                        <p>Dom</p>
                    </CheckboxWrapper>

                </Box>
            </DayWrapper>
            <StyledButton children="Salvar textos" w="larger" type="submit" mt="1rem"/>
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

  border-bottom: 1px solid #c4c4c483;
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

const DayWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

const CheckboxWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  padding: 0.6rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.6rem;
  border: 1px solid #c4c4c4;
`;

const Wrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #eaeaea;
  border: 1px solid #c4c4c4;
`;
