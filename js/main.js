/*-------------------------------------- VALIDACIONES ----------------------------------------- */

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

function validarUserDocente(user) {

  //ALUMNO Y PROFE

  for (let i = 0; i < docenteList.length; i++) {

    if (user === docenteList[i].usuario) {
      return false
    }
  }
  return true

}

function validarUserAlumno(user) {

  //ALUMNO Y PROFE

  for (let i = 0; i < alumnoList.length; i++) {

    if (user === alumnoList[i].usuario) {
      return false
    }
  }
  return true

}


function validarPass(password) {

  // contraseña alfanumerica mayos a 4 chars y case sensitive

  const validatorLargo = password.length > 4
  const validatorVacio = password === ""
  const validarMinusculas = password.toLowerCase() != password
  const validarMayusculas = password.toUpperCase() != password

  return validatorLargo && validatorVacio && validarMinusculas && validarMayusculas

}


/* ------------------------------------------ REGISTROS --------------------------------------- */
/* ------------------------------------------  Docente  -------------------------------------- */

const docenteList = [];

class Docente {
  constructor(unNombre, unUsuario, password) {
    this.nombre = unNombre;
    this.usuario = unUsuario;
    this.password = password;
    this.alumnos = [];
    this.tareas = [];
    this.id = docenteList.length; // asigna un numero incremental y unico
    //this.id = Date.now(); // asigna un numero incremental y unico
  }
}


document
  .querySelector("#btnRegistrarDocente")
  .addEventListener("click", registrarDocente);


function registrarDocente() {
  let nombreProfe = document.querySelector("#profesor_first_name").value;
  let usuarioProfe = document.querySelector("#profesor_user_name").value;
  let passwordProfe = document.querySelector("#profesor_password").value;

  let nuevoProfesor = new Docente(
    nombreProfe,
    usuarioProfe,
    passwordProfe
  );

  let validadorPushNombre = validarNombre(nombreProfe)
  let validadorPushUser = validarUserDocente(usuarioProfe)
  let validadorPushPass = validarPass(passwordProfe)

  if (validadorPushNombre && validadorPushUser && validadorPushPass) {

    docenteList.push(nuevoProfesor);
    listarDocente()

  } else if (!validadorPushNombre) {
    mostrarAlerta("Error:  Nombre incorrecto. Por favor, ingrese un nombre sin símbolos. ", "error")
  }

  else if (!validadorPushUser) {
    mostrarAlerta("Error, ya existe este usuario, elija otro nombre de usuario. ", "error")
  }

  else if (!validadorPushPass) {
    mostrarAlerta("Error, su contraseña no cumple con los requisitos. Asegúrese de que tenga al menos 4 carácteres, una minúscula, una mayúscula y un número. ", "error")
  }
}



/* ------------------------------------------  Alumno  -------------------------------------- */

class Alumno {
  constructor(unNombre, unUsuario, password, unNivel) {
    this.nombre = unNombre;
    this.usuario = unUsuario;
    this.password = password;
    this.nivelAlumno = "inicial"
    this.docenteId = null; //es un valor que está declarado pero es nulo, no undefined
    this.tareas = [];
    this.id = alumnoList.length; // asigna un numero incremental desde 0
  }
}



function registrarAlumno() { // WIP = WORK IN PROGRESS

  let nombre = document.querySelector("#alumno_first_name").value;
  let usuario = document.querySelector("#alumno_user_name").value;
  let password = document.querySelector("#alumno_password").value;
  // AGREGAR NIVEL let password = document.querySelector("#").value;
  // Tomar valor del select

  let nuevoAlumno = new Alumno(
    nombre,
    usuario,
    password,
  );

  let validadorPushNombre = validarNombre(nombre)
  let validadorPushUser = validarUserAlumno(usuario)
  let validadorPushPass = validarPass(password)

  if (validadorPushNombre && validadorPushUser && validadorPushPass) {

    docenteList.push(nuevoProfesor);
    listarProfesores()

  } else if (!validadorPushNombre) {
    mostrarAlerta("Error:  Nombre incorrecto. Por favor, ingrese un nombre sin símbolos. ", "error")
  }

  else if (!validadorPushUser) {
    mostrarAlerta("Error, ya existe este usuario, elija otro nombre de usuario. ", "error")
  }

  else if (!validadorPushPass) {
    mostrarAlerta("Error, su contraseña no cumple con los requisitos. Asegúrese de que tenga al menos 4 carácteres, una minúscula, una mayúscula y un número. ", "error")
  }

}

function listarAlumnos() {
  for (let i = 0; i < alumnoList.length; i++) {
    console.log(alumnoList[i])
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
