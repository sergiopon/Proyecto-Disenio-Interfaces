import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";
import { ThemeProvider } from "@mui/material/styles/index.js";
import { theme } from "../themes/MUItheme.js";
import CambiarUbicacionPopUp from "./CambiarUbicacionPopUp.jsx";
import NotificacionPopUp from "./NotificacionesPopUp.jsx";
import ProfilePopup from "./ProfilePopUp.jsx";
import MeGustaPopUp from "./MeGustaPopUp.jsx";

function Header() {
  const [activePopup, setActivePopup] = useState(null);

  const popupRef = useRef(null);
  const ubicacionRef = useRef(null);
  const notificacionRef = useRef(null);
  const megustaRef = useRef(null);
  const profileRef = useRef(null);

  const closeAllPopups = () => {
    setActivePopup(null);
  };

  const handlePopupClick = (e) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(e.target) &&
      (!ubicacionRef.current || !ubicacionRef.current.contains(e.target)) &&
      (!notificacionRef.current ||
        !notificacionRef.current.contains(e.target)) &&
      (!megustaRef.current || !megustaRef.current.contains(e.target)) &&
      (!profileRef.current || !profileRef.current.contains(e.target))
    ) {
      closeAllPopups();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handlePopupClick);
    return () => {
      document.removeEventListener("mousedown", handlePopupClick);
    };
  }, []);

  const handlePopupContainerClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="main-header">
      <img
        src="/assets/logoPrincipal.png"
        className="main-logo"
        alt="Logo Principal"
      />
      <div className="main-header-icons" ref={popupRef}>
        <a
          href="#"
          onMouseEnter={() => setActivePopup("ubicacion")}
          onClick={() => setActivePopup("ubicacion")}
        >
          <i className="fas fa-map" title="Ubicación"></i>
          {activePopup === "ubicacion" && (
            <ThemeProvider theme={theme}>
              <div ref={ubicacionRef} onClick={handlePopupContainerClick}>
                <CambiarUbicacionPopUp />
              </div>
            </ThemeProvider>
          )}
        </a>
        <a
          href="#"
          onMouseEnter={() => setActivePopup("notificacion")}
          onClick={() => setActivePopup("notificacion")}
        >
          <i className="fas fa-envelope" title="Notificaciones"></i>
          <span className="counter"> 0 </span>
          {activePopup === "notificacion" && (
            <div ref={notificacionRef} onClick={handlePopupContainerClick}>
              <NotificacionPopUp />
            </div>
          )}
        </a>
        <a
          href="#"
          onMouseEnter={() => setActivePopup("megusta")}
          onClick={() => setActivePopup("megusta")}
        >
          <i className="fas fa-heart" title="Intereses"></i>
          <span className="counter"> 0 </span>
          {activePopup === "megusta" && (
            <ThemeProvider theme={theme}>
              <div ref={megustaRef} onClick={handlePopupContainerClick}>
                <MeGustaPopUp />
              </div>
            </ThemeProvider>
          )}
        </a>
        <a
          href="../CrearParche"
        >
          <i className="fas fa-plus" title="Añadir"></i> {/* Nuevo ícono "+" */}
        </a>
        <a
          href="#"
          onMouseEnter={() => setActivePopup("profile")}
          onClick={() => setActivePopup("profile")}
        >
          <i className="fas fa-user" title="Cuenta"></i>
          {activePopup === "profile" && (
            <div ref={profileRef} onClick={handlePopupContainerClick}>
              <ProfilePopup
                buttonText="Ver perfil"
                buttonLink="#"
                onClose={closeAllPopups} 
              />
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default Header;
