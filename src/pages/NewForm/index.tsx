import React, { useCallback, useEffect, useState } from "react";
import { Container, Main } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";
import { Navbar } from "./Components/Navbar/Navbar";
import { Header } from "./Components/Header/Header";
import { FirstSection } from "./Section/1/FirstSection";
import { Contact } from "../../types";
import { FormHeader } from "./Section/Header/Header";
import { SecondSection } from "./Section/2/SecondSection";
import { ThirdSection } from "./Section/3/ThirdSection";
import { FourthSection } from "./Section/4/FourthSection";
import { FifthSection } from "./Section/5/FifthSection";

function NewForm(): JSX.Element {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchDataForms = useCallback ( async () => {
      try {
          const response = await axios.get<Contact>(
              `${import.meta.env.VITE_MAIN_API_URL}/findByPhone/5516981837170`
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

  return (
    <Container>

      <Navbar
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />

       <Header setMenuIsVisible={setMenuIsVisible}/>

      <Main>
       <FormHeader
        name={data?.name}
        img={data?.photos.logo.base64}
        isLoading={loading}
       />

        <FirstSection
          userID={"5584991097445"}
          call={data?.call}
          description={data?.description}
          img={data?.photos.photo1.base64}
          isLoading={loading}
        />

        <SecondSection
          products={data?.products}
          img={data?.photos.photo3.base64}
          isLoading={loading}
        />

        <ThirdSection
          quality1={data?.quality1}
          quality2={data?.quality2}
          quality3={data?.quality3}
          qualitydescription1={data?.qualitydescription1}
          qualitydescription2={data?.qualitydescription2}
          qualitydescription3={data?.qualitydescription3}
          isLoading={loading}
        />

        <FourthSection
          phone={data?.phone}
        />

        <FifthSection
          call={data?.call}
          history={data?.history}
          img={data?.photos.photo2.base64}
          isLoading={loading}
        />

      </Main>

    </Container>
  );
}

export { NewForm }
