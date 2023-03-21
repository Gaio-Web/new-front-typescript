import { useEffect, useState } from 'react';
import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import {
  Container,
  Loading,
} from './styles';

import ReactLoading from 'react-loading';

//SECTIONS LAZY LOADING
const FirstSection = lazy(() => import ('./Sections/FirstSection/FirstSection').then(module => {
  return {default: module.FirstSection};
}));

const SecondSection = lazy(() => import ('./Sections/SecondSection/SecondSection').then(module => {
  return {default: module.SecondSection};
}));

const ThirdSection = lazy(() => import ('./Sections/ThirdSection/ThirdSection').then(module => {
  return {default: module.ThirdSection};
}));

const FifthSection = lazy(() => import ('./Sections/FifthSection/FifthSection').then(module => {
  return {default: module.FifthSection};
}));

const Calendar = lazy(() => import ('../Products/Components/Calendar/Calendar').then(module => {
  return {default: module.Calendar};
}));

const SeventhSection = lazy(() => import ('./Sections/SeventhSection/SevenSection').then(module => {
  return {default: module.SeventhSection};
}));

const FooterSection = lazy(() => import ('./Sections/FooterSection/FooterSection').then(module => {
  return {default: module.FooterSection};
}));

import { HeaderSection } from './Sections/HeaderSection/HeaderSection';

//import LogoGaioMain from '../../assets/logoGaio.png';
import Photo1 from '../../assets/foto1.png';
import Photo2 from '../../assets/foto2.png';
import Photo3 from '../../assets/foto3.png';

//import { Carousel } from './Components/Carousel/Carousel';

import {Helmet} from 'react-helmet';

import { useParams } from 'react-router-dom';

import Aos from 'aos';
import 'aos/dist/aos.css';

interface Contact {
  //Nome
  name: string;

  // PHOTOS
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

  // Address
  address: {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    city: string;
    state: string;
  };

  color: string;

  whatsApp: string;

  //text content
  description: string;
  products: string;
  call: string;
  history: string;

  //Images
  logo: File;
  historyPhoto: string;
  offerPhoto: string;
  gallery: string;

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
  id: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  phone: string;
}

function FindByPhone(): JSX.Element {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const { id } = useParams();

  // const uniqueName = id!.replace(/-/g, " ")
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const uniqueName = id!.replace(/\s+/g, '-');

  document.title = uniqueName;

  // // @ts-ignore
  // let id:string = useParams();
  //
  // const setNewString = id.replace(/-/g,"");
  // document.title = setNewString

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      console.log('id: ', id);
      try {
        const response = await axios.get<Contact>(
          `https://gaio-web-new-api-test.onrender.com/findByName/${uniqueName}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData()
      .then(() => console.log('Data fetched successfully!'))
      .catch((error) => console.error(error));
  }, []);

  const handleWhatsClick = () => {
    // setShowForm(true);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.preventDefault();

    if (data?.whatsApp == '') {
      const url = `https://wa.me/${data?.phone}`;
      window.open(url, '_blank');
    } else {
      const url = `https://wa.me/${data?.whatsApp}`;
      window.open(url, '_blank');
    }
  };

  if (loading) {
    return (
      <Loading>
        <div className={'loading-wrapper'}>
          <h1>Carregando...</h1>
          <ReactLoading type={'spin'} color={'#fff'} height={200} width={100}/>
        </div>
      </Loading>
    );
  }

  else if (!data) {
    return <p>Registro não encontrado</p>;
  }

  return (
    <Container>
      <Helmet>
        <title>{data.name}</title>
        <meta name="theme-color" content={data.color}/>
        <meta property="title" content={data.name}/>
        <meta name="description" content={data?.description} />
        <meta name="image:secure_url" itemProp="image" content={data.photos.logo.base64}/>


        <meta name="og:title" content={data.name}/>
        <meta property="og:description" content={data?.description} />
        <meta name="og:image:secure_url" itemProp="image" content={data.photos.logo.base64}/>
        <meta property="og:type" content="website" />
      </Helmet>


      <HeaderSection
        photoBase64={data.photos.logo.base64}
        name={data.name}
        color={data.color}
      />

      <FirstSection
        backgroundColor={data.color}
        call={data.call.replace(/^"|"$/g, '')}
        description={data.description}
        photoBase64={data.photos.photo1.base64}
        src={Photo1}
        onClick={handleWhatsClick}
      />

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <SecondSection
          color={data.color}
          products={data.products}
          photoBase64={data.photos.photo3.base64}
          src={Photo3}
          onClick={handleWhatsClick}
        />
      </Suspense>

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <ThirdSection
          color={data.color}
          quality1={data.quality1.charAt(0).toUpperCase() + data.quality1.slice(1)}
          qualitydescription1={data.qualitydescription1.replace(/^"|"$/g, '')}
          quality2={data.quality2.charAt(0).toUpperCase() + data.quality2.slice(1)}
          qualitydescription2={data.qualitydescription2}
          quality3={data.quality3.charAt(0).toUpperCase() + data.quality2.slice(1)}
          qualitydescription3={data.qualitydescription3.replace(/^"|"$/g, '')}
          onClick={handleWhatsClick}
        />
      </Suspense>

      {/* <FourthSection>
            <div className={'fourth-wrapper'}>
                <h1 style={{color: data.color}}>Galeria de fotos</h1>
                <Carousel/>
                   <button onClick={handleWhatsClick} >Fale com a gente</button>
            </div>
            </FourthSection> */}

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <FifthSection
          color={data.color}
          history={data.history.replace(/^"|"$/g, '')}
          photoBase64={data.photos.photo2.base64}
          src={Photo2}
          onClick={handleWhatsClick}
        />
      </Suspense>

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <Calendar
          segunda={`${data.segunda}`}
          terca={`${data.terca}`}
          quarta={`${data.quarta}`}
          quinta={`${data.quinta}`}
          sexta={`${data.sexta}`}
          sabado={`${data.sabado}`}
          domingo={`${data.domingo}`}
        />
      </Suspense>

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <SeventhSection
          zipCode={data.address.zipCode}
          street={data.address.street}
          number={data.address.number}
          city={data.address.city}
          complement={data.address.complement}
          state={data.address.state}
          color={data.color}
          backgroundColor={data.color}
          onClick={handleWhatsClick}
        />
      </Suspense>

      <FooterSection/>
    </Container>
  );
}

export default FindByPhone;
