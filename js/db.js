class Docente {
  constructor(unNombre, unUsuario, password) {
    this.nombre = unNombre;
    this.usuario = unUsuario;
    this.password = password;
    this.alumnosAsignados = [];
    this.tareasPlanteadas = [];
  }
}
class Alumno {
  constructor(nombre, usuario, password, usuarioDocenteAsignado) {
    this.usuario = usuario;
    this.nombre = nombre;
    this.password = password;
    this.usuarioDocenteAsignado = usuarioDocenteAsignado;
    this.nivelAlumno = "inicial";
    this.entregas = [];
  }
}
// class Entrega {
//   constructor(
//     usuarioAlumno,
//     id_tarea,
//     audio,
//     devoluciones,
//     nota_final,
//     comentario,
//     estado
//   ) {
//     this.usuarioAlumno = usuarioAlumno;
//     this.id_tarea = id_tarea;
//     this.audio = audio;
//     this.devoluciones = devoluciones;
//     this.nota_final = nota_final;
//     this.comentario = comentario;
//     this.estado = estado;
//   }
// }

// class Tarea_Planteada {
//   constructor(id, titulo, descripcion, imagen) {
//     this.id = id;
//     this.titulo = titulo;
//     this.descripcion = descripcion;
//     this.imagen = imagen;
//   }
// }

const usuarioLogeado = {
  // REFERENCIAS
  tipo: "",
  listaPerteneciente: [],
  indice: 0, //
  usuarioId: "", // ? el usuario id para enviar como parametro a getAlumno para encontrar el alumno
}; // Por qué no poner dataUsuarioLogeado dentro del usuarioLogeado
let dataUsuarioLogeado = {};
// usuarioLogeado.listaPerteneciente = alumnosList

const alumnosList = [
  {
    nombre: "Marcos Medina",
    usuario: "markmed",
    password: "mkmPass21",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "inicial",
    entregas: [1, 2, 3], // Esto deben ser objs
  },
  {
    nombre: "Emanuel Díaz",
    usuario: "emadiaz",
    password: "emaPass12",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "inicial",
    entregas: [1, 2, 3, 5],
  },
  {
    nombre: "Cristian Poggi",
    usuario: "crispog",
    password: "crisPass4",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "inicial",
    entregas: [1, 5, 67, 8],
  },
  {
    nombre: "Adrian Nario",
    usuario: "elBana",
    password: "123",
    usuarioDocenteAsignado: "santiFagno",
    nivelAlumno: "intermedio",
    entregas: [23],
  },
  {
    nombre: "Adrian Nario2",
    usuario: "elBana2",
    password: "123",
    usuarioDocenteAsignado: "cariMath",
    nivelAlumno: "inicial",
    entregas: [4],
  },
];
const docentesList = [
  {
    nombre: "Santiago Fagnoni",
    usuario: "santiFagno",
    password: "123",
    alumnosAsignados: [
      {
        nombre: "Marcos Medina",
        usuario: "markmed",
        password: "mkmPass21",
        usuarioDocenteAsignado: "santiFagno",
        nivelAlumno: "inicial",
        entregas: [1, 2, 3], // Esto deben ser objs
      },
      {
        nombre: "Emanuel Díaz",
        usuario: "emadiaz",
        password: "emaPass12",
        usuarioDocenteAsignado: "santiFagno",
        nivelAlumno: "inicial",
        entregas: [1, 2, 3, 5],
      },
      {
        nombre: "Cristian Poggi",
        usuario: "crispog",
        password: "crisPass4",
        usuarioDocenteAsignado: "santiFagno",
        nivelAlumno: "inicial",
        entregas: [1, 5, 67, 8],
      },
      {
        nombre: "Adrian Nario",
        usuario: "elBana",
        password: "123",
        usuarioDocenteAsignado: "santiFagno",
        nivelAlumno: "intermedio",
        entregas: [23],
      },
    ],
    tareasPlanteadas: [],
  },
  {
    nombre: "Carina",
    usuario: "cariMath",
    password: "cariMath314",
    alumnosAsignados: [],
    tareasPlanteadas: [],
  },
  {
    nombre: "Daniel Baccino",
    usuario: "daniBac",
    password: "mBot5",
    alumnosAsignados: [],
    tareasPlanteadas: [],
  },
];

