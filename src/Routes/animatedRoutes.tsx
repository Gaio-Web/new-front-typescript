import React, { useEffect, useState } from 'react';
import { Routes, useLocation, Route } from 'react-router-dom';

import { Contact } from '../types';
import NewLayout from '../pages/NewLayout';
import axios from 'axios';

import VizeLayout from '../pages/VizeLayout/Products';

import { LoadingPage } from '../pages/Components/LoadingPage';
import { NewForm } from '../pages/NewForm';

import GaioMainPage from '../pages/Main';

export default function AnimatedRoutes() {
    const location = useLocation();

    const [data, setData] = useState<Contact | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await axios.get<Contact>(
                    `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/${location.pathname.replace(/^\/(.*)/, '$1')}`
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
                console.log('Data fetched!!');

            })
            .catch((error) => console.error(error));
    }, []);

    if (loading) {
        return (
            <LoadingPage />
        );
    }

    // if (data?.origin === 'gaio') {
    //     return (
    //         <Routes location={location} key={location.pathname}>
    //             <Route path="/:id" element={<NewLayout />} />
    //         </Routes>
    //     );
    // } else if (data?.origin === 'vize') {
    //     <Routes location={location} key={location.pathname}>
    //         <Route path="/:id" element={<VizeLayout />} />
    //     </Routes>;
    // }

    return (
        <Routes location={location} key={location.pathname}>
            {
                data?.origin === 'gaio' ? (
                    <Route path="/:id" element={<NewLayout />} />
                ) : (
                    <Route path="/:id" element={<VizeLayout />} />
                )
            }
            <Route path="/forms/:id" element={<NewForm />} />
            <Route path='/' element={<GaioMainPage />} />
        </Routes>
    );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
