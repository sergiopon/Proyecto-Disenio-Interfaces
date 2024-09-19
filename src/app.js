import React, { useState } from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ParcheCard from "./components/ParcheCardV1.jsx";
import Header from "./components/Header.jsx";
import PopUp from "./components/PopUp.jsx";
import FormularioCreacionParche, {
  listaParche,
} from "./components/FormularioNuevoParche.jsx";
import FilterComponent from "./components/FiltroHome.jsx";
import { ThemeProvider } from "@mui/material/styles/index.js";
import { theme } from "./themes/MUItheme.js";
// import { useParcheContext } from '../utils/contexts/ParcheContext.js';
import ReviewSlider from "./components/ReviewSlider.jsx";
import CambiarUbicacionPopUp from "./components/CambiarUbicacionPopUp.jsx";
import FormularioInicioSesion from "./components/FormularioInicioSesion.jsx";
import FormularioCrearCuenta from "./components/FormularioCrearCuenta.jsx";
import FormularioRecuperarContrasena from "./components/FormularioRecuperarContrasena.jsx";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/HomePage.js'
import CrearCuenta from './pages/CrearCuenta.js'
import CrearParche from './pages/CrearParche.js'
import IniciarSesion from './pages/IniciarSesion.js'
import ParcheIndividual from './pages/RecuperarContraseña.js'
import Profile from "./pages/Profile.js";
import ParcheQueMeInteresa from "./pages/ParcheQueMeInteresa.js";
import Notificaciones from "./pages/Notificaciones.js";
import datosParche from './datosParche.json';

function App() {
  
  return (
    
    <div>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/crearcuenta" element={<CrearCuenta />} />
          <Route path="/crearparche" element={<CrearParche />} />
          <Route path="/iniciarsesion" element={<IniciarSesion />} />
          <Route path="/parcheindividual" element={<ParcheIndividual />} />
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/notificaciones" element={<Notificaciones/>}/>
          <Route path="/parchequemeinteresa" element={<ParcheQueMeInteresa/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    {datosParche.map((parche, index) => (
          <ParcheCard key={index} {...parche} />
        ))}
      <ReviewSlider />
      <ThemeProvider theme={theme}>
        <FilterComponent />
        <FormularioInicioSesion/>
        <FormularioCrearCuenta/>
        <FormularioRecuperarContrasena/>
      </ThemeProvider>
      <FormularioCreacionParche />
    </div>
  );
}

/*
function App() {
    const { listaParche } = useParcheContext(); 

    return (
        <div>
            <Header />
            <FormularioCreacionParche />
            <FilterComponent />
            {listaParche.length > 0 ? (
                listaParche.map((parche, index) => (
                    <ParcheCard key={index} parche={parche} />
                ))
            ) : (
                <p>No hay parches disponibles :(</p>
            )}
        </div>
    );
}
*/
export default App;