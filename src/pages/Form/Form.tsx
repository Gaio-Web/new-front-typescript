import React, { useCallback, useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

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
	ImagePreview,
} from './styles';

import { InputMask, InputMaskChangeEvent } from 'primereact/inputmask';

import { FiUpload, FiSend } from 'react-icons/fi';
import { FaExternalLinkAlt } from 'react-icons/fa';

import SendButton1 from '../Products/Components/SendButton';

import LogoGaioMain from '/assets/logoGaio.png';

import ReactLoading from 'react-loading';

import foto1 from '/assets/foto1.webp';
import foto2 from '/assets/foto2.webp';
import foto3 from '/assets/foto3.webp';

import FileBase64 from 'react-file-base64';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { Sixthsection } from './Sections/SixthSection/SixthSection';
import { LoadingComponent } from '../Components/LoadingComponent/LoadingComponent';
import { StyledButton } from './Components/StyledButton';

interface Contact {
  //text content
  description: string;
  products: string;
  call: string;
  history: string;

  //Images
  logo: File;
  offerPhoto: string;
  gallery: string;

  // PHOTOS
  // photo_position: string | number;
  photos: {
    photo1: {
      base64: string;
      type: string;
    };
    photo2: {
      base64: string;
      type: string;
    };
    photo3: {
      base64: string;
      type: string;
    };
    logo: {
      base64: string;
      type: string;
    };
  };

  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
    neighborhood: string;
  };

  //Color
  color: string;

  //WhatsApp
  whatsApp: string;

  //calendar info
  segunda: string;
  terca: string;
  quarta: string;
  quinta: string;
  sexta: string;
  sabado: string;
  domingo: string;

  //?
  name_quality1: string;
  name_quality2: string;
  name_quality3: string;

  //qualities
  qualities1: string;
  qualities2: string;
  qualities3: string;
  quality1: string;
  quality2: string;
  quality3: string;
  qualitydescription1: string;
  qualitydescription2: string;
  qualitydescription3: string;

  //client info
  businessName: string;
  phone: string;
  name: string;
  id: string;
}

