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

usuarioActual = { // REFERENCIAS
	lista: [],
	indice: 0,
	usuarioId: ""
}  // usuarioActual es la variable que en la funciòn de login se colocarán
                                // los datos del usuario que se consiguió logear.
                                // no sé bien como se inicializaría, por eso puse usuarioLogeado al menos para darnos cuenta de que es esa clase
getAlumno(usuarioActual.usuarioId).nivel

// const getAlumno = (lista, usuarioId) => {}
function getAlumno(usuarioId){
	for (const alumno of listaAlumnos) {
		if(alumno.usuario === usuarioId){
			return alumno
		}
	}
}
function getDocente(usuarioId){
	for (const docente of listaDocentes) {
		if(docente.usuario === usuarioId){
			return docente
		}
	}
}
document.querySelector('#btnLogin').addEventListener('click', login)

// const contieneSimbolos(text){
// 	esValid = false
// 	if(wefgew){
// 		//
// 		// esValid = true
// 	}
// 	return esValid
// }

function login(userInput, passwordInput, tipoUsuario) {
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
	if(tipoUsuario === "alumno"){
		for (const [indice, alumno] of listaAlumnos) {
			if(alumno.user === userInput){
				console.log("Encontramos al usuario")
				
				if(alumno.password === passwordInput){
					console.log("Logeado!")
					usuarioActual.lista = listaAlumnos;
					usuarioActual.indice = indice
					userLogeado.usuarioId = alumno.usuario
				}
				else{
					console.log("Contraseña incorrecta")
				}
			} 
			else{
				console.log("Usuario no encontrado")
			}
		}

	}

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