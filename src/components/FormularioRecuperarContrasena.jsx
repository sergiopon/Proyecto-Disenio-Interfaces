import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BotonEnvio, theme } from "../themes/MUItheme.js";

const FormularioRecuperarContrasena = () => {
  const [formulario, setFormulario] = useState({
    email: "",
  });

  const [errores, setErrores] = useState({
    email: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailVacio = formulario.email === "";

    if (emailVacio) {
      setErrores({
        email: emailVacio,
      });
      return; // Prevenir el envío del formulario si el campo está vacío
    }

    console.log("Correo para recuperación enviado :)", formulario);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "350px", margin: "auto", mt: 5 }}
      >
        <Typography variant="h5" component="h2" align="center">
          Recuperar contraseña
        </Typography>

        <Typography variant="body1" align="center">
          No te preocupes, te ayudamos a recuperar el acceso a tu cuenta :)
        </Typography>

        <TextField
          label="Tu correo electrónico"
          placeholder="Poné acá tu correo electrónico"
          name="email"
          value={formulario.email}
          onChange={handleChange}
          fullWidth
          error={errores.email}
          helperText={errores.email && "El correo electrónico es obligatorio"}
        />

        <BotonEnvio type="submit">
          ¡Recuperar contraseña!
        </BotonEnvio>

        <Typography variant="body2" align="center">
          ¿Ya te acordaste? <b>Ingresa ahora</b>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default FormularioRecuperarContrasena;
