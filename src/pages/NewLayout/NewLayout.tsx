import { useEffect, useState, useRef } from 'react';
import React, { lazy, Suspense } from 'react';
import axios from 'axios';
import {
  Container,
  Loading,
  FourthSection
} from './styles';

import { Carousel } from './Components/Carousel/Carousel';

import Loader from './Components/Loader/Loader';
import Typewriter from './Components/ErrorPage';

import ReactLoading from 'react-loading';

import storage from '../../../firebaseConfig';
import {ref, getDownloadURL, listAll } from 'firebase/storage';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

//SECTIONS LAZY LOADING
const FirstSection = lazy(() => import ('./Sections/sec1/FirstSection').then(module => {
  return {default: module.FirstSection};
}));

const SecondSection = lazy(() => import ('./Sections/sec2/SecondSection').then(module => {
  return {default: module.SecondSection};
}));

const ThirdSection = lazy(() => import ('./Sections/sec3/ThirdSection').then(module => {
  return {default: module.ThirdSection};
}));

const FifthSection = lazy(() => import ('./Sections/sec5/FifthSection').then(module => {
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
import Slider from './Components/NewCarousel/NewCarousel';

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
  isAutonomous: string;
  businessName: string;
  phone: string;
  id: string;

  mainColor: string;
  secondaryColor: string;
  accentColor: string;

  alt_description: string;
  urls: string;

  coverKeyWords: string;
  historyKeyWords: string;
  productsKeyWords: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Props {
  phone: string;
}

function NewLayout(): JSX.Element {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const { id } = useParams();

  // const uniqueName = id!.replace(/-/g, " ")
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const uniqueName = id!.replace(/\s+/g, '-');

  document.title = uniqueName;

  const converted = id;

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
      try {
        const response = await axios.get<Contact>(
          `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/${converted}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData()
      .then(() => {
        console.log('Data fetched successfully!');

      })
      .catch((error) => console.error(error))
      .finally(() => listAllImagesFromFolder());
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

  const [imgsUrls, setImagesurls] = useState<string[]>([]);

  const componentRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  const [haveURL, setHaveURL] = useState<number>(1);

  const listAllImagesFromFolder = async () => {
    let result = undefined;
    let urls = null;
    try {
      const listRef = ref(storage, `${data?.phone}/gallery`);
      const res = await listAll(listRef);
      urls = await Promise.all(res.items.map(getDownloadURL));
      result = urls;

    } catch (error) {
      console.log('Erro ao listar imagens:', error);
    } finally {
      // eslint-disable-next-line no-unsafe-finally
      return(result);
    }
  };

  useEffect(() => {
    setImagesLoaded(false);
    setTimeout(() => {
      listAllImagesFromFolder().then((urls) => {
        if (urls) {
          setImagesurls(urls);
          setImagesLoaded(true);
          setHaveURL(urls.length);
        }
      });
    }, 1000);
  }, [data]);

  useEffect(() => {
    console.log('segundo: ', imgsUrls);
  }, [data]);

  if (loading) {
    return (
      <Loading>
        <div className={'loading-wrapper'}>
          <Stack spacing={1}>
            <div className='skeletonHeaderWrapper'>
              <Skeleton variant="rectangular" width={1500} height={80} />
            </div>

            <div className='skeletonTitleWrapper'>
              <Skeleton className='skeletonTitle' variant="text" sx={{ fontSize: '8rem' }} />
            </div>

            <div className='skeletonTextWrapper'>
              <Skeleton className='skeletonText' variant="text" sx={{ fontSize: '1.5rem' }} />
            </div>

            <div className='skeletonTextWrapper'>
              <Skeleton className='skeletonText' variant="text" sx={{ fontSize: '1.5rem' }} />
            </div>

            <div className='skeletonTextWrapper'>
              <Skeleton className='skeletonText' variant="text" sx={{ fontSize: '1.5rem' }} />
            </div>


            <div className='skeletonImageWrapper'>
              <Skeleton className='skeletonImage' variant="rounded" height={250} />
            </div>

            <div className='skeletonButtonWrapper'>
              <Skeleton className='skeletonButton' variant="rounded" height={60} />
            </div>
          </Stack>

          <div className='fadeWhite'>
            <Loader/>
          </div>

        </div>
      </Loading>
    );
  }

  else if (!data) {
    return (
      <Typewriter/>
    );
  }

  return (
    <Container>

      <HeaderSection
        name={'Atilinha dos códigos'}
      />

      <FirstSection
        mainColor={data.accentColor}
        secondaryColor={data.secondaryColor}
        call={data.call.replace(/^"|"$/g, '')}
        description={data.description}
        photoBase64={data.photos.photo1.base64}
        src={Photo1}
        coverKeyWords={data.coverKeyWords}
      />

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <SecondSection
          isAutonomous={data.isAutonomous}
          mainColor={data.mainColor}
          accentColor={data.accentColor}
          products={data.products}
          photoBase64={data.photos.photo3.base64}
          src={Photo3}
          onClick={handleWhatsClick}
          coverKeyWords={data.coverKeyWords}
        />
      </Suspense>

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <ThirdSection
          mainColor={data.mainColor}
          accentColor={data.accentColor}
          secondaryColor={data.secondaryColor}

          isAutonomous={data.isAutonomous}

          quality1={data.quality1.charAt(0).toUpperCase() + data.quality1.slice(1)}
          qualitydescription1={data.qualitydescription1.replace(/^"|"$/g, '')}

          quality2={data.quality2.charAt(0).toUpperCase() + data.quality2.slice(1)}
          qualitydescription2={data.qualitydescription2.replace(/^"|"$/g, '')}

          quality3={data.quality3.charAt(0).toUpperCase() + data.quality3.slice(1)}
          qualitydescription3={data.qualitydescription3.replace(/^"|"$/g, '')}

          onClick={handleWhatsClick}
        />
      </Suspense>

      <Suspense fallback={ <ReactLoading type={'spin'} color={'#05377C'} height={200} width={100}/>}>
        <FourthSection>
          <h1>Galeria de fotos</h1>
          <div className='fourth-wrapper'>
            <Slider firebaseUrl={imgsUrls}/>
          </div>
        </FourthSection>
      </Suspense>

    </Container>
  );
}

export default NewLayout;
