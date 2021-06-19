/* NOTES */
// elem.classList.add/remove("class") – adds/removes the class.
// elem.classList.toggle("class") – adds the class if it doesn’t exist, otherwise removes it.
// elem.classList.contains("class") – checks for the given class, returns true/false.

// import Input from "../../../../../Houlak/MakeItPro/src/components/UI/Input";z

// const botonesParaIrRegistro = //REGISTRAR TODOS LOS BOTONES QUE CAMBIEN A > REGISTRO (REPETIR PARA TODAS LAS VISTAS)
const body = "body#root";
const botonesHome = document.querySelectorAll(`${body} button.irPrincipal`);
const ocultarTodo = () => {
  const allSections = document.querySelectorAll(`${body} section`);
  for (const section of allSections) {
    section.classList.add("hidden");
  }
};

const mostrarOneSection = (identificador) => {
  const sectionAMostrar = document.querySelector(`${body} ${identificador}`);
  ocultarTodo();
  sectionAMostrar.classList.remove("hidden");
};

for (const boton of botonesHome) {
  boton.addEventListener("click", () => {
    mostrarOneSection("section#pantallaPrincipal");
  });
}
// document.querySelector("button#loginAlumno").addEventListener("click", (e)=>{
// 	e.preventDefault()
// 	mostrarOneSection(input.value, inputPass.value, "alumno")
// })
// document.querySelector("button#loginDocente").addEventListener("click", (e)=>{
// 	e.preventDefault()
// 	mostrarOneSection(input.value, inputPass.value, "docente")
// })

document
  .querySelector("nav div ul li button#navBtn_Login")
  .addEventListener("click", () => {
    mostrarOneSection("section#login");
  });
document
  .querySelector("nav div ul li button#navBtn_Registro")
  .addEventListener("click", () => {
    mostrarOneSection("section#registro");
  });

document
  .querySelector(
    "body main section#login div#docenteFormm button#btnIrRegistro_docente"
  )
  .addEventListener("click", (e) => {
    e.preventDefault();
    mostrarOneSection("section#registro");
  });
document
  .querySelector(
    "body main section#login div#alumnoFormm button#btnIrRegistro_alumno"
  )
  .addEventListener("click", (e) => {
    e.preventDefault();
    mostrarOneSection("section#registro");
  });
