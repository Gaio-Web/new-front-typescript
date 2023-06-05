import React, { useState } from "react";
import { Container, Recomendation, ImgWrapper } from './styles'
import { StyledButton } from "../../../../global/Button";
import { LoadingComponent } from "../../Components/Skeleton";
import { FileInputComponent } from "../../../../global/FileUpload";

interface IFormHeaderProps {
  img: string | undefined;
  name: string | undefined;
  isLoading: any;
}

function FormHeader({img, name, isLoading}: IFormHeaderProps ): JSX.Element {
  const [isFileSelected, setFileSelected] = useState<boolean>(false);
  const [image, setImage] = useState<string >('');
  const [preview, setPreview] = useState<string>('')

  const HandleOnFileSelect = (file: File) => {
    setFileSelected(true)
  }

//   const HandleOnFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setImage(event.target.files?.[0]);

//     const offerImage = event.target.files?.[0];
//     if (!offerImage) {
//         return;
//     }
//     const reader = new FileReader();
//     reader.onload = () => {
//         setPreview(reader.result as string);
//     };
//     reader.readAsDataURL(offerImage);
// };

  return (
    <Container>
      <p className="title" >Bem vindo! <LoadingComponent
        height="1.5rem"
        width="25%"
        loading={isLoading}
        component={
          <strong>{name}</strong>
        }
      /></p>

      {/* <input /> */}
      <ImgWrapper>
      <LoadingComponent
        height="10rem"
        loading={isLoading}
        component={
          <img src={img}/>
        }
      />
      {/* <StyledButton width="larger" children="Trocar logo"/> */}


      <Recomendation>Dimenssões recomendadas: <strong>200x75</strong></Recomendation>

      <FileInputComponent onFileSelect={HandleOnFileSelect} />
      {/* {
        isFileSelected ? (
          <>
            <StyledButton children="Enviar foto" width="larger"/>
            <img src={image}/>
          </>
        ) : (
          <FileInputComponent onFileSelect={HandleOnFileSelect} />
        )
      } */}
      </ImgWrapper>
    </Container>
  )
}

export { FormHeader }
