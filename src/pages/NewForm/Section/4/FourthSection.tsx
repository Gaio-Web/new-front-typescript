import React, { useEffect, useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { StyledButton } from "../../../../global/Button";
import { Skeleton, ImageList, ImageListItem } from "@mui/material";
import { LoadingComponent } from "../../Components/Skeleton";

import { Modal} from "./Components/Modal/Modal";

import {ref, uploadBytesResumable, getDownloadURL, listAll,  deleteObject } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';

import { IMGContainer } from './styles'

import storage from "../../../../../firebaseConfig";

interface IFourthSecProps {
  phone: any;
}

function FourthSection({phone}: IFourthSecProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  const [imgsUrls, setImagesurls] = useState<string[]>([]);

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const deleteImg = (refUrl: string) => {
    const imageRef = ref(storage, refUrl);
    setImagesurls((prevState: any) => prevState.filter((prevUrl: any) => prevUrl !== refUrl));
    deleteObject(imageRef)
        .then(() =>
            toast.warning('Imagem excluída com sucesso!', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            }))
        .catch((error) => {
            toast.error('Houve um problema ao deletar a imagem!', {
                position: 'top-center',
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'colored',
            });
        });
};

const id = phone;

const listAllImagesFromFolder = async () => {
  try {
      setImagesurls([]);
      const listRef = ref(storage, `5516981837170/gallery`);
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(getDownloadURL));
      setImagesurls(urls);
  } catch (error) {
      toast.error(`Houve um erro ao listar as imagens, tente novamente mais tarde! ${error}`, {
          position: 'top-center',
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
      });
  }
};

useEffect(() => {
  if (!isMounted) {
      setIsMounted(true);
      listAllImagesFromFolder();
  }
}, []);


  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  return (
    <>

    <Container >
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        imgsUrls={imgsUrls}
      />
      <Header>
        <h1>Quarta sessão</h1>
        <FaEdit onClick={() => setModalIsVisible(true)}/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
        <p>Galeria de fotos</p>
      </TextWrapper>

      <IMGContainer>
          <ImageList
            sx={{
              width: '100%',
              height: 'fit-content',
            }} cols={2}>
            {imgsUrls.map((url: string) => (
              <div className='imageWrapper'
              key={url}
            >
                <img
                  src={url}
                  loading="lazy"
                />
              </div>
            ))}
          </ImageList>
      </IMGContainer>
          <StyledButton width="larger" children="Escolher fotos"/>
    </Container>
    </>
  )
}

export { FourthSection }

//
      {/* {imgsUrls.map((url: string) => (
        <div className='imageWrapper' key={url}>
            <img src={url} alt="imagens"/>
            <i onClick={() => deleteImg(url)}>
                <BsFillTrash3Fill style={{color:'#ef233c' }} size={'35px'}/>
            </i>
        </div>
      ))} */}
