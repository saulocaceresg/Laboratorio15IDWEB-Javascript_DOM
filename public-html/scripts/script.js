// 3.	Seleccionar el primer elemento <h2> del documento y muestra su texto en la consola

const elemento = document.getElementsByTagName("h2")[0];

console.log("Elemento seleccionado: ", elemento.textContent);

// 4.	Cambiar el contenido de todos los párrafos <p> para que diga: “Texto actualizado dinámicamente”

let parrafos = document.getElementsByTagName("p");
let nuevoTexto = "Texto actualizado dinámicamente";

for (let i = 0; i < parrafos.length; i++) {
    // parrafos[i].textContent = nuevoTexto;
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

// 11.	Crear un <ul> y agrega 5 <li> con los textos “Elemento 1”, “Elemento 2”, …, “Elemento 5”. Inserta la lista dentro de un <section> existente

const nuevoUl = document.createElement("ul");

for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.textContent = "Elemento " + (i + 1);
    nuevoUl.appendChild(li);
}

let section = document.getElementById("listaNueva-Ej9");
document.querySelector("section").appendChild(nuevoUl);

// 12.	Seleccionar un párrafo y reemplázalo por un nuevo elemento <div> con texto “Párrafo reemplazado”

const Pselect = document.getElementById("Pseleccionado");

Pselect.outerHTML = "<div>Párrafo reemplazado</div>";

// 13.	Seleccionar el último elemento <p> y elimínalo del DOM

console.log("Ejercicio 11 (13.)");
const elementosP = document.getElementsByTagName("p");
let ultimoP = elementosP[elementosP.length - 1];
console.log("Último elemento <p>: ", ultimoP);
ultimoP.remove();

// 14.	Vacíar por completo el contenido de un contenedor con id "contenido" sin borrar el contenedor

console.log("Ejercicio 12 (14.)");

const divContenido = document.getElementById("contenido");

divContenido.innerHTML = "";

// 15.	Clonar el primer <article> del documento y agrégalo al final del <main>

console.log("Ejercicio 13 (15.)\nClonando y agregando el primer article de un main");
let primerArticle = document.getElementsByTagName("article")[0];
let clonPrimerArticle = primerArticle.cloneNode("true");
document.querySelector("main").appendChild(clonPrimerArticle);

// 16.	Seleccionar el primer <ul> y mueve su último <li> al principio de la lista

console.log("Ejercicio 14 (16.)")
let listaUlprimera = document.getElementsByTagName("ul")[0];

console.log("ul primero:", listaUlprimera);

let ultimoLi = listaUlprimera.lastElementChild;

console.log("Último <li> de la lista:", ultimoLi);

listaUlprimera.firstElementChild.before(ultimoLi);

// 17.	Tomar todos los <p> dentro de un contenedor y reordénalos alfabéticamente según su texto.
// (Tip: usa Array.from(), sort() y appendChild())

console.log("Ejercicio 15 (17.)")

const divP = document.getElementById("divP");
let arrayP = Array.from(divP.querySelectorAll("p"));

console.log(arrayP);
let ordenado = arrayP.sort((a, b) =>
    a.textContent.localeCompare(b.textContent)
);

console.log(ordenado);

for (const i of ordenado) {
    console.log(i);
}

ordenado.forEach(p => divP.appendChild(p));

// 18.	A cada <section> del documento, agregar un atributo data-index con el número de posición de la sección

console.log("Ejercicio 16 (18.)\nAgregando un data-index");

const sections = document.getElementsByTagName("section");

for (let i = 0; i < sections.length; i++) {
    sections[i].setAttribute("data-index", i);
}

// 19.	Contar cuántos nodos <div> hay en el documento y muestra el resultado en un nuevo <p> creado dinámicamente

console.log("Ejercicio 17 (19.)\nCantidad de nodos div");

const contDiv = document.getElementsByTagName("div").length;
console.log("Cantidad de elementos div: ", contDiv);

let pMostrarCont = document.createElement("p");
pMostrarCont.textContent = "Cantidad de nodos div en el documento: " + contDiv;

document.body.appendChild(pMostrarCont);

// 20.	Crear dinámicamente un elemento <ul> que contenga dentro varios <li>, y dentro de cada <li> un <span> con texto “Nivel interno”

console.log("Ejercicio 18 (20.)\nCreando ul, li y span");

let elementoUl = document.createElement("ul");

for (let i = 0; i < 4; i++) {
    let li = document.createElement("li");
    let span = document.createElement("span");
    span.textContent = "Nivel interno";

    li.appendChild(span);
    elementoUl.appendChild(li);
}

document.body.appendChild(elementoUl);

// 21.	Crear 3 nuevos párrafos dentro de un div con id "contenedor". Luego elimina el segundo párrafo

console.log("Ejercicio 19 (21.)\nCreando párrafos y eliminando");

const nuevoDiv = document.createElement("div");

for (let i = 0; i < 3; i++) {
    let p = document.createElement("p");
    p.textContent = "Párrafo " + (i + 1) + " dentro de div - Ej21"

    nuevoDiv.appendChild(p);
}
document.body.querySelector("#ej19").appendChild(nuevoDiv);

let parrafosDiv = nuevoDiv.querySelectorAll("p");
parrafosDiv[1].remove();
