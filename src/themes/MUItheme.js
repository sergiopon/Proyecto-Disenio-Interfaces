import { createTheme } from '@mui/material/styles/index.js';  
import { Box, Slider, Typography, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';


const theme = createTheme({
  palette: {
    primary: {
      light: '#5CE1E6',
      main: '#06081F', 
      dark: '#8338EC', 
      contrastText: '#fff', 
    },
    secondary: {
      light: '#5CE1E6', 
      main: '#06081F', 
      dark: '#5458F7',  
      contrastText: '#000', 
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
});


const BotonEnvio = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '30px',
  color: theme.palette.primary.contrastText, 
  padding: '15px 50px',
  fontFamily: theme.typography.fontFamily, 
  fontSize: '18px',
  textTransform: 'capitalize',
  width: '100%', // Ancho al 100%
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const RangeSlider = styled(Slider)({
  color: '#5CE1E6',
});

const BotonEtiquetas = styled(Button)(({ theme, selected }) => ({
  border: '2px solid #F2F2F2',
  borderRadius: '50px',
  fontFamily: 'Poppins, sans-serif',
  padding: '8px 25px',
  backgroundColor: '#FFF', 
  color: '#000',
  '&:hover': {
    borderColor: '#5CE1E6',
    backgroundColor: '#E0F7FF',
  },
  ...(selected && {
    borderColor: '#5CE1E6',
    color: '#06081F', 
  }),
}));


const CampoTexto = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#ccc',
      borderRadius: '10px',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.secondary.main,  
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.light,  
      color: theme.palette.primary.light,  
    },
  },
  '.MuiFormControlLabel-label, .MuiInputLabel-root': {
    fontFamily: theme.typography.fontFamily + ' !important',  
  },
  '.Mui-focused': {
    color: theme.palette.primary.light + ' !important',  
  },
}));


export { theme, BotonEnvio, CampoTexto, RangeSlider, BotonEtiquetas };
