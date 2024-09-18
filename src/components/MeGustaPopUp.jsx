import React from 'react';
import '../styles/MeGustaPopUp.css';
import { Button, Checkbox, FormControlLabel, TextField, InputLabel, Select, MenuItem, FormHelperText, Typography, Box, FormControl } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles/index.js'; // NO TOCAR
import { theme, BotonEnvio, CampoTexto } from '../themes/MUItheme.js';  

const MeGustaPopUp = () => {
  const parches = [
    {
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e9/63/a5/plano-general-museo-la.jpg?w=1200&h=-1&s=1",
      title: "Visita grupal a la Tertulia",
      location: "Cali, Valle del Cauca",
      date: "8 de septiembre",
      link: "#"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIQYDjoGeNK5jdd-q5gMqjJqUWXIANqG1F6A&s",
      title: "Subida a Cristo Rey",
      location: "Cali, Valle del Cauca",
      date: "12 de septiembre",
      link: "#"
    }
  ];

  return (
    <div className="liked-popup-container">
      <h4>Parches que me interesan</h4>
      <div className="liked-wrapper">
        {parches.map((parche, index) => (
          <div className="liked-parche" key={index}>
            <img src={parche.image} className="liked-parche-img" alt={parche.title} />
            <div className="liked-parche-ctn">
              <a href={parche.link}>{parche.title}</a>
              <span className="liked-parche-data">
                {parche.location} -
                <span className="liked-parche-date">{parche.date}</span>
              </span>
            </div>
            <div className="liked-parche-btn">
              <a href={parche.link}>
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <BotonEnvio>Explorar parches</BotonEnvio>
    </div>
  );
};

export default MeGustaPopUp;