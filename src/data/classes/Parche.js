class Parche {
  constructor(
    nombre_parche,
    fecha_inicio,
    fecha_final,
    hora_inicio,
    hora_final,
    costo_parche,
    imagen_destacada,
    galeria_parche,
    lugar_encuentro,
    es_repetitivo,
    desplazamiento,
    ciudad_parche,
    descripcion_corta_parche,
    descripcion_larga_parche,
    capacidad,
    organizador_parche,
    costo_desplazamiento, 
    dia_repeticion_parche,
    fecha_finalizacion_repeticion, 
    comentarios_parche = [],
    tipo_de_parche = [] 
  ) {
    this.nombre_parche = nombre_parche;
    this.fecha_inicio = fecha_inicio;
    this.fecha_final = fecha_final;
    this.hora_inicio = hora_inicio;
    this.hora_final = hora_final;
    this.costo_parche = costo_parche;
    this.imagen_destacada = imagen_destacada;
    this.galeria_parche = galeria_parche || []; // lista de imágenes
    this.lugar_encuentro = lugar_encuentro;
    this.es_repetitivo = es_repetitivo;
    this.desplazamiento = desplazamiento;
    this.ciudad_parche = ciudad_parche;
    this.descripcion_corta_parche = descripcion_corta_parche;
    this.descripcion_larga_parche = descripcion_larga_parche;
    this.capacidad = capacidad;
    this.organizador_parche = organizador_parche; // usuario
    this.usuarios_inscritos_parche = []; 
    this.comentarios_parche = comentarios_parche; 
    this.num_comentarios = this.comentarios_parche.length; 
    this.costo_desplazamiento = costo_desplazamiento;
    this.dia_repeticion_parche = dia_repeticion_parche;
    this.fecha_finalizacion_repeticion = fecha_finalizacion_repeticion;
    this.tipo_de_parche = tipo_de_parche; 
  }

  inscribirUsuario(usuario) {
    if (this.usuarios_inscritos_parche.length < this.capacidad) {
      this.usuarios_inscritos_parche.push(usuario);
    } else {
      console.log("Capacidad máxima alcanzada");
    }
  }

  agregarComentario(comentario) {
    this.comentarios_parche.push(comentario);
    this.num_comentarios = this.comentarios_parche.length; 
  }
}

export default Parche;
