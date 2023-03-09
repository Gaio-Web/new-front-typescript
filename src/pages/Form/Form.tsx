
import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom';

import axios from 'axios';

import {Loading, Container, FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection} from "./styles";

import { InputMask } from 'primereact/inputmask';

import LogoGaioMain from '../../assets/logoGaio.png'

import ReactLoading from 'react-loading'

interface Contact {
    name: string;
    phone: string;
    logo: File;
}

//LOGO - NÃO CONSEGUI FAZER SUBIR PRO BANCO POR NADA NA TERRA.
  const updateLogo = async (logo: File) => {
    const formData = new FormData();
    formData.append('image', logo);
    const response = await axios.post('http://localhost:3000/newUpdateLogo', formData);
    return response.data;
  };


function Form(): JSX.Element {

    const { id } = useParams()

    const uniqueName = id!.replace(/-/g, " ")
    document.title = uniqueName

    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchDataForms(){
            try{
                setLoading(true);
                const response = await axios.get<Contact>(
                    `https://gaio-web-new-api-test.onrender.com/findByPhone/5584991097445`
                    //`http://localhost:3001/findByPhone/5584991097445`
                );
                setData(response.data);
            } catch (err){
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchDataForms().then(() => console.log("Data fetched successfully!")).catch((err) => console.error(err));

    }, []);


    //Logo
        const [isLoading1, setLoading1] = useState(false);
        const [selectedLogo, setSelectedLogo] = useState<File | null>(null);
        const [uploadedLogoUrl, setUploadedLogoUrl] = useState<string | null>(null);

        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const files = event.target.files;
            setLoading1(true)
            if (files && files.length > 0) {
                setSelectedLogo(files[0]);
                setLoading1(false)
            }
          };
       
          const [selectLogo, setSelectLogo] = useState(false)

        // NÃO CONSEGUI FAZER SUBIR PRO BANCO POR NADA NA TERRA.
          const handleClick = async () => {
            const data = await updateLogo(selectedLogo!);
            setUploadedLogoUrl(data.logoUrl);
          };


        //CORES
        const [colorized, setColorized] = useState(false);
        const [color, setColor] = useState('rgb(5, 55, 124)');

        const [options, setoptions] = useState([
            {color: "#EB596E", title: 'Carmine'},
            {color: "#F4972B", title: 'Laranja'},
            {color: "#FD3997", title: 'Rosa'},
            {color: "#5E8B7E", title: 'Verde'},
            {color: "#00ADB5", title: 'Azul'},
            {color: "#6868AC", title: 'Lilás'},
            {color: "#6B0BE6", title: "Roxo"},
            {color: "#000", title: "Preto"},
            {color: "#B4A5A5", title: 'Areia'},
            {color: "#D80C0C", title: 'Vermelho'},
            {color: "#25D8A7", title: "Turquesa"},
            {color: "#6D6D6D", title: "Cinza"}
        ])


        //ENDERECO
        const [ street, setStreet ] = useState('');
        const [ state, setState ] = useState('');
        const [ number, setNumber ] = useState('');
        const [ complement, setComplement ] = useState('');
        const [city, setCity] = useState('');

        //NÃO ACHO QUE ESSE É O TIPO CORRETO, MAS NÃO ACHEI OUTRO MELHOR
        const getAddress = async (e: React.ChangeEvent<HTMLInputElement>) => {
            const cepvalid = e.target.value.replace(/[^0-9]/g, '');
        
            if (cepvalid?.length !== 8) {
              return;
            }  
        
            await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
              .then((res) => res.json())
              .then((data) => {
                setStreet(`${data.logradouro}`);
                setState(data.uf)
                setCity(data.localidade)
              });
        }


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
            <FirstSection>
                <div className={'first-wrapper'}>
                    <h1>Obrigado por confiar no nosso serviço!</h1>
                    <p>Agora, vamos finalizar seu site cadastrando suas fotos e horário de funcionamento.</p>
                </div>
            </FirstSection>

            <SecondSection>
                <div className={'second-wrapper'}>
                    <h1>Você tem uma logo que gostaria de usar no site?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setSelectLogo(true)}>SIM</button>
                        <button onClick={() => setSelectLogo(false)}>NÃO</button>
                    </div>

                    {selectLogo === false ? (
                        <></>
                    ) : (
                        <>
                            <div>
                                <input type="file" accept="image/*" onChange={handleChange} />
                                {isLoading1 == true ? 
                                <ReactLoading type={'spin'} color={'#05377c'} height={200} width={100}/>
                                :
                                <>
                                {selectedLogo && (
                                    <img
                                        src={URL.createObjectURL(selectedLogo)}
                                        alt="logo"
                                        key={Date.now()}
                                    />
                                )}
                                </>
                            }
                            </div>
                        </>
                    )}

                    <p>Sua logo vai subsituir o nome da loja no cabeçalho do site</p>
                </div>
            </SecondSection>


            <ThirdSection>
                <div className={'third-wrapper'}>
                    <h1>Deseja editar a cor do site ou manter o azul original?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setColorized(false)}>MANTER ORIGINAL</button>
                        <button onClick={() => setColorized(true)}>EDITAR CORES</button>
                    </div>

                    <div className='colorized'>
                        {colorized === true ? (
                            <div className='color-picker' style={{ backgroundColor: color }}>
                            <h1>Escolha a cor dominante do seu site</h1>
                        
                            <div className='options'>
                                {options.map(opt => (
                                <div className={color === opt.color ? 'non-selected' : 'selected'} onClick={() => setColor(opt.color)}>
                                    <div className='color-option' style={{ backgroundColor: opt.color }}/>
                                    <h1>{opt.title}</h1>
                                </div>
                                ))}
                            </div>
            
                            <p>Não se esqueça que o texto dessa tela é branco.</p>
                    </div>
                        ) : (
                            <></>
                        )}
                    </div>

                </div>
            </ThirdSection>

            <FourthSection>
                <div className='fourth-wrapper'>
                    <h1>Vamos editar seu endereço</h1>

                    <div className='adress-wrapper'>
                        <div>
                            <label> Seu CEP:</label>
                            <InputMask
                                // type="text" 
                                mask={'99999-999'}
                                onChange={() => getAddress}
                                //ESSA FUNÇÃO TA ERRADA
                            />
                        </div>
                    </div>

                    <div>
                        <label>Rua:</label>
                        <input
                            value={street}
                            onChange={(text) => setStreet(text.target.value)}
                        />
                    </div>

                    <div>
                        <label>Estado:</label>
                        <input
                            value={state}
                            onChange={(text) => setState(text.target.value)}
                        />
                    </div>

                    <div>
                        <label>Número:</label>
                        <input
                            value={number}
                            onChange={(text) => setNumber(text.target.value)}
                        />
                    </div>
                    <div>
                        <label>Complemento:</label>
                        <input
                            value={complement}
                            onChange={(text) => setComplement(text.target.value)}
                        />
                    </div>
                </div>
            </FourthSection>

            <FifthSection>
            {/* <div className='back'>
                <h1>Foto de capa</h1>

                <p>A foto que vem depois da descrição do seu negócio.</p>

                {loading == true ?
                    <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                : 
                <>
                    {
                </>
                }

                <label className="custom-file-upload">
                    <input
                    type="file"
                    onChange={handleFileBack}/>
                    Fazer upload da foto de capa
                </label>
            </div> */}
            </FifthSection>

        </Container>
    )
}

export {Form}
