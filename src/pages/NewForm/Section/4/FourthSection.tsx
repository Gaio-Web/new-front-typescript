import React, { useEffect, useState } from "react";
import { Container, Header, TextWrapper } from '../styles';
import { FaEdit } from 'react-icons/fa';
import { StyledButton } from "../../../../global/Button";
import { ImageList } from "@mui/material";

import { Modal} from "./Components/Modal/Modal";

import {ref, uploadBytesResumable, getDownloadURL, listAll,  deleteObject } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';

import { IMGContainer } from './styles'

import storage from "../../../../../firebaseConfig";

interface IFourthSecProps {
  phone: any;
  id: any;
}

function FourthSection({phone, id}: IFourthSecProps): JSX.Element {
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

const listAllImagesFromFolder = async () => {
  try {
      setImagesurls([]);
      const listRef = ref(storage, `${id}/gallery`);
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

    <Container id="fourth">
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
    </Container>
    </>
  )
}

export { FourthSection }
