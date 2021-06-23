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

/* ********************* VALIDACIONES *****************/

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
  if (!userName) {
    mostrarAlerta("Ingrese usuario", "error");
    return false; // como ya existe, entonces retornamos false
  }
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

//Wiping...

function validarTareas () {

  if (titulo.length < 20 || titulo.length >= 200) {

    mostrarAlerta("El Nombre debe tener al menos 4 caracteres", "error");
    return false;
    
  } else if (descripcion.length <= 20 || titulo.length >= 200){
    
    mostrarAlerta("El Nombre debe tener al menos 4 caracteres", "error");  
    return false;
    
  } else if (titulo.value === "" || descripcion.value === "") {
    
    mostrarAlerta("El Nombre debe tener al menos 4 caracteres", "error");
    return false;

  } 

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
  const inputName = document.querySelector("input#docente_first_name");
  const inputUser = document.querySelector("input#docente_user_name");
  const inputPass = document.querySelector("input#docente_password");
  const nombreDocente = inputName.value;
  const usuarioDocente = inputUser.value;
  const passwordDocente = inputPass.value;
  const esNombreCorrecto = validarNombre(nombreDocente);
  const esUsuarioDisponible = validarUsuario(usuarioDocente, docentesList);
  const esPasswordCorrecta = validarPass(passwordDocente);

  if (esNombreCorrecto && esUsuarioDisponible && esPasswordCorrecta) {
    const nuevoDocente = new Docente(
      nombreDocente,
      usuarioDocente,
      passwordDocente
    );
    docentesList.push(nuevoDocente);
    listarDocentes();
    mostrarOneSection("section#login");
    mostrarAlerta("Se ha registrado correctamente!", "success");
  }

  inputName.value = "";
  inputUser.value = "";
  inputPass.value = "";
}

function listarDocentes() {
  for (let i = 0; i < docentesList.length; i++) {
    console.log(docentesList[i]);
  }
}

function cambiarNivelAlumno(alumnoData, nivel) {
  const alumno = getAlumno(alumnoData.usuario);
  alumnoData.nivelAlumno = nivel;
  alumno.nivelAlumno = nivel;
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
  const inputName = document.querySelector("#alumno_first_name");
  const inputUser = document.querySelector("#alumno_user_name");
  const inputPass = document.querySelector("#alumno_password");
  const selectDocente = document.querySelector("#docente_asignado");
  const nombre = inputName.value;
  const usuario = inputUser.value;
  const password = inputPass.value;
  const docenteAsignar = docentesList[selectDocente.value];
  const esNombreCorrecto = validarNombre(nombre);
  const esUsuarioDisponible = validarUsuario(usuario, alumnosList);
  const esPasswordCorrecta = validarPass(password);
  if (!docenteAsignar) {
    mostrarAlerta("Por favor, seleccione un Docente", "error");
    return false;
  }
  if (esNombreCorrecto && esUsuarioDisponible && esPasswordCorrecta) {
    const nuevoAlumno = new Alumno(
      nombre,
      usuario,
      password,
      docenteAsignar.usuario
    );
    alumnosList.push(nuevoAlumno);
    docenteAsignar.alumnosAsignados.push(nuevoAlumno);
    listarAlumnos();
    mostrarOneSection("section#login");
    mostrarAlerta("Se ha registrado correctamente!", "success");
  }
  inputName.value = "";
  inputUser.value = "";
  inputPass.value = "";
}

