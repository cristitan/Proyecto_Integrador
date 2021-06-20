
function ordenarTopAlumnos (arrayAlumnos) { 
    arrayAlumnos.sort(function (a, b) {
        if (a.entregas.length > b.entregas.length) {
          return 1;
        }
        if (a.entregas.length < b.entregas.length) {
          return -1;
        }
    } 

} // POR ALGUNA RAZON ESTE CIERRE DE LA FUNCION ME MARCA ERROR SIEMPRE, Y SI LE AGREGO OTRO CORCHETE } SIGUE SALTANDO ERROR, AYUDA?


top3Alumnos = []


function obtenerTop3Alumnos (arrayAlumnos) {
    top3Alumnos.length = 0 // primero al ejecutar la variable, limpiamos la lista de top3Alumnos para que no se acumulen cada vez q se ejecuta.
    for (i = 0; i < arrayAlumnos.length; i++) { 
        // Que haga recorrida, si el número de indice actual es igual o mayor que el largo del array -2 (caso que se da en los últimos 3 objetos del array) entonces pushearlo a la lista top
        if (i >= (arrayAlumnos.length -2 ) {  // Sería -2 o -3??? 
            top3Alumnos.push(arrayAlumnos[i])
        }
    }

}


 