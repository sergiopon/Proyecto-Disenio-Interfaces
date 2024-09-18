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

function App() {
  return (
    <div>
      <Header />
      <ParcheCard />
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

ReactDOM.render(<App />, document.getElementById("root"));
