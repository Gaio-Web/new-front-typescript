import React, { useEffect, useState } from 'react';
import { Routes, useLocation, Route, BrowserRouter } from 'react-router-dom';
import Products from '../pages/Products/Products';
import { Form } from '../pages/Form/Form';
import { AnimatePresence } from 'framer-motion';
import { Contact } from '../pages/NewLayout/types';
import NewLayout from '../pages/NewLayout/NewLayout';
import axios from 'axios';

export default function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    console.log('hue: ',location.pathname)
  }, [])

  const [data, setData] = useState<Contact | null>(null);

  useEffect(() => {
      async function fetchData() {
          try {
              const response = await axios.get<Contact>(
                  `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/${location.pathname.replace(/^\/(.*)/, "$1")}`
              );
              setData(response.data);
          } catch (error) {
              console.error(error);
          } finally {
            console.log('deu bom', data?.origin)
          }
        }
          fetchData()
          .then(() => {
              console.log('Data fetched!!', data?.products);

          })
          .catch((error) => console.error(error))
      }, [])

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