// // WIP = WORK IN PROGRESS
// function crearTarea(profesorUsr, titulo, descripion, img, notaMax, nivel) {
//   // SOLO PROFESOR
//   const nuevaTarea = {
//     idTarea: profesorUsr.tareasPlanteadas.length + 1,
//     titulo, // DESTRUCTURING OBJ
//     descripion,
//     img,
//     notaMax,
//     nivel,
//     entregas: [], // inicializa vacío
//   };
//   profesorUsr.tareasPlanteadas.push(nuevaTarea);
// }
// // WIP = WORK IN PROGRESS
// function realizarEntrega(audio, comentario) {
//   // SOLO ALUMNO
//   const nuevaEntrega = {
//     userAlumno: userLogeado.user,
//     idTarea: idTarea,
//     password: password,
//     alumnos: [],
//     tareasPlanteadas: [],
//   };
//   getAlumno(userLogeado.user).entregas.push(nuevaEntrega);
//   getTarea(getProfesor(userLogeado.profesor), idTarea).entregas.push(
//     nuevaEntrega
//   );
// }

// const docentesListTest = [
//   {
//     nombre: "Santi Fig",
//     usuario: "santFig",
//     password: "myPass123",
//     alumnos: [
//       {
//         nombre: "Marcos Medina",
//         usuario: "marcmed",
//         password: "mkmPass21",
//         profesor: "santifag",
//         nivel: "inicial",
//       },
//       {
//         nombre: "Emanuel Díaz",
//         usuario: "emadiaz",
//         password: "emaPass12",
//         profesor: "santifag",
//         nivel: "inicial",
//       },
//       {
//         nombre: "Cristian Poggi",
//         usuario: "crispog",
//         password: "crisPass4",
//         profesor: "santifag",
//         nivel: "inicial",
//       },
//     ],
//     tareas: [
//       // TAREAS PLANTEADAS POR EL DOCENTE
//       {
//         id: 12,
//         title: "Tareas de prueba",
//         descripion: "Descripcion larga asfhqawfi",
//         imagen: "url/here.dom",
//         nota: 100, // nota máxima de tarea
//         nivel: "inicial", // "inicial"/"intermedio"/"avanzado"
//         entregas: [
//           {
//             alumno: "emadiaz",
//             audio: "ulr/",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     nombre: "Santiago Fig",
//     usuario: "santFig2",
//   },
// ];
// const alumnosListTest = [
//   {
//     nombre: "Marcos Medina",
//     usuario: "marcmed",
//     password: "mkmPass21",
//     docente: "santifag",
//     nivel: "inicial",
//     entregas: [],
//   },
//   {
//     nombre: "Emanuel Díaz",
//     usuario: "emadiaz",
//     password: "emaPass12",
//     profesor: "santifag",
//     nivel: "inicial",
//   },
//   {
//     nombre: "Cristian Poggi",
//     usuario: "crispog",
//     password: "crisPass4",
//     profesor: "santifag",
//     nivel: "inicial",
//     entregas: [],
//   },
// ];

function getDocente(usuarioId) {
  for (const docente of docentesList) {
    if (docente.usuario === usuarioId) {
      return docente;
    }
  }
}
function getAlumno(usuarioId) {
  for (const alumno of alumnosList) {
    if (docente.usuario === usuarioId) {
      return alumno;
    }
  }
}

// const listaDeTareasTotalesQueTieneElAlumno = [];
// const listaDeTareasPendientesQueTieneElAlumno = [];
// const listaDeTareasRealizadasQueTieneElAlumno = [];

// const docenteDelAlumnoLogeado = getDocente(
//   dataUsuarioLogeado.usuarioDocenteAsignado
// );

// function {
//   // OBTENER TODAS LAS TAREAS PLANTEADAS POR EL DOCENTE SEGUN NIVEL PARA EL ALUMNO
//   for (const tareaPlanteada of docenteDelAlumnoLogeado.tareasPlanteadas) {
//     if (tareaPlanteada.nivel === usuarioLogeado.nivel) {
//       //usuarioLogueado es un alumno
//       listaDeTareasTotalesQueTieneElAlumno.push(tareaPlanteada);
//     }
//   }
// }

// // OBTENER TODAS LAS TAREAS PLANTEADAS POR EL DOCENTE YA RESUELTAS POR EL ALUMNO
// for (const tarea of listaDeTareasTotalesQueTieneElAlumno) {
//   //Cómo llego al profesor
//   let existe = false;
//   for (const entrega of dataUsuarioLogeado.entregas) {
//     if (tarea.id === entrega.idTarea) {
//       existe = true;
//       break;
//       // listaDeTareasRealizadasQueTieneElAlumno.push(tarea)
//     }
//   }
//   if (existe) {
//     listaDeTareasRealizadasQueTieneElAlumno.push(tarea);
//   } else {
//     listaDeTareasPendientesQueTieneElAlumno.push(tarea);
//   }
// }
