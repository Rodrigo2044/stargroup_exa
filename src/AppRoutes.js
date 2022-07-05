import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Area from './components/Area';
import Empleado from './components/Empleado';
import Home from './Home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="area" element={<Area />} />
        <Route path="empleado" element={<Empleado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
