// POR AHORA SOLO ES PARA ERRORES
// tipoDeAlerta = "success", "alert", "error"
function mostrarAlerta(texto, tipoDeAlerta) {
    const statesStyles = {
        error: ["red-text", "cancel"],
        alert: ["yellow-text text-darken-3", "error"],
        success: ["green-text text-darken-3", "check_circle"],
    };
    const classToAssign = `toast toast_${tipoDeAlerta}`;
    M.toast({
        html: `<span><i class="material-icons left ${statesStyles[tipoDeAlerta][0]}">${statesStyles[tipoDeAlerta][1]}</i><b>${texto}</b></span>`,
        displayLength: 5000,
        classes: classToAssign,
    });
}

/*-------------------------------------- VALIDACIONES ----------------------------------------- */

function validarNombre(nombre) {
    const symbolChars = "!`@#$%^&*()+=-[]\\';,./{}|\":<>?~_";
    if (nombre.length < 4) {
        mostrarAlerta("El Nombre debe tener al menos 4 caracteres", "error");
        return false;
    }
    for (var i = 0; i < nombre.length; i++) {
        const letraDeNombre = nombre[i];
        if (symbolChars.includes(letraDeNombre)) {
            mostrarAlerta("El Nombre no debe contener símbolos", "error");
            return false;
        }
    }
    return true;

}

function validarUsuario(userName, list) {
    // list es la lista que pase como parámetro, docentesList, alumnosList
    for (const elemUsuario of list) {
        // usuario es el elemento guardado e iterado del list
        // (usuario docente > docentesList | usuario alumno > alumnosList)
        if (elemUsuario.usuario === userName) {
            // si el usuario registrado es igual al usuario nuevo, entonces ya existe
            mostrarAlerta("Ese Usuario ya fue tomado, escriba otro.", "error");
            return false; // como ya existe, entonces retornamos false
        }
    }
    // en caso de que no se haya encontrado ningun usuario que sea igual al usuario nuevo
    // entonces retornamos true
    return true;
}

// function validarUserDocente(user) {
//   for (let i = 0; i < docenteList.length; i++) {
//     if (user === docenteList[i].usuario) {
//       return false
//     }
//   }
//   return true
// }

// function validarUserAlumno(user) {
//   for (let i = 0; i < alumnoList.length; i++) {
//     if (user === alumnoList[i].usuario) {
//       return false
//     }
//   }
//   return true
// }

// btn_RegistrarDocente.addEventListener("click", ()=>{
//   // ---
//   validarUsuario(inputUser.value, docentesList)
// })

function chequearMinus(texto) {
    for (const letra of texto) {
        if (letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122) {
            return true;
        }
    }
    return false;
}
function chequearMayus(texto) {
    for (const letra of texto) {
        if (letra.charCodeAt(0) >= 65 && letra.charCodeAt(0) <= 90) {
            return true;
        }
    }
    return false;
}

function chequearNumero(textoAValidar) {
    const numeros = "0123456789";
    for (const numero of numeros) {
        if (textoAValidar.includes(numero)) {
            return true;
        }
    }
    return false;
}

function validarPass(password) {
    const tieneLargo = password.length > 4;
    // console.log("tieneLargo > ", tieneLargo);

    const tieneMinuscula = chequearMinus(password);
    // console.log("tieneMinuscula > ", tieneMinuscula);

    const tieneMayuscula = chequearMayus(password);
    // console.log("tieneMayuscula > ", tieneMayuscula);

    const tieneNumero = chequearNumero(password);
    // console.log("tieneNumero > ", tieneNumero);

    if (tieneLargo && tieneMinuscula && tieneMayuscula && tieneNumero) {
        return true;
    } else {
        mostrarAlerta(
            `Contraseña inválida. Corrija: ${!tieneLargo && "cantidad de caracteres,"
            } ${!tieneMinuscula && "al menos una minúscula,"} ${!tieneMayuscula && "al menos una mayuscula,"
            } ${!tieneNumero && "al menos un número,"}`,
            "error"
        );
        return false;
    }
}

/* ------------------------------------------ REGISTROS --------------------------------------- */

/* ------------------------------------------  Docente  -------------------------------------- */

// MOVER REGISTRO A DB PARA TENER CRUD?

