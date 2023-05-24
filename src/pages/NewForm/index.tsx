import React, { useCallback, useEffect, useState } from "react";
import { NewSidebar } from "./Components/Sidebar/Sidebar";
import { Container, Main } from "./styles";
import { FirstSection } from './Sections/1/FirstSection'
import axios from "axios";
import { Contact } from "../../types";
import { toast } from "react-toastify";

function NewForm(): JSX.Element {
  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchDataForms = useCallback ( async () => {
    try {
        const response = await axios.get<Contact>(
            `${import.meta.env.VITE_MAIN_API_URL}/findByPhone/5584991097445`
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

if (!data) {
  return (
    <div>
      <h1>hue</h1>
    </div>
  )
}

  return (
    <Container>
      <NewSidebar />
      <Main>
        <FirstSection call={data.call} description={data.description} imgSource={data.photos.photo1.base64}/>
      </Main>
    </Container>
  );
}

export { NewForm }
