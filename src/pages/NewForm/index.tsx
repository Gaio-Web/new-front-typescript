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

    const handleToast = () => {
      setOpen(true);
      setReload(true);
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

      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
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
            backdropFilter: 'blur(5px)'
            }}>
          Foto enviada com sucesso!
        </Alert>
      </Snackbar>

       <FormHeader
        name={data?.name}
        img={data?.photos.logo.base64}
        isLoading={loading}
        userID={data?.phone}
        toast={handleToast}
       />

       <ColorSection
        color={data?.color}
        accentColor={data?.accentColor}
        mainColor={data?.mainColor}
        secondaryColor={data?.secondaryColor}
       />

        <FirstSection
          userID={data?.phone}
          call={data?.call}
          description={data?.description}
          img={data?.photos.photo1.base64}
          isLoading={loading}
          toast={handleToast}
        />

        <SecondSection
          userID={data?.phone}
          products={data?.products}
          img={data?.photos.photo3.base64}
          isLoading={loading}
          toast={handleToast}
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
          toast={handleToast}
        />

        <Schedules
          userID={data?.phone}
          call={data?.call}
          description={data?.description}
          img={data?.photos.schedules.base64}
          isLoading={loading}
          toast={handleToast}
        />

      </Main>

    </Container>
  );
}

export { NewForm }
