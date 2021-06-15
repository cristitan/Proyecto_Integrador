function registrarDocente() { // WIP Validaciones
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
		console.log(docenteList[i])
	}
}