function Form(this: any): JSX.Element {
	const [image, setImage] = useState<any>('');
	const [cover, setCover] = useState<any>('');
	const [hist, setHist] = useState<any>('');
	const [offer, setOffer] = useState<any>('');

	const [uploaded, setUploaded] = useState<boolean>(false);

	const { id } = useParams();

	document.title = id!;

	const getImage = (files: any) => {
		setImage(files);
	};
	const getCover = (files: any) => {
		setCover(files);
	};
	const getHist = (files: any) => {
		setHist(files);
	};
	const getOffer = (files: any) => {
		setOffer(files);
	};


	const [data, setData] = useState<Contact | null>(null);
	const [loading, setLoading] = useState<boolean>(false);



	const fetchDataForms = useCallback ( async () => {
		try {
			const response = await axios.get<Contact>(
				`https://gaio-web-new-api-test.onrender.com/findByPhone/${id}`
			);
			setData(response.data);
		} catch (err) {
			console.error(err);
		}
	},[]);

	useEffect(() => {
		// setLoading(true);
		fetchDataForms()
			.then(() => {console.log('Data fetched successfully!'), setLoading(false);})
			.catch((err) => console.error(err));
	}, [fetchDataForms]);

	useEffect(() => {
		if(uploaded == true){
			fetchDataForms().then(() => {
				setUploaded(false);
				setImage('');
				setCover('');
				setHist('');
				setOffer('');
			});
		}
	}, [uploaded]);

	//IMAGENS//FOTOS
	const uploadPhoto = async (photoPosition: string) => {
		const teste = () => {
			if(photoPosition == '4')  {
				return image.base64;
			}
			else if(photoPosition == '1') {
				return cover.base64;
			}
			else if(photoPosition == '2') {
				return hist.base64;
			}
			else if(photoPosition == '3') {
				return offer.base64;
			}
		};
		const body = JSON.stringify({
			phone: id,
			photo_position: photoPosition,
			base64: teste(),
			type: teste(),
		});
		const response = await fetch(
			'https://gaio-web-new-api-test.onrender.com/upload',
			{
				method: 'POST',
				mode: 'cors',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*',
				},
				body: body,
			}
		);
		if (response.ok) {
			// A resposta foi bem-sucedida
			setUploaded(true),
			toast.success('Imagem enviada com sucesso!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		} else {
			// A resposta foi mal-sucedida
			console.log('Houve um problema ao enviar a foto.');
			toast.error('Houve um problema ao enviar a imagem!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}
	};

	//Logo
	const [selectLogo, setSelectLogo] = useState(false);
	const [isLoading1, setLoading1] = useState(false);

	//CORES
	const [colorized, setColorized] = useState(false);
	const [color, setColor] = useState('#034AA3');

	const [options, setoptions] = useState([
		{ color: '#EB596E', title: 'Carmine' },
		{ color: '#F4972B', title: 'Laranja' },
		{ color: '#FD3997', title: 'Rosa' },
		{ color: '#5E8B7E', title: 'Verde' },
		{ color: '#00ADB5', title: 'Azul' },
		{ color: '#6868AC', title: 'Lilás' },
		{ color: '#6B0BE6', title: 'Roxo' },
		{ color: '#000', title: 'Preto' },
		{ color: '#B4A5A5', title: 'Areia' },
		{ color: '#D80C0C', title: 'Vermelho' },
		{ color: '#25D8A7', title: 'Turquesa' },
		{ color: '#6D6D6D', title: 'Cinza' },
	]);

	const handleSendColor = async () => {
		const body = {
			phone: id,
			color: color,
		};
		try {
			const response = await fetch(
				'https://gaio-web-new-api-test.onrender.com/updateColor',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body),
				}
			);
			const data = await response.json();

		} catch (error) {
			console.log(error);
		}
	};

	//ENDERECO
	const [disableAdress, setDisableAdress] = useState(false);
	const [zip, setZip] = useState<string>('');
	const [street, setStreet] = useState<string>('');
	const [state, setState] = useState<string>('');
	const [number, setNumber] = useState<string>('');
	const [complement, setComplement] = useState<string>('');
	const [neighborhood, setNeighborhood] = useState<string>('');
	const [city, setCity] = useState<string>('');

	const getAddress = async (event: InputMaskChangeEvent): Promise<void> => {
		const cepvalid = event.target?.value?.replace(/[^0-9]/g, '');

		if (cepvalid?.length !== 8) {
			return;
		}

		await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
			.then((res) => res.json())
			.then((data) => {
				setZip(`${data.cep}`);
				setStreet(`${data.logradouro}`);
				setNeighborhood(`${data.bairro}`);
				setState(data.uf);
				setCity(data.localidade);
			});
	};

	const handleSendAddress = async () => {
		const body = JSON.stringify({
			phone: id,
			zip_code: zip, // CEP
			street: street, // rua
			number: number, // numero
			complement: complement, // complemento
			city: city, // cidade
			state: state, // estado
			neighborhood: neighborhood, //bairro
		});

		const response = await fetch(
			'https://gaio-web-new-api-test.onrender.com/fillAddress',
			{
				headers: {
					'Content-Type': 'application/json',
				},
				method: 'POST',
				body: body,
			}
		);
		if (response.ok) {
			// A resposta foi bem-sucedida
			setUploaded(true),
			toast.success('Endereço salvo com sucesso!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		} else {
			// A resposta foi mal-sucedida
			console.log('Houve um problema ao enviar a foto.');
			toast.error('Houve um problema ao salvar o endereço!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			});
		}
		const result = await response.json();
	};

	//WHATSAPP
	const [changeWhatsapp, setChangeWhatsapp] = useState(false);
	const [whatsApp, setWhatsapp] = useState<string | undefined>('');

	const getWhatsApp = (event: InputMaskChangeEvent) => {
		const whatsAppValid = event?.target?.value;

		if (whatsAppValid?.length !== 11) {
			setWhatsapp(`55${whatsAppValid?.replace(/[()-]/g, '')}`);

			return;
		}
	};

	const handleSendWhatsApp = async () => {
		const body = {
			phone: id,
			whatsApp: whatsApp,
		};
		try {
			const response = await fetch(
				'https://gaio-web-new-api-test.onrender.com/updateWhatsApp',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(body),
				}
			);
			const data = await response.json();
		} catch (error) {
			console.log(error);
		}
	};

	//FOTOS

	const [loading2, setLoading2] = useState(false);

	//CHAVE PIX
	const [showChavePix, setShowChavePix] = useState(false);
	const [chavePix, setChavePix] = useState('');

	const handleChavePix = (event: any) => {
		const updatedChavePix = event?.target?.value;

		setChavePix(updatedChavePix);
	};

	if (loading) {
		return (
			<Loading>
				<div className={'loading-wrapper'}>
					<h1>Carregando...</h1>
				</div>
			</Loading>
		);
	}

	else if (!data) {
		return <p>Registro não encontrado</p>;
	}

	const handleLinkClick = () => {
		// setShowForm(true);
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		event.preventDefault();
		// eslint-disable-next-line quotes
		const url = `https://meusiteai.com/${data.name.replace(/ /g, "-")}`;
		window.open(url, '_blank');
	};

	return (
		<Container>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>

			<FirstSection>
				<div className={'first-wrapper'}>
					<h1>Obrigado por confiar no nosso serviço!</h1>
					<p>
            Agora, vamos finalizar seu site cadastrando suas fotos e as
            informações opcionais.
					</p>
					<button className={'send-to-site'} onClick={handleLinkClick}>Clique e veja o seu site <FaExternalLinkAlt /></button>
				</div>
			</FirstSection>

			<SecondSection>
				<div className={'second-wrapper'}>
					{data.photos.logo.base64 == '' ? (
						<>
							<h1>Você tem uma logo que gostaria de usar no site?</h1>
							<div className={'button-wrapper'}>
								<button onClick={() => setSelectLogo(true)}>USAR MINHA LOGO</button>
								<button onClick={() => setSelectLogo(false)}>NÃO USAR LOGO</button>
							</div>
						</>
					):(<>
						<h1>Você gostaria de mudar a sua logo?</h1>
					</>)}
					{selectLogo === false && data.photos.logo.base64 == '' ? (
						<></>
					) : (
						<>
							<div className="image-update-wrapper">
								{/*TROCAR POR LOGO*/}
								<div className='teste'>
									{data.photos.logo.base64 === '' ? (
										<img src={LogoGaioMain} alt="foto da logo-marca" />
									) : (
										<img
											className="pgImg"
											src={data.photos.logo.base64}
											alt={'foto da logo-marca'}
										/>
									)}

									<label className="custom-file-upload" >
										<FiUpload color={'#fff'} size={24} />
										<FileBase64 multiple={false} onDone={getImage} />
                  Escolher logo
									</label>
									<ImagePreview >
										{image && <img src={image.base64} alt='preview' />}
										{image ? (
											<StyledButton fetched={uploaded} placeHolder='Enviar' clickedPlaceHolder='Eviando...' onClick={() => uploadPhoto('4')} color={'#0baf37'} disabledColor='#c4c4c4'/>
										) : (
											<></>
										)}
									</ImagePreview>
								</div>
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

					{colorized === true ? (
						<div className="color-picker" style={{ backgroundColor: color }}>
							<h1>Escolha a cor dominante do seu site</h1>

							<div className="options">
								{options.map((opt) => (
									// eslint-disable-next-line react/jsx-key
									<div className={color === opt.color ? 'non-selected' : 'selected'} onClick={() => setColor(opt.color)} >
										<div className="color-option" style={{ backgroundColor: opt.color }} />
										<h1>{opt.title}</h1>
									</div>
								))}
							</div>

							<p>
                Não se esqueça que o texto da tela inicial do site é branco.
							</p>
							<SendButton1 submit={handleSendColor} />
						</div>
					) : (
						<></>
					)}
				</div>
			</ThirdSection>

			<FourthSection>
				<div className="fourth-wrapper">
					{data.address.zipCode == '' ? (<>
						<h1>Gostaria de adicionar endereço no seu site?</h1>
					</>):(<>
						<h1>Gostaria de mudar o endereço no seu site?</h1>
						<div
							style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
						>
							<h3 style={{margin: '0', color: '#033a7c'}}>Endereço atual:</h3>
							<div>
								<p
									style={{width: '100%', textAlign: 'justify'}}
								>{data.address.street}, {data.address.number}, {data.address.complement}, {data.address.neighborhood}, {data.address.city}/{data.address.state}, {data.address.zipCode}</p>
							</div>
						</div>
					</>)}
					<div className={'button-wrapper'}>
						<button onClick={() => setDisableAdress(true)}>
							{data.address.zipCode == '' ? (<>
								<p style={{margin: '0'}}>
                ADICIONAR ENDEREÇO
								</p>
							</>):(
								<>
									<p style={{margin: '0'}}>
                  MUDAR ENDEREÇO
									</p></>
							)}
						</button>
						<button onClick={() => setDisableAdress(false)}>
              SEM ENDEREÇO
						</button>
					</div>

					{disableAdress === false ? (
						<></>
					) : (
						<>
							<div className="main-adress-wrapper">
								<div className="adress-wrapper">
									<div className="adress-input-wrapper">
										<label> Seu CEP:</label>
										<InputMask
											mask={'99999-999'}
											value={data.address.zipCode}
											onChange={(e) => getAddress(e)}
										/>
									</div>

									<div className="adress-input-wrapper">
										<label>Rua:</label>
										<input
											value={street}
											onChange={(e) => setStreet(e.target.value)}
										/>
									</div>
								</div>

								<div className="smaller-input-wraper">
									<div>
										<label>Número:</label>
										<input
											value={number}
											onChange={(text) => setNumber(text.target.value)}
											className="smaller-input"
										/>
									</div>

									<div>
										<label>Complemento:</label>
										<input
											value={complement}
											onChange={(text) => setComplement(text.target.value)}
											placeholder={'Opcional'}
											className="smaller-input"
										/>
									</div>
								</div>

								<div className="adress-wrapper">
									<div className="smaller-input-wraper">
										<div>
											<label>Cidade:</label>
											<input
												value={city}
												onChange={(text) => setCity(text.target.value)}
											/>
										</div>
										<div>
											<label>Bairro:</label>
											<input
												value={neighborhood}
												onChange={(text) => setNeighborhood(text.target.value)}
											/>
										</div>
									</div>

									<div className="adress-input-wrapper">
										<label>Estado:</label>
										<input
											value={state}
											onChange={(text) => setState(text.target.value)}
										/>
									</div>
								</div>
								<button
									className='send-address-btn'
									onClick={() => {
										handleSendAddress();
									}}
								>
                Salvar endereço
								</button>
							</div>

						</>
					)}
				</div>
			</FourthSection>

			<FifthSection>
				<div className="fifth-wrapper">
					<h1>Gostaria de trocar o número de WhatsApp do site?</h1>
					<div className={'button-wrapper'}>
						<button onClick={() => setChangeWhatsapp(true)}>
              Trocar WhatsApp
						</button>
						<button onClick={() => setChangeWhatsapp(false)}>
              Manter número atual
						</button>
					</div>

					{changeWhatsapp === false ? (
						<></>
					) : (
						<>
							<div className="changeWhatsApp">
								<InputMask
									mask={'(99)99999-9999'}
									placeholder="99 99999-9999"
									onChange={(e) => getWhatsApp(e)}
								/>
							</div>

							<SendButton1 submit={handleSendWhatsApp} />
						</>
					)}
				</div>
			</FifthSection>

			<Sixthsection userID={data.phone}/>

			<PicsSection>
				<h1 className="picsTitle">Vamos editar as fotos do seu site.</h1>
				{/*back*/}
				<CoverPhotoSection>
					<div className="photo-section-wrapper">
						<h1>Foto de capa</h1>
						<p className="photoText">
              A foto que vem depois da descrição do seu negócio.
						</p>

						<div className="img-wrapper">
							{data.photos.photo1.base64 === '' ? (
								<img src={foto1} alt="foto da capa" />
							) : (
								<img
									className="pgImg"
									src={data.photos.photo1.base64}
									alt={'foto-1'}
								/>
							)}
						</div>

						<label className="custom-file-upload">
							<FiUpload color={'#fff'} size={24} />
							<FileBase64
								multiple={false}
								onDone={getCover}
							/>
							<p className="uploadText">Fazer upload</p>
						</label>
						<ImagePreview>
							{cover && <img src={cover.base64} alt='preview' />}
							{cover ? (
								<StyledButton fetched={uploaded} placeHolder='Enviar' clickedPlaceHolder='Eviando...' onClick={() => uploadPhoto('1')} color={'#0baf37'} disabledColor='#c4c4c4'/>
							) : (
								<></>
							)}
						</ImagePreview>

						{/* <SendButton1
							submit={() => {
								uploadPhoto('1');
							}} */}
						{/* /> */}
					</div>
				</CoverPhotoSection>
				{/*history*/}
				<CoverPhotoSection>
					<div className="photo-section-wrapper">
						<h1>Foto da história</h1>
						<p className="photoText">
              A foto que vem depois da descrição do seu negócio.
						</p>
						<div className="img-wrapper">
							{data.photos.photo2.base64 === '' ? (
								<img src={foto2} alt="foto da história" />
							) : (
								<img src={data.photos.photo2.base64} alt="foto da capa" />
							//trocar por backPhoto
							)}
						</div>

						<label className="custom-file-upload">
							<FiUpload color={'#fff'} size={24} />
							<FileBase64 multiple={false} onDone={getHist} />
							<p className="uploadText">Fazer upload</p>
						</label>

						<ImagePreview >
							{hist && <img src={hist.base64} alt='preview' />}
							{hist ? (
								<StyledButton fetched={uploaded} placeHolder='Enviar' clickedPlaceHolder='Eviando...' onClick={() => uploadPhoto('2')} color={'#0baf37'} disabledColor='#c4c4c4'/>
							) : (
								<></>
							)}
						</ImagePreview>
						{/* <div className='img-preview'>
							{hist && <img src={hist.base64} alt='preview' />}
						</div>
						<SendButton1
							submit={() => {
								uploadPhoto('2');
							}}
						/> */}
					</div>
				</CoverPhotoSection>
				{/*offer*/}
				<CoverPhotoSection>
					<div className="photo-section-wrapper">
						<h1>Foto das ofertas</h1>
						<p className="photoText">
              A foto que vem depois da descrição do seu negócio.
						</p>
						<div className="img-wrapper">
							{data.photos.photo3.base64 === '' ? (
								<img src={foto3} alt="foto das ofertas" />
							) : (
								<img src={data.photos.photo3.base64} alt={'foto das ofertas'} />
							)}
						</div>

						<label className="custom-file-upload">
							<FiUpload color={'#fff'} size={24} />
							<FileBase64 multiple={false} onDone={getOffer} />
							<p className="uploadText">Fazer upload</p>
						</label>
						<ImagePreview >
							{offer && <img src={offer.base64} alt='preview' />}
							{offer ? (
								<StyledButton fetched={uploaded} placeHolder='Enviar' clickedPlaceHolder='Eviando...' onClick={() => uploadPhoto('3')} color={'#0baf37'} disabledColor='#c4c4c4'/>
							) : (
								<></>
							)}
						</ImagePreview>
					</div>
				</CoverPhotoSection>
			</PicsSection>

			<SeventhSection>
				<div className="seventh-wrapper">
					<h1>Gostaria de adicionar sua chave PIX no site?</h1>
					<div className={'button-wrapper'}>
						<button onClick={() => setShowChavePix(true)}>
              Adicionar chave PIX
						</button>
						<button onClick={() => setShowChavePix(false)}>
              Não adicionar
						</button>
					</div>

					{showChavePix === false ? (
						<></>
					) : (
						<>
							<input type="text" onChange={handleChavePix} />
							{/* <SendButton1 submit={updateChavePix}/> */}
						</>
					)}
				</div>
			</SeventhSection>
		</Container>
	);
}

export { Form };
