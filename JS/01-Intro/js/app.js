"use strict";
document.write("Hello desde js externo");

// Guardar el valor en una variable.
const hola = "hola desde const";
console.log(hola, "como estas?");

// Imprimir arreglo (array)
console.log([1, 2, 3, 4]);

// objetos
const usuario = { nombre: "Mortadelo", profesion: "Espia" };
console.log(usuario);

// resultados como una tabla
console.table([1, 2, 3, 4]);

// errores
console.error("esto es un error");
console.warn("Soy una alerta");

// monitorear el tiempo de ejecución
console.time("c1");
console.error("esto es un error");
console.warn("esto es una alerta");
console.timeEnd("c1");

// Funciones ejemplo
function saludar() {
  console.log("ok");
}
saludar();

// Ejemplo un poco más útil
const nombre = prompt("dime tu nombre");
// document.write(nombre);
const miDiv = document.querySelector(".saludo");
miDiv.innerHTML = `hola ${nombre}, bienvenido`;
console.log(miDiv);
