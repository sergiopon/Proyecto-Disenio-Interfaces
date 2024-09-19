import React, { useState } from "react";
import { Button, Checkbox, FormControlLabel, TextField, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BotonEnvio, theme } from "../themes/MUItheme.js";

const FormularioInicioSesion = () => {
  const [formulario, setFormulario] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errores, setErrores] = useState({
    email: false,
    password: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailVacio = formulario.email === "";
    const passwordVacia = formulario.password === "";

    if (emailVacio || passwordVacia) {
      setErrores({
        email: emailVacio,
        password: passwordVacia,
      });
      return; // Prevenir el envío del formulario si hay campos vacíos
    }

    console.log("Formulario enviado correctamente :)", formulario);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "350px", margin: "auto", mt: 5 }}
      >
        <Typography variant="h5" component="h2" align="center">
          Ingresá a tu cuenta ve!
        </Typography>

        <Typography variant="body1" align="center">
          ¿Listo pa´ un nuevo parche?
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

        <TextField
          label="Contraseña"
          type="password"
          placeholder="Ojito, que nadie te vea"
          name="password"
          value={formulario.password}
          onChange={handleChange}
          fullWidth
          error={errores.password}
          helperText={errores.password && "La contraseña es obligatoria"}
        />

        <Box display="flex" justifyContent="space-between" alignItems="center">
          <FormControlLabel
            control={
              <Checkbox
                name="remember"
                checked={formulario.remember}
                onChange={handleChange}
              />
            }
            label="Recordáme ve"
          />
          <Typography variant="body2" color="primary" component="a" href="#">
            ¿Olvidaste tu contraseña?
          </Typography>
        </Box>

        <BotonEnvio type="submit">
          Entrar a mi cuenta
        </BotonEnvio>
      </Box>
    </ThemeProvider>
  );
};

export default FormularioInicioSesion;
