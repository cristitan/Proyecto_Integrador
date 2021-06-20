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

/* VALIDACIONES */
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
      `Contraseña inválida. Corrija: ${
        !tieneLargo && "cantidad de caracteres,"
      } ${!tieneMinuscula && "al menos una minúscula,"} ${
        !tieneMayuscula && "al menos una mayuscula,"
      } ${!tieneNumero && "al menos un número,"}`,
      "error"
    );
    return false;
  }
}

function obtenerTopAlumnos(arrayAlumnosAsignados) {
  const alumnosOrdenados = arrayAlumnosAsignados.sort(function (a, b) {
    if (a.entregas.length > b.entregas.length) {
      return -1;
    }
    if (a.entregas.length < b.entregas.length) {
      return 1;
    }
    return 0;
  });
  const topAlumnos = []; // SE VA A GUARDAR EL/LOS ALUMNO/S CON MÁS ENTREGAS
  for (i = 0; i < alumnosOrdenados.length; i++) {
    if (i === 0) {
      topAlumnos.push(alumnosOrdenados[i]);
    }
    if (
      alumnosOrdenados[i + 1] &&
      alumnosOrdenados[i].entregas.length ===
        alumnosOrdenados[i + 1].entregas.length
    ) {
      topAlumnos.push(alumnosOrdenados[i + 1]);
    } else {
      return topAlumnos;
    }
  }
}

/* ACTUALIZACIONES DE DATOS */
// Navbar cuando se loggea usuario

//Función a la que llamar cada vez que se abre o cierra sesion @dondeEstéFunciónLogin @dondeEstéFunciónLogOut
// Si se llama a esta función cuando hay un usuarioLogeado; va a mostrar los botones correspondientes
// También si hay un usuarioLogeado; va a printear "Hola, Fulanito" en el html en el primer li con la ID correspondiente.
function actualizarNavItems() {
  if (usuarioLogeado.usuarioId) {
    const welcomeElement = document.querySelector(
      "body nav div ul#usuarioConocido #bienvenidoUser"
    );
    welcomeElement.innerHTML = "";
    welcomeElement.innerHTML = `${dataUsuarioLogeado.nombre}`;
    mostrarNavItem("ul#usuarioConocido");
  } else {
    mostrarNavItem("ul#vistaPublico");
  }
}

//DASHBOARD Docente

const actualizarDatos_DashboardDocente = () => {
  if (usuarioLogeado.tipo === "docente") {
    const agregarItemAlumno = (nombre, nivel, cantidadTareas) => {
      return `
        <li>
          <div class="col s12 row indigo lighten-5 roundedBorders2" style="padding: 6px;">							
            <i class="col s1 small material-icons indigo-text text-accent-1 centeredFlex" style="font-size: 45px; vertical-align: bottom; height: 55px;">
              account_circle
            </i>
            <div class="col s4" style="height: 55px;">
              <span class="col s12">${nombre}</span>
              <span class="col s12" style="font-size: 12px;">Nivel ${nivel}</span>
            </div>
            <div class="col s4 indigo-text text-accent-2 centeredFlex" style="height: 55px;">
              <span class="col s12">
                Entregas Realizadas: <b>${cantidadTareas}</b>
              </span>
            </div>
            <div class="col s2 offset-s1  centeredFlex" style="height: 55px;" >
              <button class="waves-effect waves-light btn col s12 indigo accent-1 roundedBorders2">
                Ver Perfil
              </button>
            </div>
          </div>
        </li>
        `;
    };
    const agregarItemTopAlumno = (nombre, cantidadTareas) => {
      return `
      <li>
        <div class="col s12 row indigo lighten-5 roundedBorders2">
          <span class="col s8 indigo lighten-5 roundedBorders2">
            ${nombre}
          </span>
          <span
            class="col s1 offset-s3 indigo-text text-accent-1"
            style="font-weight: bold;"
          >
            ${cantidadTareas}
          </span>
        </div>
      </li>
        `;
    };
    const dashboard = document.querySelector(
      "body main section#dashboardDocente"
    );
    const contenedorListaAlumnos = dashboard.querySelector(
      "div#contenedorListaAlumnos"
    );
    const listaAlumnosTodos = contenedorListaAlumnos.querySelector(
      "div#alumnosTodos ul"
    );
    const listaAlumnosInicial = contenedorListaAlumnos.querySelector(
      "div#alumnosInicial ul"
    );
    const listaAlumnosIntermedio = contenedorListaAlumnos.querySelector(
      "div#alumnosIntermedio ul"
    );
    const listaAlumnosAvanzado = contenedorListaAlumnos.querySelector(
      "div#alumnosAvanzado ul"
    );
    const entregasParaDocente = dashboard.querySelector(
      "#deliveredExersicesNumber p"
    );
    const alumnosTopEntregas = dashboard.querySelector(
      "#alumnosTopEntregas ul"
    );

    const topAlumnos = obtenerTopAlumnos(dataUsuarioLogeado.alumnosAsignados);

    // reinicio numero de entregas hechas para el docente
    let totalDeliveredExercises = 0;

    // reinicio listas de alumnos
    listaAlumnosTodos.innerHTML = "";
    listaAlumnosInicial.innerHTML = "";
    listaAlumnosIntermedio.innerHTML = "";
    listaAlumnosAvanzado.innerHTML = "";
    // Actualizo listas de alumnos
    for (const alumno of dataUsuarioLogeado.alumnosAsignados) {
      totalDeliveredExercises += alumno.entregas.length;
      listaAlumnosTodos.innerHTML += agregarItemAlumno(
        alumno.nombre,
        alumno.nivelAlumno,
        alumno.entregas.length
      );
      if (alumno.nivelAlumno === "inicial") {
        listaAlumnosInicial.innerHTML += agregarItemAlumno(
          alumno.nombre,
          alumno.nivelAlumno,
          alumno.entregas.length
        );
      }
      if (alumno.nivelAlumno === "intermedio") {
        listaAlumnosIntermedio.innerHTML += agregarItemAlumno(
          alumno.nombre,
          alumno.nivelAlumno,
          alumno.entregas.length
        );
      }
      if (alumno.nivelAlumno === "avanzado") {
        listaAlumnosAvanzado.innerHTML += agregarItemAlumno(
          alumno.nombre,
          alumno.nivelAlumno,
          alumno.entregas.length
        );
      }
    }
    // Actualizo numero de entregas hechas para el docente
    entregasParaDocente.innerHTML = totalDeliveredExercises;
    //
    alumnosTopEntregas.innerHTML = "";
    for (const alumno of topAlumnos) {
      alumnosTopEntregas.innerHTML += agregarItemTopAlumno(
        alumno.nombre,
        alumno.entregas.length
      );
    }
  } else {
    mostrarAlerta("Al logearse, el tipo de usuario está mal", "error");
    mostrarOneSection("section#pantallaError");
  }
};

