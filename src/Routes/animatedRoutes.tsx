import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GaioMainPage from '../pages/Main';

export default function AnimatedRoutes() {

  return (
    <Routes>
      <Route path='/' element={<GaioMainPage />} />
    </Routes>
  );
}

type typeofAnimatedRoutes = typeof AnimatedRoutes;
