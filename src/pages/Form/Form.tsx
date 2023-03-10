
import React, { useEffect, useState, createContext} from 'react'
import {useParams} from 'react-router-dom';

import axios from 'axios';

import {Loading, Container, FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection, PicsSection, CoverPhotoSection, SixthSection} from "./styles";

import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';

import LogoGaioMain from '../../assets/logoGaio.png'

import ReactLoading from 'react-loading'

import foto1 from '../../assets/foto1.png'

import { Calendar } from '../Products/Components/Calendar/Calendar';


interface Contact {
    //text content
    description: string;
    products: string;
    call: string;
    history: string;

    //Images
    logo: File;
    backPhoto: string,
    historyPhoto: string,
    offerPhoto: string,
    gallery: string,

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
    qualitydescription1: string,
    qualitydescription2: string,
    qualitydescription3: string,

    //client info
    businessName: string,
    phone: string,
    name: string,
    id: string,
}


export const Contexto = createContext(null)


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
        const [selectLogo, setSelectLogo] = useState(false)
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

          //LOGO - NÃO CONSEGUI FAZER SUBIR PRO BANCO POR NADA NA TERRA.
        const updateLogo = async (logo: File) => {
            const formData = new FormData();
            formData.append('image', logo);
            const response = await axios.post('http://localhost:3000/newUpdateLogo', formData);
            return response.data;
        };

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
                setStreet(`${data.logradouro}`);
                setNeighborhood(`${data.bairro}`);
                setState(data.uf)
                setCity(data.localidade)
                console.log(data)
              });
        }


        //WHATSAPP
        const [ changeWhatsapp, setChangeWhatsapp ] = useState(false);
        const [ whatsApp, setWhatsapp ] = useState<string | undefined >('');

        const getWhatsApp = (event: InputMaskChangeEvent) => {
            const whatsAppValid = event?.target?.value;

            if (whatsAppValid?.length !== 11){
                setWhatsapp(`${whatsAppValid}`)
                return;
            }
        }



        //FOTOS
        const [ backPhoto, setBackPhoto ] = useState<File | null>(null);
        const [ loading2, setLoading2] = useState(false)

        const handleBackPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
            const image = event.target.files;

            setLoading2(true)
            if (image && image.length > 0) {
                setBackPhoto(image[0]);
                setLoading1(false)
            }
        }

        const updateBackPhoto = async (backPhoto: File) => {
            const formData = new FormData();
            formData.append('image', backPhoto);
            const response = await axios.post('/getName', formData);
            return response.data;
        };

        const handleSendImage = async () => {
            setLoading2(true);
            if (backPhoto !== null) {
              await updateBackPhoto(backPhoto);
              setBackPhoto(null);
            }
            setLoading2(false);
        };


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


        //SEGUNDA
        function handleSegunda(event: any){
            setSegunda(event.target.value);
        }

        function handlesegundafec(){
            if(segunda === 'Fechado'){
                setSegunda('')
                setDisabledSeg(false)
            }else{
                setSegunda('Fechado');
                setDisabledSeg(true)
            }
        }
    
        function handlesegunda24(){
            if(segunda === '24 horas'){
                setSegunda('')
                setDisabledSeg(false)
            }else{
                setSegunda('24 horas');
                setDisabledSeg(true)
            }
        }

        //TERCA
        function handleTerca(event: any){
            setTerca(event.target.value);
        }
    
        function handletercfec(){
            if(terca === 'Fechado'){
                setTerca('')
                setDisabledTer(false)
            }else{
                setTerca('Fechado');
                setDisabledTer(true)
            }
        }
    
        function handleterc24(){
            if(terca === '24 horas'){
                setTerca('')
                setDisabledTer(false)
            }else{
                setTerca('24 horas');
                setDisabledTer(true)
            }
        }
    
        //QUARTA
        function handleQuarta(event: any){
            setQuarta(event.target.value);
        }

        function handlequartafec(){
            if(quarta === 'Fechado'){
                setQuarta('')
                setDisabledQuar(false)
            }else{
                setQuarta('Fechado');
                setDisabledQuar(true)
            }
        }
    
        function handlequarta24(){
            if(quarta === '24 horas'){
                setQuarta('')
                setDisabledQuar(false)
            }else{
                setQuarta('24 horas');
                setDisabledQuar(true)
            }
        }
    
        //QUINTA
        function handleQuinta(event: any){
            setQuinta(event.target.value);
        }

        function handlequintafec(){
            if(quinta === 'Fechado'){
                setQuinta('')
                setDisabledQuin(false)
            }else{
                setQuinta('Fechado');
                setDisabledQuin(true)
            }
        }
    
        function handlequinta24(){
            if(quinta === '24 horas'){
                setQuinta('')
                setDisabledQuin(false)
            }else{
                setQuinta('24 horas');
                setDisabledQuin(true)
            }
        }
    
        //SEXTA
        function handleSexta(event: any){
            setQuarta(event.target.value);
        }

        function handlesextafec(){
            if(sexta === 'Fechado'){
                setSexta('')
                setDisabledSex(false)
            }else{
                setSexta('Fechado');
                setDisabledSex(true)
            }
        }
    
        function handlesexta24(){
            if(sexta === '24 horas'){
                setSexta('')
                setDisabledSex(false)
            }else{
                setSexta('24 horas');
                setDisabledSex(true)
            }
        }
    
        //SABADO
        function handleSabado(event: any){
            setQuarta(event.target.value);
        }

        function handlesabadofec(){
            if(sabado === 'Fechado'){
                setSabado('')
                setDisabledSab(false)
            }else{
                setSabado('Fechado');
                setDisabledSab(true)
            }
        }
    
        function handlesabado24(){
            if(sabado === '24 horas'){
                setSabado('')
                setDisabledSab(false)
            }else{
                setSabado('24 horas');
                setDisabledSab(true)
            }
        }
    
        //DOMINGO
        function handleDomingo(event: any){
            setQuarta(event.target.value);
        }

        function handledomingofec(){
            if(domingo === 'Fechado'){
                setDomingo('')
                setDisabledDom(false)
            }else{
                setDomingo('Fechado');
                setDisabledDom(true)
            }
        }
    
        function handledomingo24(){
            if(domingo === '24 horas'){
                setDomingo('')
                setDisabledDom(false)
            }else{
                setDomingo('24 horas');
                setDisabledDom(true)
            }
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
            
                            <p>Não se esqueça que o texto da tela inicial do site é branco.</p>
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
                                mask={'99999-999'}
                                onChange={(e) => getAddress(e)}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Rua:</label>
                        <input
                            value={street}
                            onChange={(e) => setStreet(e.target.value)}
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
                            placeholder={'Opcional'}
                        />
                    </div>

                    <div>
                        <label>Cidade:</label>
                        <input
                            value={city}
                            onChange={(text) => setCity(text.target.value)}
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
                        <label>Bairro:</label>
                        <input
                            value={neighborhood}
                            onChange={(e) => setNeighborhood(e.target.value)}
                        />
                    </div>

                </div>
            </FourthSection>

            <FifthSection>
                <div className='fifht-wrapper'>
                    <h1>Gostaria de trocar o número de WhatsApp do site?</h1>
                    <div className={'button-wrapper'}>
                        <button onClick={() => setChangeWhatsapp(true)}>Trocar número de WhatsApp</button>
                    </div>

                    { changeWhatsapp === false ? (
                        <></>
                    ) : (
                        <>
                            <div className='changeWhatsApp'>
                                <InputMask
                                    mask={'(99)99999-9999'}
                                    onChange={(e) => getWhatsApp(e)}
                                />
                            </div>
                            <h1>{whatsApp}</h1>

                        </>
                    )

                    }

                </div>
            </FifthSection>

            <PicsSection>
                <CoverPhotoSection>
                    <div className='cover-photo-section-wrapper'>
                        <h1>Foto de capa</h1>
                        <p>A foto que vem depois da descrição do seu negócio.</p>

                        {loading2 == true ? 
                            <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>
                        : 
                        <>
                            {backPhoto === null ? <img src={foto1}/> : <img src={URL.createObjectURL(backPhoto)}/> }
                        </>
                        }

                        <input type="file" accept="image/*" onChange={handleBackPhoto} />
                        <button onClick={handleSendImage}>Atualizar foto de capa</button>
                    </div>
                </CoverPhotoSection>

            </PicsSection>

            <SixthSection>
                <div className='sixth-wrapper'>

                <div className='table'>
                    <div className='header'>
                        <h2>Horário de funcionamento</h2>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Segunda feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={segunda}
                            onChange={handleSegunda}
                            disabled={disabledSeg}
                            style={ disabledSeg === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Terça feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={terca}
                            onChange={handleTerca}
                            disabled={disabledTer}
                            style={ disabledTer === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Quarta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={quarta}
                            onChange={handleQuarta}
                            disabled={disabledQuar}
                            style={ disabledQuar === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Quinta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={quinta}
                            onChange={handleQuinta}
                            disabled={disabledQuin}
                            style={ disabledQuin === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Sexta feira:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={sexta}
                            onChange={handleSexta}
                            disabled={disabledSex}
                            style={ disabledSex === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Sábado:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={sabado}
                            onChange={handleSabado}
                            disabled={disabledSab}
                            style={ disabledSab === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>

                    <div className='line'>
                        <div className='value' style={{ borderRight: '1px solid #000' }}>
                            <h1>
                                Domingo:
                            </h1>
                        </div>
                        <div className='value'>
                            <InputMask
                            mask={`99:99h ás 99:99h`}
                            placeholder='PREENCHER'
                            value={domingo}
                            onChange={handleDomingo}
                            disabled={disabledDom}
                            style={ disabledDom === true
                                  ? { color: "#FAFAFF"}
                                  : { color: "#C0C0C0"}
                                }
                            />
                        </div>
                    </div>
                </div>

                <div className='options'>
                    <div className='optionsHeader'>
                        <h4>24hrs</h4>
                        <h4>Fechado</h4>
                    </div>
                    <div className='optionsWrapper'>
                    <div className='checkboxWrapper' id='segunda'>
                        <label>
                            <input type="checkbox" onInput={handlesegunda24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlesegundafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='terca'>
                        <label>
                            <input type="checkbox" onClick={handleterc24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handletercfec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='quarta'>
                        <label>
                            <input type="checkbox" onClick={handlequarta24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlequartafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='quinta'>
                        <label>
                            <input type="checkbox" onClick={handlequinta24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                        <input type="checkbox" onClick={handlequintafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='sexta'>
                        <label>
                            <input type="checkbox" onClick={handlesexta24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlesextafec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='sabado'>
                       <label>
                            <input type="checkbox" onClick={handlesabado24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handlesabadofec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    <div className='checkboxWrapper' id='domingo'>
                        <label>
                            <input type="checkbox" onClick={handledomingo24}></input>
                            <span className='checkbox'></span>
                        </label>
                        <label>
                            <input type="checkbox" onClick={handledomingofec}></input>
                            <span className='checkbox'></span>
                        </label>
                    </div>
                    </div>
                </div>


                </div>
            </SixthSection>

        </Container>
    )
}

export {Form}
