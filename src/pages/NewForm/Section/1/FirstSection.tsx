import React, { useCallback, useEffect, useState } from "react";
import { Container, Header, ImageContainer, TextWrapper, InputWrapper } from '../styles'
import { FaEdit } from 'react-icons/fa'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";

import {ref, uploadBytesResumable, getDownloadURL, listAll,  deleteObject } from 'firebase/storage';
import storage from "../../../../../firebaseConfig";
import { toast } from "react-toastify";
import { StyledInput } from "../../../../global/PhotoInput";
import axios from "axios";

interface IFirstSecPops {
  call: string | undefined;
  description: string | undefined;
  img: string | undefined;
  isLoading: any;
  userID: any;
}

function FirstSection({ call, description, img, isLoading, userID }: IFirstSecPops): JSX.Element {
  const [clicked, setClicked] = useState(false);
  const [color, setColor] = useState('');
  const [uploaded, setUploaded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { id } = userID;

  const handleClick = () => {
    setClicked(!clicked);
  }


  const handleChange = (event: any) => {
    setColor(event.target.value);
  };

  const [cover, setCover] = useState<any>('');
  const [coverPreview, setCoverPreview] = useState<string>('');

  const handleCoverChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setCover(event.target.files?.[0]);

      const coverImage = event.target.files?.[0];
      if (!coverImage) {
          return;
      }
      const reader = new FileReader();
      reader.onload = () => {
          setCoverPreview(reader.result as string);
      };
      reader.readAsDataURL(coverImage);
  };

  const [percent, setPercent] = useState(0);

  const handleCoverUploadToFirebase = () => {
      if (!cover) {
          alert('escolha uma imagem!');
      }
      const storageRef = ref(storage, `/${id}/${cover.name}`);
      const uploadTask = uploadBytesResumable(storageRef, cover);

      uploadTask.on(
          'state_changed',
          (snapshot) => {
              const percent = Math.round(
                  (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              // update progress
              setPercent(percent);
          },
          (err) => console.log(err),
          () => {
              //download URL
              getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                  const body = JSON.stringify({
                      phone: id,
                      photo_position: '1',
                      base64: url,
                      type: 'image',
                  });
                  const response = await fetch(
                      `${import.meta.env.VITE_MAIN_API_URL}/upload`,
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
              });
          }
      );
  };


  return (
    <Container >
      <Header>
        <h1>Primeira sessão</h1>
        <FaEdit/>
      </Header>

      <TextWrapper>
        <h4>Título da sessão</h4>
        <LoadingComponent
          loading={isLoading}
          height="4rem"
          component={
            <p>{call}</p>
          }
        />
      </TextWrapper>

    <TextWrapper>
      <h4>Descrição</h4>
      <LoadingComponent
        loading={isLoading}
        height="4rem"
        component={
          <p>{description}</p>
        }
      />
    </TextWrapper>
      <ImageContainer>
        <LoadingComponent
          loading={isLoading}
          height="10rem"
          component={
            <img src={img}/>
          }
        />
        <StyledButton width={'larger'} children='Mudar foto'/>
      </ImageContainer>

      <InputWrapper >
    <h4>Cor de fundo</h4>
      <div className="color-input-wrapper" style={{ borderColor: color }}>
        <input
          type="color"
          value={color}
          onChange={handleChange}
          className="color-input"

          />
        <p>{color}</p>
      </div>
      <StyledButton children="Atualizar cor" width="larger" bgColor={color}/>
    </InputWrapper>
    </Container>
  )
}

export { FirstSection }
