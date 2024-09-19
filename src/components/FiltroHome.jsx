import React from "react";
import { Box, Slider, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/system";
import {
  BotonEnvio,
  BotonEtiquetas,
  RangeSlider,
  CampoTexto,
} from "../themes/MUItheme.js";

const FilterComponent = () => {
  const [date, setDate] = React.useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedTime, setSelectedTime] = React.useState("manana"); // Default selection

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = ("0" + (date.getMonth() + 1)).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  const todayString = formatDate(new Date());

  return (
    <Box sx={{ padding: 2, fontFamily: "Poppins, sans-serif" }}>
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Costo del parche</Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2">0</Typography>
          <RangeSlider
            min={0}
            max={200000}
            defaultValue={0}
            sx={{ width: "80%", marginX: 2 }}
          />
          <Typography variant="body2">200,000</Typography>
        </Box>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Fecha</Typography>
        <CampoTexto
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
        />
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Horario</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <BotonEtiquetas
            onClick={() => setSelectedTime("manana")}
            selected={selectedTime === "manana"}
          >
            Mañana
          </BotonEtiquetas>
          <BotonEtiquetas
            onClick={() => setSelectedTime("tarde")}
            selected={selectedTime === "tarde"}
          >
            Tarde
          </BotonEtiquetas>
          <BotonEtiquetas
            onClick={() => setSelectedTime("noche")}
            selected={selectedTime === "noche"}
          >
            Noche
          </BotonEtiquetas>
        </Box>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6">Tipo de parche</Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <BotonEtiquetas variant="outlined" sx={{ margin: 1 }}>
            Actividad
          </BotonEtiquetas>
          <BotonEtiquetas variant="outlined" sx={{ margin: 1 }}>
            Tour
          </BotonEtiquetas>
          <BotonEtiquetas variant="outlined" sx={{ margin: 1 }}>
            Concierto
          </BotonEtiquetas>
          <BotonEtiquetas variant="outlined" sx={{ margin: 1 }}>
            Voluntariado
          </BotonEtiquetas>
          <BotonEtiquetas variant="outlined" sx={{ margin: 1 }}>
            Evento
          </BotonEtiquetas>
          <BotonEtiquetas variant="outlined" sx={{ margin: 1 }}>
            Encuentro
          </BotonEtiquetas>
        </Box>
      </Box>

      <Box sx={{ marginTop: 2 }}>
        <BotonEnvio>Aplicar Filtros</BotonEnvio>
      </Box>
    </Box>
  );
};

export default FilterComponent;
