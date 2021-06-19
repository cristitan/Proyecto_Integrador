


////// ----------------------------------------     HTML VANILA DE LO QUE HAY AHORA EN EL NAV: ---------------------------------------------------------------
        /* <ul class="sidenav" id="mobile-demo">
                <li><a href="sass.html">Registrarse</a></li>
                <li><a href="badges.html">Iniciar Sessión</a></li>
            </ul>

        */
////


////// ----------------------------     HTML EDITADO PARA CREAR CLASES NECESARIAS DEL NAV (USUARIOCONOCIDO Y USUARIODESCONOCIDO): ------------------------------------------
// ASÍ IRÍA LA MISMA PORCIÓN DE HTML EDITADO PARA QUE FUNCIONE LAS SECCIONES DE NAVS QUE CREE:

// Esto Iria en @index.html. Agrega las clases navItem y las subClases usuarioConocido y usuarioDesconocido para las funcionalidades del JS

{/* <div class="navItem">
<ul class="sidenav" >
		<li><a href="sass.html">Registrarse</a></li>
		<li><a href="badges.html">Iniciar Sessión</a></li>
	</ul>
</div>

<div class="navItem" id="usuarioConocido">
<ul class="sidenav" >
		<li id="bienvenidoUser"> </li>
		<li><a href="badges.html" id="btnCerrarSesion">Cerrar Sesión</a></li>
	</ul>
</div>  */}

////// -----------------------------------           FUNCIONES JS         ---------------------------------------------------

///////------- SUBRUTINAS: ---------///////

// Función para navItems (para ocultar cada navItem)  @cambioVista.js
const ocultarAllNavItems = () => {
    const AllnavItems = document.querySelectorAll(`${body} navItem`);
    for (const navItem of AllnavItems) {
      section.classList.add("hidden");
    }
  };

// Función para mostrar los NavItems seleccionados @cambioVista.js; primero oculta los 
  const mostrarNavItem = (identificador) => {
    const navItemsAMostrar = document.querySelector(`${body} ${identificador}`);
    ocultarAllNavItems();
    navItemsAMostrar.classList.remove("hidden");
  };

//Función a la que llamar cada vez que se abre o cierra sesion @dondeEstéFunciónLogin @dondeEstéFunciónLogOut
// Si se llama a esta función cuando hay un usuarioLogeado; va a mostrar los botones correspondientes
// También si hay un usuarioLogeado; va a printear "Hola, Fulanito" en el html en el primer li con la ID correspondiente.
function actualizarNavItems() { 
if (usuarioLogeado) { 
    document.querySelector("#bienvenidoUser").innerHTML = ""
    document.querySelector("#bienvenidoUser").innerHTML = `Hola ${dataUsuarioLogeado.nombre}`
    mostrarNavItem ("navItem#UsuarioConocido") 
} else { 
mostrarNavItem ("navItem#UsuarioDesconocido") 
}
}

///////------- EJEMPLOS + FUNCION CERRARSESION CON LO ANTERIOR IMPLEMENTADO : ---------///////

// EJEMPLO DE COMO TENDRÍA QUE FUNCIONAR:
/*  login (user,pass) {
    //Logica, funcion, etc
    //Luego con la funcion ActualizarNavItems hacemos un refresh del Nav para que se muestre las secciones del Nav correspondiente
    actualizarNavItems <-------------- Llamar a la funcion para que se actualice el Nav al logearse
}
logout() { 
    //Logica, funcion, etc
    //Luego con la funcion ActualizarNavItems hacemos un refresh del Nav para que se muestre las secciones del Nav correspondiente
    actualizarNavItems <-------------- Llamar a la funcion para que se actualice el Nav al desloguearse
} */

//FUNCION PARA CERRAR SESION > LIMPIA LOS PARAMETROS DEL USUARIOLOGEADO Y ACTUALIZA LOS NAV ITEMS PARA MOSTRAR LOS DE USUARIODESCONOCIDO

document.querySelector("#btnCerrarSesion").addEventListener("click", cerrarSesion)

function cerrarSesion() {
    //limpiamos las propiedades de usuarioLogeado, para no tener los datos del usuario marcados en la app y que la funcion mostrarNavItem no detecte al usuarioLogeado
    usuarioLogeado.listaPerteneciente = [],
    usuarioLogeado.indice = 0, //
    usuarioLogeado.usuarioId = ""; 
    mostrarNavItem("navItem#UsuarioDesconocido") // ahora los items van a ser los de navItems para usuarioDesconocido: los botones de inicio y Registro
    mostrarOneSection("section#login")  // Volvemos a la seccion login al cerrar sesion
};