/* REGISTROS */
// Docente
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
    docentesList.push(nuevoDocente);
    listarDocentes();
    mostrarAlerta("Se ha registrado correctamente!", "success");
  } else {
    mostrarAlerta("Algo salió mal :(", "error");
  }
}

function listarDocentes() {
  for (let i = 0; i < docentesList.length; i++) {
    console.log(docentesList[i]);
  }
}

/* ------------------------------------------  Registro de Tarea  -------------------------------------- */

//WIP WIP WIP

//Falta agregar id de tarea USAMOS DATE??

// document
//   .querySelector("#btnRegistrarTarea")
//   .addEventListener("click", (e) => {
//     e.preventDefault();
//     registrarTarea();
//   });

function registrarTarea() {
  const titulo = document.querySelector("#titulo_tarea").value;
  const descripcion = document.querySelector("#descripcion_tarea").value;

  const nuevaTarea = new Tarea(titulo, descripcion, NIVELES.INICIAL, 0, 12);

  tareasList.push(nuevaTarea);

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

// Alumno
function registrarAlumno() {
  // WIP = WORK IN PROGRESS

  let nombre = document.querySelector("#alumno_first_name").value;
  let usuario = document.querySelector("#alumno_user_name").value;
  let password = document.querySelector("#alumno_password").value;
  console.log(
    "value docente asignado",
    document.querySelector("#docente_asignado").value
  );
  let alumnosAsignados =
    docentesList[document.querySelector("#docente_asignado").value]
      .alumnosAsignados;

  let nuevoAlumno = new Alumno(
    nombre,
    usuario,
    password,
    docentesList[document.querySelector("#docente_asignado").value]
  );

  let validadorPushNombre = validarNombre(nombre);
  //let validadorPushUser = validarUserAlumno(usuario);
  let validadorPushPass = validarPass(password);

  if (validadorPushNombre && validadorPushPass) {
    alumnosList.push(nuevoAlumno);
    alumnosAsignados.push(nuevoAlumno);
    listarDocentes();
  } else if (!validadorPushNombre) {
    mostrarAlerta(
      "Error:  Nombre incorrecto. Por favor, ingrese un nombre sin símbolos. ",
      "error"
    );
    // } else if (!validadorPushUser) {
    //   mostrarAlerta(
    //     "Error, ya existe este usuario, elija otro nombre de usuario. ",
    //     "error"
    //   );
  } else if (!validadorPushPass) {
    mostrarAlerta(
      "Error, su contraseña no cumple con los requisitos. Asegúrese de que tenga al menos 4 carácteres, una minúscula, una mayúscula y un número. ",
      "error"
    );
  }
}

//Funcion para desplegar los docentes en el select

function selectDocentes() {
  console.log("voy a cargar el select");

  document.querySelector(
    "select#docente_asignado"
  ).innerHTML = `<option disabled selected>Choose your option</option>`;

  //docentesList.sort();
  for (let i = 0; i < docentesList.length; i++) {
    let unDocente = docentesList[i];
    console.log("unDocente nombre", unDocente.nombre, i);
    document.querySelector(
      "select#docente_asignado"
    ).innerHTML += `<option value=${i}> 
    ${unDocente.nombre}
    </option>`;
  }

  var selectElem = document.querySelectorAll("select");
  let select = M.FormSelect.init(selectElem);
}

// Funcion para listar los alumnos registrados al momento en la consola.

function listarAlumnos() {
  for (let i = 0; i < alumnosList.length; i++) {
    console.log(alumnosList[i]);
  }
}

function login(userNameParam, passwordParam, tipoUsuario) {
  const listABuscar = tipoUsuario === "alumno" ? alumnosList : docentesList;
  // z asignar lista a buscar
  // z validar si existe usuario (buscando iterando en la lista)

  const indiceUsuarioEncontrado = listABuscar.findIndex(
    (usuarioElem) => usuarioElem.usuario === userNameParam
  );

  if (indiceUsuarioEncontrado !== -1) {
    const usuarioEncontrado = listABuscar[indiceUsuarioEncontrado];

    if (usuarioEncontrado.password === passwordParam) {
      usuarioLogeado.listaPerteneciente = listABuscar;
      usuarioLogeado.indice = indiceUsuarioEncontrado;
      usuarioLogeado.usuarioId = usuarioEncontrado.usuario;
      usuarioLogeado.tipo = tipoUsuario;
      dataUsuarioLogeado = usuarioEncontrado;
      mostrarAlerta(
        "Bienvenido <b>" + dataUsuarioLogeado.nombre + "</b>",
        "success"
      );
      actualizarNavItems();
      if (usuarioLogeado.tipo === "docente") {
        actualizarDatos_DashboardDocente();
      } else {
        // actualizarDatos_DashboardAlumno(); WIP
      }
    } else {
      mostrarAlerta("Contraseña incorrecta", "error");
      return false;
    }
    // / /si contraseña correcta > asignar usuario a usuarioLogeado, mostrarseccion
    // / /si no es correcta > mandar erro
  } else {
    mostrarAlerta("Usuario no encontrado en lista de " + tipoUsuario, "error");
    return false;
  }

  // EJECUTAR FUNCION DE ACTUALIZAR DATA

  if (tipoUsuario === "alumno") {
    mostrarOneSection("section#dashboardAlumno");
  } else {
    mostrarOneSection("section#dashboardDocente");
  }
}
function cerrarSesion() {
  //limpiamos las propiedades de usuarioLogeado, para no tener los datos del usuario marcados en la app y que la funcion mostrarNavItem no detecte al usuarioLogeado
  usuarioLogeado.listaPerteneciente = [];
  usuarioLogeado.indice = 0;
  usuarioLogeado.usuarioId = "";
  mostrarNavItem("navItem#vistaPublico"); // ahora los items van a ser los de navItems para usuarioDesconocido: los botones de inicio y Registro
  mostrarOneSection("section#login"); // Volvemos a la seccion login al cerrar sesion
}

document
  .querySelector("body nav ul button#btnCerrarSesion")
  .addEventListener("click", cerrarSesion);

// ADDEVENTLISTENER

// Botón reporte individual
document
  .querySelector("button#btnDocenteIrReporteIndividual")
  .addEventListener("click", () => {
    mostrarOneSection("section#reporteIndividual");
  });

// Botón logeo Docente
document
  .querySelector("button#btnLogin_docente")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const userNameDocente = document.querySelector(
      "body main section#login input#login_docente_usuario"
    ).value; // CORREGIR
    const passwordDocente = document.querySelector(
      "body main section#login input#login_docente_password"
    ).value; // CORREGIR

    login(userNameDocente, passwordDocente, "docente");
    // mostrarOneSection("section#dashboardDocente");
  });

// Botón logeo Alumno
document
  .querySelector("button#btnLogin_alumno")
  .addEventListener("click", (e) => {
    e.preventDefault();
    // const userNameDocente = input.value; // CORREGIR
    // const passwordDocente = input.value; // CORREGIR
    login(userNameDocente, passwordDocente, "alumno");
    mostrarOneSection("section#dashboardAlumno");
  });

// Botón Registro Docente
document
  .querySelector("#btnRegistrarDocente")
  .addEventListener("click", (e) => {
    e.preventDefault();
    registrarDocente();
  });

// Botón Registro Alumno
document.querySelector("#btnRegistro_alumno").addEventListener("click", (e) => {
  e.preventDefault();
  registrarAlumno();
});
