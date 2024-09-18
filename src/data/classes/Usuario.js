class Usuario {
    constructor(
      nombre_usuario,
      apellido_usuario,
      username,
      imagen_perfil,
      imagen_portada,
      es_organizador,
      calificacion_usuario
    ) {
      this.nombre_usuario = nombre_usuario;
      this.apellido_usuario = apellido_usuario;
      this.username = username;
      this.imagen_perfil = imagen_perfil;
      this.imagen_portada = imagen_portada;
      this.parches_creados = []; // Lista de parches que ha creado
      this.comentarios_creados = []; // Lista de comentarios que ha creado
      this.amigos_creados = []; // Lista de amigos (otros usuarios)
      this.es_organizador = es_organizador;
      this.calificacion_usuario = calificacion_usuario;
    }
  
    agregarParcheCreado(nuevoParche) {
      this.parches_creados.push(nuevoParche);
    }
  
    editarParche(parche, nuevosDatos) {
      if (parche.organizador_parche !== this) {
        console.log("No tienes permiso para editar este parche.");
        return;
      }
      const camposModificables = [
        "nombre_parche",
        "fecha_inicio",
        "fecha_final",
        "hora_inicio",
        "hora_final",
        "costo_parche",
        "imagen_destacada",
        "galeria_parche",
        "lugar_encuentro",
        "es_repetitivo",
        "desplazamiento",
        "ciudad_parche",
        "descripcion_corta_parche",
        "descripcion_larga_parche"
      ];
  
      for (const campo in nuevosDatos) {
        if (camposModificables.includes(campo) && nuevosDatos[campo] !== undefined) {
          parche[campo] = nuevosDatos[campo];
        }
      }
      console.log("Parche actualizado con éxito.");
    }
    
  }
  