//Funcion para desplegar los docentes en el select
function selectDocentes() {
  document.querySelector(
    "select#docente_asignado"
  ).innerHTML = `<option disabled selected>Choose your option</option>`;

  for (let i = 0; i < docentesList.length; i++) {
    let unDocente = docentesList[i];
    document.querySelector(
      "select#docente_asignado"
    ).innerHTML += `<option value=${i}> 
    ${unDocente.nombre}
    </option>`;
  }

  var selectElem = document.querySelectorAll("select#docente_asignado");
  M.FormSelect.init(selectElem);
}
//Funcion para desplegar los docentes en el select
function selectReporteAlumnos() {
  let onLvlChangeHandler;
  let nivelOutputElem;
  const onAlumnoChangeHandler = (e) => {
    const dataAlumno = dataUsuarioLogeado.alumnosAsignados[e.target.value];
    const nombreOutputElem = document.querySelector(
      "#reporteIndividual_nombre"
    );
    nivelOutputElem = document.querySelector("#reporteIndividual_nivel");
    nivelOutputElem.removeEventListener("change", onLvlChangeHandler);
    const ejerciciosPlanteadosOutputElem = document.querySelector(
      "#reporteIndividual_tareasPlanteadas"
    );
    const ejerciciosResueltosOutputElem = document.querySelector(
      "#reporteIndividual_tareasEntregadas"
    );
    const cambiarNivelBtn = document.querySelector("#cambiarNivel");
    let lvlSelectInstance = M.FormSelect.init(nivelOutputElem);
    // funcion que se ejecuta al selecionar un nivel
    onLvlChangeHandler = (e) => {
      cambiarNivelBtn.removeAttribute("disabled");
      cambiarNivelBtn.removeEventListener("click", clickBtnHandler);
      cambiarNivelBtn.addEventListener("click", clickBtnHandler);
    };

    // función que reinicia los options del select
    const habilitarOptions = () => {
      nivelOutputElem.innerHTML = `<option value="inicial">Inicial</option>
      <option value="intermedio">Intermedio</option>
      <option value="avanzado">Avanzado</option>`;
      nivelOutputElem.value = dataAlumno.nivelAlumno;
      for (const option of nivelOutputElem.children) {
        option.setAttribute("disabled", true);
        if (option.getAttribute("value") === dataAlumno.nivelAlumno) {
          break;
        }
      }

      lvlSelectInstance = M.FormSelect.init(nivelOutputElem);
    };

    // función que se ejecuta al presionar el botón de Cambiar Nivel
    const clickBtnHandler = () => {
      cambiarNivelAlumno(dataAlumno, nivelOutputElem.value);
      mostrarAlerta(
        `Se ha cambiado el nivel de <b>${dataAlumno.nombre}</b> a <b>${nivelOutputElem.value}</b>`,
        "success"
      );
      cambiarNivelBtn.setAttribute("disabled", true);
      cambiarNivelBtn.removeEventListener("click", clickBtnHandler);
      lvlSelectInstance.destroy();
      habilitarOptions();
    };

    let ejerciosPlanteadosEspecificos = 0;

    // reinicio al botpon para que no tenga funcionalidad y esté deshabilitado
    cambiarNivelBtn.setAttribute("disabled", true);
    cambiarNivelBtn.removeEventListener("click", clickBtnHandler);

    // asigno evento de change al select de nivel
    nivelOutputElem.addEventListener("change", onLvlChangeHandler);
    // muestro valor del select según el nivel del alumno
    for (const tarea of dataUsuarioLogeado.tareasPlanteadas) {
      if (tarea.nivel === dataAlumno.nivelAlumno) {
        ejerciosPlanteadosEspecificos++;
      }
    }
    //reinicio los options para mostrar cuáles están habilitados y cuales no
    habilitarOptions();
    nombreOutputElem.innerHTML = dataAlumno.nombre;
    ejerciciosPlanteadosOutputElem.innerHTML = ejerciosPlanteadosEspecificos;
    ejerciciosResueltosOutputElem.innerHTML = dataAlumno.entregas.length;
  };

  const selectElem = document.querySelector("select#alumnosAsignados");
  selectElem.addEventListener("change", onAlumnoChangeHandler);

  selectElem.innerHTML = `<option disabled selected>Choose your option</option>`;
  for (let i = 0; i < dataUsuarioLogeado.alumnosAsignados.length; i++) {
    let unAlumno = dataUsuarioLogeado.alumnosAsignados[i];
    selectElem.innerHTML += `<option value=${i}>${unAlumno.nombre}</option>`;
  }

  M.FormSelect.init(selectElem);
}

