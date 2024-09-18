import React from "react";
import { Box, Typography } from "@mui/material";
import FormularioCreacionParche from "./components/FormularioNuevoParche.jsx";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./themes/MUItheme.js";

const CrearParche = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '200px',
            backgroundColor: '#06081F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 3
          }}
        >
          <Typography variant="h4" component="h1" color="white">
            Crear cuenta
          </Typography>
        </Box>

        <FormularioCreacionParche />
      </Box>
    </ThemeProvider>
  );
};

export default CrearParche;
