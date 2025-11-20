// 3.	Seleccionar el primer elemento <h2> del documento y muestra su texto en la consola

const elemento = document.getElementsByTagName("h2")[0];

console.log("Elemento seleccionado: ", elemento.textContent);

// 4.	Cambiar el contenido de todos los párrafos <p> para que diga: “Texto actualizado dinámicamente”

let parrafos = document.getElementsByTagName("p");
let nuevoTexto = "Texto actualizado dinámicamente";

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = nuevoTexto;
}

// 5.	Seleccionar la primera imagen del documento y cambia sus atributos src y alt

const imagenes = document.getElementById("imagenes");
let primerImg = imagenes.firstElementChild;

console.log("Primera imagen: ", primerImg);

primerImg.setAttribute("src", "recursos/imagen4.jpg");
primerImg.setAttribute("alt", "Altas Voluntades");

// 6.	Agregar la clase "resaltado" a todos los elementos <li> y elimina la clase "oculto" si la tienen

const elementosLi = document.getElementsByTagName("li");

for (let i = 0; i < elementosLi.length; i++) {
    let li = elementosLi[i];
    li.classList.add("resaltado");
    if (li.getElementsByClassName("oculto")) {
        li.classList.remove("oculto");
    }
}

// 7.	Seleccionar un <ul> por su id y muestra en consola el texto de cada hijo <li> usando un bucle for...of

console.log("Ejercicio 5 (7.)");
const ul = document.getElementById("lista-Ej5");

for (let i of ul.children) {
    console.log(i.textContent);
}

// 8.	Para cada <div> del documento, cambiar su color de fondo a un color diferente (por ejemplo, usando un array de colores)

console.log("Ejercicio 6 (8.)");
const div = document.getElementsByTagName("div");
let colores = ["lightblue", "red", "yellow"];

for (let i = 0; i < div.length; i++) {
    div[i].style.backgroundColor = colores[i];
}

// 9.	Crear un nuevo elemento <p> con texto “Elemento insertado con JS” y agrégalo al final del body

const nuevoP = document.createElement("p");
nuevoP.textContent = "Elemento insertado con JS";

document.body.appendChild(nuevoP);

// 10.	Crear un nuevo <h3> y colócalo antes del primer <p> existente del documento

const nuevoH3 = document.createElement("h3");
nuevoH3.textContent = "Nuevo elemento h3";

document.querySelector("p").before(nuevoH3);