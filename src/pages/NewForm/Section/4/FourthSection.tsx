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
  id: any;
  userID: string | undefined;
  isLoading: any;

  toast: (value: boolean | undefined) => void;
}

function FourthSection({ id, userID, isLoading, toast }: IFourthSecProps): JSX.Element {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');

  const [imgsUrls, setImagesurls] = useState<string[]>([]);

  const [isMounted, setIsMounted] = useState<boolean>(false);

const listAllImagesFromFolder = async () => {
  try {
      setImagesurls([]);
      const listRef = ref(storage, `${id}/gallery`);
      const res = await listAll(listRef);
      const urls = await Promise.all(res.items.map(getDownloadURL));
      setImagesurls(urls);
  } catch (error) {
      console.log('erro: ', error)
  }
};

useEffect(() => {
  if (!isMounted) {
      setIsMounted(true);
      listAllImagesFromFolder();
  }
  listAllImagesFromFolder();
}, []);


  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const handleToast = () => {
    toast(true);
    setModalIsVisible(false);
  }

  return (
    <>
    <Container id="fourth">
      <Modal
        modalIsVisible={modalIsVisible}
        setModalIsVisible={() => setModalIsVisible(false)}
        imgsUrls={imgsUrls}
        userID={userID}
        toastDelete={handleToast}
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
