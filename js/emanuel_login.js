class Alumnos {
  constructor(user, nombre, password, docenteAsignado) {
    this.user = user;
    this.nombre = nombre;
    this.password = password;
    this.docenteAsignado = docenteAsignado;
    this.nivelAlumno = nivelAlumno;
    this.entregas = entregas;
  }
}
class Docentes {
  constructor(user, nombre, password) {
    this.user = user;
    this.nombre = nombre;
    this.password = password;
    this.alumnos = [];
    this.tareasPlanteadas = [];
  }
}

listaAlumnos = [];
const listaDocentes = [
  {
    tipoUsuario: "docente",
    nombre: "Santi Fig",
    user: "santfig",
    password: "1234",
    alumnos: [
      {
        nombre: "Marcos Medina",
        usuario: "marcmed",
        password: "mkmPass21",
        profesor: "santifag",
        nivel: "inicial",
      },
      {
        nombre: "Emanuel Díaz",
        usuario: "emadiaz",
        password: "emaPass12",
        profesor: "santifag",
        nivel: "inicial",
      },
      {
        nombre: "Cristian Poggi",
        usuario: "crispog",
        password: "crisPass4",
        profesor: "santifag",
        nivel: "inicial",
      },
    ],
    tareas: [
      // TAREAS PLANTEADAS POR EL DOCENTE
      {
        id: 1, // en la función recordar generar uno con:  id = tareas.length + 1
        title: "Tareas de prueba",
        descripion: "Descripcion larga test",
        imagen: "url/here.dom",
        nota: 100, // nota máxima de tarea
        nivel: "inicial", // "inicial"/"intermedio"/"avanzado"
        entregas: [
          {
            alumno: "emadiaz",
            audio: "url/",
          },
        ],
      },
    ],
  },
  {
    nombre: "Mauro Profesor",
    user: "mauroprof1",
  },
];

usuariologeado = {
  // REFERENCIAS
  lista: [],
  indice: 0, //
  usuarioId: "", // el usuario id para enviar como parametro a getAlumno para encontrar el alumno
};

// Funcion GetAlumno para encontrar alumnos en el array listaAlumnos.  (Ejemplo: getAlumno(usuarioLogeado.usuarioId).nivel para obtener el nivel del alumno en funciones)
function getAlumno(usuarioId) {
  for (const alumno of listaAlumnos) {
    if (alumno.usuario === usuarioId) {
      return alumno;
    }
  }
}

// Funcion GetDocente para encontrar alumnos en el arraay listaDocentes
function getDocente(usuarioId) {
  for (const docente of listaDocentes) {
    if (docente.usuario === usuarioId) {
      return docente;
    }
  }
}

function login(userInput, passwordInput, tipoUsuario) {
  userInput = document.querySelector("#user").value; // acá el query selector de input de usuario
  passwordInput = document.querySelector("#password").value; // acá input de contraseña

  if (tipoUsuario === "alumno") {
    for (const [indice, alumno] of listaAlumnos) {
      if (alumno.user === userInput) {
        console.log("Encontramos al usuario");

        if (alumno.password === passwordInput) {
          console.log("Logeado!");
          usuarioLogeado.lista = listaAlumnos;
          usuarioLogeado.indice = indice;
          userLogeado.usuarioId = alumno.usuario;
        } else {
          console.log("Contraseña incorrecta");
        }
      } else {
        console.log("Usuario no encontrado");
      }
    }
  } else {
    if (tipoUsuario === "docente") {
      for (const [indice, alumno] of listaDocentes) {
        if (docente.user === userInput) {
          console.log("Encontramos al usuario");

          if (docente.password === passwordInput) {
            console.log("Logeado!");
            usuarioLogeado.lista = listaDocentes;
            usuarioLogeado.indice = indice;
            userLogeado.usuarioId = docente.usuario;
          } else {
            console.log("Contraseña incorrecta");
          }
        } else {
          console.log("Usuario no encontrado");
        }
      }
    }
  }

  // OTROS APUNTES
  // NO PUSHEAR ESTO
  // NO PUSHEAR ESTO

  // if(userInput.length >= 4 && contieneSimbolos(userInput)){
  // 	if (passwordInput.length >= 6) {
  // 		const nuevoDocente = new Docente(userInput, passwordInput, idfugdfb)
  // 		listaDocente.push(nuevoDocente)
  // 	} else {
  // 		console.log("El usuario debe tener más de 4 caracteres")
  // 		crearAlert("La contraseña debe tener más de 5 caracteres")
  // 	}
  // }
  // else{
  // 	console.log("El usuario debe tener más de 4 caracteres")
  // }
}
