import React, {useEffect, useState} from 'react'
import {json, useParams} from 'react-router-dom';

import axios from 'axios';

import {
    Loading,
    Container,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection,
    FifthSection,
    PicsSection,
    CoverPhotoSection,
    SixthSection,
    SeventhSection,
} from "./styles";

import {InputMask, InputMaskChangeEvent} from 'primereact/inputmask';

import {FiUpload, FiSend} from "react-icons/fi";

import  SendButton1  from "../Products/Components/SendButton"

import LogoGaioMain from '../../assets/logoGaio.png'

import ReactLoading from 'react-loading'

import foto1 from '../../assets/foto1.webp'
import foto2 from '../../assets/foto2.webp'
import foto3 from '../../assets/foto3.webp'

import FileBase64 from 'react-file-base64';

interface Contact {
    //text content
    description: string;
    products: string;
    call: string;
    history: string;

    //Images
    logo: File;
    offerPhoto: string,
    gallery: string,

    // PHOTOS
    // photo_position: string | number;
    photos: {
        photo1: {
            base64: string;
            type: string;
        },
        photo2: {
            base64: string;
            type: string;
        },
        photo3: {
            base64: string;
            type: string;
        },
        logo: {
            base64: string;
            type: string;
        }
    }

    address: {
        zipCode: string;
        street: string;
        number: string;
        complement: string;
        city: string;
        state:string;
        neighborhood: string;
      },

    //Color
    color: string,

    //WhatsApp
    whatsApp: string,

    //calendar info
    segunda: string,
    terca: string,
    quarta: string,
    quinta: string,
    sexta: string,
    sabado: string,
    domingo: string,

    //?
    name_quality1: string,
    name_quality2: string,
    name_quality3: string,

    //qualities
    qualities1: string,
    qualities2: string,
    qualities3: string,
    quality1: string,
    quality2: string,
    quality3: string,
    qualitydescription1: string,
    qualitydescription2: string,
    qualitydescription3: string,

    //client info
    businessName: string,
    phone: string,
    name: string,
    id: string,
}


