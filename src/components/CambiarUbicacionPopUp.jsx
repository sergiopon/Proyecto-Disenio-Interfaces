import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { BotonEnvio } from "../themes/MUItheme.js";
import "../styles/CambiarUbicacionPopUp.css";

const ChangeLocationPopup = () => {
  const [ciudad_actual, setCiudadParche] = useState("");
  const [errores, setErrores] = useState({});

  const handleChange = (event) => {
    setCiudadParche(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ciudad_actual) {
      setErrores({ ciudad_actual: "Debes seleccionar una ciudad." });
    } else {
      setErrores({});
      console.log("Ciudad seleccionada:", ciudad_actual);
    }
  };

  return (
    <div className="change-location-popup-container">
      <h4>Cambiar ubicación</h4>
      <span className="current-city-ctn">
        ahora estás en <span className="current-city">Cali</span>
      </span>

      <FormControl error={!!errores.ciudad_actual} fullWidth>
        <InputLabel>Tu ciudad actual</InputLabel>
        <Select
          label="Ciudad actual"
          name="ciudad_actual"
          value={ciudad_actual}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>Selecciona una ciudad</em>
          </MenuItem>
          <MenuItem value="Cali">Cali</MenuItem>
          <MenuItem value="Bogotá">Bogotá</MenuItem>
          <MenuItem value="Barranquilla">Barranquilla</MenuItem>
          <MenuItem value="Cartagena">Cartagena</MenuItem>
          <MenuItem value="Medellín">Medellín</MenuItem>
          <MenuItem value="Pereira">Pereira</MenuItem>
          <MenuItem value="Cúcuta">Cúcuta</MenuItem>
          <MenuItem value="Manizales">Manizales</MenuItem>
        </Select>
        {errores.ciudad_actual && (
          <FormHelperText>{errores.ciudad_actual}</FormHelperText>
        )}
      </FormControl>

      <BotonEnvio
        type="submit"
        className="apply-location-btn"
        onClick={handleSubmit}
      >
        Actualizar
      </BotonEnvio>
    </div>
  );
};

export default ChangeLocationPopup;
