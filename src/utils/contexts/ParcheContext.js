// crea el archivo en  src/utils/contexts/ParcheContext.js
import React, { createContext, useState, useContext } from 'react';


const ParcheContext = createContext();

export const ParcheProvider = ({ children }) => {
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
      descripcionLarga: "Disfruta de una tarde cultural en compañía de amigos. Visitaremos el Museo La Tertulia, donde apreciaremos una amplia colección de arte y aprenderemos sobre su historia.",
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

  return (
    <ParcheContext.Provider value={{ listaParche, setListaParche }}>
      {children}
    </ParcheContext.Provider>
  );
};


// Hook personalizado

export const useParcheContext = () => useContext(ParcheContext);


