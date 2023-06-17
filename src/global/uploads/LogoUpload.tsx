import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiFillFileImage } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { StyledButton } from '../Button';
import storage from '../../../firebaseConfig';
import {ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

type FileInputProps = {
  userID: string | undefined;
  onValueChange: (value: boolean | undefined) => void;
};

function FileInputComponent({userID, onValueChange}: FileInputProps): JSX.Element {
  const [logoPreview, setLogoPreview] = useState<string>('');
  const [logoPercent, setLogoPercent] = useState(0);
  const [logo, setLogo] = useState<any>('');
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);

  const handleLogoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogo(event.target.files?.[0]);

    const LogoImage = event.target.files?.[0];
    if (!LogoImage) {
        return;
    }
    const reader = new FileReader();
    reader.onload = () => {
        setLogoPreview(reader.result as string);
    };
    reader.readAsDataURL(LogoImage);
};

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setLogoPreview('');
  };

  useEffect(() => {
    if(uploaded == true){
      setUploaded(false);
      handleCancel();
      setLogoPercent(0)
    }
}, [uploaded]);

  const handleLogoUploadToFirebase = () => {
    if (!logo) {
        alert('escolha uma imagem!');
    }
    const storageRef = ref(storage, `/${userID}/${logo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, logo);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const logoPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // update progress
            setLogoPercent(logoPercent);
        },
        (err) => console.log(err),
        () => {
            //download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                const body = JSON.stringify({
                    phone: userID,
                    photo_position: '4',
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
                    setUploaded(true),
                    onValueChange(uploaded)
                } else {
                    // A resposta foi mal-sucedida
                  console.log('erro')
                }
            });
        }
    );
};

  return (
  <>
  {
    logoPreview ? (
      <StyledButton
        children={
          logoPercent > 0 ? `Enviando Logomarca ${logoPercent} %` : `Enviar Logomarca`
        }
        w="larger"
        onClick={handleLogoUploadToFirebase}
        type={'button'}
      />
    ) : (
      <FileInputContainer onClick={handleClick}>
        <FileInputLabel htmlFor="logoInput">Escolher Logomarca</FileInputLabel>
          <AiFillFileImage size={'22px'} color='white'/>
        <FileInput
          id="logoInput"
          type="file"
          onChange={handleLogoChange}
          />
      </FileInputContainer>
    )
  }
      {
      logoPreview
        &&
        <PreviewContainer>
          <SelectedImage src={logoPreview} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color='#FF0000'/>
        </PreviewContainer>
        }
      </>
  );
};

export { FileInputComponent };

const FileInputContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  background-color: #0077b6;
  width: 100%;
  height: 3rem;

  border-radius: 4px;
  justify-content: center;
`;

const FileInputLabel = styled.label`
  margin-right: 10px;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  color: white;
`;

const FileInput = styled.input`
  display: none;
`;

const SelectedImage = styled.img`
  /* width: 100px; */
  height: 100%;
  object-fit: cover;

  box-sizing: border-box;
  `;

const PreviewContainer = styled.div`
  width: 100%;
  height: 10rem;
  padding: 0.5rem;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  gap: 1rem;
`