function listarAlumnos() {
  // for (let i = 0; i < alumnosList.length; i++) {
  //   console.log(alumnosList[i]);
  // }
  for (const alumno of alumnosList) {
    console.log(alumno);
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
  mostrarAlerta(
    "Bienvenido <b>" + dataUsuarioLogeado.nombre + "</b>",
    "success"
  );
  actualizarNavItems();
  if (tipoUsuario === "alumno") {
    mostrarOneSection("section#dashboardAlumno");
  } else {
    actualizarDatos_DashboardDocente();
    mostrarOneSection("section#dashboardDocente");
  }
}
function cerrarSesion() {
  //limpiamos las propiedades de usuarioLogeado, para no tener los datos del usuario marcados en la app y que la funcion mostrarNavItem no detecte al usuarioLogeado
  usuarioLogeado.listaPerteneciente = [];
  usuarioLogeado.indice = 0;
  usuarioLogeado.usuarioId = "";
  dataUsuarioLogeado = {};
  mostrarNavItem("ul#vistaPublico"); // ahora los items van a ser los de navItems para usuarioDesconocido: los botones de inicio y Registro
  mostrarOneSection("section#login"); // Volvemos a la seccion login al cerrar sesion
}

document
  .querySelector("body nav ul button#btnCerrarSesion")
  .addEventListener("click", cerrarSesion);

// ADDEVENTLISTENER

// DASHBOARD DOCENTE > Botón reporte individual
document
  .querySelector(
    "body main section#dashboardDocente button#btnDocenteIrReporteIndividual"
  )
  .addEventListener("click", () => {
    mostrarOneSection("section#reporteIndividualDocente");
    selectReporteAlumnos();
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
    const userNameAlumno = document.querySelector(
      "body main section#login input#login_alumno_usuario"
    ).value;
    const passwordAlumno = document.querySelector(
      "body main section#login input#login_alumno_password"
    ).value;
    login(userNameAlumno, passwordAlumno, "alumno");
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

/*

Docente crea tarea:
Docente crea tarea > crear obj Tarea > tareaID > docente.tareasPlanteadas.push(tarea) tarea.entregas = []

Alumno realiza entrega:
alumno ve lista de tareas > click > muestra tarea segun tareaID 
alumno realizar entrega > crear obj Entrga > entrega.id_tarea = tareaID > llena datos desde los campos >>
>> dataUsuarioLogeado.entregas.push(newEntrega);
>> (getDocente(dataUsuarioLogeado.docenteUser).tareasPlanteadas[i] === tareaID).entregas.push(newEntrega)

Docente hace corrección:
Mostrar tareas planteadas > mostrar tarea[i].entregas[j] > cargar datos de entrega en modal
docente hace corrección > crea obj newDevolucion{nota: number, comentario: string} > carga con datos de los inputs >>
> tarea[i].entregas[j].devolucion = newDevolucion; getAlumno(tarea[i].entregas[j].usr_alumno).entregas

Alumno ve su Dashboard:
dataUsuarioLogeado.entregas[i] 
    si corregido > mostrar datos de tarea + dataUsuarioLogeado.entregas[i].devolucion
    si no corregido > mostrar datos de tarea

Cómo mostrar cantidad de Entregas Corregidas:
iterar dataUsuarioLogeado.entregas[i].devolucion
    si existe > totalEntregasCorregidas+1
    return totalEntregasCorregidas

*/
ocultarTodo();
actualizarNavItems();
mostrarOneSection("section#login")
// mostrarOneSection("section#tareasPendienteAlumno")
// mostrarOneSection("section#pantallaPrincipal")
// mostrarOneSection("section#dashboardAlumno")
// mostrarOneSection("section#tareasDocente")
// mostrarOneSection("section#reporteIndividualDocente");
// mostrarNavItem("ul#usuarioConocido")

document.getElementById("realizarTarea").addEventListener("click", () => {
  mostrarOneSection("section#realizarEntregaTarea");
});

document.getElementById("verResueltos").addEventListener("click", () => {
  mostrarOneSection("section#verEjerciciosResultos");
});

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var selectElem = document.querySelectorAll("select");
  var tabElemRegistro = document.querySelectorAll("#tabMenuRegistro");
  var tabElemLogin = document.querySelectorAll("#tabMenuLogin");
  var tabElemDashboardDocente = document.querySelectorAll(
    "#tabDashboardDocente"
  );
  var tabElemTareasAlumno = document.querySelectorAll("#tabTareasAlumno");
  let sideBar = M.Sidenav.init(elems);

  let tabRegistro = M.Tabs.init(tabElemRegistro); //, {swipeable: true})
  let tabLogin = M.Tabs.init(tabElemLogin); //, {swipeable: true})

  let tabDashboardDocente = M.Tabs.init(tabElemDashboardDocente); //, {swipeable: true})
  let tabTareasAlumno = M.Tabs.init(tabElemTareasAlumno); //, {swipeable: true})

  var elemsModal = document.querySelectorAll(".modal");
  var instancesModal = M.Modal.init(elemsModal);

  var singleModalElem = document.querySelector("#modalCrearTarea");
  var instanceModal = M.Modal.getInstance(singleModalElem);
  const modalbtn = document.querySelector("#crearTareaBtn");
  modalbtn.addEventListener("click", () => {
    instanceModal.open();
    var selectElem = document.querySelectorAll("select#nivel");
    M.FormSelect.init(selectElem);
    // Do other stuff
  });
});
