import React from 'react';
import { Routes, useLocation, Route, BrowserRouter } from 'react-router-dom';
import Products from '../pages/Products/Products';
import { Form } from '../pages/Form/Form';
import { AnimatePresence } from 'framer-motion';
import NewLayout from '../pages/NewLayout/NewLayout';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/:id" element={<NewLayout />} />
      <Route path="/forms/:id" element={<Form />} />
    </Routes>
  );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
