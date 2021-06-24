// // Realizar Entrega WIP
function realizarEntrega() {
  // SOLO ALUMNO

  //Obtenemos el audio y el comentario del alumno
  audioInput = document.querySelector("#entregarTareaSubirAudio").value;
  comentarioInput = document.querySelector("#entregarTareaComentario").value;
  id_TareaActual = document.querySelector("#idTareaActual").value;
  //Inicializamos esto para verificar si ya existe la entrega luego
  yaExisteEntrega = false;

  //Al llamar esta función gracias al botón de realizar entrega: se crea una Entrega que va a ser chequeada
  let nuevaEntrega = {
    usuarioAlumno: usuarioLogeado.usuarioId,
    id_tarea: id_TareaActual,
    audio: audioInput,
    devoluciones: [],
    comentarioAlumno: comentarioInput,
  };

  // Acá hacemos un for para que chequee si la id de esta nuevaEntrega coincide con alguna ya existente para el usuario.
  // Si ya existe, el valor yaExisteEntrega se vuelve true
  for (let i = 0; i < dataUsuarioLogeado.entregas.length; i++) {
    if (dataUsuarioLogeado.entregas[i].idTarea === nuevaEntrega.idTarea) {
      mostrarAlerta(
        "Error: no puede realizar más de una entrega para la misma tarea",
        "error"
      );
      yaExisteEntrega = true;
    }
  }
  // Si "no existe la entrega"; hacemos el push entre las entregas y le avisamos al usuario que ha subido su entrega correctamente.
  if (!yaExisteEntrega) {
    getAlumno(userLogeado.user).entregas.push(nuevaEntrega);
    getTarea(
      id_TareaActual,
      dataUsuarioLogeado.usuarioDocenteAsignado
    ).entregas.push(nuevaEntrega);
    mostrarAlerta("Perfecto, su entrega ha sido subida", "success");
  }
}

function getTarea(idTareaParam, usuarioDocenteParam) {
  let tareasPlanteadas = getDocente(usuarioDocenteParam).tareasPlanteadas;
  for (const tarea of tareasPlanteadas) {
    if (tarea.idtarea === idTareaParam) {
      return tarea;
    }
  }
}
