/* VALIDACIONES */

function validarNombre(nombre) {
  const symbolChars = "!`@#$%^&*()+=-[]\\';,./{}|\":<>?~_";
  if (nombre.length < 4) {
    return false;
  }
  for (var i = 0; i < nombre.length; i++) {
    const letraDeNombre = nombre[i];
    if (symbolChars.includes(letraDeNombre)) {
      return false;
    }
  }
  return true;
}

/* REGISTROS */
function registrarDocente() {
  // WIP Validaciones
  let nombreDocente = document.querySelector("#profesor_first_name").value;
  let usuarioDocente = document.querySelector("#profesor_user_name").value;
  let passwordDocente = document.querySelector("#profesor_password").value;

  let nuevoDocente = new Docente(
    nombreDocente,
    usuarioDocente,
    passwordDocente
  );
  docenteList.push(nuevoDocente); //docenteList es una variable que está en DB
  // listarDocente()
}
function listarDocente() {
  for (let i = 0; i < docenteList.length; i++) {
    console.log(docenteList[i]);
  }
}

// POR AHORA SOLO ES PARA ERRORES
// tipoDeAlerta = "success", "alert", "error"
function mostrarAlerta(texto, tipoDeAlerta) {
  const statesStyles = {
    error: ["red-text", "cancel"],
    alert: ["yellow-text text-darken-3", "error"],
    success: ["green-text text-darken-3", "check_circle"],
  };
  const classToAssign = `toast toast_${tipoDeAlerta}`;
  console.log(classToAssign);
  M.toast({
    html: `<span><i class="material-icons left ${statesStyles[tipoDeAlerta][0]}">${statesStyles[tipoDeAlerta][1]}</i><b>${texto}</b></span>`,
    displayLength: 4000,
    classes: classToAssign,
  });
}
