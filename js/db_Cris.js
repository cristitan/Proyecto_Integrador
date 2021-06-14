// Docente creación de objeto y funciones

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
		profesorList.push(nuevoProfesor);
	listarProfesores()
  }

  //Para listar Profes/Docentes

  function listarProfesores() {
	for (let i = 0; i < profesorList.length; i++) {
		console.log(profesorList[i])
	}
  }



// WIP = WORK IN PROGRESS
function crearTarea(profesorUsr, titulo, descripion, img, notaMax, nivel){ // SOLO PROFESOR
	const nuevaTarea = {
		idTarea: profesorUsr.tareasPlanteadas.length +1,
		titulo, // DESTRUCTURING OBJ
		descripion,
		img,
		notaMax,
		nivel,
		entregas: [] // inicializa vacío
	}
	profesorUsr.tareasPlanteadas.push(nuevaTarea)
}
// WIP = WORK IN PROGRESS
function realizarEntrega(audio, comentario){ // SOLO ALUMNO
	const nuevaEntrega = {
		userAlumno: userLogeado.user,
		idTarea: idTarea,
		password: password,
	// alumnos: [],
	// tareasPlanteadas: []
}
getAlumno(userLogeado.user).entregas.push(nuevaEntrega);
getTarea(getProfesor(userLogeado.profesor), idTarea).entregas.push(nuevaEntrega);
}


















// Alumno creación de objeto y funciones

const alumnoList = [];

class Alumno {
	constructor(unNombre, unUsuario, password, unNivel) {
		this.nombre = unNombre;
		this.usuario = unUsuario;
		this.password = password;
		this.nivel = null;
		this.docenteId = null; //es un valor que está declarado pero es nulo, no undefined
		this.tareas = [];
		this.id = alumnoList.length; // asigna un numero incremental desde 0
	}
}
	
	let userLogeado = "user loggeado"
	
	// Lógica para mostrar y ocultar secciones
	// document.querySelector("wsf").addClass("hidden"); // Todos
	// document.querySelector("wsf").removeClass("hidden") // Para mostrar específico
	

	document
	.querySelector("#btnRegistrarAlumno")
	.addEventListener("click", registrarAlumno);
	
	function registrarAlumno(){ // WIP = WORK IN PROGRESS

		let nombre = document.querySelector("#alumno_first_name").value;
		let usuario = document.querySelector("#alumno_user_name").value;
		let password = document.querySelector("#alumno_password").value;
		// AGREGAR NIVEL let password = document.querySelector("#").value;

		let nuevoAlumno = new Alumno(
			nombre,
			usuario,
			password,
		);
			// profesor: profesorUsr,
			// nivel: "inicial",
			// entregas: []
		
		alumnoList.push(nuevoAlumno)
		listarAlumnos()
	}

	function listarAlumnos() {
		for (let i = 0; i < alumnoList.length; i++) {
		  console.log(alumnoList[i])
		}
	  }
	
	
	


// tarea[id].entregas




// const profesorListTest = [
// 	{
// 		nombre: "Santi Fig",
// 		usuario: "santFig",
// 		password: "myPass123",
// 		alumnos: [
// 			{nombre: "Marcos Medina", usuario: "marcmed", password: "mkmPass21", profesor: "santifag", nivel: "inicial"},
// 			{nombre: "Emanuel Díaz", usuario: "emadiaz", password: "emaPass12", profesor: "santifag", nivel: "inicial"},
// 			{nombre: "Cristian Poggi", usuario: "crispog", password: "crisPass4", profesor: "santifag", nivel: "inicial"},
// 		],
// 		tareas: [ // TAREAS PLANTEADAS POR EL DOCENTE
// 			{
// 				id: 12,
// 				title: "Tareas de prueba",
// 				descripion: "Descripcion larga asfhqawfi",
// 				imagen: "url/here.dom",
// 				nota: 100, // nota máxima de tarea
// 				nivel: "inicial", // "inicial"/"intermedio"/"avanzado"
// 				entregas: [
// 					{
// 						alumno: "emadiaz",
// 						audio: "ulr/"
// 					}
// 				]
// 			}
// 		]	
// 	},
// 	{
// 		nombre: "Santiago Fig",
// 		usuario: "santFig2",
// 	}
// ];

// ALUMNO 
// {
// 	nombre: string, 
// 	usuario: string, 
// 	password: string, 
// 	profesor: stringID > profesorList, 
// 	nivel: string,
// 	entregas: [ejercicioObj],
// 	promedio: string, ?????
// }


// const alumnoListTest = [
// 	{nombre: "Marcos Medina", usuario: "marcmed", password: "mkmPass21", profesor: "santifag", nivel: "inicial"},
// 	{nombre: "Emanuel Díaz", usuario: "emadiaz", password: "emaPass12", profesor: "santifag", nivel: "inicial"},
// 	{nombre: "Cristian Poggi", usuario: "crispog", password: "crisPass4", profesor: "santifag", nivel: "inicial", entregas: []},
// ];

// EJERCICIO 
// {
// 	titulo: string, 
// 	usuario: string, 
// 	password: string, 
// 	profesor: stringID > profesorList, 
// 	nivel: string
// }

const ejerciciosList = [];

const ejerciciosListTest = [];