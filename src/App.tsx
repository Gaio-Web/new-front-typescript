import React from 'react';
import FindByPhone from './pages/Products/Products';
import { Form } from './pages/Form/Form';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './Routes/animatedRoutes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
