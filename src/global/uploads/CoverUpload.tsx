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
  const [coverPreview, setCoverPreview] = useState<string>('');
  const [coverPercent, setCoverPercent] = useState(0);
  const [cover, setCover] = useState<any>('');
  const [uploaded, setUploaded] = useState<boolean | undefined>(false);

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

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setCoverPreview('');
  };

  useEffect(() => {
    if(uploaded == true){
      setUploaded(false);
      handleCancel();
      setCoverPercent(0)
    }
}, [uploaded]);

  const handleCoverUploadToFirebase = () => {
    if (!cover) {
        alert('escolha uma imagem!');
    }
    const storageRef = ref(storage, `/${userID}/${cover.name}`);
    const uploadTask = uploadBytesResumable(storageRef, cover);

    uploadTask.on(
        'state_changed',
        (snapshot) => {
            const coverPercent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            // update progress
            setCoverPercent(coverPercent);
        },
        (err) => console.log(err),
        () => {
            //download URL
            getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
                const body = JSON.stringify({
                    phone: userID,
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
                    setUploaded(true),
                    onValueChange(uploaded)
                } else {
                  alert('Ocorreu algum erro, atualize a página e tente novamente mais tarde');
                  console.log('erro')
                }
            });
        }
    );
};

  return (
  <>
  {
    coverPreview ? (
      <StyledButton
        children={
          coverPercent > 0 ? `Enviando Foto ${coverPercent} %` : `Enviar Foto`
        }
        width="larger"
        onClick={handleCoverUploadToFirebase}/>
    ) : (
      <FileInputContainer onClick={handleClick}>
        <FileInputLabel htmlFor="coverInput">Escolher Foto</FileInputLabel>
          <AiFillFileImage size={'22px'} color='white'/>
        <FileInput
          id="coverInput"
          type="file"
          onChange={handleCoverChange}
          />
      </FileInputContainer>
    )
  }
      {
      coverPreview
        &&
        <PreviewContainer>
          <SelectedImage src={coverPreview} alt="Selected Image" />
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

  background-color: rgba(42, 182, 10, 0.553);
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
