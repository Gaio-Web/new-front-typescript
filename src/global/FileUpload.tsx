import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { AiFillFileImage } from 'react-icons/ai'
import { BsFillTrash3Fill } from 'react-icons/bs'
import { StyledButton } from './Button';

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

type FileInputProps = {
  onFileSelect: (file: File) => void;
};

const FileInputComponent: React.FC<FileInputProps> = ({ onFileSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;

    if (fileList && fileList.length > 0) {
      const selectedFile = fileList[0];
      const imageURL = URL.createObjectURL(selectedFile);
      setSelectedImage(imageURL);
      onFileSelect(selectedFile);
    }
  };

  const handleClick = () => {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  };

  const handleCancel = () => {
    setSelectedImage(null);
  };

  return (
  <>
  {
    selectedImage ? (
      <StyledButton children="Enviar foto" width="larger"/>
    ) : (
      <FileInputContainer onClick={handleClick}>
      <FileInputLabel htmlFor="fileInput">Escolher arquivo</FileInputLabel>
      <AiFillFileImage size={'22px'} color='white'/>
      <FileInput
        id="fileInput"
        type="file"
        onChange={handleFileSelect}
        />
    </FileInputContainer>
    )
  }

      {
      selectedImage
        &&
        <PreviewContainer>
          <SelectedImage src={selectedImage} alt="Selected Image" />
          <BsFillTrash3Fill onClick={handleCancel} size={24} color='#FF0000'/>
        </PreviewContainer>
        }
      </>
  );
};

export { FileInputComponent };
