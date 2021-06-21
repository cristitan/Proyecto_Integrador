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
[{ entregas: 5 }, { entregas: 5 }, { entregas: 5 }, { entregas: 5 }];
