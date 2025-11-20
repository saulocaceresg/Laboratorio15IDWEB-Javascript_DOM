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