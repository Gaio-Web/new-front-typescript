import React, { useEffect, useState } from 'react';
import { Routes, useLocation, Route, BrowserRouter } from 'react-router-dom';
import Products from '../pages/Products/Products';
import { Form } from '../pages/Form/Form';
import { AnimatePresence } from 'framer-motion';
import { Contact } from '../pages/NewLayout/types';
import NewLayout from '../pages/NewLayout/NewLayout';
import axios from 'axios';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Loader from '../pages/Components/Loader/Loader';

import Typewriter404 from '../pages/Components/ErrorPage';
import { LoadingPage } from '../pages/Components/LoadingPage';

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    console.log('hue: ',location.pathname)
  }, [])

  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
      async function fetchData() {
        setLoading(true);
          try {
              const response = await axios.get<Contact>(
                  `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/${location.pathname.replace(/^\/(.*)/, "$1")}`
              );
              setData(response.data);
          } catch (error) {
              console.error(error);
          } finally {
            setLoading(false);
          }
        }
          fetchData()
          .then(() => {
              console.log('Data fetched!!', data?.products);

          })
          .catch((error) => console.error(error))
      }, [])

      if (loading) {
        return (
           <LoadingPage />
        );
    }

  return (
    <Routes location={location} key={location.pathname}>
      {
        data?.origin === 'gaio' ? (
          <Route path="/:id" element={<NewLayout />} />
          ) : (
            <Route path="/:id" element={<Products />} />
            )
          }
      <Route path="/forms/:id" element={<Form />} />
    </Routes>
  );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
