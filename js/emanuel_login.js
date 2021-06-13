class usuarios {
    constructor(tipoUsuario, user, nombre, password, docenteAsignado, nivelAlumno) {
        this.tipoUsuario = tipoUsuario
        this.user = user
        this.nombre = nombre
        this.password = password
        this.docenteAsignado = docenteAsignado
        this.nivelAlumno = nivelAlumno
    }
} 

const users =  [
        
    {
        tipoUsuario: "docente",
		nombre: "Santi Fig",
		user: "santfig",
		password: "1234",
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
		nombre: "Mauro Profesor",
		user: "mauroprof1",
	}

]

let alumnos = []  
let profesores = [
    ]

usuarioActual = {}  // usuarioActual es la variable que en la funciòn de login se colocarán
                                // los datos del usuario que se consiguió logear.
                                // no sé bien como se inicializaría, por eso puse usuarioLogeado al menos para darnos cuenta de que es esa clase

class usuarioLogeado {
    constructor(tipoUsuario, user, nombre, password, docenteAsignado, nivelAlumno) {
        this.tipoUsuario = tipoUsuario
        this.user = user
        this.nombre = nombre
        this.password = password
        this.docenteAsignado = docenteAsignado // En caso de que sea un perfil de profesor: docenteAsignado = -1
        this.nivelAlumno = nivelAlumno // En caso de que sea un perfil de profesor: nivelAlumno = -1
    }
}

document.querySelector('#btnLogin').addEventListener('click', login)


function login(userInput, passwordInput) {
    userInput = document.querySelector("#user").value // acá el query selector de input de usuario
    userpasswordInput = document.querySelector("#password").value // acá input de contraseña
    let credencialesCorrectas = false
    
    for (let i = 0; i < users.length; i++) {
        if (userInput === users[i].user && passwordInput === users[i].password)
            credencialesCorrectas = true
        break;
    }

    if (credencialesCorrectas === true) {
       let usuarioActual = new usuarioLogeado
       usuarioActual =  { 
            tipoUsuario = users[i].tipoUsuario, // unexpected token ' . '  
            user = users[i].user, // Invalid Shorthand property
            nombre = users[i].nombre,
            password = users[i].password,
           /*  docenteAsignado = users[i].docenteAsignado,
            nivelAlumno = users[i].nivelAlumno, */
        }
        usuarioLogeado = usuarioActual
    }
  /*   if (usuarioActual.tipoUsuario === docente) {
        document.querySelector("#test").innerHTML = "LOGIN HECHO"
    } */
}


// Para testear; sacado del codigo de main//
const profesorList = [];

const profesorListTest = [
	/* {
		nombre: "Santi Fig",
		usuario: "santFig",
		password: "1234",
        tipoUsuario: "docente",
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
	}, */

];