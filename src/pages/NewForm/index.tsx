import React, { useCallback, useEffect, useState } from "react";
import { Container, Main } from "./styles";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { FirstSection } from "./Section/1/FirstSection";
import { FormHeader } from "./Section/Header/Header";
import { SecondSection } from "./Section/2/SecondSection";
import { ThirdSection } from "./Section/3/ThirdSection";
import { FourthSection } from "./Section/4/FourthSection";
import { FifthSection } from "./Section/5/FifthSection";

import { Contact } from "../../types";
import { useParams } from "react-router-dom";

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide, { SlideProps } from '@mui/material/Slide';
import Grow, { GrowProps } from '@mui/material/Grow';
import { TransitionProps } from '@mui/material/transitions';
import { Alert } from "@mui/material";
import { Schedules } from "./Section/Schedules/Schedules";
import { ColorSection } from "./Section/ColorSection/ColorSection";
import { Address } from "./Section/Address/Address";

function NewForm(): JSX.Element {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [open, setOpen] = React.useState(false);

  const [reload, setReload] = useState<boolean>(false);

  const { id } = useParams();

  document.title = id!;

  const fetchDataForms = useCallback ( async () => {
      try {
          const response = await axios.get<Contact>(
              `${import.meta.env.VITE_MAIN_API_URL}/findByPhone/${id}`
          );
          setData(response.data);
      } catch (err) {
          console.error(err);
      }
  },[]);

  useEffect(() => {
    setLoading(true);
    fetchDataForms()
        .then(() => {console.log('Data fetched successfully!'), setLoading(false);})
        .catch((err) => {
            toast.error(`Houve um erro ao carregar a página, tente novamente mais tarde, ${err}`, {
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
}, [fetchDataForms]);

    useEffect(() => {
      if (reload == true) {
        setLoading(true);
        fetchDataForms().then(() => {
          setReload(false);

        }).finally(() => {
          setLoading(false);
        })
      }
    }, [reload]);

    const [toastMessage, setToastMessage] = useState<string>('')

    const handleToast = (text: string) => {
      setOpen(true);
      setReload(true);
      setToastMessage(text)
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

  return (
    <Container>

      <Navbar
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

       <Header setMenuIsVisible={setMenuIsVisible}/>

      <Main>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: '100%',
            backgroundColor: '#2a9d90d7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '16px',
            backdropFilter: 'blur(5px)',
            zIndex: 10
            }}>
            {toastMessage}
        </Alert>
      </Snackbar>

       <FormHeader
        name={data?.name}
        img={data?.photos.logo.base64}
        isLoading={loading}
        userID={data?.phone}
        toast={() => handleToast('Logo enviada com sucesso!')}
       />

       <ColorSection
        userID={data?.phone}
        accentColor={data?.accentColor}
        mainColor={data?.mainColor}
        secondaryColor={data?.secondaryColor}
        toastFromModal={() => handleToast('Cores atualizada com sucesso')}
       />

        <FirstSection
          userID={data?.phone}
          call={data?.call}
          description={data?.description}
          img={data?.photos.photo1.base64}
          isLoading={loading}
          toast={() => handleToast('Foto enviada com sucesso!')}
          toastFromModal={() => handleToast('Texto da primeira sessão atualizado com sucesso!')}
        />

        <SecondSection
          userID={data?.phone}
          secondTitle={data?.secondTitle}
          products={data?.products}
          img={data?.photos.photo3.base64}
          isLoading={loading}
          toast={() => handleToast('Foto enviada com sucesso!')}
          toastFromModal={() => handleToast('Texto da segunda sessão atualizado com sucesso!')}
        />

        <ThirdSection
          quality1={data?.quality1}
          quality2={data?.quality2}
          quality3={data?.quality3}
          qualitydescription1={data?.qualitydescription1}
          qualitydescription2={data?.qualitydescription2}
          qualitydescription3={data?.qualitydescription3}
          isLoading={loading}
          userID={data?.phone}
          title={data?.thirdTitle}
          toastFromModal={() => handleToast('Textos da terceira sessão atualizados com sucesso!')}
        />

        <FourthSection
          phone={data?.phone}
          id={id}
        />

        <FifthSection
          call={data?.call}
          history={data?.history}
          img={data?.photos.photo2.base64}
          isLoading={loading}
          userID={data?.phone}
          title={data?.fifthTitle}
          toast={() => handleToast('Foto enviada com sucesso')}
          toastFromModal={() => handleToast('Texto da quinta sessão atualizado com sucesso!')}
        />

        <Schedules
          userID={data?.phone}
          call={data?.call}
          description={data?.description}
          img={data?.photos.schedules.base64}
          isLoading={loading}
          toast={() => handleToast('Horários atualizados com sucesso!')}
        />

        <Address
          userID={data?.phone}
          toast={() => handleToast('Endereço atualizados com sucesso!')}
          street={data?.address.street}
          cep={data?.address.zipCode}
          city={data?.address.city}
          complement={data?.address.complement}
          neighborhood={data?.address.neighborhood}
          number={data?.address.number}
          state={data?.address.state}
        />

      </Main>

    </Container>
  );
}

export { NewForm }
