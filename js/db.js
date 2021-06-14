
// PROFESOR 
// {
// 	nombre: string, 
// 	usuario: string, 
// 	password: string, 
// 	profesor: stringID > profesorList, 
// 	nivel: string
// }

let userLogeado = "user loggeado"

// Lógica para mostrar y ocultar secciones
// document.querySelector("wsf").addClass("hidden"); // Todos
// document.querySelector("wsf").removeClass("hidden") // Para mostrar específico

function registrarAlumno(user, nombre, password, profesorUsr){ // WIP = WORK IN PROGRESS
	const nuevoAlumno = {
		usuario: user,
		nombre: nombre,
		password: password,
		profesor: profesorUsr,
		nivel: "inicial",
		entregas: []
	}
	alumnoList.push(nuevoAlumno)
}
function registrarProfesor(user, nombre, password){ // WIP = WORK IN PROGRESS
	const nuevoProfesor = {
		usuario: user,
		nombre: nombre,
		password: password,
		alumnos: [],
		tareasPlanteadas: []
	}
	profesorList.push(nuevoProfesor)
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
		alumnos: [],
		tareasPlanteadas: []
	}
	getAlumno(userLogeado.user).entregas.push(nuevaEntrega);
	getTarea(getProfesor(userLogeado.profesor), idTarea).entregas.push(nuevaEntrega);
}


// tarea[id].entregas

const profesorList = [];

const profesorListTest = [
	{
		nombre: "Santi Fig",
		usuario: "santFig",
		password: "myPass123",
		alumnos: [
			{nombre: "Marcos Medina", usuario: "marcmed", password: "mkmPass21", profesor: "santifag", nivel: "inicial"},
			{nombre: "Emanuel Díaz", usuario: "emadiaz", password: "emaPass12", profesor: "santifag", nivel: "inicial"},
			{nombre: "Cristian Poggi", usuario: "crispog", password: "crisPass4", profesor: "santifag", nivel: "inicial"},
		],
		tareas: [ // TAREAS PLANTEADAS POR EL DOCENTE
			{
				id: 12,
				title: "Tareas de prueba",
				descripion: "Descripcion larga asfhqawfi",
				imagen: "url/here.dom",
				nota: 100, // nota máxima de tarea
				nivel: "inicial", // "inicial"/"intermedio"/"avanzado"
				entregas: [
					{
						alumno: "emadiaz",
						audio: "ulr/"
					}
				]
			}
		]	
	},
	{
		nombre: "Santiago Fig",
		usuario: "santFig2",
	}
];

// ALUMNO 
// {
// 	nombre: string, 
// 	usuario: string, 
// 	password: string, 
// 	profesor: stringID > profesorList, 
// 	nivel: string,
// 	entregas: [ejercicioObj],
// 	promedio: string,
// 	nivel: string,
// }
const alumnoList = [];

const alumnoListTest = [
	{nombre: "Marcos Medina", usuario: "marcmed", password: "mkmPass21", profesor: "santifag", nivel: "inicial"},
	{nombre: "Emanuel Díaz", usuario: "emadiaz", password: "emaPass12", profesor: "santifag", nivel: "inicial"},
	{nombre: "Cristian Poggi", usuario: "crispog", password: "crisPass4", profesor: "santifag", nivel: "inicial", entregas: []},
];

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