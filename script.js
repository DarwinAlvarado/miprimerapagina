//alert("Hola este es mi Javascript");

//let nombre = "Darwin";
//nombre = "Carlos"

//var nombre1 = "Darwin";

//const nombre2 = "Darwin";

//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)

//SELECIONAR ELEMENTOS

//let contenidoTitulo = "Acerca de mí";  //con cualquier otro titulo no se cumple

//let titulo = document.querySelector(".Pruebajava")
//titulo.innerHTML = contenidoTitulo

//CONDICIONALES

//let textoTitulo = titulo.innerText
//console.log(textoTitulo);

//if(textoTitulo == "Acerca de mí"){
    //titulo.innerHTML = "Otro";
//} else {
   // console.log("no se cumple");
//}

//web sin titulo reivsar condicional de otra manera


//FUNCIONES

//let nombre = "El wisho"
//let ciudad = "Groelandia"
//let gusto  = "chocolate"

//let parrafo = document.querySelector(".parrafo2");

//function cambiarTexto(nombre, ciudad, gusto){
    //let contenido = `Me llamo ${nombre}, soy de ${ciudad} y vivo actualmente en Lima. 
    //Me gusta ${gusto}, jugar videojuegos, los juegos de mesa como ajedrez, leer 
    //y platicar con amigos. Prefiero los climas frios y lluviosos (que morirme de calor). 
    //Soy un jugador casual, (gamer de corazón - manco de profesión) y estoy aprendiendo 
   // programacion ya que considero que es super útil, y es el idioma del futuro. Me gusta
    //lo que he aprendido hasta el momento y espero seguir aprendiendo mucho mas.`;

    //return contenido;
//}

//parrafo.innerText = cambiarTexto(nombre, ciudad, gusto);

//PRUEBA HAMBURGUESA

let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};


//DECLARACIONES DE VARIABLES

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});







