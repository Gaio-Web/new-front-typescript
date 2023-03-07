import { useState, useEffect } from 'react';
import axios from 'axios';
import {Container, FirstSection, Loading, SecondSection, ThirdSection, FourthSection, FifthSection, SeventhSection, FooterSection} from './styles';

import { Calendar } from '../Products/Calendar/Calendar'

import LogoGaioMain from '../../assets/logoGaio.png'
import Photo1 from '../../assets/foto1.png'
import Photo2 from '../../assets/foto2.png'
import Photo3 from '../../assets/foto3.png'

import {Carousel} from './Carousel/Carousel'

interface Contact {
    //Nome
    name: string;

    //text content
    description: string;
    products: string;
    call: string;
    history: string;

    //Qualidades
    quality1: string;
    quality2: string;
    quality3: string;

    //horário funcionamento
    segunda: string;
    terca: string;
    quarta: string;
    quinta: string;
    sexta: string;
    sabado: string;
    domingo: string;
}

interface Props {
    phone: string;
}

function FindByPhone({phone}: Props): JSX.Element {
    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get<Contact>(
                    `https://gaio-web-new-api-test.onrender.com/findByPhone/${phone}`
                );
                setData(response.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchData().then(() => console.log("Data fetched successfully!")).catch((error) => console.error(error));
    }, [phone]);


    if (loading) {
        return (
            <Loading>
                <div className={'loading-wrapper'}>
                    <h1>Carregando...</h1>
                    <div className={'wrapper'}>
                        <img src={LogoGaioMain} alt={'Logo Gaio'}/>
                    </div>
                </div>
            </Loading>
        );
    }

    if (!data) {
        return <p>Registro não encontrado</p>;
    }

    return (
        <Container>
            <header>
                <div className='nav'>
                    <img src={LogoGaioMain} alt={'logo-gaio'}/>
                </div>
            </header>

            <FirstSection>
                <div className={'first-wrapper'}>
                    <h1>{data.description}</h1>
                    <p>{data.call}</p>
                    <img className='pgImg' src={Photo1} alt={'foto-1'}/>
                    <button>VAMOS CONVERSAR!</button>
                </div>
            </FirstSection>
                        
            <SecondSection>
                <div className={'second-wrapper'}>
                    <h1 className='sectionTitle'>O que oferecemos</h1>
                    <p>{data.products}</p>
                    <img className='pgImg' src={Photo3} alt={'foto-do-produto'}/>
                    <button>FALE COM A GENTE</button>
                </div>
            </SecondSection>

            <ThirdSection>
                <div className={'third-wrapper'}>
                    <h1 className='sectionTitle'>Nossos diferenciais</h1>

                    <div className='difCards'>

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.000000 64.000000"
                        preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M255 601 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 31
                            -60 77 -105 138 -136 64 -32 176 -32 240 0 61 31 107 76 138 136 37 71 37 179
                            0 250 -49 94 -135 152 -235 160 -32 2 -71 1 -88 -4z m160 -28 c65 -22 136 -93
                            158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95 63 -107 106 -107 274
                            0 381 75 75 181 98 285 62z"/>
                            <path d="M249 536 c-56 -20 -96 -53 -126 -104 -40 -67 -40 -157 0 -224 15 -27
                            32 -48 37 -48 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210 210
                            22 0 40 5 40 10 0 14 -68 12 -111 -4z"/>
                            <path d="M395 520 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                            -12 -4 -9 -10z"/>
                            <path d="M450 492 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                            -9 -25 12 -12 45 38 62 94 20 69 11 131 -30 191 -29 43 -56 65 -56 44z"/>
                            <path d="M292 407 c-23 -24 -19 -45 5 -26 11 9 13 -3 13 -70 0 -65 -3 -81 -15
                            -81 -8 0 -15 -4 -15 -10 0 -5 18 -10 40 -10 22 0 40 5 40 10 0 6 -7 10 -15 10
                            -12 0 -15 18 -15 100 0 55 -4 100 -8 100 -5 0 -18 -10 -30 -23z"/>
                            <path d="M210 134 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                            -7 -10 -16z"/>
                            <path d="M410 141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                            -10 -4 -10 -9z"/>
                            <path d="M260 115 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                            -7 -10 -15z"/>
                            <path d="M310 110 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                            -10 -9 -10 -20z"/>
                            <path d="M366 115 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                            -7 -4 -15z"/>
                            </g>
                        </svg>

                        <h3>{data.quality1}</h3>
                        <p>{data.quality1}</p>
                    </div>

                    <div className='difCards'>

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64.000000 64.000000"
                        preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M245 611 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 54
                            -103 146 -159 258 -159 300 0 395 403 128 540 -52 26 -144 38 -193 25z m160
                            -28 c65 -22 136 -93 158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95
                            63 -107 106 -107 274 0 381 75 75 181 98 285 62z"/>
                            <path d="M252 550 c-52 -12 -109 -56 -139 -107 -39 -67 -39 -159 0 -226 15
                            -26 32 -47 37 -47 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210
                            210 22 0 40 5 40 10 0 11 -50 12 -98 0z"/>
                            <path d="M385 530 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                            -12 -4 -9 -10z"/>
                            <path d="M440 502 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                            -9 -25 12 -13 45 39 62 96 21 68 7 140 -37 200 -27 38 -49 52 -49 33z"/>
                            <path d="M257 422 c-18 -20 -22 -42 -8 -42 5 0 11 9 14 21 5 17 12 20 49 17
                            42 -3 43 -4 46 -41 3 -33 0 -39 -29 -55 -44 -23 -89 -67 -89 -86 0 -13 13 -16
                            70 -16 40 0 70 4 70 10 0 6 -27 10 -61 10 -73 0 -74 12 -3 53 27 16 52 34 56
                            41 14 21 8 73 -10 89 -25 23 -85 22 -105 -1z"/>
                            <path d="M200 144 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                            -7 -10 -16z"/>
                            <path d="M400 151 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                            -10 -4 -10 -9z"/>
                            <path d="M250 125 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                            -7 -10 -15z"/>
                            <path d="M300 120 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                            -10 -9 -10 -20z"/>
                            <path d="M356 125 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                            -7 -4 -15z"/>
                            </g>
                        </svg>

                        <h3>{data.quality2}</h3>
                        <p>{data.quality2}</p>
                    </div>

                    <div className='difCards'>

                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 64.000000 64.000000"
                        preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                            stroke="none">
                            <path d="M255 601 c-84 -22 -154 -80 -196 -161 -34 -66 -33 -176 3 -245 54
                            -103 146 -159 258 -159 300 0 395 403 128 540 -52 26 -144 38 -193 25z m160
                            -28 c65 -22 136 -93 158 -158 76 -222 -126 -424 -348 -348 -31 10 -67 34 -95
                            63 -107 106 -107 274 0 381 75 75 181 98 285 62z"/>
                            <path d="M262 540 c-52 -12 -109 -56 -139 -107 -39 -67 -39 -159 0 -226 15
                            -26 32 -47 37 -47 14 0 13 17 -1 26 -21 13 -49 89 -49 134 0 113 97 210 210
                            210 22 0 40 5 40 10 0 11 -50 12 -98 0z"/>
                            <path d="M395 520 c3 -5 13 -10 21 -10 8 0 12 5 9 10 -3 6 -13 10 -21 10 -8 0
                            -12 -4 -9 -10z"/>
                            <path d="M450 492 c0 -5 10 -17 21 -28 70 -62 76 -205 12 -276 -9 -10 -13 -21
                            -9 -25 12 -13 45 39 62 96 21 68 7 140 -37 200 -27 38 -49 52 -49 33z"/>
                            <path d="M267 412 c-18 -20 -22 -42 -8 -42 5 0 11 9 14 21 5 17 12 20 49 17
                            42 -3 43 -4 43 -38 0 -33 -2 -35 -37 -38 -21 -2 -38 -7 -38 -12 0 -5 17 -10
                            38 -12 35 -3 37 -5 37 -38 0 -34 -1 -35 -43 -38 -37 -3 -44 0 -49 17 -6 23
                            -23 29 -23 8 0 -43 92 -64 123 -29 20 22 22 63 5 80 -9 9 -9 15 0 24 18 18 14
                            63 -6 81 -25 23 -85 22 -105 -1z"/>
                            <path d="M210 134 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10
                            -7 -10 -16z"/>
                            <path d="M410 141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0
                            -10 -4 -10 -9z"/>
                            <path d="M260 115 c0 -8 2 -15 4 -15 2 0 6 7 10 15 3 8 1 15 -4 15 -6 0 -10
                            -7 -10 -15z"/>
                            <path d="M310 110 c0 -11 5 -20 10 -20 6 0 10 9 10 20 0 11 -4 20 -10 20 -5 0
                            -10 -9 -10 -20z"/>
                            <path d="M366 115 c4 -8 8 -15 10 -15 2 0 4 7 4 15 0 8 -4 15 -10 15 -5 0 -7
                            -7 -4 -15z"/>
                            </g>
                        </svg>

                        <h3>{data.quality3}</h3>
                        <p>{data.quality3}</p>
                    </div>

                </div>
            </ThirdSection>

            <FourthSection>
                <div className={'fourth-wrapper'}>
                    <h1>Galeria de fotos</h1>
                    <Carousel/>
                    <button>FALE COM A GENTE</button>
                </div>
            </FourthSection>

            <FifthSection>
                <div className={'fifth-wrapper'}>
                    <h1 className='sectionTitle'>Nossa história</h1>
                    <p>{data.history}</p>
                    <img className='pgImg' src={Photo2} alt={'foto-da-história'}/>
                    <button>CONVERSAR POR WHATSAPP</button>
                </div>
            </FifthSection>

            <Calendar
                segunda={`${data.segunda}`}
                terca={`${data.terca}`}
                quarta={`${data.quarta}`}
                quinta={`${data.quinta}`}
                sexta={`${data.sexta}`}
                sabado={`${data.sabado}`}
                domingo={`${data.domingo}`}
            />

            <SeventhSection>
                <div className='seventh-wrapper'>
                    <h1 className='sectionTitle'>Endereço</h1>
                                
                    <div className='adressWrapper'>
                        <div className='userAdress'>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum odio voluptatem odit </p>
                        </div>

                        <button className='buttonCopy'>
                            {/* onClick={() =>  navigator.clipboard.writeText(`${street}, ${number}, ${complement} ${city}, ${state}`)} */}

                            <div>
                                <span>
                                    <p>Copiar endereço</p>
                                </span>
                            </div>

                            <div>
                                <span>
                                <p>Endereço copiado!</p>
                                </span>
                            </div>
                        </button>

                    </div>
                </div>

            </SeventhSection>

            <FooterSection>
                <div className='footer-wrapper'>
                    <h3>Copyright © 2022 - Todos os direitos reservados.</h3>
                </div>
            </FooterSection>
        </Container>
    );
}

export default FindByPhone;
