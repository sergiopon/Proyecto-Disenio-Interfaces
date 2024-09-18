import React, { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { BotonEnvio, theme } from "../themes/MUItheme.js";

const FormularioCrearCuenta = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmarPassword: "",
  });

  const [errores, setErrores] = useState({
    nombre: false,
    email: false,
    password: false,
    confirmarPassword: false,
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

    const nombreVacio = formulario.nombre === "";
    const emailVacio = formulario.email === "";
    const passwordVacia = formulario.password === "";
    const confirmarPasswordVacia = formulario.confirmarPassword === "";
    const passwordsNoCoinciden = formulario.password !== formulario.confirmarPassword;

    if (nombreVacio || emailVacio || passwordVacia || confirmarPasswordVacia || passwordsNoCoinciden) {
      setErrores({
        nombre: nombreVacio,
        email: emailVacio,
        password: passwordVacia,
        confirmarPassword: confirmarPasswordVacia || passwordsNoCoinciden,
      });
      return; // Prevenir el envío del formulario si hay campos vacíos o contraseñas no coinciden
    }

    console.log("Cuenta creada correctamente :)", formulario);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "350px", margin: "auto", mt: 5 }}
      >
        <Typography variant="h5" component="h2" align="center">
          Creá una cuenta
        </Typography>

        <Typography variant="body1" align="center">
          Nos alegra tener un nuevo miembro de la familia :)
        </Typography>

        <TextField
          label="Tu nombre completo"
          placeholder="¿Cómo te llamas, ve?"
          name="nombre"
          value={formulario.nombre}
          onChange={handleChange}
          fullWidth
          error={errores.nombre}
          helperText={errores.nombre && "El nombre completo es obligatorio"}
        />

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
          label="Crea una contraseña"
          type="password"
          placeholder="Segurita, que solo vos la sepas"
          name="password"
          value={formulario.password}
          onChange={handleChange}
          fullWidth
          error={errores.password}
          helperText={errores.password && "La contraseña es obligatoria"}
        />

        <TextField
          label="Confirmar contraseña"
          type="password"
          placeholder="Solo para asegurarnos que la recuerdas"
          name="confirmarPassword"
          value={formulario.confirmarPassword}
          onChange={handleChange}
          fullWidth
          error={errores.confirmarPassword}
          helperText={errores.confirmarPassword && (formulario.password !== formulario.confirmarPassword ? "Las contraseñas no coinciden" : "La confirmación de la contraseña es obligatoria")}
        />

        <BotonEnvio type="submit">
          ¡Estoy Ready!
        </BotonEnvio>

        <Typography variant="body2" align="center">
          ¿Ya tenés una cuenta? <b>Ingresa ahora</b>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default FormularioCrearCuenta;
