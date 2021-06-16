// ------------------------------------------- Docente  --------------------------------------------

const profesorList = [];

// Docente 
// {
// 	nombre: string, 
// 	usuario: string, 
// 	password: string, 
// 	profesor: stringID > profesorList, 
// 	nivel: string
// }

class Docente {
  constructor(unNombre, unUsuario, password) {
    this.nombre = unNombre;
    this.usuario = unUsuario;
    this.password = password;
    this.alumnos = [];
    this.tareas = [];
    this.id = profesorList.length; // asigna un numero incremental y unico
    //this.id = Date.now(); // asigna un numero incremental y unico
  }
}


document
  .querySelector("#btnRegistrarDocente")
  .addEventListener("click", registrarProfesor);


function registrarProfesor() {
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

    profesorList.push(nuevoProfesor);
    listarProfesores()

  } else if (!validadorPushNombre) { 
    alert ("Error:  Nombre incorrecto. Por favor, ingrese un nombre sin símbolos. ")
    }
    
    else if (!validadorPushUser) { 
    alert ("Error, ya existe este usuario, elija otro nombre de usuario")
    }
    
    else if (!validadorPushPass) { 
    alert ("Error, su contraseña no cumple con los requisitos. Asegúrese de que tenga al menos 4 carácteres, una minúscula, una mayúscula y un número")
    }
}

//Para listar Profes/Docentes

function listarProfesores() {
  for (let i = 0; i < profesorList.length; i++) {
    console.log(profesorList[i])
  }
}

// WIP = WORK IN PROGRESS
// function crearTarea(profesorUsr, titulo, descripion, img, notaMax, nivel) { // SOLO PROFESOR
//   const nuevaTarea = {
//     idTarea: profesorUsr.tareasPlanteadas.length + 1,
//     titulo, // DESTRUCTURING OBJ
//     descripion,
//     img,
//     notaMax,
//     nivel,
//     entregas: [] // inicializa vacío
//   }
//   profesorUsr.tareasPlanteadas.push(nuevaTarea)
// }


// ------------------------------------------- ALUMNO  --------------------------------------------




// Alumno creación de objeto y funciones

const alumnoList = [];

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

let userLogeado = "user loggeado"

// Lógica para mostrar y ocultar secciones
// document.querySelector("wsf").addClass("hidden"); // Todos
// document.querySelector("wsf").removeClass("hidden") // Para mostrar específico


// document
// .querySelector("#btnRegistrarAlumno")
// .addEventListener("click", registrarAlumno);

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
      
      profesorList.push(nuevoProfesor);
      listarProfesores()
      
    } else if (!validadorPushNombre) { 
      alert ("Error:  Nombre incorrecto. Por favor, ingrese un nombre sin símbolos. ")
      }
      
      else if (!validadorPushUser) { 
      alert ("Error, ya existe este usuario, elija otro nombre de usuario")
      }
      
      else if (!validadorPushPass) { 
      alert ("Error, su contraseña no cumple con los requisitos. Asegúrese de que tenga al menos 4 carácteres, una minúscula, una mayúscula y un número")
      }
    
  }
  
  function listarAlumnos() {
    for (let i = 0; i < alumnoList.length; i++) {
      console.log(alumnoList[i])
    }
  }
  
  // WIP = WORK IN PROGRESS
  // function realizarEntrega(audio, comentario) { // SOLO ALUMNO
  //   const nuevaEntrega = {
  //     userAlumno: userLogeado.user,
  //     idTarea: idTarea,
  //     password: password,
  //     // alumnos: [],
  //     // tareasPlanteadas: []
  //   }
  //   getAlumno(userLogeado.user).entregas.push(nuevaEntrega);
  //   getTarea(getProfesor(userLogeado.profesor), idTarea).entregas.push(nuevaEntrega);
  // }
  
  // ------------------------------------------- VALIDACIONES --------------------------------------------
  
  
  
  function validarNombre(nombre) {
    
    // const nombreProfe No tenga simbolos y no esté vacío
    
    let symbolChars = "!`@#$%^&*()+=-[]\\\';,./{}|\":<>?~_";   
    let validarSuimbolosUsuario = true

  for (var i = 0; i < nombre.length; i++)

    {      
        if (symbolChars.indexOf(nombre.charAt(i)) != -1){    

        return validarSuimbolosUsuario = false

        } 
    }

  const nombreEsValidado = nombre === ""

  return nombreEsValidado && validarSuimbolosUsuario
}


function validarUserDocente(user) {

  //ALUMNO Y PROFE

  for (let i = 0; i < profesorList.length; i++) {

    if (user === profesorList[i].usuario) {
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



const ejerciciosList = [];

const ejerciciosListTest = [];