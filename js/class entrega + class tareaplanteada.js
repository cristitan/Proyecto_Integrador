class entrega {
  constructor(
    usuarioAlumno,
    id_tarea,
    audio,
    devoluciones,
    nota_final,
    comentario,
    estado
  ) {
    this.usuarioAlumno = usuarioAlumno;
    this.id_tarea = id_tarea;
    this.audio = audio;
    this.devoluciones = devoluciones;
    this.nota_final = nota_final;
    this.comentario = comentario;
    this.estado = estado;
  }
}

class tareaPlanteada {
  constructor(id, titulo, descripcion, imagen) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}
