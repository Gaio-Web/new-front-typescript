import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, FirstSection, SecondSection, ThirdSection} from './styles';

import LogoGaioMain from '../../assets/logoGaio.png'
import Photo1 from '../../assets/foto1.png'
import Photo2 from '../../assets/foto2.png'
import Photo3 from '../../assets/foto3.png'

interface Contact {
    name: string;
    quality1: string;
    quality2: string;
    quality3: string;
    description: string;
    products: string;
    call: string;
    history: string;
}

interface Props {
    phone: string;
}

function FindByPhone({phone}: Props): JSX.Element {
    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const color = 'rgb(5, 55, 124)';

    const [store, setStore] = useState([{
        backPhoto: '',
        historyPhoto: '',
        offerPhoto: '',
        gallery: [{}],
        segunda: '',
        terca: '',
        quarta: '',
        quinta: '',
        sexta: '',
        sabado: '',
        domingo: '',
        street: '',
        state: '',
        city: '',
        number: '',
        complement: '',
        link: ''
    }])

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
        return <p>Carregando...</p>;
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
                    <img src={Photo1} alt={'foto-1'}/>
                    <button>VAMOS CONVERSAR!</button>
                </div>

            </FirstSection>
            <SecondSection>
                <div className={'second-wrapper'}>
                    <h1>Nossa história</h1>
                    <p>{data.history}</p>
                    <img src={Photo2} alt={'foto-da-história'}/>
                    <button>CONVERSAR POR WHATSAPP</button>
                </div>
            </SecondSection>
            <ThirdSection>
                <div className={'third-wrapper'}>
                    <h1>O que oferecemos</h1>
                    <p>{data.products}</p>
                    <img src={Photo3} alt={'foto-do-produto'}/>
                    <button>FALE COM A GENTE</button>
                </div>
            </ThirdSection>
            <p>Nome: {data.name}</p>
            <p>q1: {data.quality1}</p>
            <p>q2: {data.quality2}</p>
            <p>q3: {data.quality3}</p>
            <p>prod: {data.products}</p>
            {/*<p>Telefone: {data.phone}</p>*/}
        </Container>
    );
}

export default FindByPhone;
