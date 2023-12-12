import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Inicio from "../components/Inicio";
import Portafolio from "../components/Portafolio";
import Servicios from "../components/Servicios";
import Curriculum from "../components/Curriculum";
import Contacto from "../components/Contacto";
import Footer from "../layout/Footer";

import HeaderNav from "../layout/HeaderNav";

import Error from "../components/Error";

const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegacion */}
      <HeaderNav />

      {/* Contenido Central */}
      <section className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/contacto" element={<Contacto />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      {/* Footer */}
      <Footer />
    </BrowserRouter>
  );
};

export default MisRutas;

// E:\Proyectos Nov - Dic 2023\portfolio\src\routes\MisRutas.jsx
// src\layout\HeaderNav.jsx

//src\layout\HeaderNav.jsx
//E:\Proyectos Nov - Dic 2023\portfolio\src\routes\MisRutas.jsx
// E:\Proyectos Nov - Dic 2023\portfolio\src\layout\HeaderNav.jsx
