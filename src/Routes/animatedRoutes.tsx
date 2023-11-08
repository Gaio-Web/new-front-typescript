import React, { useEffect, useState } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';

import { Contact } from '../types';
import NewLayout from '../pages/NewLayout';
import axios from 'axios';

import VizeLayout from '../pages/VizeLayout/Products';
import PaginaLegado from '../pages/Products/Products';
import NewBannerSite from '../pages/Products copy/Products';

import { LoadingPage } from '../pages/Components/LoadingPage';
import { NewForm } from '../pages/NewForm';

import GaioMainPage from '../pages/Main/NewLayout';

export default function AnimatedRoutes() {
  const location = useLocation();

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const id = location.pathname.replace(/^\/(.*)/, '$1')
  useEffect(() => {
    async function fetchData() {
      // if(!id){
      //   console.log('sem id', id)
      //   return false
      // }
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${
            import.meta.env.VITE_MAIN_API_URL
          }/findByConvertedName/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log('erro');
      } finally {
        setLoading(false);
      }
    }
    fetchData()
      .then(() => {
        console.log('Data fetched!!');
      })
      .catch((error) => console.log('error'));
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <Routes location={location} key={location.pathname}>
      {data?.origin === 'gaio' ? (
        <Route path="/:id" element={<NewLayout />} />
      ) : data?.origin === 'gaio-2' ? (
        <Route path="/:id" element={<VizeLayout />} />
      ) : data?.origin === 'vize' ? (
        <Route path="/:id" element={<PaginaLegado />} />
      ) : data?.origin === 'vize-2' ? (
        <Route path="/:id" element={<NewBannerSite />} />
      ) : (
        <Route path="/:id" element={<NewLayout />} />
      )}
      <Route path="/forms/:id" element={<NewForm />} />
      <Route path="/" element={<GaioMainPage />} />
    </Routes>
  );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