function registrarDocente() {
    const nombreDocente = document.querySelector(
        "input#docente_first_name"
    ).value;
    const usuarioDocente = document.querySelector(
        "input#docente_user_name"
    ).value;
    const passwordDocente = document.querySelector(
        "input#docente_password"
    ).value;
    const nuevoDocente = new Docente(
        nombreDocente,
        usuarioDocente,
        passwordDocente
    );

    const validadorPushNombre = validarNombre(nombreDocente);
    const validadorPushUser = validarUsuario(usuarioDocente, docentesList);
    const validadorPushPass = validarPass(passwordDocente);

    if (validadorPushNombre && validadorPushUser && validadorPushPass) {
        docenteList.push(nuevoDocente);
        listarDocente();
        mostrarAlerta("Se ha registrado correctamente!", "success");
    } else {
        mostrarAlerta("Algo salió mal :(", "error");
    }
}

document
    .querySelector("#btnRegistrarDocente")
    .addEventListener("click", (e) => {
        e.preventDefault();
        registrarDocente();
    });

/* ------------------------------------------  Registro de Tarea  -------------------------------------- */

//WIP WIP WIP

//Falta agregar id de tarea USAMOS DATE??

document
    .querySelector("#btnRegistrarTarea")
    .addEventListener("click", (e) => {
        e.preventDefault();
        registrarTarea();
    });

function registrarTarea() {
    const nombreDocente = document.querySelector(
        "input#titulo_tarea"
    ).value;
    const usuarioDocente = document.querySelector(
        "input#descripcion_tarea"
    ).value;
    const passwordDocente = document.querySelector(
        "input#nivel_tarea"
    ).value;
    const nuevoDocente = new Tarea(
        titulo,
        descripcion,
        nivel,
    );


    tareasList.push(nuevoAlumno);


    listarTareas(); 

    // // WIP Validaciones

    // mostrarAlerta("Se ha registrado correctamente!", "success");    
    // mostrarAlerta("Algo salió mal :(", "error");

}


function listarTareas() {
    for (let i = 0; i < tareasList.length; i++) {
        console.log(tareasList[i]);
    }
}

/* ------------------------------------------  Alumno  -------------------------------------- */


function registrarAlumno() {
    
    // WIP = WORK IN PROGRESS

    let nombre = document.querySelector("#alumno_first_name").value;
    let usuario = document.querySelector("#alumno_user_name").value;
    let password = document.querySelector("#alumno_password").value;
    // AGREGAR NIVEL let password = document.querySelector("#").value;
    let profesor = document.querySelector("select#profesor_asignado").value;

    let nuevoAlumno = new Alumno(nombre, usuario, password);
    
    let validadorPushNombre = validarNombre(nombre);
    let validadorPushUser = validarUserAlumno(usuario);
    let validadorPushPass = validarPass(password);

    if (validadorPushNombre && validadorPushUser && validadorPushPass) {
        alumnosList.push(nuevoAlumno);
        listarAlumnos();
    } else if (!validadorPushNombre) {
        mostrarAlerta(
            "Error:  Nombre incorrecto. Por favor, ingrese un nombre sin símbolos. ",
            "error"
            );
    } else if (!validadorPushUser) {
        mostrarAlerta(
            "Error, ya existe este usuario, elija otro nombre de usuario. ",
            "error"
        );
    } else if (!validadorPushPass) {
        mostrarAlerta(
            "Error, su contraseña no cumple con los requisitos. Asegúrese de que tenga al menos 4 carácteres, una minúscula, una mayúscula y un número. ",
            "error"
        );
    }
}

function listarAlumnos() {
    for (let i = 0; i < alumnoList.length; i++) {
        console.log(alumnoList[i]);
    }
}

/* ------------------------------------------  Entregas  -------------------------------------- */

// WIP 

// //Falta agregar id de Entrega USAMOS DATE??

document
    .querySelector("#btnRegistrarEntrega")
    .addEventListener("click", (e) => {
        e.preventDefault();
        registrarTarea();
    });

function registrarEntrega() {
    const comentario = document.querySelector(
        "input#Comentario"
    ).value;
    const usuarioDocente = document.querySelector(
        "input#"
    ).value;
    const passwordDocente = document.querySelector(
        "input#"
    ).value;


    const nuevoEntrega = new Entrega(
        comentario,
        // Id de Entrega 
    );


    entregasList.push(nuevaEntrega);


    listarEntregas(); 

    // // WIP Validaciones

    // mostrarAlerta("Se ha registrado correctamente!", "success");    
    // mostrarAlerta("Algo salió mal :(", "error");

}


function listarEntregas() {
    for (let i = 0; i < entregasList.length; i++) {
        console.log(entregasList[i]);
    }
}