function Form(this: any): JSX.Element {
    const [image, setImage] = useState<any>('');

    const {id} = useParams()

    document.title = id!;
    // console.log('id aqui: ',id);
    const getImage = (files: any) => {
        setImage(files)
    }


    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchDataForms() {
            try {
                setLoading(true);
                const response = await axios.get<Contact>(
                    `https://gaio-web-new-api-test.onrender.com/findByPhone/${id}`
                );
                setData(response.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }

        fetchDataForms().then(() => console.log("Data fetched successfully!")).catch((err) => console.error(err));

    }, []);


    //IMAGENS//FOTOS
    const uploadPhoto = async (photoPosition: string) => {
        const body = JSON.stringify(
            {
                phone: id,
                photo_position: photoPosition,
                base64: image.base64,
                type: image.type,
            }
        )
        console.log('corpo: ', body)
        const response = await fetch(`https://gaio-web-new-api-test.onrender.com/upload`, {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: body
        })
    }


    //Logo
    const [selectLogo, setSelectLogo] = useState(false)
    const [isLoading1, setLoading1] = useState(false);

    //CORES
    const [colorized, setColorized] = useState(false);
    const [color, setColor] = useState('#034AA3');

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

    const handleSendColor = async () => {
        const body = {
            phone: id,
            color: color
        };
        try{
            const response = await fetch('https://gaio-web-new-api-test.onrender.com/updateColor', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
                });
                const data = await response.json();
                console.log(color)
                console.log(data);
        } catch (error){
            console.log(error);
        }
    }



    //ENDERECO
    const [disableAdress, setDisableAdress] = useState(false)
    const [zip, setZip] = useState('');
    const [street, setStreet] = useState('');
    const [state, setState] = useState('');
    const [number, setNumber] = useState('');
    const [complement, setComplement] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [city, setCity] = useState('');

    const getAddress = async (event: InputMaskChangeEvent): Promise<void> => {
        const cepvalid = event.target?.value?.replace(/[^0-9]/g, '');

        if (cepvalid?.length !== 8) {
            return;
        }

        await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setZip(`${data.cep}`)
                setStreet(`${data.logradouro}`);
                setNeighborhood(`${data.address.neighborhood}`);
                setState(data.uf)
                setCity(data.localidade)

                console.log(data)
            });
    }

    const handleSendEndereco = async () => {
        const body = {
            phone: id,
            zipCode: data?.address.zipCode, //CEP
            street: data?.address.street, // rua
            number: data?.address.number, // numero
            complement: data?.address.complement, // complemento
            city: data?.address.city, // cidade
            state: data?.address.state, // estado
            neighborhood: data?.address.neighborhood //bairro
        };
        try {
            const response = await fetch('https://gaio-web-new-api-test.onrender.com/fillAddress', {
                method: 'POST',
                headers: {
                    'Content-Type': 'aplication/json'
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
        }catch(error) {
            console.log(error);
        }
    }



    //WHATSAPP
    const [changeWhatsapp, setChangeWhatsapp] = useState(false);
    const [whatsApp, setWhatsapp] = useState<string | undefined>('');

    const getWhatsApp = (event: InputMaskChangeEvent) => {
        const whatsAppValid = event?.target?.value;

        if (whatsAppValid?.length !== 11) {
            setWhatsapp(`55${whatsAppValid?.replace(/[()-]/g, '')}`)

            return;
        }
    }

    const handleSendWhatsApp = async () => {
        const body = {
            phone: id,
            whatsApp: whatsApp
        };
        try{
            const response = await fetch('https://gaio-web-new-api-test.onrender.com/updateWhatsApp', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
                });
                const data = await response.json();
        } catch (error){
            console.log(error);
        }
    }


    //FOTOS
    //COVER PHOTO
    const [selectedCoverPhoto, setSelectedCoverPhoto] = useState<File | null>(null);
    const [loading2, setLoading2] = useState(false)

    const handleChangeCoverPhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        setLoading2(true)
        if (files && files.length > 0) {
            setSelectedCoverPhoto(files[0]);
            setLoading2(false)
        }
    };


    // //HISTORYPHOTO
    // const [historyPhoto, setHistoryPhoto] = useState<File | null>(null);
    // const [loading3, setLoading3] = useState(false)

    // const handleHistoryPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const image = event.target.files;

    //     setLoading3(true)
    //     if (image && image.length > 0) {
    //         setHistoryPhoto(image[0]);
    //         setLoading3(false)
    //     }
    // }

    // const updateHistoryPhoto = async (historyPhoto: File) => {
    //     const formData = new FormData();
    //     formData.append('image', historyPhoto);
    //     const response = await axios.post('/getName', formData);
    //     return response.data;
    // };

    // const handleSendHistoryPhoto = async () => {
    //     setLoading3(true);
    //     if (historyPhoto !== null) {
    //         await updateHistoryPhoto(historyPhoto);
    //         setHistoryPhoto(null);
    //     }
    //     setLoading3(false);
    // };

    // //OFFERPHOTO
    // const [offerPhoto, setOfferPhoto] = useState<File | null>(null);
    // const [loading4, setLoading4] = useState(false)

    // const handleOfferPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const image = event.target.files;

    //     setLoading4(true)
    //     if (image && image.length > 0) {
    //         setOfferPhoto(image[0]);
    //         setLoading4(false)
    //     }
    // }

    // const updateOfferPhoto = async (OfferPhoto: File) => {
    //     const formData = new FormData();
    //     formData.append('image', OfferPhoto);
    //     const response = await axios.post('/getName', formData);
    //     return response.data;
    // };

    // const handleSendOfferPhoto = async () => {
    //     setLoading4(true);
    //     if (offerPhoto !== null) {
    //         await updateOfferPhoto(offerPhoto);
    //         setOfferPhoto(null);
    //     }
    //     setLoading4(false);
    // };

    //CALENDAR
    
    
    const [segunda, setSegunda] = useState('');
    const [terca, setTerca] = useState('');
    const [quarta, setQuarta] = useState('');
    const [quinta, setQuinta] = useState('');
    const [sexta, setSexta] = useState('');
    const [sabado, setSabado] = useState('');
    const [domingo, setDomingo] = useState('');

    const [disabledSeg, setDisabledSeg] = useState(false);
    const [disabledTer, setDisabledTer] = useState(false);
    const [disabledQuar, setDisabledQuar] = useState(false);
    const [disabledQuin, setDisabledQuin] = useState(false);
    const [disabledSex, setDisabledSex] = useState(false);
    const [disabledSab, setDisabledSab] = useState(false);
    const [disabledDom, setDisabledDom] = useState(false);

    const handleSendCalendar = async () => {
        const body = {
            phone: id,

            segunda: segunda,
            terca: terca,
            quarta: quarta,
            quinta: quinta,
            sexta: sexta,
            sabado: sabado,
            domingo: domingo
        };
        try{
            const response = await fetch('https://gaio-web-new-api-test.onrender.com/updateBusinessHours', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
                });
                const data = await response.json();
                console.log(data);
        } catch (error){
            console.log(error);
        }
    }
    

    //SEGUNDA
    const segunda24Checked = segunda === '24 horas';
    const segundaFecChecked = segunda === 'Fechado';

    function handleSegunda(event: any) {
        setSegunda(event.target.value);
    }

    function handlesegundafec() {
        if (segunda === 'Fechado') {
            setSegunda('')
            setDisabledSeg(false)
        } else {
            setSegunda('Fechado');
            setDisabledSeg(true)
        }
    }

    function handlesegunda24() {
        if (segunda === '24 horas') {
            setSegunda('')
            setDisabledSeg(false)
        } else {
            setSegunda('24 horas');
            setDisabledSeg(true)
        }
    }

    function handleCheckboxChangeSeg(checkboxName: string) {
        if (checkboxName === 'segunda24') {
          handlesegunda24();
          setDisabledSeg(segundaFecChecked);
          console.log(segundaFecChecked)
        } else if (checkboxName === 'segundaFec') {
          handlesegundafec();
          setDisabledSeg(segunda24Checked);
          console.log(segunda)
        }
      }

    //TERCA
    const terca24Checked = terca === '24 horas';
    const tercaFecChecked = terca === 'Fechado';

    function handleTerca(event: any) {
        setTerca(event.target.value);
    }

    function handletercfec() {
        if (terca === 'Fechado') {
            setTerca('')
            setDisabledTer(false)
        } else {
            setTerca('Fechado');
            setDisabledTer(true)
        }
    }

    function handleterc24() {
        if (terca === '24 horas') {
            setTerca('')
            setDisabledTer(false)
        } else {
            setTerca('24 horas');
            setDisabledTer(true)
        }
    }

    function handleCheckboxChangeTer(checkboxName: string) {
        if (checkboxName === 'terca24') {
            handleterc24();
          setDisabledTer(tercaFecChecked);
          console.log(terca)
        } else if (checkboxName === 'tercaFec') {
            handletercfec();
          setDisabledTer(terca24Checked);
          console.log(terca)
        }
      }

    //QUARTA
    const quarta24Checked = quarta === '24 horas';
    const quartaFecChecked = quarta === 'Fechado';

    function handleQuarta(event: any) {
        setQuarta(event.target.value);
    }

    function handlequartafec() {
        if (quarta === 'Fechado') {
            setQuarta('')
            setDisabledQuar(false)
        } else {
            setQuarta('Fechado');
            setDisabledQuar(true)
        }
    }

    function handlequarta24() {
        if (quarta === '24 horas') {
            setQuarta('')
            setDisabledQuar(false)
        } else {
            setQuarta('24 horas');
            setDisabledQuar(true)
        }
    }

    function handleCheckboxChangeQuar(checkboxName: string) {
        if (checkboxName === 'quarta24') {
            handlequarta24();
          setDisabledQuar(quartaFecChecked);
          console.log(quarta)
        } else if (checkboxName === 'quartaFec') {
            handlequartafec();
          setDisabledQuar(quarta24Checked);
          console.log(quarta)
        }
      }

    //QUINTA
    const quinta24Checked = quinta === '24 horas';
    const quintaFecChecked = quinta === 'Fechado';

    function handleQuinta(event: any) {
        setQuinta(event.target.value);
    }

    function handlequintafec() {
        if (quinta === 'Fechado') {
            setQuinta('')
            setDisabledQuin(false)
        } else {
            setQuinta('Fechado');
            setDisabledQuin(true)
        }
    }

    function handlequinta24() {
        if (quinta === '24 horas') {
            setQuinta('')
            setDisabledQuin(false)
        } else {
            setQuinta('24 horas');
            setDisabledQuin(true)
        }
    }

    function handleCheckboxChangeQuin(checkboxName: string) {
        if (checkboxName === 'quinta24') {
            handlequinta24();
          setDisabledQuin(quintaFecChecked);
          console.log(quinta)
        } else if (checkboxName === 'quintaFec') {
            handlequintafec();
          setDisabledQuin(quinta24Checked);
          console.log(quinta)
        }
      }

    //SEXTA
    const sexta24Checked = sexta === '24 horas';
    const sextaFecChecked = sexta === 'Fechado';

    function handleSexta(event: any) {
        setQuarta(event.target.value);
    }

    function handlesextafec() {
        if (sexta === 'Fechado') {
            setSexta('')
            setDisabledSex(false)
        } else {
            setSexta('Fechado');
            setDisabledSex(true)
        }
    }

    function handlesexta24() {
        if (sexta === '24 horas') {
            setSexta('')
            setDisabledSex(false)
        } else {
            setSexta('24 horas');
            setDisabledSex(true)
        }
    }

    function handleCheckboxChangeSex(checkboxName: string) {
        if (checkboxName === 'sexta24') {
            handlesexta24();
          setDisabledSex(sextaFecChecked);
          console.log(sexta)
        } else if (checkboxName === 'sextaFec') {
            handlesextafec();
          setDisabledSex(sexta24Checked);
          console.log(sexta)
        }
      }

    //SABADO
    const sabado24Checked = sabado === '24 horas';
    const sabadoFecChecked = sabado === 'Fechado';

    function handleSabado(event: any) {
        setQuarta(event.target.value);
    }

    function handlesabadofec() {
        if (sabado === 'Fechado') {
            setSabado('')
            setDisabledSab(false)
        } else {
            setSabado('Fechado');
            setDisabledSab(true)
        }
    }

    function handlesabado24() {
        if (sabado === '24 horas') {
            setSabado('')
            setDisabledSab(false)
        } else {
            setSabado('24 horas');
            setDisabledSab(true)
        }
    }

    function handleCheckboxChangeSab(checkboxName: string) {
        if (checkboxName === 'sabado24') {
            handlesabado24();
          setDisabledSab(sabadoFecChecked);
          console.log(sabado)
        } else if (checkboxName === 'sabadoFec') {
            handlesabadofec();
          setDisabledSab(sabado24Checked);
          console.log(sabado)
        }
      }

    //DOMINGO
    const domingo24Checked = domingo === '24 horas';
    const domingoFecChecked = domingo === 'Fechado';

    function handleDomingo(event: any) {
        setQuarta(event.target.value);
    }

    function handledomingofec() {
        if (domingo === 'Fechado') {
            setDomingo('')
            setDisabledDom(false)
        } else {
            setDomingo('Fechado');
            setDisabledDom(true)
        }
    }

    function handledomingo24() {
        if (domingo === '24 horas') {
            setDomingo('')
            setDisabledDom(false)
        } else {
            setDomingo('24 horas');
            setDisabledDom(true)
        }
    }

    function handleCheckboxChangeDom(checkboxName: string) {
        if (checkboxName === 'domingo24') {
            handledomingo24();
          setDisabledDom(domingoFecChecked);
          console.log(domingo)
        } else if (checkboxName === 'domingoFec') {
            handledomingofec();
          setDisabledDom(domingo24Checked);
          console.log(domingo)
        }
      }

    //CHAVE PIX
    const [showChavePix, setShowChavePix] = useState(false)
    const [chavePix, setChavePix] = useState("");

    const handleChavePix = (event: any) => {
        const updatedChavePix = event?.target?.value;

        setChavePix(updatedChavePix)
    }


    if (loading) {
        return (
            <Loading>
                <div className={'loading-wrapper'}>
                    <h1>Carregando...</h1>
                    {/* <div className={'wrapper'}>
                        <img src={LogoGaioMain} alt={'Logo Gaio'}/>
                    </div> */}
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
                    <p>Agora, vamos finalizar seu site cadastrando suas fotos e as informações opcionais.</p>
                </div>
            </FirstSection>

            <SecondSection>
                <div className={'second-wrapper'}>
                    <h1>Você tem uma logo que gostaria de usar no site?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setSelectLogo(true)}>USAR MINHA LOGO</button>
                        <button onClick={() => setSelectLogo(false)}>NÃO USAR LOGO</button>
                    </div>

                    {selectLogo === false ? (
                        <></>
                    ) : (
                        <>
                            <div className='image-update-wrapper'>
                                {/* {isLoading1 == true ?
                                    <ReactLoading type={'spin'} color={'#05377c'} height={200} width={100}/>
                                    :
                                    <img className='pgImg' src={data?.photos.logo.base64} alt={'foto-1'}/>
                                } */}
                        
                                {/*TROCAR POR LOGO*/}
                                {data.photos.photo1.base64 === "" ? (
                                    <img src={foto1} alt="foto da capa"/>
                                ) : (
                                    <img className='pgImg' src={data.photos.photo1.base64} alt={'foto-1'}/>
                                )}

                                <label className='custom-file-upload'>
                                    <FiUpload color={'#fff'} size={24}/>
                                    <FileBase64
                                        multiple={false}
                                        onDone={getImage}
                                    />

                                    Fazer upload
                                </label>
                            </div>
                        </>
                    )}

                    <p>Sua logo vai subsituir o nome da loja no cabeçalho do site</p>

                    {selectLogo === false ? (
                        <></>
                    ) : (
                        <SendButton1 submit={() => {
                            uploadPhoto('4')
                        }}/>
                    )}

                </div>
            </SecondSection>

            <ThirdSection>
                <div className={'third-wrapper'}>
                    <h1>Deseja editar a cor do site ou manter o azul original?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setColorized(false)}>MANTER ORIGINAL</button>
                        <button onClick={() => setColorized(true)}>EDITAR CORES</button>
                    </div>

                    {colorized === true ? (
                        <div className='color-picker' style={{backgroundColor: color}}>
                            <h1>Escolha a cor dominante do seu site</h1>

                            <div className='options'>
                                {options.map(opt => (
                                    <div className={color === opt.color ? 'non-selected' : 'selected'}
                                            onClick={() => setColor(opt.color)}>
                                        <div className='color-option' style={{backgroundColor: opt.color}}/>
                                        <h1>{opt.title}</h1>
                                    </div>
                                ))}
                            </div>

                            <p>Não se esqueça que o texto da tela inicial do site é branco.</p>
                            <SendButton1 submit={handleSendColor}/>
                        </div>
                    ) : (
                        <></>
                    )}

                </div>
            </ThirdSection>

            <FourthSection>
                <div className='fourth-wrapper'>
                    <h1>Gostaria de adicionar endereço no seu site?</h1>

                    <div className={'button-wrapper'}>
                        <button onClick={() => setDisableAdress(true)}>ADICIONAR ENDEREÇO</button>
                        <button onClick={() => setDisableAdress(false)}>SEM ENDEREÇO</button>
                    </div>

                    {disableAdress === false ? (
                        <></>
                    ) : (
                        <>
                            <div className='main-adress-wrapper'>
                                <div className='adress-wrapper'>
                                    <div className='adress-input-wrapper'>
                                        <label> Seu CEP:</label>
                                        <InputMask
                                            mask={'99999-999'}
                                            onChange={(e) => getAddress(e)}
                                        />
                                    </div>

                                    <div className='adress-input-wrapper'>
                                        <label>Rua:</label>
                                        <input
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className='smaller-input-wraper'>
                                    <div>
                                        <label>Número:</label>
                                        <input
                                            value={number}
                                            onChange={(text) => setNumber(text.target.value)}
                                            className='smaller-input'
                                        />
                                    </div>

                                    <div>
                                        <label>Complemento:</label>
                                        <input
                                            value={complement}
                                            onChange={(text) => setComplement(text.target.value)}
                                            placeholder={'Opcional'}
                                            className='smaller-input'
                                        />
                                    </div>
                                </div>

                                <div className='adress-wrapper'>
                                    <div className='adress-input-wrapper'>
                                        <label>Cidade:</label>
                                        <input
                                            value={city}
                                            onChange={(text) => setCity(text.target.value)}
                                        />
                                    </div>

                                    <div className='adress-input-wrapper'>
                                        <label>Estado:</label>
                                        <input
                                            value={state}
                                            onChange={(text) => setState(text.target.value)}
                                        />
                                    </div>

                                    {/* <div className='adress-input-wrapper'>
                                        <label>Bairro:</label>
                                        <input
                                            value={neighborhood}
                                            onChange={(e) => setNeighborhood(e.target.value)}
                                        />
                                    </div> */}
                                </div>

                            </div>
                            <SendButton1 submit={handleSendEndereco}/>
                        </>
                    )

                    }

                </div>
            </FourthSection>

            <FifthSection>
                <div className='fifth-wrapper'>
                    <h1>Gostaria de trocar o número de WhatsApp do site?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setChangeWhatsapp(true)}>Trocar WhatsApp</button>
                        <button onClick={() => setChangeWhatsapp(false)}>Manter número atual</button>
                    </div>

                    {changeWhatsapp === false ? (
                        <></>
                    ) : (
                        <>
                            <div className='changeWhatsApp'>
                                <InputMask
                                    mask={'(99)99999-9999'}
                                    placeholder='99 99999-9999'
                                    onChange={(e) => getWhatsApp(e)}
                                />
                            </div>

                            <SendButton1 submit={handleSendWhatsApp}/>
                        </>
                    )

                    }

                </div>
            </FifthSection>

            <PicsSection>
                <h1 className='picsTitle'>Vamos editar as fotos do seu site.</h1>
                {/*back*/}
                <CoverPhotoSection>
                    <div className='photo-section-wrapper'>
                        <h1>Foto de capa</h1>
                        <p className='photoText'>A foto que vem depois da descrição do seu negócio.</p>

                        <div className='img-wrapper'>
                            {data.photos.photo1.base64 === null ? (
                                <img src={foto1} alt="foto da capa"/>
                            ) : (
                                <img className='pgImg' src={data.photos.photo1.base64} alt={'foto-1'}/>
                            )}
                        </div>

                        <label className='custom-file-upload'>
                            <FiUpload color={'#fff'} size={24}/>
                            <FileBase64
                                multiple={false}
                                onDone={getImage}
                                onChange={handleChangeCoverPhoto}
                            />
                            <p className='uploadText'>Fazer upload</p>
                        </label>

                        <SendButton1 submit={() => {
                            uploadPhoto('1')
                        }}/>
                        
                    </div>
                </CoverPhotoSection>
                {/*history*/}
                <CoverPhotoSection>
                    <div className='photo-section-wrapper'>
                        <h1>Foto da história</h1>
                        <p className='photoText'>A foto que vem depois da descrição do seu negócio.</p>

                        {/*{loading2 ?*/}
                        {/*    <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>*/}
                        {/*    :*/}
                        {/*    <>*/}
                        {/*        {backPhoto === null ? <img src={foto1}/> : <img src={URL.createObjectURL(backPhoto)}/>}*/}
                        {/*    </>*/}
                        {/*}*/}
                        {/* <input type="file" accept="image/*" onChange={handleBackPhoto} />
                        <button onClick={handleSendBackPhoto}>Atualizar foto de capa</button> */}

                        <div className='img-wrapper'>
                            {data.photos.photo2.base64 === null ? (
                                <img src={foto1} alt="foto da capa"/>
                            ) : (
                                <img src={data.photos.photo2.base64} alt="foto da capa"/>
                                //trocar por backPhoto
                            )}
                        </div>

                        <label className='custom-file-upload'>
                            <FiUpload color={'#fff'} size={24}/>
                            <FileBase64
                                multiple={false}
                                onDone={getImage}
                            />
                            <p className='uploadText'>Fazer upload</p>
                        </label>

                        <SendButton1 submit={() => {
                            uploadPhoto('2')
                        }}/>
                    </div>
                </CoverPhotoSection>
                {/*offer*/}
                <CoverPhotoSection>
                    <div className='photo-section-wrapper'>
                        <h1>Foto das ofertas</h1>
                        <p className='photoText'>A foto que vem depois da descrição do seu negócio.</p>

                        {/*{loading2 ?*/}
                        {/*    <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>*/}
                        {/*    :*/}
                        {/*    <>*/}
                        {/*        {backPhoto === null ? <img src={foto1}/> : <img src={URL.createObjectURL(backPhoto)}/>}*/}
                        {/*    </>*/}
                        {/*}*/}
                        {/* <input type="file" accept="image/*" onChange={handleBackPhoto} />
                        <button onClick={handleSendBackPhoto}>Atualizar foto de capa</button> */}

                        <div className='img-wrapper'>
                            {data.photos.photo1.base64 === null ? (
                                <img src={foto3} alt="foto da capa"/>
                            ) : (
                                <img src={data.photos.photo3.base64} alt={'foto-1'}/>
                            )}
                        </div>

                        <label className='custom-file-upload'>
                            <FiUpload color={'#fff'} size={24}/>
                            <FileBase64
                                multiple={false}
                                onDone={getImage}
                            />
                            <p className='uploadText'>Fazer upload</p>
                        </label>

                        <SendButton1 submit={() => {
                            uploadPhoto('3')
                        }}/>
                    </div>
                </CoverPhotoSection>

            </PicsSection>

            <SixthSection>
                <div className='sixth-wrapper'>

                    <h1>Horário de funcionamento</h1>

                    <div className='table'>

                        <div className='line'>
                            <div className='working-hours-wrapper'
                                 style={{borderRadius: '10px 10px 0 0', backgroundColor: '#034aa6'}}>
                                <h2>Horário de funcionamento</h2>
                            </div>
                            <div className='input-wrapper'>
                                <div className='title-value'>
                                    <h2>24hrs</h2>
                                </div>
                                <div className='title-value'>
                                    <h2>Fechado</h2>
                                </div>
                            </div>
                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper'>
                                <div className='value' style={{borderRight: '1px solid gray'}}>
                                    <h3>
                                        Segunda feira:
                                    </h3>
                                </div>
                                <div className='value'>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={segunda}
                                        onChange={handleSegunda}
                                        disabled={disabledSeg}
                                        style={disabledSeg === true
                                            ? {color: "#FAFAFF"}
                                            : {color: "gray"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={segunda24Checked} onChange={() => handleCheckboxChangeSeg('segunda24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={segundaFecChecked} onChange={() => handleCheckboxChangeSeg('segundaFec')}/>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper'>
                                <div className='value' style={{borderRight: '1px solid gray'}}>
                                    <h3>
                                        Terça feira:
                                    </h3>
                                </div>
                                <div className='value'>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={terca}
                                        onChange={handleTerca}
                                        disabled={disabledTer}
                                        style={disabledTer === true
                                            ? {color: "#FAFAFF"}
                                            : {color: "gray"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={terca24Checked} onChange={() => handleCheckboxChangeTer('terca24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={tercaFecChecked} onChange={() => handleCheckboxChangeTer('tercaFec')}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper'>
                                <div className='value' style={{borderRight: '1px solid gray'}}>
                                    <h3>
                                        Quarta feira:
                                    </h3>
                                </div>
                                <div className='value'>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={quarta}
                                        onChange={handleQuarta}
                                        disabled={disabledQuar}
                                        style={disabledQuar === true
                                            ? {color: "#FAFAFF"}
                                            : {color: "gray"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={quarta24Checked} onChange={() => handleCheckboxChangeQuar('quarta24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={quartaFecChecked} onChange={() => handleCheckboxChangeQuar('quartaFec')}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper'>
                                <div className='value' style={{borderRight: '1px solid gray'}}>
                                    <h3>
                                        Quinta feira:
                                    </h3>
                                </div>
                                <div className='value'>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={quinta}
                                        onChange={handleQuinta}
                                        disabled={disabledQuin}
                                        style={disabledQuin === true
                                            ? {color: "#FAFAFF"}
                                            : {color: "gray"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={quinta24Checked} onChange={() => handleCheckboxChangeQuin('quinta24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={quintaFecChecked} onChange={() => handleCheckboxChangeQuin('quintaFec')}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper'>
                                <div className='value' style={{borderRight: '1px solid gray'}}>
                                    <h3>
                                        Sexta feira:
                                    </h3>
                                </div>
                                <div className='value'>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={sexta}
                                        onChange={handleSexta}
                                        disabled={disabledSex}
                                        style={disabledSex === true
                                            ? {color: "#FAFAFF"}
                                            : {color: "gray"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={sexta24Checked} onChange={() => handleCheckboxChangeSex('sexta24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={sextaFecChecked} onChange={() => handleCheckboxChangeSex('sextaFec')}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper'>
                                <div className='value' style={{borderRight: '1px solid gray'}}>
                                    <h3>
                                        Sabado:
                                    </h3>
                                </div>
                                <div className='value'>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={sabado}
                                        onChange={handleSabado}
                                        disabled={disabledSab}
                                        style={disabledSab === true
                                            ? {color: "#FAFAFF"}
                                            : {color: "gray"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={sabado24Checked} onChange={() => handleCheckboxChangeSab('sabado24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={sabadoFecChecked} onChange={() => handleCheckboxChangeSab('sabadoFec')}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='line'>
                            <div className='working-hours-wrapper' style={{borderRadius: "0 0 10px 10px"}}>
                                <div className='value' style={{
                                    borderRadius: "0 0 0 10px",
                                    borderRight: '1px solid gray',
                                    borderBottom: '0'
                                }}>
                                    <h3>
                                        Domingo:
                                    </h3>
                                </div>
                                <div className='value' style={{borderRadius: "0 0 10px 0", borderBottom: '0'}}>
                                    <InputMask
                                        mask={`99:99h ás 99:99h`}
                                        placeholder='PREENCHER'
                                        value={domingo}
                                        onChange={handleDomingo}
                                        disabled={disabledDom}
                                        style={disabledDom === true
                                            ? {color: "#FAFAFF", borderRadius: "0 0 10px 0"}
                                            : {color: "gray", borderRadius: "0 0 10px 0"}
                                        }
                                    />
                                </div>
                            </div>

                            <div className='input-wrapper'>
                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={domingo24Checked} onChange={() => handleCheckboxChangeDom('domingo24')}></input>
                                    </div>
                                </div>

                                <div className='input-value'>
                                    <div className={'checkbox-wrapper'}>
                                        <input type="checkbox" className={'checkbox'} checked={domingoFecChecked} onChange={() => handleCheckboxChangeDom('domingoFec')}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <SendButton1 submit={handleSendCalendar}/>
                </div>
            </SixthSection>

            <SeventhSection>
                <div className='seventh-wrapper'>
                    <h1>Gostaria de adicionar sua chave PIX no site?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setShowChavePix(true)}>Adicionar chave PIX</button>
                        <button onClick={() => setShowChavePix(false)}>Não adicionar</button>
                    </div>

                    {showChavePix === false ? (
                        <></>
                    ) : (
                        <>
                            <input type="text" onChange={handleChavePix}/>
                            {/* <SendButton1 submit={updateChavePix}/> */}
                        </>
                    )}

                </div>
            </SeventhSection>

        </Container>
    )
}

export {Form}
