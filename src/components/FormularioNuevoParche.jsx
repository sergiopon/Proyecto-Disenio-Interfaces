import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Box,
  FormControl,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles/index.js"; // NO TOCAR
import { theme, BotonEnvio, CampoTexto } from "../themes/MUItheme.js";
import uploadImg from "../assets/images/upload.png";
import Parche from "../data/classes/Parche.js";
import PopUp from "./PopUp.jsx";
import "../styles/FormularioCreacionParche.css";

// import { useParcheContext } from '../utils/contexts/ParcheContext';

const FormularioCreacionParche = () => {
  // const { listaParche, setListaParche } = useParcheContext();

  /*
  const [listaParche, setListaParche] = useState([
    {
      nombre: "Visita grupal al museo La Tertulia",
      fechaInicio: "2024-09-15",
      fechaFinal: "2024-09-15",
      horaInicio: "08:00",
      horaFinal: "14:00",
      costo: 0,
      lugar: "museo La Tertulia",
      esRepetitivo: false,
      desplazamiento: false,
      ciudad: "Cali",
      descripcionCorta: "Sumérgete en el arte colombiano y latinoamericano en una visita guiada por el Museo La Tertulia.",
      descripcionLarga: " Disfruta de una tarde cultural en compañía de amigos. Visitaremos el Museo La Tertulia, donde apreciaremos una amplia colección de arte y aprenderemos sobre su historia.",
      capacidad: 45,
      organizador: ["Isabella", "https://npr.brightspotcdn.com/2b/18/c042b647406185b7de55c332432e/meeko-racoon-01-1024x1024.jpg"],
      imagenDestacada: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/e9/63/a5/plano-general-museo-la.jpg?w=1200&h=-1&s=1",
      galeriaImagenes: [],
      tipoParche: "Actividad",
      costoDesplazamiento: 0,
      diaRepeticion: "",
      fechaFinalRepeticion: ""
    }
  ]);
*/

  const [formulario, setFormulario] = useState({
    nombre_parche: "",
    fecha_inicio: "",
    fecha_final: "",
    hora_inicio: "",
    hora_final: "",
    costo_parche: "",
    lugar_encuentro: "",
    es_repetitivo: false,
    desplazamiento: false,
    ciudad_parche: "",
    descripcion_corta_parche: "",
    descripcion_larga_parche: "",
    capacidad: "",
    organizador_parche: "",
    imagen_destacada: null,
    galeria_imagenes: [],
    costo_desplazamiento: "",
    dia_repeticion: "",
    fecha_final_repeticion: "",
    tipo_parche: "",
  });

  const [errores, setErrores] = useState({});
  const [selectedImagenDestacada, setSelectedImagenDestacada] = useState(null);
  const [selectedGaleriaImagenes, setSelectedGaleriaImagenes] = useState([]);
  const [showPopUp, setShowPopUp] = useState(false);

  const validarFormulario = () => {
    const erroresTemp = {};
    const {
      nombre_parche,
      fecha_inicio,
      fecha_final,
      hora_inicio,
      hora_final,
      costo_parche,
      lugar_encuentro,
      ciudad_parche,
      descripcion_corta_parche,
      descripcion_larga_parche,
      capacidad,
      es_repetitivo,
      desplazamiento,
      costo_desplazamiento,
      dia_repeticion,
      fecha_final_repeticion,
    } = formulario;

    if (!nombre_parche)
      erroresTemp.nombre_parche = "El nombre del parche es obligatorio";
    if (!fecha_inicio)
      erroresTemp.fecha_inicio = "La fecha de inicio es obligatoria";
    if (!fecha_final) erroresTemp.fecha_final = "La fecha final es obligatoria";
    if (!hora_inicio)
      erroresTemp.hora_inicio = "La hora de inicio es obligatoria";
    if (!hora_final) erroresTemp.hora_final = "La hora final es obligatoria";
    if (!costo_parche)
      erroresTemp.costo_parche = "El costo del parche es obligatorio";
    if (!lugar_encuentro)
      erroresTemp.lugar_encuentro = "El lugar de encuentro es obligatorio";
    if (!ciudad_parche)
      erroresTemp.ciudad_parche = "La ciudad del parche es obligatoria";
    if (!descripcion_corta_parche)
      erroresTemp.descripcion_corta_parche =
        "La descripción corta es obligatoria";
    if (!descripcion_larga_parche)
      erroresTemp.descripcion_larga_parche =
        "La descripción larga es obligatoria";
    if (!capacidad || capacidad <= 0)
      erroresTemp.capacidad = "La capacidad debe ser mayor que 0";

    if (desplazamiento && !costo_desplazamiento)
      erroresTemp.costo_desplazamiento =
        "El costo del desplazamiento es obligatorio";
    if (es_repetitivo && !dia_repeticion)
      erroresTemp.dia_repeticion = "Debe seleccionar un día de repetición";
    if (es_repetitivo && !fecha_final_repeticion)
      erroresTemp.fecha_final_repeticion =
        "La fecha de finalización es obligatoria";

    setErrores(erroresTemp);
    return Object.keys(erroresTemp).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let costoDesplazamiento = 0;
    let diaRepeticion = "";
    let fechaFinalRepeticion = "";

    if (formulario.desplazamiento && formulario.costo_desplazamiento !== "") {
      costoDesplazamiento = formulario.costo_desplazamiento;
    }
    if (formulario.es_repetitivo && formulario.dia_repeticion !== "") {
      diaRepeticion = formulario.dia_repeticion;
    }

    if (validarFormulario()) {
      const nuevoParche = new Parche({
        nombre: formulario.nombre_parche,
        fechaInicio: formulario.fecha_inicio,
        fechaFinal: formulario.fecha_final,
        horaInicio: formulario.hora_inicio,
        horaFinal: formulario.hora_final,
        costo: formulario.costo_parche,
        lugar: formulario.lugar_encuentro,
        esRepetitivo: formulario.es_repetitivo,
        desplazamiento: formulario.desplazamiento,
        ciudad: formulario.ciudad_parche,
        descripcionCorta: formulario.descripcion_corta_parche,
        descripcionLarga: formulario.descripcion_larga_parche,
        capacidad: formulario.capacidad,
        organizador: [
          "Isabella",
          "https://npr.brightspotcdn.com/2b/18/c042b647406185b7de55c332432e/meeko-racoon-01-1024x1024.jpg",
        ],
        imagenDestacada: formulario.imagen_destacada,
        galeriaImagenes: formulario.galeria_imagenes,
        costoDesplazamiento: formulario.costo_desplazamiento,
        diaRepeticion: formulario.dia_repeticion,
        fechaFinalRepeticion: formulario.fecha_final_repeticion,
        tipoParche: formulario.tipo_parche,
      });
      /*
      setListaParche(prevLista => {
        const nuevaLista = [...prevLista, nuevoParche];
        console.log(nuevaLista);  // Imprimir la lista actualizada en la consola
        return nuevaLista;
      });
    */

      setShowPopUp(true);
    } else {
      console.log("Formulario inválido");
    }
  };

  const handleFileChange = (event, type) => {
    const files = event.target.files;
    if (type === "imagen_destacada") {
      if (files.length > 0) {
        setSelectedImagenDestacada(files[0]);
        setFormulario((prevFormulario) => ({
          ...prevFormulario,
          imagen_destacada: files[0],
        }));
      }
    } else if (type === "galeria_imagenes") {
      setSelectedGaleriaImagenes(files);
      setFormulario((prevFormulario) => ({
        ...prevFormulario,
        galeria_imagenes: files,
      }));
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormulario((prevFormulario) => ({
      ...prevFormulario,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const {
    nombre_parche,
    fecha_inicio,
    fecha_final,
    hora_inicio,
    hora_final,
    costo_parche,
    lugar_encuentro,
    es_repetitivo,
    desplazamiento,
    ciudad_parche,
    descripcion_corta_parche,
    descripcion_larga_parche,
    capacidad,
    costo_desplazamiento,
    dia_repeticion,
    fecha_final_repeticion,
  } = formulario;

  return (
    <ThemeProvider theme={theme}>
      <div className="form-main-div">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="h5" component="h2">
            Crear Parche
          </Typography>

          <CampoTexto
            label="Nombre del Parche"
            name="nombre_parche"
            value={nombre_parche}
            onChange={handleChange}
            error={!!errores.nombre_parche}
            helperText={errores.nombre_parche}
            fullWidth
          />

          <CampoTexto
            label="Fecha de Inicio"
            name="fecha_inicio"
            type="date"
            value={fecha_inicio}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!errores.fecha_inicio}
            helperText={errores.fecha_inicio}
          />

          <CampoTexto
            label="Fecha Final"
            name="fecha_final"
            type="date"
            value={fecha_final}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!errores.fecha_final}
            helperText={errores.fecha_final}
          />

          <CampoTexto
            label="Hora de Inicio"
            name="hora_inicio"
            type="time"
            value={hora_inicio}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!errores.hora_inicio}
            helperText={errores.hora_inicio}
          />

          <CampoTexto
            label="Hora Final"
            name="hora_final"
            type="time"
            value={hora_final}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            error={!!errores.hora_final}
            helperText={errores.hora_final}
          />

          <FormControl error={!!errores.ciudad_parche}>
            <InputLabel>Ciudad del Parche</InputLabel>
            <Select
              label="Ciudad del Parche"
              name="ciudad_parche"
              value={ciudad_parche}
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
            {errores.ciudad_parche && (
              <FormHelperText>{errores.ciudad_parche}</FormHelperText>
            )}
          </FormControl>

          <CampoTexto
            label="Lugar de Encuentro"
            name="lugar_encuentro"
            value={lugar_encuentro}
            onChange={handleChange}
            error={!!errores.lugar_encuentro}
            helperText={errores.lugar_encuentro}
          />

          <CampoTexto
            label="Capacidad"
            name="capacidad"
            type="number"
            value={capacidad}
            onChange={handleChange}
            error={!!errores.capacidad}
            helperText={errores.capacidad}
          />

          <CampoTexto
            label="Costo del Parche"
            name="costo_parche"
            type="number"
            value={costo_parche}
            onChange={handleChange}
            error={!!errores.costo_parche}
            helperText={errores.costo_parche}
          />

          <FormControl>
            <InputLabel>Tipo de Parche</InputLabel>
            <Select
              name="tipo_parche"
              value={formulario.tipo_parche}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>Selecciona el tipo de parche</em>
              </MenuItem>
              <MenuItem value="Actividad">Actividad</MenuItem>
              <MenuItem value="Tour">Tour</MenuItem>
              <MenuItem value="Concierto">Concierto</MenuItem>
              <MenuItem value="Evento">Evento</MenuItem>
              <MenuItem value="Voluntariado">Voluntariado</MenuItem>
              <MenuItem value="Encuentro">Encuentro</MenuItem>
            </Select>
          </FormControl>

          <FormControlLabel
            control={
              <Checkbox
                checked={desplazamiento}
                onChange={handleChange}
                name="desplazamiento"
              />
            }
            label="¿Incluye desplazamiento?"
          />

          {desplazamiento && (
            <CampoTexto
              label="Costo del Desplazamiento"
              name="costo_desplazamiento"
              type="number"
              value={costo_desplazamiento}
              onChange={handleChange}
              error={!!errores.costo_desplazamiento}
              helperText={errores.costo_desplazamiento}
            />
          )}

          <FormControlLabel
            control={
              <Checkbox
                checked={es_repetitivo}
                onChange={handleChange}
                name="es_repetitivo"
              />
            }
            label="¿Es repetitivo?"
          />

          {es_repetitivo && (
            <>
              <CampoTexto
                label="Día de la semana que se repite"
                name="dia_repeticion"
                value={dia_repeticion}
                onChange={handleChange}
                error={!!errores.dia_repeticion}
                helperText={errores.dia_repeticion}
              />

              <CampoTexto
                label="Fecha de finalización del parche repetitivo"
                name="fecha_final_repeticion"
                type="date"
                value={fecha_final_repeticion}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                error={!!errores.fecha_final_repeticion}
                helperText={errores.fecha_final_repeticion}
              />
            </>
          )}

          <CampoTexto
            label="Descripción Corta"
            name="descripcion_corta_parche"
            value={descripcion_corta_parche}
            onChange={handleChange}
            multiline
            error={!!errores.descripcion_corta_parche}
            helperText={errores.descripcion_corta_parche}
          />

          <CampoTexto
            label="Descripción Larga"
            name="descripcion_larga_parche"
            value={descripcion_larga_parche}
            onChange={handleChange}
            multiline
            rows={4}
            error={!!errores.descripcion_larga_parche}
            helperText={errores.descripcion_larga_parche}
            fullWidth
          />

          <div className="file-upload" style={fileUploadStyles}>
            <img
              src={uploadImg}
              alt="Subir Imagen Destacada"
              style={{ width: "50px", height: "50px" }}
            />
            <h3>Subir imagen destacada</h3>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "imagen_destacada")}
            />
            {selectedImagenDestacada && (
              <p>Imagen seleccionada: {selectedImagenDestacada.name}</p>
            )}
          </div>

          <div className="file-upload" style={fileUploadStyles}>
            <img
              src={uploadImg}
              alt="Subir Galería de Imágenes"
              style={{ width: "50px", height: "50px" }}
            />
            <h3>Subir galería de imágenes</h3>
            <input
              type="file"
              multiple
              onChange={(e) => handleFileChange(e, "galeria_imagenes")}
            />
            {selectedGaleriaImagenes.length > 0 && (
              <ul>
                {Array.from(selectedGaleriaImagenes).map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            )}
          </div>

          <BotonEnvio type="submit">Enviar</BotonEnvio>
        </Box>

        {showPopUp && (
          <PopUp
            imageSrc="assets/images/asset1.png"
            title="¡Buena esa mi parcero!"
            content="Acabas de crear exitosamente un parche. Compártelo con más personas para que se unan :)"
            onClose={() => setShowPopUp(false)}
          />
        )}
      </div>
    </ThemeProvider>
  );
};

const fileUploadStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
};

/* export { listaParche, setListaParche }; */

export default FormularioCreacionParche;